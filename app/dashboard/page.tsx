import DetailsDialog from "@/components/DetailsDialog";
import HistoryCard from "@/components/dashboard/HistoryCard";
import HotTopicsCard from "@/components/dashboard/HotsTopicsCard";
import QuizMeCard from "@/components/dashboard/QuizMeCard";
import RecentActivityCard from "@/components/dashboard/RecentActivityCard";
import { auth } from "@clerk/nextjs";
import React, { Suspense } from "react";
import Loading from "../loading";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Footer from "@/components/homepage/Footer";

type Props = {userId: string};

export const metadata = {
  title: "Dashboard | BetterMan",
  description: "Quiz yourself on anything!",
};

const Dashboard = async (props: Props) => {

  const { userId } = await auth();
  const isAuth = !!userId;

  return (
    <Suspense fallback={<Loading/>}>
    <main className="p-8 mx-auto max-w-7xl mb-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <Link href="/pdfchat">
          <Button>AI-Assistant <ChevronRight/></Button>
        </Link>
      </div>

      <div className="grid gap-4 mt-4 md:grid-cols-2">
        <QuizMeCard />
        <HistoryCard />
      </div>
      <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-7">
        <HotTopicsCard userId={userId}/>
        <RecentActivityCard />
      </div>
    </main>
    <Footer/>
    </Suspense>
  );
};

export default Dashboard;