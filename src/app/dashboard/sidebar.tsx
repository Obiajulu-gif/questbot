"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    FaHome,
    FaTasks,
    FaTrophy,
    FaUsers,
    FaGift,
    FaQuestionCircle,
    FaHeadset,
} from "react-icons/fa";
import { MdMenu, MdClose } from "react-icons/md";

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <>
            <button
                className="md:hidden p-3 bg-blue-600 text-white fixed top-4 left-4 z-50 rounded-full shadow-lg"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                {isSidebarOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
            </button>
            {/* Sidebar */}
            <motion.aside
                initial={{ x: "-100%" }}
                animate={{ x: isSidebarOpen ? "0%" : "-100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`fixed inset-y-0 left-0 w-64 bg-gray-900 text-white flex flex-col shadow-lg z-40 md:static md:translate-x-0 ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                } md:block`}
            >
                {/* Sidebar Header */}
                <div className="p-6 bg-gray-800 border-b border-gray-700">
                    <h1 className="text-2xl font-bold text-blue-500">Questbot</h1>
                </div>

                {/* Sidebar Links */}
                <nav className="flex flex-col gap-4 p-4">
                    <Link
                        href="/"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600"
                    >
                        <FaHome size={20} />
                        Home
                    </Link>
                    <Link
                        href="/tasks"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600"
                    >
                        <FaTasks size={20} />
                        Tasks
                    </Link>
                    <Link
                        href="/leaderboard"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600"
                    >
                        <FaTrophy size={20} />
                        Leaderboard
                    </Link>
                    <Link
                        href="/community"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600"
                    >
                        <FaUsers size={20} />
                        Community
                    </Link>
                    <Link
                        href="/referrals"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600"
                    >
                        <FaGift size={20} />
                        Referrals
                    </Link>
                    <Link
                        href="/faq"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600"
                    >
                        <FaQuestionCircle size={20} />
                        FAQ
                    </Link>
                    <Link
                        href="/support"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600"
                    >
                        <FaHeadset size={20} />
                        Live Support
                    </Link>
                </nav>

                {/* Footer */}
                <div className="mt-auto p-4 bg-gray-800">
                    <p className="text-center text-sm text-gray-500">© 2024 Questbot</p>
                </div>
            </motion.aside>
            {/* Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                ></div>
            )}
        </>
    );
};

export default Sidebar;
