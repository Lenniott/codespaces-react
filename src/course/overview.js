import Navigation from "../components/navigation";
import Header from "../components/header";
import CourseNavigation from "../components/course-navigation";
import { Main } from "../components/main";

export default function CourseOverview() {
  return (
    <>
      <Header CourseTitle="Course Title" course={true} />
      <Navigation />
      <CourseNavigation />
      <Main>Course Overview Page</Main>
    </>
  );
}
