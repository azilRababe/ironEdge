import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "900"],
  style: ["normal", "italic"],
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
        className={cn(
          "min-h-screen font-sans antialiased grainy",
          roboto.className
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
