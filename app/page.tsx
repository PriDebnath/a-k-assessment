import HeroTile from "@/feature/dashboard/component/HeroTile";
import Courses from "@/feature/dashboard/component/course/Courses";
import ActivityTile from "@/feature/dashboard/component/ActivityTile";
import DashboardLayout from "@/feature/dashboard/layout/DashboardLayout";
import AnimatedGrid from "@/feature/dashboard/component/animated/AnimatedGrid";
import AnimatedItem from "@/feature/dashboard/component/animated/AnimatedItem";

export default async function Page() {
  return (
    <DashboardLayout>

      <AnimatedItem>
        <HeroTile />
      </AnimatedItem>
      <AnimatedGrid>
        <Courses />
      </AnimatedGrid>

      <AnimatedItem >
        <ActivityTile />
      </AnimatedItem>

    </DashboardLayout>
  );
}