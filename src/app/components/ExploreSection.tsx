import Image from "next/image";

const ExploreSection = () => {
	return (
		<section className="bg-background text-white py-8 px-6">
			<div
				className="max-w-7xl mx-auto relative rounded-lg overflow-hidden shadow-lg"
				style={{ height: "240px" }}
			>
				{/* Background Image */}
				<div className="absolute inset-0">
					<Image
						src="/images/explore.png" // Ensure this path is correct and the image exists in the public folder
						alt="Explore Background"
						fill
						className="object-cover opacity-80"
					/>
				</div>

				{/* Button Overlay */}
				<div className="absolute inset-0 flex items-center justify-center">
					<button className="bg-secondary text-white px-6 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-secondary/70 transition">
						Explore Tasks Categories
					</button>
				</div>
			</div>
		</section>
	);
};

export default ExploreSection;
