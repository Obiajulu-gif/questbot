import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import LeaderboardPage from "./components/Leaderboard";
import TasksSection from "./components/TasksSection";
import ExploreSection from "./components/ExploreSection";
import Footer from "./components/Footer"
export default function Home() {
	// user information
	const user = {
		name: "Okoye Emmanuel",
		profileImage: "/images/avatar.png",
	};
	// user wallet balance
	const walletBalance = "0.0000";

	return (
		<>
			<Navbar user={user} walletBalance={walletBalance} />
			<HeroSection />
			<LeaderboardPage />
			<TasksSection />
			<ExploreSection />
			<Footer/>
		</>
	);
}
