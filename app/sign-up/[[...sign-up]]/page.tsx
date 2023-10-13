import Loading from "@/app/loading";
import { SignUp } from "@clerk/nextjs";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="absolute mt-4 left-1/2 -translate-x-1/2 ">
      <Suspense fallback={<Loading/>}>
      <SignUp 
      
      appearance={{
        elements: {
          formButtonPrimary:
            "bg-slate-500 hover:bg-slate-400 text-sm normal-case",
        },
      }}
      />
      </Suspense>
    </div>
  );
}