import Navigation from "./components/navigation";
import Header from "./components/header";
import { Button } from "././components/button";
import { CourseCard } from "./components/course-card";
import { Plus } from "react-feather";

export default function Newsfeed() {
  return (
    <>
      <Header />
      <Navigation />
      <main id="main" className="p-6">
        <div className="max-w-7xl mx-auto">
          <header className="mb-6 flex items-center justify-between">
            <div className="text-xl">Newsfeed</div>
            <Button preset="primary" title="Add Post" iconOnly={true}>
              <Plus />
            </Button>
          </header>
          <div class="lg:grid lg:grid-cols-4 lg:gap-6">
            <div className="lg:col-span-3">
              <section className="bg-white p-6 space-y-6">
                <div className="text-xl">Business Analytics Online 2020</div>
                <p>
                  Welcome to your new programme. This is the programme newsfeed
                  where you can post news for students. Click below to add your
                  first post.
                </p>
                <Button preset="primary" label="Add Post"></Button>
              </section>
            </div>
            <aside className="hidden lg:block">
              <div className="space-y-3">
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
