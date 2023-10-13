"use client"
import { FC, useState, useEffect, Suspense } from 'react';
import { LucideLayoutDashboard } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import ResultsCard from "@/components/statistics/ResultsCard";
import AccuracyCard from "@/components/statistics/AccuracyCard";
import TimeTakenCard from "@/components/statistics/TimeTaken";
import Loading from '../loading';

interface PageProps {
    correct_answers: number;
    numberofQ: number;
    timeStarted: number;
    timeEnded: number;
}

const Page: FC<PageProps> = ({ correct_answers, numberofQ, timestarted, time_ended}) => {
    const [accuracy, setAccuracy] = useState<number>(0);
    const [timeStarted, setTimeStarted] = useState<number>(0);
    const [timeEnded, setTimeEnded] = useState<number>(0);
    const searchParams = useSearchParams();

    useEffect(() => {
        // Retrieve the values of prop1, prop2, prop3, and prop4 from the query parameters
        const prop1 = searchParams.get("prop1");
        const prop2 = searchParams.get("prop2");
        const prop3 = searchParams.get("prop3");
        const prop4 = searchParams.get("prop4");
        
        // Parse prop1, prop2, prop3, and prop4 into integers
        const parsedProp1 = parseInt(prop1 ?? '0');
        const parsedProp2 = parseInt(prop2 ?? '0');
        const parsedProp3 = parseInt(prop3 ?? '0');
        const parsedProp4 = parseInt(prop4 ?? '0');

        if (parsedProp1 > 0 && parsedProp2 > 0) {
            // Calculate accuracy based on the parsed values
            const calculatedAccuracy = Math.round((parsedProp1 / parsedProp2) * 100);
            setAccuracy(calculatedAccuracy);
        }

        // Assign parsedProp3 to timeStarted and parsedProp4 to timeEnded
        setTimeStarted(parsedProp3);
        setTimeEnded(parsedProp4);
    }, [searchParams]);

    return (
        <Suspense fallback={<Loading/>}>
        <div className="p-8 mx-auto max-w-7xl">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Summary</h2>
                <div className="flex items-center space-x-2">
                    <Link href="/dashboard" className={buttonVariants()}>
                        <LucideLayoutDashboard className="mr-2" />
                        Back to Dashboard
                    </Link>
                </div>
            </div>
            <div className="grid gap-4 mt-4 md:grid-cols-7">
                <ResultsCard accuracy={accuracy} />
                <AccuracyCard accuracy={accuracy} />
                <TimeTakenCard timeStarted={new Date(timeStarted)} timeEnded={new Date(timeEnded)} />
            </div>
        </div>
        </Suspense>
    )
}

export default Page;
