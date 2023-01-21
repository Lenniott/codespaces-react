import Navigation from "./components/navigation";
import Header from "./components/header";
import { Button } from "./components/button";
import { Plus } from "react-feather";
import { CoursesCard } from "./components/courses-card";

export default function Courses() {
  return (
    <>
      <Header />
      <Navigation />
      <main id="main" className="p-6">
        <div className="max-w-7xl mx-auto">
          <header className="mb-6 flex items-center justify-between">
            <div className="text-xl">Courses</div>
            <Button preset="primary" title="Add Course" iconOnly={true}>
              <Plus />
            </Button>
          </header>
          <div class="lg:grid lg:grid-cols-4 lg:gap-10">
            <div className="lg:col-span-3">
              <section>
                <ul className="grid gap-3 sm:gap-4 grid-cols-[repeat(auto-fill,minmax(11rem,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(14.5rem,1fr))]">
                  <CoursesCard
                    title="Text Mining for Economics and Finance"
                    link="/Course/Newsfeed"
                  />
                  <CoursesCard
                    title="Text Mining for Economics and Finance"
                    link="/Course/Newsfeed"
                  />
                  <CoursesCard
                    title="Text Mining for Economics and Finance"
                    link="/Course/Newsfeed"
                  />
                </ul>
              </section>
            </div>
            <aside className="hidden lg:block">
              <div className="space-y-3">
                <Button
                  preset="secondary"
                  label="All courses"
                  fluid={true}
                ></Button>
                <Button label="Example Tag" fluid={true}></Button>
                <Button label="Example Tag" fluid={true}></Button>
                <Button label="Example Tag" fluid={true}></Button>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
