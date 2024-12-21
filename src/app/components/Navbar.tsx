"use client";
import Link from "next/link";
import Image from "next/image";
import {
	FaWallet,
	FaSignInAlt,
	FaCoins,
	FaBars,
	FaTimes,
} from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";

interface NavbarProps {
	user: {
		profileImage: string;
		name: string;
	} | null;
	walletBalance: string | null;
}

const Navbar: React.FC<NavbarProps> = ({ user, walletBalance }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const menuVariants = {
		open: { opacity: 1, x: 0 },
		closed: { opacity: 0, x: "-100%" },
	};

	return (
		<nav className="bg-background text-primary py-4 px-6 flex items-center justify-between relative">
			{/* Logo Section */}
			<div className="flex items-center">
				<span className="text-secondary font-bold text-2xl">Quest</span>
				<span className="text-white font-bold text-2xl">bot</span>
			</div>

			{/* Desktop Navigation Links */}
			<ul className="hidden md:flex space-x-8 text-sm font-medium">
				<li>
					<Link
						href="/"
						className="text-white hover:text-secondary cursor-pointer"
					>
						Home
					</Link>
				</li>
				<li>
					<Link
						href="/tools"
						className="text-white hover:text-secondary cursor-pointer"
					>
						Tools
					</Link>
				</li>
				<li>
					<Link
						href="/leaderboard"
						className="text-white hover:text-secondary cursor-pointer"
					>
						Leaderboard
					</Link>
				</li>
				<li>
					<Link
						href="/community"
						className="text-white hover:text-secondary cursor-pointer"
					>
						Community
					</Link>
				</li>
			</ul>

			{/* Mobile Menu Button */}
			<button
				className="md:hidden text-white text-2xl"
				onClick={() => setIsMenuOpen(!isMenuOpen)}
			>
				{isMenuOpen ? <FaTimes /> : <FaBars />}
			</button>

			{/* Mobile Navigation */}
			<motion.div
				className="absolute top-0 left-0 w-3/4 h-full bg-background text-white flex flex-col space-y-6 px-6 py-8 md:hidden"
				initial="closed"
				animate={isMenuOpen ? "open" : "closed"}
				variants={menuVariants}
				transition={{ duration: 0.3 }}
			>
				<Link
					href="/"
					className="hover:text-secondary text-lg"
					onClick={() => setIsMenuOpen(false)}
				>
					Home
				</Link>
				<Link
					href="/tools"
					className="hover:text-secondary text-lg"
					onClick={() => setIsMenuOpen(false)}
				>
					Tools
				</Link>
				<Link
					href="/leaderboard"
					className="hover:text-secondary text-lg"
					onClick={() => setIsMenuOpen(false)}
				>
					Leaderboard
				</Link>
				<Link
					href="/community"
					className="hover:text-secondary text-lg"
					onClick={() => setIsMenuOpen(false)}
				>
					Community
				</Link>
			</motion.div>

			{/* Conditional Rendering Based on Login State */}
			<div className="hidden md:flex items-center space-x-6">
				{isLoggedIn ? (
					<>
						{/* BNB Balance */}
						<div className="flex items-center bg-gray-800 px-4 py-2 rounded-full space-x-2">
							<FaCoins className="text-yellow-400 w-5 h-5" />
							<span className="text-white text-sm">
								{walletBalance || "0.0000"} BNB
							</span>
						</div>

						{/* Wallet Button */}
						<button className="bg-gray-700 text-white text-sm px-4 py-2 rounded-full hover:bg-secondary transition flex items-center space-x-2">
							<FaWallet className="w-5 h-5" />
							<span>Wallet</span>
						</button>

						{/* Profile Section */}
						<div className="flex items-center space-x-2">
							<span className="text-white text-sm">{user?.name}</span>
							<Image
								src={user?.profileImage || "/default-profile.png"}
								alt="Profile"
								width={32}
								height={32}
								className="w-8 h-8 rounded-full border border-gray-700"
							/>
						</div>
					</>
				) : (
					<button
						onClick={() => setIsLoggedIn(true)}
						className="bg-gray-700 text-white text-sm px-4 py-2 rounded-full hover:bg-secondary transition flex items-center space-x-2"
					>
						<FaSignInAlt className="w-4 h-4" />
						<span>Sign In</span>
					</button>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
