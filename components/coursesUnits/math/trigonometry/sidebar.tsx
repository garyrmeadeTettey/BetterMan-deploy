'use client'
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useMemo } from "react";
import {
  ArticleIcon,
  CollapsIcon,
  HomeIcon,
  LogoIcon,
  UsersIcon,
  VideosIcon,
} from "../../icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface MenuItem {
  id: number;
  label: string;
  unitLabel: string;
  link: string;
}

const menuItems: MenuItem[] = [
  { id: 1, label: "UNIT 1", unitLabel: "Right triangles & trigonometry", link: "/courses/units/math/trigonometry/unit1" },
  { id: 2, label: "UNIT 2", unitLabel: "Trigonometric functions ", link: "/courses/units/math/trigonometry/unit2" },
  { id: 3, label: "UNIT 3", unitLabel: "Non-right triangles & trigonometry", link: "/courses/units/math/trigonometry/unit3" },
  { id: 4, label: "UNIT 4", unitLabel: "Trigonometric equations & identities", link: "/courses/units/math/trigonometry/unit4" },
];

const Sidebar: React.FC = () => {
  
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const router = useRouter();

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === router.pathname),
    [router.pathname]
  );

  const wrapperClasses = classNames(
    "px-4  bg-light flex justify-between flex-col",
    {
      "w-80": !toggleCollapse,
      "w-20": toggleCollapse,
    }
  );

  const collapseIconClasses = classNames(
    "p-4 rounded bg-light-lighter absolute right-0",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const getNavItemClasses = (menu: MenuItem) => {
    
    return classNames(
      "flex items-center cursor-pointer hover:bg-light rounded w-full dark:hover:text-black overflow-hidden whitespace-nowrap",
      {
        "bg-light-lighter": activeMenu && activeMenu.id === menu.id,
      }
    );
  };

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
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className="flex flex-col">
      <div className="flex items-center justify-between relative p-4 ">
          {!toggleCollapse && (
            <div className="flex items-center ">
             <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1em"
                width="3rem"
                
              >
                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 000 2.5v11a.5.5 0 00.707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 00.78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0016 13.5v-11a.5.5 0 00-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
              </svg>
              <h1 className="text-xl">
                <span
                  className={classNames("mt-2 ml-2 font-bold text-x text-uppercase text-text", {
                    hidden: toggleCollapse,
                  })}
                >
                  TRIGONOMETRY 
                </span>
              </h1>
            </div>
          )}
          {isCollapsible && (
            <Button
              className={`${collapseIconClasses} mt-2`}
              onClick={handleSidebarToggle}
            >
              <CollapsIcon/>
            </Button>
          )}
        </div>
        <Separator/>
        <div className="flex flex-col items-start mt-4">
          {menuItems.map((menu) => {
            const classes = getNavItemClasses(menu);
            return (
              // eslint-disable-next-line react/jsx-key
              <div className={classes} key={menu.id}>
                <Link href={menu.link}
                  className={classNames(
                    "flex py-4 px-3 items-center w-full h-full ",
                    "hover:bg-sky-50 dark:hover:bg-gray-400" // Add this class for blue hover effect
                  )}>

                    {!toggleCollapse && (
                      <span
                        className={classNames(
                          "text-md font-medium text-text-light"
                        )}
                      >
                        {menu.label}<br></br>
                        <b>{menu.unitLabel}</b><br/>
                        <Separator/>
                      </span>
                    )}
                 
                </Link>
                
              </div>
              
            );
          })}
          
        </div>
      </div>

          <div className="mt-4">
          <Card className={`${toggleCollapse ? '' : 'border border-blue'} shadow-md p-1`}>
        <div className={`${getNavItemClasses({} as MenuItem)} px-3 relative`}>
          <br />
          <Link href="/dashboard">
          <div style={{ width: "2.5rem" }}>
            <ArticleIcon />
          </div>
          </Link>
          {!toggleCollapse && (
            <Link href="/dashboard">
            <span className="text-md font-bold text-text-light dark:text-white">
              QUIZ-MIFY <br />
              <p className="text-blue-300 text-base">
                START QUIZ <span className="ml-2">&#10148;</span>
              </p>
            </span></Link>
          )}
        </div>
      </Card>

      <Card className={`${toggleCollapse ? '' : 'border border-blue'} shadow-md p-1 mt-2`}>
        <div className={`${getNavItemClasses({} as MenuItem)} px-3 relative`}>
          <br />
          <Link href="/pdfchat">
          <div style={{ width: "2.5rem" }}>
            <VideosIcon />
          </div>
          </Link>
          {!toggleCollapse && (
            <Link href="/pdfchat">
            <span className="text-md font-bold dark:text-white text-black">
              AI-ASSISTANT <br />
              <p className="text-blue-300 text-base">
                START CHATTING <span className="ml-2">&#10148;</span>
              </p>
            </span></Link>
          )}
        </div>
      </Card>
          </div>
    </div>
  );
};

export default Sidebar;
