import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";

export default function CourseNavigation() {
  const location = useLocation();
  const navigationItems = [
    {
      title: "Newsfeed",
      href: "/Course/Newsfeed",
    },
    {
      title: "Calendar",
      href: "/Course/Calendar",
    },
    {
      title: "Materials",
      href: "/Course/Materials",
    },
    {
      title: "Overview",
      href: "/Course/Overview",
    },
    {
      title: "Assessment",
      href: "/Course/Assessment",
    },
    {
      title: "Readings",
      href: "/Course/Readings",
    },
    {
      title: "Class list",
      href: "/Course/ClassList",
    },
    {
      title: "Forum",
      href: "/Course/Forum",
    },
    {
      title: "Settings",
      href: "/Course/Settings",
    },
  ];
  return (
    <nav
      aria-label="Course Menu"
      className="-mt-2 bg-primary whitespace-nowrap px-6 overflow-auto relative"
    >
      <div className="flex items-center max-w-7xl mx-auto">
        <ul className="flex gap-5 bg-primary">
          {navigationItems.map((item, i) => (
            <li key={i} className="last:pr-6">
              <Link
                to={item.href}
                className={
                  (location.pathname
                    .toLowerCase()
                    .indexOf(item.href.toLowerCase()) !== -1
                    ? "text-white underline"
                    : "text-primary-light hover:text-primary-lightest/90 hover:underline ") +
                  " py-2 inline-flex items-center justify-center "
                }
              >
                <span className="leading-loose">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
