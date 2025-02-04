import type { Metadata } from "next";
import "./globals.css";
import { titleFont } from "../app/fonts/fonts"

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${titleFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
