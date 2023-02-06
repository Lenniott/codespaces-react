import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
import { Button } from "./button";
import {
  Bell,
  User,
  Settings,
  HelpCircle,
  LogOut,
  Award,
  Home,
  MoreHorizontal,
  Users,
} from "react-feather";
import { PopoverMenu } from "./popover-menu/popover-menu";
import { PopoverMenuItem } from "./popover-menu/popover-menu-item";
import { PopoverMenuSeperator } from "./popover-menu/popover-menu-seperator";
import { useState } from "react";

export default function Header(props) {
  return (
    <header
      className={`${
        props.course ? "  min-h-[7.25rem] " : " min-h-[6.5rem] "
      } bg-white p-6 `}
    >
      <a
        href="#main"
        className="z-50 !absolute !top-0 !left-0 !right-0 !p-6 !block underline text-center bg-neutral-900 text-neutral-100 text-xl sr-only focus:not-sr-only"
      >
        Skip to main content
      </a>
      <div className="max-w-7xl mx-auto">
        <div className="flex relative">
          <div className="flex flex-grow min-w-0">
            <Link to="/home" className="flex items-center shrink-0">
              <img
                className="w-20 sm:w-24"
                alt="Partner Logo"
                src="https://ins-prod-svc-files-filesbucket-1lgcxzgrlx564.s3.eu-west-1.amazonaws.com/6167833a-3764-46d6-a27d-27fb7666c2f0.png"
              />
            </Link>
            <div className="min-w-0 ml-4 pr-6 flex-col flex justify-center space-y-1.5 min-h-[3.5rem]">
              {!props.home && (
                <Link
                  to="/Newsfeed"
                  className={`${
                    props.course ? " text-neutral-500 " : " "
                  } text-xl leading-6 truncate hover:underline -mb-px`}
                >
                  Business Analytics Online 2020
                </Link>
              )}
              {props.custom && (
                <Link
                  to="/Newsfeed"
                  className={`${
                    props.bottomTitle ? " text-neutral-500 " : " "
                  } text-xl leading-6 truncate hover:underline -mb-px`}
                >
                  {props.topTitle}
                </Link>
              )}
              {props.course && (
                <Link
                  to="/Course/Newsfeed"
                  className="text-xl leading-6 truncate hover:underline"
                >
                  Text Mining for Economics and Finance
                </Link>
              )}
              {props.custom && (
                <Link
                  to="/Playground/UserManager"
                  className="text-xl leading-6 truncate hover:underline"
                >
                  {props.bottomTitle}
                </Link>
              )}
            </div>
          </div>
          <div className="ml-auto flex items-center md:items-start">
            <Button
              label="JT"
              popoverContent={
                <PopoverMenu>
                  <PopoverMenuItem
                    title="Notifications"
                    button={true}
                    icon={<Bell />}
                  />
                  <PopoverMenuItem
                    title="Profile"
                    button={false}
                    icon={<User />}
                    link="/UserProfile"
                  />
                  <PopoverMenuItem
                    title="Grading Dashboard"
                    button={true}
                    icon={<Award />}
                  />

                  <PopoverMenuSeperator />
                  <PopoverMenuItem
                    title="Partner Settings"
                    button={true}
                    icon={<Settings />}
                  />
                  <PopoverMenuItem
                    title="People"
                    button={false}
                    icon={<Users />}
                    link="/Playground/UserManager"
                  />
                  <PopoverMenuItem
                    title="Help Center"
                    button={true}
                    icon={<HelpCircle />}
                  />
                  <PopoverMenuSeperator />
                  <PopoverMenuItem
                    title="Log Out"
                    preset="danger"
                    button={true}
                    icon={<LogOut />}
                  />
                </PopoverMenu>
              }
              popoverPlacement="bottom-right"
              className="transition-all group text-white font-normal tracking-wide w-10 h-10 rounded-full bg-indigo-600 hover:bg-indigo-700 [&>span]:after:-bottom-px"
              popoverWidth="w-48"
            ></Button>
          </div>
        </div>
      </div>
    </header>
  );
}
