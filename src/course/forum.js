import Navigation from "../components/navigation";
import Header from "../components/header";
import CourseNavigation from "../components/course-navigation";
import { Main } from "../components/main";

export default function CourseForum() {
  return (
    <>
      <Header CourseTitle="Course Title" />
      <Navigation />
      <CourseNavigation />
      <Main>Course Forum Page</Main>
    </>
  );
}
