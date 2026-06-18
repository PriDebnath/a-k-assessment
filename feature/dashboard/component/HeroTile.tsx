import { PAGE_ITEMS } from "@/constants";

export default function HeroTile() {
  const today = new Date()
  const projectCreationDate = new Date("2026-06-17")
  const diffTime = today.getTime() - projectCreationDate.getTime();
  const streak = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return (
    <section
      id={PAGE_ITEMS.home}
      className="col-span-2 rounded-2xl bg-neutral-900 p-6 relative overflow-hidden">
      <h1 className="text-3xl font-semibold">
        Welcome back Andaz Kumar👋
      </h1>
      <p className="text-lg text-neutral-400 mt-2">
        You're on a <span className="font-bold">{streak}</span>-day learning streak
      </p>
      <div className="absolute inset-0 bg-linear-to-br from-indigo-500/10 to-purple-500/5 pointer-events-none" />
    </section>
  );
}