import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import WordCloud from "../WordCloud";
import { dbPool } from "@/lib/db/index";
import { topic_count } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

type Topic = {
  text: string;
  value: number;
};

type Props = { userId: string };

const HotTopicsCard = async ({ userId }: Props) => {
  // Fetch topics from the database
  const topics = await dbPool
    .select({
      field1: topic_count.topic,
      field2: topic_count.count,
    })
    .from(topic_count)
    .where(eq(topic_count.userId, userId));

  let formattedTopics: Topic[] = [];

  if (topics && topics.length > 0) {
    formattedTopics = topics.map((topic) => {
      return {
        text: topic.field1,
        value: topic.field2,
      };
    });
  }

  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Hot Topics</CardTitle>
        <CardDescription>
          Click on a topic to start a quiz on it.
        </CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <WordCloud formattedTopics={formattedTopics} />
      </CardContent>
    </Card>
  );
};

export default HotTopicsCard;
