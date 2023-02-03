import Navigation from "../components/navigation";
import Header from "../components/header";
import CourseNavigation from "../components/course-navigation";
import { Main } from "../components/main";
import { Button } from "../components/button";
import { useState } from "react";
import {
  Edit2,
  Plus,
  XCircle,
  PauseCircle,
  PlayCircle,
  MoreVertical,
} from "react-feather";
import { RxDragHandleDots2 } from "react-icons/rx";
import { PopoverMenu } from "../components/popover-menu/popover-menu";
import { PopoverMenuItem } from "../components/popover-menu/popover-menu-item";

export default function CourseLiveClasses() {
  const [checked, setChecked] = useState(false);
  const [active, setActive] = useState(true);

  const Students = (props) => (
    <div className="bg-neutral-200 flex items-top gap-4 h-fit relative">
      <div>
        <span
          className={`absolute block w-[0.8rem] h-[0.8rem] ${
            !active ? "bg-red-400" : "bg-green-400"
          } rounded-full m-2`}
        ></span>
        <span></span>
      </div>
      <div
        className={`flex items-center gap-4 grow m-2 ${
          !active ? "opacity-40" : "opacity-100"
        }`}
      >
        <span className="h-12 w-12 bg-yellow-500 grid place-items-center rounded-full text-lg font-normal text-white">
          {props.name[0]}
        </span>
        <div className="grid grow">
          <span>{props.name}</span>
          <span className="text-xs">{props.email}</span>
        </div>
      </div>
      {checked && (
        <div className="grid relative">
          <div className="m-1">
            <Button
              preset="transparent"
              popoverContent={
                <PopoverMenu>
                  {active && (
                    <PopoverMenuItem
                      title="Pause access"
                      button={true}
                      icon={<PauseCircle />}
                      onClick={() => setActive(false)}
                    />
                  )}
                  {!active && (
                    <PopoverMenuItem
                      title="Resume access"
                      button={true}
                      icon={<PlayCircle />}
                      onClick={() => setActive(true)}
                    />
                  )}
                  <PopoverMenuItem
                    title="Unenrol"
                    button={true}
                    icon={<XCircle />}
                  />
                </PopoverMenu>
              }
              popoverPlacement="bottom-right"
              popoverWidth="w-48"
            >
              <MoreVertical className="h-6 w-6" />
            </Button>
          </div>

          <RxDragHandleDots2 className="rotate-90 absolute bottom-1 right-1" />
        </div>
      )}
    </div>
  );

  const EditBtn = () => (
    <div className="w-[6.5rem]">
      {checked && (
        <Button
          preset="primary"
          label="Save"
          fluid="true"
          onClick={() => setChecked(!checked)}
        >
          {<Edit2 className="w-4 h-4 mx-2" />}
        </Button>
      )}
      {!checked && (
        <Button
          preset="secondary"
          label="Edit"
          fluid="true"
          onClick={() => setChecked(!checked)}
        >
          {<Edit2 className="w-4 h-4 mx-2" />}
        </Button>
      )}
    </div>
  );

  return (
    <>
      <Header CourseTitle="Course Title" course={true} />
      <Navigation />
      <CourseNavigation />
      <Main>
        <div className="flex items-center h-12 mb-4">
          <span className="flex grow text-xl">Class list</span>

          <div className="flex gap-2">
            {checked && (
              <div className="flex gap-2">
                <Button
                  label="Enrolment"
                  className="px-4 bg-neutral-100 border border-1 border-neutral-300 py-2 text-neutral-300"
                />
                <Button preset="secondary" label="New group">
                  {<Plus />}
                </Button>
              </div>
            )}
            <EditBtn />
          </div>
        </div>
        <ul className="grid grow sm:flex place-items-start gap-4">
          {checked && (
            <il className="order-last sm:order-first min-w-full sm:min-w-[250px] grid sm:grow lg:grow-0 bg-white p-4 pb-6 gap-4 lg:min-w-[320px]">
              <span className="flex grow justify-end">
                <XCircle />
              </span>
              <span className="flex grow text-xl py-2">
                Enrol existing students
              </span>
              <input
                type="search"
                name="search"
                id="search"
                className=""
                placeholder="Search"
              />
              <div className="grid gap-2 pb-6">
                <div className="bg-neutral-200 flex p-2 items-center gap-2">
                  <span className="h-12 w-12 bg-yellow-500 grid place-items-center rounded-full text-lg font-normal text-white">
                    B
                  </span>
                  <span>Barry Bones</span>
                </div>
                <div className="bg-neutral-200 flex p-2 items-center gap-2">
                  <span className="h-12 w-12 bg-yellow-500 grid place-items-center rounded-full text-lg font-normal text-white">
                    M
                  </span>
                  <span>Marry Mones</span>
                </div>
              </div>
              <Button
                label="Enrol selected"
                className="px-4 bg-neutral-100 border border-1 border-neutral-300 py-2 text-neutral-300"
              />
              <Button preset="secondary" label="Enrol new students">
                {<Plus />}
              </Button>
            </il>
          )}
          <il className="min-w-full sm:min-w-[250px] gap-4 bg-white p-4 grid sm:grow lg:grow-0 lg:min-w-[320px]">
            <div className="bg-neutral-200 flex items-center h-16 pl-6 text-lg font-thin">
              Group A
            </div>
            <div className="grid">
              <Students name="Chris Carter" email="c.carter@gamil.com" />
            </div>
          </il>
        </ul>
      </Main>
    </>
  );
}
