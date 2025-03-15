import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Iron Edge | Personal Trainer",
  description:
    "Iron Edge is a strength coach for athletes who want to improve their performance. We offer personalized training programs, nutrition plans, and recovery strategies to help you reach your goals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body
        className={
          (cn("min-h-screen font-sans antialiased grainy"), inter.className)
        }
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
