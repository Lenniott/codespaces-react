import Navigation from "../components/navigation";
import Header from "../components/header";
import CourseNavigation from "../components/course-navigation";
import { Button } from "../components/button";
import { Link } from "react-router-dom";
import { Plus, Clock, Globe } from "react-feather";

export default function CourseMaterialsSessionScreen3() {
  return (
    <>
      <Header CourseTitle="Course Title" />
      <Navigation />
      <CourseNavigation />
      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          <header className="flex gap-3 items-center">
            <div className="min-w-0 flex-grow text-xl flex gap-2">
              <nav aria-label="Breadcrumb" className="min-w-0 flex-grow text-xl">
                <ol className="flex gap-2 [&>li:first-child>span]:hidden">
                  <li className="min-w-0 flex gap-2">
                    <span aria-hidden="true">/</span>
                    <Link to="/Course/Materials" className="truncate hover:underline" title="Materials">
                      Materials
                    </Link>
                  </li>
                  <li className="min-w-0 flex gap-2">
                    <span aria-hidden="true">/</span>
                    <Link to="/Course/Materials/Session" className="truncate hover:underline" title="Session 1">
                      Session 1
                    </Link>
                  </li>
                  <li className="min-w-0 flex gap-2">
                    <span className="pointer-events-none" aria-hidden="true">
                      /
                    </span>
                    <Link aria-current="page" className="truncate text-neutral-600 hover:underline" title="Screen 3">
                      Screen 3
                    </Link>
                  </li>
                </ol>
              </nav>
            </div>
            <Button label="Edit Screen" preset="primary"></Button>
          </header>
          <section className="mt-6 mb-16 grid gap-6 md:grid-cols-4">
            <div className="md:col-span-3 bg-white p-6 self-start">Select 'Edit Screen' to get started.</div>
            <div class="self-start grid gap-6">
              <section class="bg-white p-6">
                <div className="text-lg mb-3">Screen Summary</div>
                <div>Participants are introduced to the aims and learning outcomes of this week.</div>
              </section>
              <section class="bg-white p-6">
                <div className="text-lg mb-3">Duration</div>
                <div>
                  <div title="Duration is 30 minutes" className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>30 minutes</span>
                  </div>
                </div>
              </section>
              <section class="bg-white p-6">
                <div className="text-lg mb-3">Platform</div>
                <div>
                  <div title="Online" className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    <span>Online</span>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>
      </main>
      <div className="border border-neutral-200 bg-white py-3 px-4 fixed bottom-0 left-0 right-0 flex items-center justify-center gap-3">
        <Link title="1.1 - Screen 1" to="/Course/Materials/Session/Screen">
          <Button preset="secondary" label="1.1" size="small" />
        </Link>
        <Link title="1.2 - Screen 2" to="/Course/Materials/Session/Screen2">
          <Button preset="secondary" label="1.2" size="small" />
        </Link>
        <Link title="1.3 - Screen 3" to="/Course/Materials/Session/Screen3">
          <Button preset="primary" label="1.3" size="small" />
        </Link>
        <Button size="small" title="Add Screen" preset="primary-outline" iconOnly={true}>
          <Plus className="w-5 h-5" />
        </Button>
      </div>
    </>
  );
}
