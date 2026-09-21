import type { Metadata } from "next";
import { Space_Grotesk, Source_Serif_4, Caveat } from "next/font/google";
import "./globals.css";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-grotesk",
  display: "swap",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alejandro Morales · Marketing",
  description:
    "Marketing that has to work in the real world. Full-time trade and brand marketing at L'Oréal, a validated product from a research project, and an independent media brand built from zero.",
  metadataBase: new URL("https://alejandro-portfolio-beta.vercel.app"),
  openGraph: {
    title: "Alejandro Morales · Marketing",
    description: "Marketing that has to work in the real world.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${grotesk.variable} ${serif.variable} ${caveat.variable}`}>
      <body className="font-grotesk text-ink bg-cream antialiased">{children}</body>
    </html>
  );
}
