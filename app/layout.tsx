import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, Instrument_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vetfusion.ai"),
  title: {
    default: "VetFusion | AI-Assisted Veterinary Records and Care Continuity",
    template: "%s | VetFusion",
  },
  description:
    "VetFusion helps animal hospitals, rescues, shelters, and sanctuaries set up AI-assisted SOAP workflows, treatment sheets, diagnostic summaries, med follow-through, inventory visibility, and reviewable care systems.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "VetFusion | AI-Assisted Veterinary Records and Care Continuity",
    description:
      "Setup-and-support for AI-assisted veterinary records, SOAPs, and care-continuity workflows. One setup. Launch support included. Veterinarians stay in control.",
    url: "https://vetfusion.ai",
    type: "website",
    siteName: "VetFusion",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${instrumentSans.variable} ${plexMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
