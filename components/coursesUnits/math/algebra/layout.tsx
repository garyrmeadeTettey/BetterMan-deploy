import React, { ReactNode } from "react";
import Sidebar from "./sidebar";
import { Card } from "@/components/ui/card";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-[40em] flex flex-row justify-start">
      <Card className="mt-2 mb-4">
      <Sidebar />
      </Card>
      <div className=" flex-1 w-[100%] text-black overflow-y-auto ">
        {children}
      </div>
    </div>
  );
};

export default Layout;
