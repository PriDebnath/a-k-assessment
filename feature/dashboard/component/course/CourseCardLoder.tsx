export default function CourseCardSkeleton() {
  return (
    <div className="p-4 rounded-2xl bg-neutral-900 space-y-3">
      <div className="h-6 w-1/2 bg-neutral-800 rounded animate-pulse" />
      <div className="h-4 w-3/4 bg-neutral-800 rounded animate-pulse" />
      <div className="h-4 w-1/3 bg-neutral-800 rounded animate-pulse" />
    </div>
  );
}