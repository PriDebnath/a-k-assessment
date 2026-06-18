import ActivityTile from "@/components/dashboard/ActivityTile";
import AnimatedGrid from "@/components/dashboard/AnimatedGrid";
import AnimatedItem from "@/components/dashboard/AnimatedItem";
import CourseCard from "@/components/dashboard/CourseCard";
import HeroTile from "@/components/dashboard/HeroTile";
import DashboardLayout from "@/components/layout/DashboardLayout";

import { supabase } from "@/lib/supabase";
// import { Course } from "@/types/course";

async function getCourses(): Promise<any[]> {
  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching courses:", error);
    return [];
  }

  return data as any[];
}
export default async function Page() {
  const courses = await getCourses();
  console.log({ courses });

  return (
    <DashboardLayout>
      {/* <section className="grid grid-cols-4 gap-4">
        <div className="col-span-2 h-40 bg-neutral-900 rounded-2xl" />
        <div className="h-40 bg-neutral-900 rounded-2xl" />
        <div className="h-40 bg-neutral-900 rounded-2xl" />
        <div className="col-span-4 h-40 bg-neutral-900 rounded-2xl" />
      </section> */}

        <AnimatedItem>
          <HeroTile />
        </AnimatedItem>
      <AnimatedGrid>
        {courses.map((course) => (
          <AnimatedItem key={course.id}>
            <CourseCard course={course} />
          </AnimatedItem>
        ))}
      </AnimatedGrid>

      {/* <AnimatedGrid> */}
        <AnimatedItem >
          <ActivityTile />

        </AnimatedItem>
      {/* </AnimatedGrid> */}

    </DashboardLayout>
  );
}