import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
import { Button } from "./button";
import { Bell, User, Settings, HelpCircle, LogOut, Award } from "react-feather";

export default function Header(props) {
  return (
    <header className="bg-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex mb-6 relative">
          <Link to="/home">
            <img
              className="w-24"
              alt="Partner Logo"
              src="https://ins-prod-svc-files-filesbucket-1lgcxzgrlx564.s3.eu-west-1.amazonaws.com/6167833a-3764-46d6-a27d-27fb7666c2f0.png"
            />
          </Link>
          <div className="ml-auto">
            <Button
              label="JT"
              popover={true}
              popoverContent={
                <ul className="-m-4 p-1">
                  <li>
                    <li>
                      <button className="text-left w-full flex gap-3 items-center py-2 px-2 hover:underline">
                        <Bell className="text-neutral-400 w-4 h-4" />
                        <span>Notifications</span>
                      </button>
                    </li>
                  </li>
                  <li>
                    <button className="text-left w-full flex gap-3 items-center py-2 px-2 hover:underline">
                      <User className="text-neutral-400 w-4 h-4" />
                      <span>Profile</span>
                    </button>
                  </li>
                  <li>
                    <button className="text-left w-full flex gap-3 items-center py-2 px-2 hover:underline">
                      <Award className="text-neutral-400 w-4 h-4" />
                      <span>Grading Dashboard</span>
                    </button>
                  </li>
                  <li className="my-1 -mx-1 border-b border-neutral-200"></li>
                  <li>
                    <button className="text-left w-full flex gap-3 items-center py-2 px-2 hover:underline">
                      <Settings className="text-neutral-400 w-4 h-4" />
                      <span>Partner Settings</span>
                    </button>
                  </li>
                  <li>
                    <button className="text-left w-full flex gap-3 items-center py-2 px-2 hover:underline">
                      <HelpCircle className="text-neutral-400 w-4 h-4" />
                      <span>Help Center</span>
                    </button>
                  </li>
                  <li className="my-1 -mx-1 border-b border-neutral-200"></li>
                  <li>
                    <button className="text-left w-full flex gap-3 items-center py-2 px-2 hover:underline">
                      <LogOut className="text-neutral-400 w-4 h-4" />
                      <span>Log Out</span>
                    </button>
                  </li>
                </ul>
              }
              popoverPlacement="bottom-right"
              className="transition-all group text-white font-normal tracking-wide w-10 h-10 rounded-full bg-indigo-600 hover:bg-indigo-700 [&>span]:after:-bottom-px"
              popoverWidth="w-48"
            ></Button>
          </div>
        </div>
        <div className="flex gap-2 text-2xl">
          <Link title="Go to home page" to="/Home" className="shrink-0 min-w-0">
            <h1 className="hover:underline truncate">Homey</h1>
          </Link>
          {!props.home && (
            <>
              <div className="shrink-0">/</div>
              <Link
                title="Go to programme home page"
                to="/Newsfeed"
                className="min-w-0"
              >
                <h2 className="text-2xl text-neutral-500 hover:underline truncate">
                  Business Analytics Online 2020
                </h2>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
