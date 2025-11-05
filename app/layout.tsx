import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import ChatBot from "@/components/ChatBot";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Madhav Gupta | Full-Stack Developer",
  description: "Full-Stack Software Developer specializing in MERN Stack, React.js, Node.js, and TypeScript. 1.5+ years of experience building scalable web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${jetbrainsMono.variable} font-mono antialiased bg-[#0a0a0a] text-white`}
      >
        <Navigation />
        {children}
        <ChatBot />
      </body>
    </html>
  );
}
