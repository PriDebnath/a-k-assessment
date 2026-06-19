import AnimatedGrid from "../animated/AnimatedGrid";
import AnimatedItem from "../animated/AnimatedItem";

export default function CourseCardSkeleton() {
  const commonClasses = " bg-neutral-800 rounded animate-pulse "
  return (
    <div className=" grid grid-cols-2 md:grid-cols-4 gap-4">
      <AnimatedItem key={'course-1'} delay={(0)}>
        <div className={commonClasses + "rounded-2xl bg-neutral-900 p-4 space-y-3"}>
          <div className="flex justify-between">
            <div className={commonClasses + "h-8 w-1/2"} />
            <div className={commonClasses + "h-8 w-8 rounded-xl"}></div>
          </div>
          <div className={commonClasses + "h-6 w-3/4 "} />
          <div className={commonClasses + "h-6 w-1/3 "} />
        </div>
      </AnimatedItem>
    </div>
  );
}