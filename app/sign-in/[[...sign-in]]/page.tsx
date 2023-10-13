import Loading from "@/app/loading";
import { SignIn } from "@clerk/nextjs";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white dark:bg-gray-950 p-4 rounded-lg shadow-lg">
        <Suspense fallback={<Loading/>}>
        <SignIn/>
        </Suspense>
      </div>
    </div>
  );
}
