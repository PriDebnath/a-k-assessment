
"use client";

import { Course } from "@/types";
import CourseCard from "./CourseCard";
import AnimatedItem from "../animated/AnimatedItem";

interface Props{
    courses : Course[]
}
export default function Courses({ courses }: Props) {
  return (
    <>
      {courses?.map((course, i) => (
        <AnimatedItem key={course.id} delay={i / 3}>
          <CourseCard course={course}   delay={i / 3} />
        </AnimatedItem>
      ))}
    </>
  );
}



// "use client";
// import CourseCard from "./CourseCard";
// import { Fragment } from "react/jsx-runtime";
// import CourseCardSkeleton from "./CourseCardLoder";
// import AnimatedItem from "../animated/AnimatedItem";
// import { RotateCcw, Undo, Undo2 } from "lucide-react";
// import { useCourses } from "../../hook/use-get-courses";

// export default function Courses() {
//     const { data: courses, loading, error, refetch } = useCourses();

//     if (loading) {
//         return <CourseCardSkeleton />
//     }

//     if (error) {
//         return (
//             <div className="text-red-500 flex gap-2 items-center justify-between whitespace-nowrap">
//                 Failed to load courses.
//                 <button onClick={refetch}
//                     className=" bg-neutral-900 border px-2 py-2 rounded-xl text-white text-xs">
//                     <div className="flex justify-between gap-2">
//                         <RotateCcw className="w-4 h-4" />  Retry
//                     </div>
//                 </button>
//             </div>
//         );
//     }

//     return (
//         <Fragment>
//             {courses && courses.map((course, i) => (
//                 <AnimatedItem key={course.id} delay={(i / 2)}>
//                     <CourseCard course={course} delay={(i / 2)} />
//                 </AnimatedItem>
//             ))}
//         </Fragment>
//     )
// }