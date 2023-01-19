import { Link } from "react-router-dom";
import Header from "../components/header";
import { Button } from "../components/button";
import { useState } from "react";
import { Search, Plus } from "react-feather";
import { Programme } from "../components/programme-card";
import { CourseCard } from "../components/course-card";
import { HomeAddProgrammeModal } from "./home-add-programme-modal";

export default function Home() {
  const [modalState, setModalState] = useState(false);
  const showModal = () => {
    setModalState(true);
  };
  const hideModal = () => {
    setModalState(false);
  };
  return (
    <>
      <Header home="true" />
      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 flex items-center gap-4">
            <form className="flex-grow">
              <div className="group relative">
                <div className="text-primary pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Search className="h-5 w-5 text-neutral-500 transition-color group-focus-within:text-primary" />
                </div>
                <label htmlFor="search" className="sr-only">
                  Search for programmes and courses
                </label>
                <input type="search" name="search" id="search" className="!pl-10" placeholder="Filter programmes and courses" />
              </div>
            </form>
            <div className="hidden relative md:flex gap-1.5 items-center">
              <input
                id="showHidden"
                aria-describedby="showHidden-description"
                name="showHidden"
                type="checkbox"
                className="h-[1.15rem] w-[1.15rem] border border-neutral-300 text-primary focus-visible:border-primary"
              />

              <div className="text-sm">
                <label htmlFor="showHidden" className="select-none text-neutral-700">
                  Show hidden programmes
                </label>
                <span id="showHidden-description" className="sr-only">
                  Show hidden programmes
                </span>
              </div>
            </div>
            <Button preset="primary" title="Add Programme" iconOnly={true} onClick={showModal}>
              <Plus />
            </Button>
          </div>
          <div className="mb-10">
            <Programme link="/Newsfeed" title="Business Analytics Online 2020" code="BM202" academicYear="2023">
              <CourseCard title="Text Mining for Economics and Finance" link="/Course/Newsfeed" />
              <CourseCard title="Text Mining for Economics and Finance" link="/Course/Newsfeed" />
              <CourseCard title="Text Mining for Economics and Finance" link="/Course/Newsfeed" />
              <CourseCard title="Text Mining for Economics and Finance" link="/Course/Newsfeed" />
            </Programme>
            <Programme link="/Newsfeed" title="Business Analytics Online 2020" code="BM202" academicYear="2023">
              <CourseCard title="Text Mining for Economics and Finance" link="/Course/Newsfeed" />
            </Programme>
            <Programme link="/Newsfeed" title="Business Analytics Online 2020" code="BM202" academicYear="2023">
              <CourseCard title="Text Mining for Economics and Finance" link="/Course/Newsfeed" />
            </Programme>
            <Programme link="/Newsfeed" title="Business Analytics Online 2020" code="BM202" academicYear="2023">
              <CourseCard title="Text Mining for Economics and Finance" link="/Course/Newsfeed" />
            </Programme>
          </div>
        </div>
      </main>
      <HomeAddProgrammeModal visible={modalState} hide={hideModal} />
    </>
  );
}
