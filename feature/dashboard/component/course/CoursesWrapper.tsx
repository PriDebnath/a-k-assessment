import Courses from "./Courses";
import { getCourses } from "../../helper/index";
import AnimatedGrid from "../animated/AnimatedGrid";

export default async function CoursesWrapper() {
  const courses = await getCourses();

  if (!courses) return <div>No courses found</div>;

  return (
    <AnimatedGrid>
      <Courses courses={courses} />
    </AnimatedGrid>)
    ;
}