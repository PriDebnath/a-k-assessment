"use client";

import { Course } from "@/types";
import { useCountUp } from 'react-countup';
import { delay, motion } from "framer-motion";
import * as Icons from "lucide-react"; // important to display icon dynamacly

interface Props {
    course: Course;
    delay: number;
}

export default function CourseCard({ course, delay }: Props) {
    const Icon = (Icons as any)[course.icon_name] || Icons.Book;

    const Counter = () => {
        useCountUp({ ref: course.id, end: course.progress, duration: Math.ceil( 5 + delay) });
        return <span id={course.id} />;
    };

    return (
        <motion.article
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            variants={{
                initial: { scale: 1 },
                hover: { scale: 1.02 },
                tap: { scale: 0.98 },
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="block h-full group relative rounded-2xl bg-neutral-900 p-4 overflow-hidden"
        >

            <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent pointer-events-none" />

            <motion.div
                className="absolute inset-0 rounded-2xl"
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                variants={{
                    initial: { opacity: 0 },
                    hover: { opacity: 1 },
                    tap: { opacity: 1 },
                }}
                style={{
                    background:
                        "linear-gradient(120deg, rgba(99,102,241,0.25), transparent)",
                }}
            />
            <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="flex items-start justify-between gap-2 py-2">
                    <h3 className="text-base font-medium">{course.title}</h3>
                    <Icon className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                    <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${course.progress}%` }}
                            transition={{ duration: Math.ceil(2 + delay) }}
                            className="h-full bg-indigo-500"
                        />
                    </div>
                    <p className="text-xs text-neutral-400 mt-1">
                        <Counter />%
                    </p>
                </div>
            </div>
        </motion.article >
    );
}