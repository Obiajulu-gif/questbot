import Layout from "./layout";

export default function Dashboard() {
	return (
		<>
			<div className="space-y-6">
				{/* Cards Section */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div className="bg-blue-600 rounded-lg p-6">
						<h3 className="text-xl font-bold">Participate in Contests</h3>
						<p className="text-sm mt-2">And win prizes!</p>
						<button className="mt-4 px-4 py-2 bg-white text-blue-600 rounded-md">
							View Quests
						</button>
					</div>
					<div className="bg-purple-600 rounded-lg p-6">
						<h3 className="text-xl font-bold">Earn Rewards for Invite!</h3>
						<p className="text-sm mt-2">Earn rewards when they join.</p>
						<button className="mt-4 px-4 py-2 bg-white text-purple-600 rounded-md">
							Invite Now
						</button>
					</div>
				</div>

				{/* Leaderboard and Community Stats */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{/* Leaderboard */}
					<div className="bg-gray-800 p-6 rounded-lg">
						<h3 className="text-lg font-bold mb-4">Leaderboard</h3>
						<table className="w-full text-left">
							<thead>
								<tr>
									<th className="pb-2">Rank</th>
									<th className="pb-2">Player</th>
									<th className="pb-2">Points</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="py-2">1</td>
									<td>Profile #1234</td>
									<td>23,000</td>
								</tr>
								<tr>
									<td className="py-2">2</td>
									<td>Profile #1235</td>
									<td>15,000</td>
								</tr>
								<tr>
									<td className="py-2">3</td>
									<td>Profile #1236</td>
									<td>12,000</td>
								</tr>
							</tbody>
						</table>
					</div>

					{/* Community Stats */}
					<div className="bg-gray-800 p-6 rounded-lg">
						<h3 className="text-lg font-bold mb-4">Community Stats</h3>
						<ul className="space-y-2">
							<li>
								Active Users: <strong>2034</strong>
							</li>
							<li>
								Total Volume: <strong>2,003,834</strong>
							</li>
							<li>
								BNB Transactions: <strong>3184</strong>
							</li>
							<li>
								Daily Active Quests: <strong>64</strong>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
