import DashboardLayout from "@/components/layout/DashboardLayout";

export default function Page() {
  return (
    <DashboardLayout>
      <section className="grid grid-cols-4 gap-4">
        <div className="col-span-2 h-40 bg-neutral-900 rounded-2xl" />
        <div className="h-40 bg-neutral-900 rounded-2xl" />
        <div className="h-40 bg-neutral-900 rounded-2xl" />
        <div className="col-span-4 h-40 bg-neutral-900 rounded-2xl" />
      </section>
    </DashboardLayout>
  );
}