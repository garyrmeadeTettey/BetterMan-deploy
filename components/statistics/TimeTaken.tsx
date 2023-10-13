import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Hourglass } from "lucide-react";
import { formatTimeDelta } from "@/lib/utils";
import { differenceInSeconds } from "date-fns";

type Props = {
  timeEnded: number; // Change the type to number for timestamp
  timeStarted: number; // Change the type to number for timestamp
};

const TimeTakenCard = ({ timeEnded, timeStarted }: Props) => {
  // Convert timestamps to Date objects
  const startTime = new Date(timeStarted);
  const endTime = new Date(timeEnded);

  // Calculate the time difference in seconds
  const timeInSeconds = formatTimeDelta(differenceInSeconds(startTime, endTime));
   
  return (
    <Card className="md:col-span-4">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-2xl font-bold">Time Taken</CardTitle>
        <Hourglass />
      </CardHeader>
      <CardContent>
        <div className="text-sm font-medium">{timeInSeconds}s</div>
      </CardContent>
    </Card>
  );
};

export default TimeTakenCard;