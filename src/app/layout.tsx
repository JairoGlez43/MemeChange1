import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
//import styles from "./ui/home.module.css";
import NavBar from "./ui/components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-900`}
      >
        {/*<section className="flex flex-col">
          {children}
          <div className="bg-gray-500 h-20"></div>
          
        </section>
        <div className="h-20"></div>*/}
        
  
        <main className="flex min-h-screen px-4 sm:px-8 py-14 bg-neutral-900">
          {children}
        </main>
        <NavBar></NavBar>
      </body>
    </html>
  );
}
