import HistoryComponent from "@/components/HistoryComponent";

import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { Suspense } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { LucideLayoutDashboard } from "lucide-react";
import { auth } from "@clerk/nextjs";
import Loading from "../loading";

type Props = {
  userId: string;
};

const History = async () => {
  const { userId } = await auth();
    const isAuth = !!userId;
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[400px]">
      <Suspense fallback={<Loading/>}>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold">History</CardTitle>
            <Link className={buttonVariants()} href="/dashboard">
              <LucideLayoutDashboard className="mr-2" />
              Back to Dashboard
            </Link>
          </div>
        </CardHeader>
        <CardContent className="max-h-[60vh] overflow-scroll">
          <HistoryComponent userId={userId} />
        </CardContent>
      </Card>
      </Suspense>
    </div>
  );
};

export default History;