"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { NAVIGATION_ITEMS } from "@/constants";

export default function Sidebar() {
  const [active, setActive] = useState("home");

  return (
    <nav className="h-screen w-16 bg-neutral-900 border-r border-neutral-800 flex flex-col items-center py-4 gap-6">
      {NAVIGATION_ITEMS.map((item) => {
        const Icon = item.icon;

        return (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className="relative p-3"
          >
            {active === item.id && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-neutral-800 rounded-xl"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                }}
              />
            )}

            <Icon className="relative z-10 w-5 h-5 text-white" />
          </button>
        );
      })}
    </nav>
  );
}