// import { NextRequest, NextResponse } from 'next/server';
// // import { Message as VercelChatMessage, StreamingTextResponse } from 'ai';
// import { OpenAI } from "langchain/llms/openai";
// // import { ChatOpenAI } from 'langchain/chat_models/openai';
// // import { BytesOutputParser } from 'langchain/schema/output_parser';
// import { PromptTemplate } from 'langchain/prompts';
// import { StructuredOutputParser } from "langchain/output_parsers";

// // import { ZodError } from "zod";
// // import { getQuestionsSchema } from '@/schemas/questions';

// export const runtime = 'edge';

// export async function POST(req: Request, res: Response) {
//     try{
//     const {topic, amount, type} = await req.json();

//     const parser = StructuredOutputParser.fromNamesAndDescriptions({
//         question: "The main question text",
//         answer: "Answer text (max 15 words) with one of the options containing the answer",
//         options: "3 options text (max 15 words)",
//       });
      
//       const formatInstructions = parser.getFormatInstructions();
//       const prompt = new PromptTemplate({
//         template:
//           `You are to generate ${amount} of random hard mcq question about ${topic}`,
//         inputVariables: ["question"],
//         partialVariables: { format_instructions: formatInstructions },
//       });
//         const model = new OpenAI({ temperature: 0, openAIApiKey: "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" });

//         const input = await prompt.format({
//         question: "You are a helpful AI that is able to generate mcq questions and answers, the length of each answer should not be more than 15 words",
//         });
//         const question = await model.call(input);
//         // console.log(response)
//         // const question = await parser.parse(response)
//         // const question JSON.stringify(parsed);

//         // return question
//         return NextResponse.json(
//             {
//               question: question,
//             },
//             {
//               status: 200,
//             }
//           );
//     }catch(error){
//         // if (error instanceof ZodError) {
//         //     return NextResponse.json(
//         //       { error: error.issues },
//         //       {
//         //         status: 400,
//         //       }
//         //     );
//         //   } else {
//             console.error("elle gpt error", error);
//             return NextResponse.json(
//               { error: "An unexpected error occurred." },
//               {
//                 status: 500,
//               }
//             );
//         //   }
//     }
// }

import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

import { ChatOpenAI } from "langchain/chat_models/openai";
import {
  ChatPromptTemplate,
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
} from "langchain/prompts";
import { JsonOutputFunctionsParser } from "langchain/output_parsers";
import { getQuestionsSchema } from "@/schemas/questions";
import { NextResponse } from "next/server";
import { dbPool } from "@/lib/db/index";
import { topic_count } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { auth } from "@clerk/nextjs";

export async function POST(req: Request, res: Response) {
    try{
      const { amount, topic, type } = await req.json();
      const { userId } = await auth();

      if (userId) {
          // Check if userId is not null
          await dbPool.insert(topic_count).values({
              userId: userId,
              topic: topic,
              count: +1,
          });
        // const { amount, topic, type } = getQuestionsSchema.parse(body);
        if(type=="mcq"){

          const zodSchema = z.object({
            questions: z.array(              
             z.object({
              question: z.string().describe("question"),
              answer: z.string().describe("answer with max length of 15 words"),
              topic: z.string().describe(`${topic} on which the question is based on`)
             })
            ),
            answers: z
              .array(
                z.object({
                    option1: z.string().describe("option1 with max length of 15 words"),
                    option2: z.string().describe("option2 with max length of 15 words"),
                    option3: z.string().describe("option3 with max length of 15 words"),
                })
              )
            
              // .describe("An array of food items mentioned in the text"),
          });
          
          const prompt = new ChatPromptTemplate({
            promptMessages: [
              SystemMessagePromptTemplate.fromTemplate(
                `You are a helpful AI that is able to generate hard mcq questions and answers mentioned in the following text., the length of each answer should not be more than 15 words.`
              ),
              HumanMessagePromptTemplate.fromTemplate("{inputText}"),
            ],
            inputVariables: ["inputText"],
          });
        //You are to generate ${amount} of random hard mcq question about ${topic}
        const llm = new ChatOpenAI({ modelName: "gpt-4", temperature: 0.2, openAIApiKey: process.env.OPENAI_API_KEY as string});

        const functionCallingModel = llm.bind({
            functions: [
              {
                name: "output_formatter",
                description: "Should always be used to properly format output",
                parameters: zodToJsonSchema(zodSchema),
              },
            ],
            function_call: { name: "output_formatter" },
          });

          const outputParser = new JsonOutputFunctionsParser();

          const chain = prompt.pipe(functionCallingModel).pipe(outputParser)

          const response = await chain.invoke({
            inputText:`You are tasked with generating ${amount} challenging multiple-choice questions (MCQs) related to the topic of ${topic}. Each question should have 3 options with only one correct answer, the answer should be included in the options `,
          });
          
          const jsonString = JSON.stringify(response, null, 2);
          const question = JSON.parse(jsonString);
          return NextResponse.json( 
            {
              question: question,
            },
            {
              status: 200,
            }
          );

          

        } else if (type=="open_ended"){

          const zodSchema = z.object({
            questions: z
              .array(
                z.object({
                    question: z.string().describe("question"),
                    answer: z.string().describe("answer with max length of 15 words"),
                })
              )
              .describe("An array of food items mentioned in the text"),
          });

          const prompt = new ChatPromptTemplate({
            promptMessages: [
              SystemMessagePromptTemplate.fromTemplate(
                `You are a helpful AI that is able to generate a pair of question and answers, the length of each answer should not be more than 15 words, store all the pairs of answers and questions in a JSON array`
              ),
              HumanMessagePromptTemplate.fromTemplate("{inputText}"),
            ],
            inputVariables: ["inputText"],
          });
          //You are to generate ${amount} of random hard mcq question about ${topic}
          const llm = new ChatOpenAI({ modelName: "gpt-4", temperature: 0.2, openAIApiKey: process.env.OPENAI_API_KEY as string});

          const functionCallingModel = llm.bind({
            functions: [
              {
                name: "output_formatter",
                description: "Should always be used to properly format output",
                parameters: zodToJsonSchema(zodSchema),
              },
            ],
            function_call: { name: "output_formatter" },
          });

          const outputParser = new JsonOutputFunctionsParser();

          const chain = prompt.pipe(functionCallingModel).pipe(outputParser)

          const response = await chain.invoke({
            inputText:`You are tasked with generating ${amount} random hard open-ended questions about ${topic}`,
          });
          
          const jsonString = JSON.stringify(response, null, 2);
          const question = JSON.parse(jsonString);
          return NextResponse.json(
            {
              question: question,
            },
            {
              status: 200,
            }
          );
        }
      }
    }catch(error){
        console.error("elle gpt error", error);
            return NextResponse.json(
              { error: "An unexpected error occurred." },
              {
                status: 500,
              }
            );
    }
}