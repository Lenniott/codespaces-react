import Navigation from "../components/navigation";
import Header from "../components/header";
import CourseNavigation from "../components/course-navigation";

export default function CourseAssessment() {
  return (
    <>
      <Header CourseTitle="Course Title" />
      <Navigation />
      <CourseNavigation />
      <main className="p-6">
        <div className="max-w-7xl mx-auto">Course Assessment Page</div>
      </main>
    </>
  );
}
