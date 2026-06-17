"use client";

import { Home, Book, BarChart } from "lucide-react";
import { motion } from "framer-motion";

export default function Sidebar() {
  return (
    <nav className="h-screen w-16 bg-neutral-900 border-r border-neutral-800 flex flex-col items-center py-4 gap-6">
      <NavItem icon={<Home />} />
      <NavItem icon={<Book />} />
      <NavItem icon={<BarChart />} />
    </nav>
  );
}

function NavItem({ icon }: { icon: React.ReactNode }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      className="p-3 rounded-xl text-neutral-400 hover:text-white transition"
    >
      {icon}
    </motion.button>
  );
}