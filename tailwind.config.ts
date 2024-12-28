import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import aspectRatio from "@tailwindcss/aspect-ratio";

/** @type {import('tailwindcss').Config} */
const config = {
	content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
	theme: {
		extend: {
			colors: {
				primary: "#979CA8", // Primary color for the project
				secondary: "#00AEED", // Secondary color for text
				background: "#0E1015", // Background color
			},
			fontFamily: {
				sans: ["Poppins", "sans-serif"], // Default font
			},
			screens: {
				sm: "640px", // Small screens (mobile)
				md: "768px", // Medium screens (tablet)
				lg: "1024px", // Large screens (desktop)
				xl: "1280px", // Extra-large screens
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 },
				},
				bounceIn: {
					"0%": {
						transform: "scale(0.9)",
						opacity: 0,
					},
					"50%": {
						transform: "scale(1.1)",
						opacity: 0.5,
					},
					"100%": {
						transform: "scale(1)",
						opacity: 1,
					},
				},
			},
			animation: {
				fadeIn: "fadeIn 1.5s ease-in-out",
				bounceIn: "bounceIn 1s ease-in-out",
			},
		},
	},
	plugins: [
		forms, // Adds better form styles
		typography, // Adds typography utilities
		aspectRatio, // Adds aspect ratio utilities
	],
};

export default config;
