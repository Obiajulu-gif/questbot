"use client";
import Image from "next/image";

const Navbar = () => {
	return (
		<header className="bg-background text-white w-full flex justify-between items-center px-6 py-4 shadow-md z-50 md:w-4/5 md:ml-64">
			<h1 className="text-lg font-bold">
				Welcome Back, <span className="text-secondary">John!</span>
			</h1>
			<div className="flex items-center space-x-6">
				<div className="bg-gray-800 px-4 py-2 rounded-full flex items-center space-x-2">
					<span>0.0000 BNB</span>
					<button className="bg-secondary text-white px-4 py-2 rounded-full text-sm">
						Deposit
					</button>
				</div>
				<Image
					src="/profile.png"
					alt="User Profile"
					width={40}
					height={40}
					className="rounded-full"
				/>
			</div>
		</header>
	);
};

export default Navbar;
