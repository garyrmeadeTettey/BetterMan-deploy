import { prisma } from "@/lib/db";
import { Clock, CopyCheck, Edit2 } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MCQCounter from "./MCQCounter";
import { dbPool } from "@/lib/db/index";
import { question } from "@/lib/db/schema";
import { desc, eq } from "drizzle-orm";

type Props = {
  userId: string;
};

const HistoryComponent = async ({ userId }: Props) => {
  // Retrieve distinct game topics using distinctOn and orderBy
  const distinctGames = await dbPool
      .selectDistinctOn([question.topic])
      .from(question)
      .where(eq(question.userId, userId))
      .orderBy(desc(question.topic), desc(question.timeStarted));
  return (
    <div className="space-y-8">
      {distinctGames.map((game) => {
        return (
          <div className="flex items-center justify-between" key={game.id}>
            <div className="flex items-center">
              <div className="ml-4 space-y-1">
                <Link
                  className="text-base font-medium leading-none underline"
                  href={`/statistics`}
                >
                  {game.topic}
                </Link>
                <p className="flex items-center px-2 py-1 text-xs text-white rounded-lg w-fit bg-slate-800">
                  <Clock className="w-4 h-4 mr-1" />
                  {new Date(game.timeEnded ?? 0).toLocaleDateString()}
                </p>
                <p className="text-sm text-muted-foreground">Mulitple Choice</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HistoryComponent;
