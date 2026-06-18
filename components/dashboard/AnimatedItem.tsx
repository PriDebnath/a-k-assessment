
"use client";

import { motion } from "framer-motion";

export default function AnimatedItem({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 120,
            damping: 20,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}