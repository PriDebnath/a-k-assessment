import Sidebar from "../Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />

      <main  className="h-screen w-full overflow-auto flex flex-col p-8 gap-8">
          {/* <main className="flex-1 p-6 pb-20 md:pb-6"> */}
        {children}
        </main>
    </div>
  );
}