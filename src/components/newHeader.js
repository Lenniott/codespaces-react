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
  ChevronDown,
  Menu,
} from "react-feather";
import { PopoverMenu } from "./popover-menu/popover-menu";
import { PopoverMenuItem } from "./popover-menu/popover-menu-item";
import { PopoverMenuSeperator } from "./popover-menu/popover-menu-seperator";
import { useState, useEffect } from "react";
import { Modal } from "./modal/modal";
import { ModalHeader } from "./modal/modal-header";

export default function Header(props) {
  const [modal, setModal] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState(
    new Date().toLocaleString()
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date().toLocaleString());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <header className=" min-h-[4.5rem] bg-white p-3 px-6">
      <a
        href="#main"
        className="z-50 !absolute !top-0 !left-0 !right-0 !p-6 !block underline text-center bg-neutral-900 text-neutral-100 text-xl sr-only focus:not-sr-only"
      >
        Skip to main content
      </a>
      <div className="max-w-7xl mx-auto">
        <div className="flex relative">
          <Modal
            sidebar={true}
            placeStart={false}
            visible={modal}
            hide={() => {
              setModal(!modal);
            }}
            title={
              <div className="flex gap-4 items-center">
                <Link
                  className="flex items-center justify-center transition-all group text-white font-normal tracking-wide w-10 h-10 rounded-full bg-indigo-600 hover:bg-indigo-700 [&>span]:after:-bottom-px"
                  to="/UserProfile"
                >
                  {props.user[0]}
                </Link>
                <div>
                  <span className="text-lg">{props.user}</span>
                  <div className="flex gap-1 text-neutral-500 text-sm">
                    <span>{currentDateTime.split(", ")[0]}</span>
                    <span>•</span>
                    <span>{currentDateTime.split(",")[1]}</span>
                  </div>
                </div>
              </div>
            }
            content={
              <ul>
                <hr className="mb-2" />
                <li>
                  <Link
                    className="flex gap-2 p-2 grow hover:bg-neutral-100 hover:underline"
                    to="/"
                  >
                    <Home />
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex gap-2 p-2 grow hover:bg-neutral-100 hover:underline"
                    to=""
                  >
                    <Bell />
                    <span>Notifications</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex gap-2 p-2 grow hover:bg-neutral-100 hover:underline"
                    to="/UserProfile"
                  >
                    <User />
                    <span>Profile</span>
                  </Link>
                </li>
                <hr className="my-2" />
                <span className="text-sm text-neutral-500 pl-2">
                  {props.programme}
                </span>
                <li>
                  <Link
                    className="flex gap-2 p-2 grow hover:bg-neutral-100 hover:underline"
                    to="/Course"
                  >
                    <span>Courses</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex gap-2 p-2 grow hover:bg-neutral-100 hover:underline"
                    to="/Newsfeed"
                  >
                    <span>Newsfeed</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex gap-2 p-2 grow hover:bg-neutral-100 hover:underline"
                    to="/Newsfeed"
                  >
                    <span>Calendar</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex gap-2 p-2 grow hover:bg-neutral-100 hover:underline"
                    to="/Calendar"
                  >
                    <span>Key Info</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex gap-2 p-2 grow hover:bg-neutral-100 hover:underline"
                    to="/KeyInfo"
                  >
                    <span>Documents</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex gap-2 p-2 grow hover:bg-neutral-100 hover:underline"
                    to="/Documents"
                  >
                    <span>Team</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex gap-2 p-2 grow hover:bg-neutral-100 hover:underline"
                    to=""
                  >
                    <span>Grades</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex gap-2 p-2 grow hover:bg-neutral-100 hover:underline"
                    to=""
                  >
                    <span>Help</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex gap-2 p-2 grow items-center hover:bg-neutral-100 hover:underline"
                    to="/Settings"
                  >
                    <span>Settings</span>
                    <Settings className="w-4 h-4" />
                  </Link>
                </li>

                <hr className="my-2" />
                <span className="text-sm text-neutral-500 pl-2">Admin</span>
                <li>
                  <Link
                    className="flex gap-2 p-2 grow hover:bg-neutral-100 hover:underline"
                    to=""
                  >
                    <span>Grading Dashboard</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex gap-2 p-2 grow items-center hover:bg-neutral-100 hover:underline"
                    to=""
                  >
                    <span>Admin settings</span>
                    <Settings className="w-4 h-4" />
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex gap-2 p-2 grow items-center hover:bg-neutral-100 hover:underline"
                    to="/Playground/UserManager"
                  >
                    <span>People</span>
                    <Users className="w-4 h-4" />
                  </Link>
                </li>
                <hr className="my-2" />
                <li>
                  <Link
                    className="flex gap-2 p-2 grow text-red-600 items-center hover:bg-neutral-100 hover:underline"
                    to="/Calendar"
                  >
                    <span>Logout</span>
                  </Link>
                </li>
                <hr className="my-2" />
              </ul>
            }
          ></Modal>
          <Link to="/home" className="flex items-center shrink-0">
            <img
              className="w-16 sm:w-18"
              alt="Partner Logo"
              src="https://ins-prod-svc-files-filesbucket-1lgcxzgrlx564.s3.eu-west-1.amazonaws.com/6167833a-3764-46d6-a27d-27fb7666c2f0.png"
            />
          </Link>
          <div className="flex flex-grow min-w-0">
            <div className="min-w-0 ml-4 pr-6 flex items-center  min-h-[3.5rem]">
              {props.home && (
                <>
                  <Link
                    to="/"
                    className={`${
                      props.topTitle ? " text-neutral-500 " : " "
                    } text-sm md:text-lg leading-6 truncate hover:underline -mb-px`}
                  >
                    <span className="hidden sm:block">Home</span>
                    <span toclassName="block sm:hidden border-b border-b-1 border-b-transparent hover:border-b-neutral-500 p-1">
                      <Home className="block sm:hidden w-4 h-4" />
                    </span>
                  </Link>
                </>
              )}
              {props.home && props.custom && (
                <span className="block pt-1 mx-2 text-sm md:text-lg">•</span>
              )}
              {props.custom && (
                <Link
                  to=""
                  className={`${
                    props.bottomTitle ? " text-neutral-500 " : " "
                  } text-sm md:text-lg leading-6 truncate hover:underline -mb-px`}
                >
                  {props.topTitle}
                </Link>
              )}
            </div>
          </div>
          <div className="ml-auto flex items-center">
            <Button onClick={() => setModal(true)} label="Menu">
              {<Menu />}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
