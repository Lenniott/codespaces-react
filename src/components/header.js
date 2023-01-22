import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
import { Button } from "./button";
import { Bell, User, Settings, HelpCircle, LogOut, Award } from "react-feather";
import { PopoverMenu } from "./popover-menu/popover-menu";
import { PopoverMenuItem } from "./popover-menu/popover-menu-item";
import { PopoverMenuSeperator } from "./popover-menu/popover-menu-seperator";

export default function Header(props) {
  return (
    <header className="bg-white p-6">
      <a
        href="#main"
        class="z-50 !absolute !top-0 !left-0 !right-0 !p-6 !block underline text-center bg-neutral-900 text-neutral-100 text-xl sr-only focus:not-sr-only"
      >
        Skip to main content
      </a>
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
              popoverContent={
                <PopoverMenu>
                  <PopoverMenuItem
                    title="Notifications"
                    button={true}
                    icon={<Bell />}
                  />
                  <PopoverMenuItem
                    title="Profile"
                    button={true}
                    icon={<User />}
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
        <div className="flex gap-2 text-2xl">
          <Link title="Go to home page" to="/Home" className="shrink-0 min-w-0">
            <h1 className="hover:underline truncate">Home</h1>
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
