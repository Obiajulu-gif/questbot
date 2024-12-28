"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="bg-background text-white py-12 px-6">
			<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
				{/* Logo Section */}
				<div className="flex items-center">
					<span className="text-secondary font-bold text-2xl">Quest</span>
					<span className="text-white font-bold text-2xl">bot</span>
				</div>

				{/* Company Links */}
				<div>
					<h3 className="text-lg font-bold mb-4">Company</h3>
					<ul className="space-y-2">
						<li>
							<Link href="#">About Us</Link>
						</li>
						<li>
							<Link href="#">Partnerships</Link>
						</li>
						<li>
							<Link href="#">Careers</Link>
						</li>
						<li>
							<Link href="#">Branding</Link>
						</li>
						<li>
							<Link href="#">FAQ</Link>
						</li>
					</ul>
				</div>

				{/* Social Links */}
				<div>
					<h3 className="text-lg font-bold mb-4">Socials</h3>
					<ul className="space-y-2">
						<li>
							<Link href="#">Facebook</Link>
						</li>
						<li>
							<Link href="#">Twitter</Link>
						</li>
						<li>
							<Link href="#">Instagram</Link>
						</li>
						<li>
							<Link href="#">TikTok</Link>
						</li>
						<li>
							<Link href="#">Our Discord</Link>
						</li>
					</ul>
				</div>

				{/* Supported Games */}
				<div>
					<h3 className="text-lg font-bold mb-4">Supported Games</h3>
					<ul className="space-y-2">
						<li>
							<Link href="#">League of Legends</Link>
						</li>
						<li>
							<Link href="#">Counter-Strike 2</Link>
						</li>
						<li>
							<Link href="#">VALORANT</Link>
						</li>
						<li>
							<Link href="#">Teamfight Tactics</Link>
						</li>
						<li>
							<Link href="#">Apex Legends</Link>
						</li>
					</ul>
				</div>
			</div>

			<div className="mt-8 flex justify-between text-sm text-gray-400">
				<span>English</span>
				<span>Terms of Service</span>
			</div>
		</footer>
	);
};

export default Footer;
