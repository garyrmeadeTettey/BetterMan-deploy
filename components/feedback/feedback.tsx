'use client'
import React, { useState, useEffect } from "react";
import {useRouter} from 'next/navigation';
import { FaStar } from "react-icons/fa";
import { Card, CardContent, CardTitle, CardHeader, CardDescription, CardFooter } from "../ui/card";
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "../ui/input";
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';
import Footer from "../homepage/Footer";
import { Separator } from "@radix-ui/react-select";
import { CopyCheck, BookOpen } from "lucide-react";
import Link from 'next/link'

const colors = {
  orange: "text-orange-500",
  grey: "text-gray-500",
};

export type FormData = {
  name: string;
  email: string;
  message: string;
};

function Feedback() {
  const { register, handleSubmit } = useForm<FormData>();
  const [currentValue, setCurrentValue] = useState<number>(0);
  const [hoverValue, setHoverValue] = useState<number | undefined>(undefined);
  const [ratingText, setRatingText] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    // Update the rating text whenever the currentValue changes
    switch (currentValue) {
      case 1:
        setRatingText("Poor");
        break;
      case 2:
        setRatingText("Fair");
        break;
      case 3:
        setRatingText("Average");
        break;
      case 4:
        setRatingText("Good");
        break;
      case 5:
        setRatingText("Excellent");
        break;
      default:
        setRatingText("");
    }
  }, [currentValue]);

  const stars = Array(5).fill(0);

  const handleClick = (value: number) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue: number) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const [selectedStar, setSelectedStar] = useState(null);
  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  const router = useRouter();
  const Submit = () => {
    router.push('/dashboard')
  }


  return (
    <>
    <Card className=" flex justify-center">
       
        
      <div className=" flex rounded pb-4 mt-4 mb-4 flex-col w-[440px] justify-center h-full items-center border border-gray-950 bg-cover bg-no-repeat bg-fixed" style={{ backgroundImage: `url('https://i.pinimg.com/originals/4f/50/3c/4f503caa958fc1dcaec66c0b60a6ebd1.jpg')` }}>
       

      <CardHeader className="text-center">
          <CardTitle className="text-xl mt-4 font-bold">SEND US FEEDBACK / QUIZ YOURSELF</CardTitle>
          <CardDescription>
            Share your feedback and help us improve our courses.
          </CardDescription>
        </CardHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
            type="text"
            placeholder="Your Name"
            className="border border-black rounded-5 transition-opacity duration-300 ease-in-out p-4 w-full mb-4"
            {...register('name', { required: true })}
          />
          <Input
            type="email"
            placeholder="Your Email"
            className="border border-black rounded-5 transition-opacity duration-300 ease-in-out p-4 w-full mb-4"
            {...register('email', { required: true })}
          />
          <Input
            type="text"
            placeholder="Please enter your feedback"
            className="border border-black rounded-5 transition-opacity duration-300 ease-in-out p-4 pb-[10em] w-full mb-4"
            {...register('message', { required: true })}
          />

          <div className="w-full text-center">
            <h6 className="text-black text-lg font-bold">How was your overall experience: <p className="underline uppercase text-gray-500 font-semibold text-sm">{ratingText}</p></h6>
          </div>

          <Card className="w-[60%] ml-16 flex justify-center items-center p-2 mt-2">
            {stars.map((_, index) => (
              <FaStar
                key={index}
                size={20}
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                className={`mr-4  cursor-pointer ${hoverValue || currentValue > index ? colors.orange : colors.grey}`}
              />
            ))}
          </Card>
          <div className="flex justify-between mt-2">
                  <Button
                    className="w-1/2 rounded-none rounded-l-lg"
                    type="submit"
                  >
                    Submit
                  </Button>
                  <Separator />
                  <Button
                  
                    className="w-1/2 rounded-none rounded-r-lg"
                    onClick={Submit}
                    type="button"
                  >
                    <BookOpen className="w-4 h-4 mr-2" /> QuizMify
                  </Button>
                
                </div>
          {/* <Button className="flex justify-center mt-2 ml-20 border border-white rounded-2 text-white w-62 p-4 bg-gray-500 dark:hover:bg-gray-950">Send Feedback</Button> */}
          </form>

          
          <p className="text-sm mt-2">
            Email at{" "}
            <a
              className="text-[#26A7A7] md:text-base mt-4 text-sm font-bold text-center"
              href="mailto:bettermansquery@gmail.com"
            >
              bettermansquery@gmail.com
            </a>{" "}
            for specific issues.
          </p>
      
      </div>
      
    </Card>
    <Footer/>
    </>
  );
}

export default Feedback;
