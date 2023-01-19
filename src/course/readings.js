import Navigation from "../components/navigation";
import Header from "../components/header";
import CourseNavigation from "../components/course-navigation";

export default function CourseReadings() {
  return (
    <>
      <Header CourseTitle="Course Title" />
      <Navigation />
      <CourseNavigation />
      <main className="p-6">
        <div className="max-w-7xl mx-auto">Course Readings Page</div>
      </main>
    </>
  );
}
