import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/home";
import Newsfeed from "./newsfeed";
import Calendar from "./calendar";
import CourseNewsfeed from "./course/newsfeed";
import CourseCalendar from "./course/calendar";
import CourseOverview from "./course/overview";
import CourseMaterials from "./course/materials";
import CourseAssessment from "./course/assessment";
import CourseReadings from "./course/readings";
import CourseLiveClasses from "./course/live-classes";
import CourseForum from "./course/forum";
import CourseSettings from "./course/settings";
import KeyInfo from "./key-info";
import Documents from "./documents";
import Team from "./team";
import Grades from "./grades";
import Settings from "./settings";
import Courses from "./course";
import CourseMaterialsSession from "./course/materials-session";
import CourseMaterialsSessionScreen from "./course/materials-sessions-screen";
import CourseMaterialsSessionScreen2 from "./course/materials-sessions-screen-2";
import CourseMaterialsSessionScreen3 from "./course/materials-sessions-screen-3";
import Buttons from "./playground/buttons";
import UserManager from "./playground/userManagement";
import ClassList from "./playground/deactiveStudent";

export default function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Newsfeed" element={<Newsfeed />} />
          <Route path="/Calendar" element={<Calendar />} />
          <Route path="/Course" element={<Courses />} />
          <Route path="/Course/Newsfeed" element={<CourseNewsfeed />} />
          <Route path="/Course/Calendar" element={<CourseCalendar />} />
          <Route path="/Course/Overview" element={<CourseOverview />} />
          <Route path="/Course/Materials" element={<CourseMaterials />} />
          <Route
            path="/Course/Materials/Session"
            element={<CourseMaterialsSession />}
          />
          <Route
            path="/Course/Materials/Session/Screen"
            element={<CourseMaterialsSessionScreen />}
          />
          <Route
            path="/Course/Materials/Session/Screen2"
            element={<CourseMaterialsSessionScreen2 />}
          />
          <Route
            path="/Course/Materials/Session/Screen3"
            element={<CourseMaterialsSessionScreen3 />}
          />
          <Route path="/Course/Assessment" element={<CourseAssessment />} />
          <Route path="/Course/Readings" element={<CourseReadings />} />
          <Route path="/Course/ClassList" element={<ClassList />} />
          <Route path="/Course/Forum" element={<CourseForum />} />
          <Route path="/Course/Settings" element={<CourseSettings />} />
          <Route path="/KeyInfo" element={<KeyInfo />} />
          <Route path="/Documents" element={<Documents />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Grades" element={<Grades />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Playground/Buttons" element={<Buttons />} />
          <Route path="/Playground/UserManager" element={<UserManager />} />
          <Route path="*" element={<div>ERROR</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
