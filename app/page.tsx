import { Suspense } from "react";
import HeroTile from "@/feature/dashboard/component/HeroTile";
import Courses from "@/feature/dashboard/component/course/Courses";
import ActivityTile from "@/feature/dashboard/component/ActivityTile";
import DashboardLayout from "@/feature/dashboard/layout/DashboardLayout";
import AnimatedGrid from "@/feature/dashboard/component/animated/AnimatedGrid";
import AnimatedItem from "@/feature/dashboard/component/animated/AnimatedItem";
import CoursesWrapper from "@/feature/dashboard/component/course/CoursesWrapper";
import CourseCardSkeleton from "@/feature/dashboard/component/course/CourseCardLoder";

export default async function Page() {
  return (
    <DashboardLayout>

      <AnimatedItem>
        <HeroTile />
      </AnimatedItem>
      
      <Suspense
        fallback={
          <CourseCardSkeleton />
        }>
        <CoursesWrapper />   {/*  Server component */}
      </Suspense>

      <AnimatedItem >
        <ActivityTile />
      </AnimatedItem>

    </DashboardLayout>
  );
}