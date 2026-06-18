import Sidebar from "./Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex flex-col p-6 gap-2">
          {/* <main className="flex-1 p-6 pb-20 md:pb-6"> */}
        {children}
        </main>
    </div>
  );
}