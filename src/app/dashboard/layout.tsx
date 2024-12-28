"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "./sidebar";

const Layout = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	return (
		<div className="flex h-screen bg-gray-900 text-white">
			<Sidebar/>

			{/* Main Content */}
			<div className="flex flex-col flex-1">
				{/* Navbar */}
				<header className="flex items-center justify-between px-6 py-4 bg-gray-800 shadow">
					<button
						onClick={() => setIsSidebarOpen(!isSidebarOpen)}
						className="md:hidden text-white"
						title="Toggle Sidebar"
						aria-label="Toggle Sidebar"
					>
						<i className="fas fa-bars"></i>
					</button>
					<h2 className="text-lg font-semibold">Welcome Back, John!</h2>
					<div className="flex items-center gap-4">
						<span className="text-yellow-400">0.0000 BNB</span>
						<button className="bg-blue-500 px-4 py-2 text-white rounded-md">
							Deposit
						</button>
						<Image
							src="/profile.jpg"
							alt="User Avatar"
							width={40}
							height={40}
							className="rounded-full border border-blue-500"
						/>
					</div>
				</header>

				{/* Content */}
				<main className="flex-1 p-6 overflow-y-auto">{children}</main>
			</div>
		</div>
	);
};

export default Layout;
