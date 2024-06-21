import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeadBoard from "@/components/headboard";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alma Blanca",
  description: "Bordaduria y floristería Alma Blanca de Huacho - Perú.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeadBoard />
        {children}
      </body>
    </html>
  );
}
