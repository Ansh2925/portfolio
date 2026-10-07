import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, JetBrains_Mono, Michroma, Public_Sans } from "next/font/google";
import GridBackground from "@/components/GridBackground";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const logo = Michroma({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-logo",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ansh — AI Engineer & Full-Stack Developer",
  description:
    "I build intelligent systems, scalable web applications, and products that turn ambitious ideas into reality.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${sans.variable} ${logo.variable} ${mono.variable} ${jetbrainsMono.variable}`}
    >
      <body suppressHydrationWarning className="bg-void text-ink antialiased relative selection:bg-gold/30">
        <GridBackground />
        {children}
      </body>
    </html>
  );
}