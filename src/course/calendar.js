import Navigation from "../components/navigation";
import Header from "../components/header";
import { Button } from "../components/button";
import CourseNavigation from "../components/course-navigation";
import { ChevronLeft, ChevronRight } from "react-feather";

export default function CourseCalendar() {
  const days = [
    { date: "2021-12-27" },
    { date: "2021-12-28" },
    { date: "2021-12-29" },
    { date: "2021-12-30" },
    { date: "2021-12-31" },
    { date: "2022-01-01", isCurrentMonth: true },
    { date: "2022-01-02", isCurrentMonth: true },
    { date: "2022-01-03", isCurrentMonth: true },
    { date: "2022-01-04", isCurrentMonth: true },
    { date: "2022-01-05", isCurrentMonth: true },
    { date: "2022-01-06", isCurrentMonth: true },
    { date: "2022-01-07", isCurrentMonth: true },
    { date: "2022-01-08", isCurrentMonth: true },
    { date: "2022-01-09", isCurrentMonth: true },
    { date: "2022-01-10", isCurrentMonth: true },
    { date: "2022-01-11", isCurrentMonth: true },
    { date: "2022-01-12", isCurrentMonth: true },
    { date: "2022-01-13", isCurrentMonth: true },
    { date: "2022-01-14", isCurrentMonth: true },
    { date: "2022-01-15", isCurrentMonth: true },
    { date: "2022-01-16", isCurrentMonth: true },
    { date: "2022-01-17", isCurrentMonth: true, isToday: true },
    { date: "2022-01-18", isCurrentMonth: true },
    { date: "2022-01-19", isCurrentMonth: true },
    { date: "2022-01-20", isCurrentMonth: true },
    { date: "2022-01-21", isCurrentMonth: true, isSelected: true },
    { date: "2022-01-22", isCurrentMonth: true },
    { date: "2022-01-23", isCurrentMonth: true },
    { date: "2022-01-24", isCurrentMonth: true },
    { date: "2022-01-25", isCurrentMonth: true },
    { date: "2022-01-26", isCurrentMonth: true },
    { date: "2022-01-27", isCurrentMonth: true },
    { date: "2022-01-28", isCurrentMonth: true },
    { date: "2022-01-29", isCurrentMonth: true },
    { date: "2022-01-30", isCurrentMonth: true },
    { date: "2022-01-31", isCurrentMonth: true },
    { date: "2022-02-01" },
    { date: "2022-02-02" },
    { date: "2022-02-03" },
    { date: "2022-02-04" },
    { date: "2022-02-05" },
    { date: "2022-02-06" },
  ];
  const meetings = [
    {
      id: 1,
      name: "Leslie Alexander",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      start: "1:00 PM",
      startDatetime: "2022-01-21T13:00",
      end: "2:30 PM",
      endDatetime: "2022-01-21T14:30",
    },
    {
      id: 2,
      name: "Leslie Alexander",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      start: "3:00 PM",
      startDatetime: "2022-01-21T15:00",
      end: "4:30 PM",
      endDatetime: "2022-01-21T16:30",
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <Header CourseTitle="Course Title" />
      <Navigation />
      <CourseNavigation />
      <main id="main" className="p-6">
        <div className="max-w-7xl mx-auto">
          <header className="mb-6 flex items-center justify-between">
            <div className="text-xl">Calendar</div>
            <Button label="Settings"></Button>
          </header>
          <div className="relative bg-white p-6 md:grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x md:divide-neutral-200">
            <div className="md:pr-12">
              <div className="flex items-center">
                <div className="flex-auto text-lg">January 2023</div>
                <Button label="Today" size="small"></Button>
                <div className="ml-4 -space-x-px">
                  <Button iconOnly={true} size="small">
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button iconOnly={true} size="small">
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              <div className="mt-10 grid grid-cols-7 text-center text-xs leading-6 text-neutral-500">
                <div>M</div>
                <div>T</div>
                <div>W</div>
                <div>T</div>
                <div>F</div>
                <div>S</div>
                <div>S</div>
              </div>
              <div className="mt-2 grid grid-cols-7 text-sm">
                {days.map((day, dayIdx) => (
                  <div
                    key={day.date}
                    className={classNames(
                      dayIdx > 6 && "border-t border-neutral-175",
                      "py-2"
                    )}
                  >
                    <button
                      type="button"
                      className={classNames(
                        day.isSelected && "text-white",
                        !day.isSelected && day.isToday && "text-primary",
                        !day.isSelected &&
                          !day.isToday &&
                          day.isCurrentMonth &&
                          "text-neutral-900",
                        !day.isSelected &&
                          !day.isToday &&
                          !day.isCurrentMonth &&
                          "text-neutral-400",
                        day.isSelected && day.isToday && "bg-primary",
                        day.isSelected && !day.isToday && "bg-primary",
                        !day.isSelected && "hover:bg-neutral-200",
                        (day.isSelected || day.isToday) && "font-medium",
                        "mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                      )}
                    >
                      <time dateTime={day.date}>
                        {day.date.split("-").pop().replace(/^0/, "")}
                      </time>
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <section className="max-h-[50vh] overflow-y-auto md:absolute static top-6 bottom-6 right-6 md:w-[calc(50%-1.5rem)] pt-8 md:pt-0 md:pl-12">
              <div className="text-lg">
                <time dateTime="2022-01-21">January 21, 2023</time>
              </div>
              <ol className="mt-4 divide-y text-sm text-neutral-500">
                {meetings.map((meeting) => (
                  <li
                    key={meeting.id}
                    className="group flex items-center space-x-3 py-3"
                  >
                    <img
                      src={meeting.imageUrl}
                      alt=""
                      className="h-10 w-10 flex-none rounded-full"
                    />
                    <div className="flex-auto">
                      <p className="text-neutral-900">{meeting.name}</p>
                      <p>
                        <time dateTime={meeting.startDatetime}>
                          {meeting.start}
                        </time>{" "}
                        -{" "}
                        <time dateTime={meeting.endDatetime}>
                          {meeting.end}
                        </time>
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
