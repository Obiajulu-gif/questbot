"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<section className="bg-background text-white py-8 px-6">
			<div
				className={`relative rounded-lg overflow-hidden bg-gray-900 shadow-lg mx-auto ${isMobile ? "mobile-hero" : "desktop-hero"}`}
			>
				{/* Background Image */}
				<div className="absolute inset-0">
					<Image
						src="/images/heroimage.png" // Replace with your actual image path
						alt="Hero Background"
						layout="fill"
						objectFit="cover"
						className="opacity-80"
					/>
				</div>

				{/* Gradient Overlay */}
				<div className="absolute inset-0 bg-gradient-to-r from-secondary via-transparent to-transparent"></div>

				{/* Hero Content */}
				<motion.div
					className="relative z-10 p-6 md:p-12 flex flex-col justify-end h-full"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					{/* Text Section */}
					<div className="mb-6">
						<div className="flex items-center space-x-4 mb-4">
							<div className="w-12 h-12 bg-white rounded-md"></div>{" "}
							{/* Placeholder */}
							<h2 className="text-2xl md:text-4xl font-bold">
								<Typewriter
									options={{
										strings: ["Battle of the Brains: Leaderboard Showdown"],
										autoStart: true,
										loop: true,
										delay: 75,
									}}
								/>
							</h2>
						</div>

						{/* Countdown and Prize */}
						<div className="flex items-center space-x-6">
							{/* Countdown */}
							<div className="flex space-x-4 text-center">
								<div>
									<span className="block text-lg md:text-xl font-bold">0</span>
									<span className="text-sm md:text-base">days</span>
								</div>
								<div>
									<span className="block text-lg md:text-xl font-bold">4</span>
									<span className="text-sm md:text-base">hrs</span>
								</div>
								<div>
									<span className="block text-lg md:text-xl font-bold">10</span>
									<span className="text-sm md:text-base">mins</span>
								</div>
								<div>
									<span className="block text-lg md:text-xl font-bold">23</span>
									<span className="text-sm md:text-base">secs</span>
								</div>
							</div>

							{/* Prize */}
							<div className="bg-black bg-opacity-60 px-4 py-2 rounded-md text-sm md:text-base">
								Prize: 0.00432 BNB
							</div>
						</div>
					</div>

					{/* Action Buttons */}
					<div className="flex items-center space-x-4">
						{/* Notification Button */}
						<button className="bg-black bg-opacity-60 p-3 rounded-md flex items-center justify-center hover:bg-opacity-80 transition" title="Notifications">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 text-white"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-5-5.917V4a3 3 0 10-6 0v1.083A6.002 6.002 0 002 11v3.159c0 .538-.214 1.055-.595 1.436L0 17h5m10 0a3 3 0 01-6 0m6 0H9"
								/>
							</svg>
						</button>

						{/* Join Challenge Button */}
						<button className="bg-secondary text-white px-6 py-3 rounded-md text-sm md:text-base font-medium hover:bg-opacity-90 transition">
							Join Challenge
						</button>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default HeroSection;
