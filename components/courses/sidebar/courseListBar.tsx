'use client'
import Link from "next/link";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CollapsIcon } from "../../coursesUnits/icons";
import { Separator } from "@/components/ui/separator";

interface MenuItem {
  id: number;
  courseLabel: string;
  link: string;
}

const menuItems: MenuItem[] = [
  { id: 1, courseLabel: "Mathematics", link: "/courses" },
  { id: 2, courseLabel: "Science", link: "/courses/science" },
  { id: 3, courseLabel: "Technology", link: "/courses/technology" },
  { id: 4, courseLabel: "Education", link: "/courses/education" },
  { id: 5, courseLabel: "Life Skills", link: "/courses/lifeskills" },
  { id: 6, courseLabel: "Personal Development", link: "/courses/personalDev" },
];

const Sidebar: React.FC = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  // Use the router conditionally if available
  const router = useRouter();

  const activeMenu = useMemo(
    () => (router ? menuItems.find((menu) => menu.link === router.pathname) : null),
    [router]
  );

  const wrapperClasses = `h-screen px-4 pt-8 pb-4 bg-light flex justify-between flex-col ${
    toggleCollapse ? "w-20" : "w-80"
  }`;

  const collapseIconClasses = `p-4 mb-2 rounded bg-light-lighter absolute right-0 ${
    toggleCollapse ? "rotate-180" : ""
  }`;

  const getNavItemClasses = (menu: MenuItem) =>
    `flex items-center cursor-pointer hover:bg-light rounded w-full overflow-hidden whitespace-nowrap ${
      activeMenu && activeMenu.id === menu.id ? "bg-light-lighter" : ""
    }`;

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s"}}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          {!toggleCollapse && (
            <div className="flex items-center gap-4">
              <Image src={'/book1.gif'} width={40} height={100} />
              <h1 className="text-xl">
                <span
                  className={`mt-2 font-bold text-1xl text-text ${
                    toggleCollapse ? "hidden" : ""
                  }`}
                >
                  ALL COURSES
                </span>
              </h1>
            </div>
          )}
          {isCollapsible && (
            <Button className={collapseIconClasses} onClick={handleSidebarToggle}>
              <CollapsIcon />
            </Button>
          )}
         
        </div>
        <Separator/>

        <div className="flex flex-col items-start mt-10">
          {menuItems.map((menu) => {
            const classes = getNavItemClasses(menu);
            return (
              <>
              <div className={classes} key={menu.id}>
                <Link href={menu.link} className="flex py-4 px-3 items-center w-full h-full dark:hover:text-gray-950 dark:hover:bg-gray-500 hover:bg-gray-100">
                  {!toggleCollapse && (
                    <span className="text-md font-medium text-text-light">
                      <b>{menu.courseLabel}</b>
                      <br></br>
                    </span>
                  )}
                </Link>
               
              </div>
              <Separator/>
              </>
            );
          })}
 
        </div>
        
      </div>
    </div>
  );
};

export default Sidebar;
