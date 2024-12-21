"use client";

import React from 'react';
import Image from 'next/image';
import { FaCoins, FaMedal, FaGem, FaCrown } from 'react-icons/fa';

const LeaderboardPage = () => {
  return (
    <section className="bg-background text-white py-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Leaderboard Section */}
        <div className="col-span-2 bg-gray-900 rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4">Leaderboard</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b border-gray-700">
                <th className="py-2">Rank</th>
                <th className="py-2">Player</th>
                <th className="py-2">Points</th>
              </tr>
            </thead>
            <tbody>
              {[
                { rank: 1, name: "Profile #1234", points: "23,090", icon: <FaCrown className="text-yellow-400 w-5 h-5" /> },
                { rank: 2, name: "Profile #1234", points: "21,230", icon: <FaMedal className="text-gray-400 w-5 h-5" /> },
                { rank: 3, name: "Profile #1234", points: "19,131", icon: <FaMedal className="text-orange-400 w-5 h-5" /> },
                { rank: 4, name: "Profile #1234", points: "15,101" },
                { rank: 5, name: "Profile #1234", points: "12,023" },
              ].map((player, index) => (
                <tr key={index} className="border-b border-gray-800">
                  <td className="py-2 flex items-center space-x-2">
                    {player.icon || <span className="w-5 h-5 text-gray-500">{player.rank}</span>}
                  </td>
                  <td className="py-2 flex items-center space-x-2">
                    <Image
                      src="/profile-picture.jpg"
                      alt="Profile"
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-full border border-gray-700"
                    />
                    <span>{player.name}</span>
                  </td>
                  <td className="py-2">{player.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Community Stats Section */}
        <div className="bg-gray-900 rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4">Community</h2>
          <ul className="space-y-4">
            <li className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <FaGem className="text-pink-400 w-5 h-5" />
                <span>Active Users</span>
              </div>
              <span>2,024</span>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <FaGem className="text-purple-400 w-5 h-5" />
                <span>Total Volume</span>
              </div>
              <span>2,003,324</span>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <FaCoins className="text-yellow-400 w-5 h-5" />
                <span>BNB Transactions</span>
              </div>
              <span>3,134</span>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <FaMedal className="text-blue-400 w-5 h-5" />
                <span>Badges/Achievements Earned</span>
              </div>
              <span>64</span>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <FaCoins className="text-orange-400 w-5 h-5" />
                <span>Total Transactions</span>
              </div>
              <span>1,083,707</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LeaderboardPage;
