import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Button } from "./button";
import { Menu } from "react-feather";

export default function Navigation() {
  const location = useLocation();
  const navigationItems = [
    {
      title: "Newsfeed",
      href: "/Newsfeed",
    },
    {
      title: "Calendar",
      href: "/Calendar",
    },
    {
      title: "Courses",
      href: "/Course",
    },
    {
      title: "Key Info",
      href: "/KeyInfo",
    },
    {
      title: "Documents",
      href: "/Documents",
    },
    {
      title: "Team",
      href: "/Team",
    },
    {
      title: "Grades",
      href: "/Grades",
    },
    {
      title: "Settings",
      href: "/Settings",
    },
  ];

  const [showMenuButton, setShowMenuButton] = useState(false);
  const [navHidden, setNavHidden] = useState(true);
  const handleNavHidden = () => setNavHidden(!navHidden);
  const listRef = useRef(null);

  useEffect(() => {
    function checkListWidth() {
      const listItems = listRef.current.children;
      let listWidth = 0;
      if (listItems) {
        Array.prototype.forEach.call(listItems, (item) => {
          listWidth += item.offsetWidth;
          if (listWidth > listRef.current.getBoundingClientRect().width) {
            item.classList.add("invisible");
            setShowMenuButton(true);
          } else {
            item.classList.remove("invisible");
            setShowMenuButton(false);
          }
        });
      }
    }

    window.addEventListener("resize", checkListWidth);
    checkListWidth();

    return () => {
      window.removeEventListener("resize", checkListWidth);
    };
  }, []);

  return (
    <nav
      aria-label="Main Menu"
      className="px-6 bg-white whitespace-nowrap relative"
    >
      <div className="max-w-7xl mx-auto overflow-hidden">
        <ul ref={listRef} className="relative z-10 flex">
          {navigationItems.map((item, i) => (
            <li key={i} className="first:-ml-3 mb-2">
              <Link
                to={item.href}
                className={`${
                  item.title === "Courses" &&
                  location.pathname.toLowerCase().includes("/course/")
                    ? "bg-primary text-white"
                    : location.pathname
                        .toLowerCase()
                        .startsWith(item.href.toLowerCase())
                    ? "text-primary underline"
                    : "text-neutral-700 hover:text-neutral-900 hover:underline hover:decoration-neutral-500"
                } py-1 px-3 block`}
              >
                <span className="leading-loose">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
        {showMenuButton && (
          <div className="absolute -mt-px -top-px right-4 z-10 bg-white">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-0 bottom-0 -left-14 w-14 bg-gradient-to-l from-white"
            ></div>
            <Button
              iconOnly={true}
              preset="transparent"
              onClick={handleNavHidden}
              ariaExpanded={!navHidden}
              ariaControls="subMenu"
            >
              <Menu className="h-5 w-5 transition-color hover:text-primary group-focus-within:text-primary" />
            </Button>
          </div>
        )}
      </div>
      <ul
        id="subMenu"
        className={`${
          navHidden ? " hidden " : " block "
        } text-sm peer origin-top-right animate-popover empty:hidden bg-white shadow-lg shadow-neutral-800/10 ring-1 ring-black/5 focus:outline-none [&>*]:!m-0 [&>li>a]:bg-white [&>li>a>span]:!text-neutral-700 [&>li>a:hover>span]:underline [&>li>a:hover>span]:decoration-neutral-500 absolute top-10 right-4 z-20 min-w-[10rem] `}
        aria-hidden="true"
      >
        {navigationItems.map((item, i) => (
          <li key={i} className="first:-ml-3 mb-2">
            <Link
              to={item.href}
              className={`${
                item.title === "Courses" &&
                location.pathname.toLowerCase().includes("/courses/")
                  ? "bg-primary text-white"
                  : location.pathname
                      .toLowerCase()
                      .startsWith(item.href.toLowerCase())
                  ? "text-primary underline"
                  : "text-neutral-700 hover:text-neutral-900 hover:underline hover:decoration-neutral-500"
              } py-1 px-3 block`}
            >
              <span className="leading-loose">{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
      <button
        onClick={handleNavHidden}
        type="button"
        className={`${
          navHidden ? " hidden " : " block "
        } fixed inset-0 bg-black/0 peer-empty:hidden`}
      >
        <span className="sr-only">Close Menu</span>
      </button>
    </nav>
  );
}
