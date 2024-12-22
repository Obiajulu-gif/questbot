"use client";

import React from "react";
import Image from "next/image";

const TasksSection = () => {
	return (
		<section className="bg-background text-white py-8 px-6">
			<div className="max-w-7xl mx-auto">
				<h2 className="text-xl font-bold mb-6">All Tasks</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
					{[
						{
							image: "/images/history_hunt1.png", // Replace with actual image paths
							title: "History Hunt: Who Said That?",
							avgTime: "3m 45s",
							participants: 243,
							reward: "0.02 BNB",
						},
						{
							image: "/images/history_hunt2.png",
							title: "History Hunt: Who Said That?",
							avgTime: "3m 45s",
							participants: 243,
							reward: "0.02 BNB",
						},
						{
							image: "/images/history_hunt3.png",
							title: "History Hunt: Who Said That?",
							avgTime: "3m 45s",
							participants: 243,
							reward: "0.02 BNB",
						},
						{
							image: "/images/history_hunt4.png",
							title: "History Hunt: Who Said That?",
							avgTime: "3m 45s",
							participants: 243,
							reward: "0.02 BNB",
						},
					].map((task, index) => (
						<div
							key={index}
							className="bg-gray-900 rounded-lg overflow-hidden shadow-lg flex flex-col"
						>
							<div className="relative w-full h-40">
								<Image
									src={task.image}
									alt={task.title}
									layout="fill"
									objectFit="cover"
									className="opacity-90"
								/>
							</div>
							<div className="p-4 flex flex-col justify-between flex-1">
								<h3 className="text-lg font-bold mb-2">{task.title}</h3>
								<div className="text-sm text-gray-400 mb-4">
									<p>Avg Time: {task.avgTime}</p>
									<p>Participants: {task.participants}</p>
									<p>Reward: {task.reward}</p>
								</div>
								<button className="bg-secondary text-white px-4 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-secondary/70 transition">
									Join Challenge
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default TasksSection;
