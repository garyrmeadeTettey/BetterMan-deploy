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

interface MenuItem {
  id: number;
  label: string;
  unitLabel: string;
  link: string;
}

const menuItems: MenuItem[] = [
  { id: 1, label: "UNIT 1", unitLabel: "Chemical Bonding and Molecular Structure", link: "/courses/units/science/chemistry/unit1" },
  { id: 2, label: "UNIT 2", unitLabel: "Chemical Reactions and Stoichiometry", link: "/courses/units/science/chemistry/unit2" },
  { id: 3, label: "UNIT 3", unitLabel: "The Periodic Table and Chemical Trends", link: "/courses/units/science/chemistry/unit3" },
  { id: 4, label: "UNIT 4", unitLabel: " Acids, Bases, and pH", link: "/courses/units/science/chemistry/unit4" },
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
    " px-4 pt-8 mb-4  bg-light flex justify-between flex-col",
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
    <Card
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          {!toggleCollapse && (
            <div className="flex items-center gap-4">
              <LogoIcon />
              <h1 className="text-xl">
                <span
                  className={classNames("mt-2 font-medium text-text", {
                    hidden: toggleCollapse,
                  })}
                >
                  Biology
                </span>
              </h1>
            </div>
          )}
          {isCollapsible && (
            <Button
              className={collapseIconClasses}
              onClick={handleSidebarToggle}
            >
              <CollapsIcon />
            </Button>
          )}
        </div>

        <div className="flex flex-col items-start mt-10">
          {menuItems.map((menu) => {
            const classes = getNavItemClasses(menu);
            return (
              // eslint-disable-next-line react/jsx-key
              <div className={classes} key={menu.id}>
                <Link href={menu.link}
                  className={classNames(
                    "flex py-4 px-3 items-center w-full h-full",
                    "hover:bg-blue-50" // Add this class for blue hover effect
                  )}>
                  
                    {!toggleCollapse && (
                      <span
                        className={classNames(
                          "text-md font-medium text-text-light"
                        )}
                      >
                        {menu.label}<br></br>
                        <b>{menu.unitLabel}</b><br></br>
                      </span>
                    )}
                 
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      
      <Card className={`${toggleCollapse ? '' : 'border border-blue'} shadow-md`}>
        <div className={`${getNavItemClasses({} as MenuItem)} px-3 py-2 relative`}>
          <div style={{ width: "2.5rem" }}>
            <ArticleIcon />
          </div>
          {!toggleCollapse && (
            <Link href="/dashboard">
            <span className="text-m mt-2 font-bold text-text-light" style={{ color: "black" }}>
              COURSE ASSESSMENT <br />
              <p className="text-blue-500 text-base">
                START QUIZ <span className="ml-2">&#10148;</span>
              </p>
            </span></Link>
          )}
        </div>
      </Card>
    </Card>
  );
};

export default Sidebar;
