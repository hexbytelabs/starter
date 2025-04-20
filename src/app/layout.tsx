import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./styles.css"
import "@hexbytelabs/ui-library/dist/style.css";
import React from "react";

export const metadata: Metadata = {
  title: "HexByte Starter",
  description: "",
};

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-screen">
      <body className={`${sans.variable} ${mono.variable} h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}
