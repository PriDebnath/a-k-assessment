"use client";

import { motion } from "framer-motion";
import { useState, Fragment } from "react";
import { NAVIGATION_ITEMS } from "@/constants";
import { ArrowBigLeft, ChevronLeft, ChevronRight } from "lucide-react";

export default function Sidebar() {
    const [active, setActive] = useState("home");
    const [expanded, setExpanded] = useState(true);
    const handleNavClick = (id: string) => {
        setActive(id);
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <Fragment>
            {/* for DESKTOP  */}
            <nav className={
                "hidden lg:flex h-screen w-16  bg-neutral-900 border-r border-neutral-800 flex-col items-center py-4 gap-4"
                    + (expanded ? " w-48 " : " w-16 ")
            }
            >
                <button
                    key={'toggle'}
                    onClick={() => setExpanded(!expanded)}
                    className="relative bg-neutral-800 rounded-lg self-end -right-2 flex items-center gap-3 "
                > 
                    {
                        expanded ? (
                            <ChevronLeft className="relative z-10 w-5 h-5 text-white shrink-0" />
                        ) : (
                            <ChevronRight className="relative z-10 w-5 h-5 text-white shrink-0" />
                        )
                    }

                </button> 
                {NAVIGATION_ITEMS.map((item) => {
                    const Icon = item.icon;
                    const isActive = active === item.id;

                    return (
                        <button
                            key={item.id}
                            onClick={() => handleNavClick(item.id)}
                            className="relative flex items-center gap-3 px-4 py-2 text-left"
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="active-pill-desktop"
                                    className="absolute inset-0 bg-neutral-800 rounded-xl"
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 25,
                                    }}
                                />
                            )}

                            <Icon className="relative z-10 w-5 h-5 text-white shrink-0" />
                            {
                                expanded && (
                                    <span className="relative z-10 text-sm text-white whitespace-nowrap">
                                        {item.id}
                                    </span>
                                )
                            }

                        </button>
                    );
                })}
            </nav>

            {/* for TABLET  */}
            <nav className="hidden md:flex lg:hidden h-screen w-16 bg-neutral-900 border-r border-neutral-800 flex-col items-center py-4 gap-4">
                {NAVIGATION_ITEMS.map((item) => {
                    const Icon = item.icon;
                    const isActive = active === item.id;

                    return (
                        <button
                            key={item.id}
                            onClick={() => handleNavClick(item.id)}
                            className="relative p-3"
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="active-pill-tablet"
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

            {/* for MOBILE  */}
            <nav className="fixed md:hidden bottom-0 left-0 right-0 bg-neutral-900 border-t border-neutral-800 flex justify-around py-3 z-50">
                {NAVIGATION_ITEMS.map((item) => {
                    const Icon = item.icon;
                    const isActive = active === item.id;

                    return (
                        <button
                            key={item.id}
                            onClick={() => handleNavClick(item.id)}
                            className="relative p-2"
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="active-pill-mobile"
                                    className="absolute inset-0 bg-neutral-800 rounded-lg"
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
        </Fragment>
    );
}