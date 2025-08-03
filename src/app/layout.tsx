import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MuiThemeProvider from "../components/MuiThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bustop TV | Zimbabwe's Leading Satire & Entertainment Platform",
  description: "Bustop TV is Zimbabwe's top online satire and entertainment platform. Watch, laugh, and engage with our award-winning content, news, and social impact programs.",
  metadataBase: new URL("https://bustop.org/"),
  alternates: {
    canonical: "https://bustop.org/",
  },
  openGraph: {
    title: "Bustop TV | Zimbabwe's Leading Satire & Entertainment Platform",
    description: "Bustop TV is Zimbabwe's top online satire and entertainment platform. Watch, laugh, and engage with our award-winning content, news, and social impact programs.",
    url: "https://bustop.org/",
    siteName: "Bustop TV",
    images: [
      {
        url: "https://bustop.org/images/logos/Bustop%20TV%20Logo%20311px.png",
        width: 311,
        height: 311,
        alt: "Bustop TV Logo",
      },
    ],
    locale: "en_ZW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@bustoptv",
    title: "Bustop TV | Zimbabwe's Leading Satire & Entertainment Platform",
    description: "Bustop TV is Zimbabwe's top online satire and entertainment platform. Watch, laugh, and engage with our award-winning content, news, and social impact programs.",
    images: ["https://bustop.org/images/logos/Bustop%20TV%20Logo%20311px.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MuiThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </MuiThemeProvider>
      </body>
    </html>
  );
}
