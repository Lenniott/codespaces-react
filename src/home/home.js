import Header from "../components/header";
import { Button } from "../components/button";
import { useState } from "react";
import { Search, Plus, Eye, EyeOff } from "react-feather";
import { Programme } from "../components/programme-card";
import { CourseCard } from "../components/course-card";
import { HomeAddProgrammeModal } from "./home-add-programme-modal";
import { Main } from "../components/main";

export default function Home() {
  const [hiddenProgrammesState, setHiddenProgrammesState] = useState(true);
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
      <Main>
        <section className="mb-6 flex items-center gap-4">
          <form className="flex-grow">
            <div className="group relative">
              <div className="text-primary pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-neutral-500 transition-color group-focus-within:text-primary" />
              </div>
              <label htmlFor="search" className="sr-only">
                Search for programmes and courses
              </label>
              <input
                type="search"
                name="search"
                id="search"
                className="!pl-10 !pr-7"
                placeholder="Filter programmes and courses"
              />
              <div className="absolute top-0 right-0 bottom-0 md:hidden">
                <Button
                  preset="transparent"
                  iconOnly={true}
                  title="Show hidden programmes"
                >
                  {hiddenProgrammesState ? (
                    <EyeOff className="h-5 w-5 text-neutral-500" />
                  ) : (
                    <Eye className="h-5 w-5 text-neutral-500" />
                  )}
                </Button>
              </div>
            </div>
          </form>
          <div className="hidden relative md:flex gap-1.5 items-center">
            <input
              id="showHidden"
              name="showHidden"
              type="checkbox"
              className="h-[1.15rem] w-[1.15rem] border border-neutral-300 text-primary focus-visible:border-primary"
            />

            <div className="text-sm">
              <label
                htmlFor="showHidden"
                className="select-none text-neutral-700"
              >
                Show hidden programmes
              </label>
            </div>
          </div>
          <Button
            preset="primary"
            label="Add Programme"
            mobileLabelHidden={true}
            onClick={showModal}
          >
            <Plus />
          </Button>
        </section>
        <section className="mb-10">
          <Programme
            link="/Newsfeed"
            title="Business Analytics Online 2020"
            code="BM202"
            academicYear="2023"
          >
            <CourseCard
              title="Text Mining for Economics and Finance"
              link="/Course/Newsfeed"
            />
            <CourseCard
              title="Text Mining for Economics and Finance"
              link="/Course/Newsfeed"
            />
            <CourseCard
              title="Text Mining for Economics and Finance"
              link="/Course/Newsfeed"
            />
            <CourseCard
              title="Text Mining for Economics and Finance"
              link="/Course/Newsfeed"
            />
          </Programme>
          <Programme
            link="/Newsfeed"
            title="Business Analytics Online 2020"
            code="BM202"
            academicYear="2023"
          >
            <CourseCard
              title="Text Mining for Economics and Finance"
              link="/Course/Newsfeed"
            />
          </Programme>
          <Programme
            link="/Newsfeed"
            title="Business Analytics Online 2020"
            code="BM202"
            academicYear="2023"
          >
            <CourseCard
              title="Text Mining for Economics and Finance"
              link="/Course/Newsfeed"
            />
          </Programme>
          <Programme
            link="/Newsfeed"
            title="Business Analytics Online 2020"
            code="BM202"
            academicYear="2023"
          >
            <CourseCard
              title="Text Mining for Economics and Finance"
              link="/Course/Newsfeed"
            />
          </Programme>
        </section>
      </Main>
      <HomeAddProgrammeModal visible={modalState} hide={hideModal} />
    </>
  );
}
