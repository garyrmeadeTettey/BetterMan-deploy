import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { redirect } from "next/navigation";
import HistoryComponent from "../HistoryComponent";
import { auth } from "@clerk/nextjs";
// import { prisma } from "@/lib/db";

type Props = {};

const RecentActivityCard = async (props: Props) => {
    const {userId} = await auth()
    const isAuth = !!userId;

    if(!isAuth){
        redirect('/')
    }

//   const session = await getAuthSession();
//   if (!session?.user) {
//     return redirect("/");
//   }
//   const games_count = await prisma.game.count({
//     where: {
//       userId: session.user.id,
//     },
//   });
  return (
    <Card className="col-span-4 lg:col-span-3">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          <Link href="/history">Recent Activity</Link>
        </CardTitle>
        <CardDescription>
          {/* You have played a total of {games_count} quizzes. */}
        </CardDescription>
      </CardHeader>
      <CardContent className="max-h-[580px] overflow-scroll">
        <HistoryComponent userId={userId} />
      </CardContent>
    </Card>
  );
};

export default RecentActivityCard;