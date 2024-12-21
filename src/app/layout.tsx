import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
	title: "Questbot",
	description:
		"Develop a Telegram bot that enables users to complete gamified micro-tasks in exchange for BNB rewards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
