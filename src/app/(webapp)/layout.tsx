import type { Metadata } from "next";
import metadata from "@/data/metadata.json";
// import localFont from "next/font/local";
import "./globals.css";

import { Roboto } from 'next/font/google'

// import { SidebarProvider } from "@/components/ui/sidebar"
// import AppSidebar from "@/components/AppSidebar";

import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

export const pageMetadata: Metadata = metadata;

/*
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
*/

const roboto = Roboto({
  subsets: ['latin-ext'],
  weight: ["300", "500", "700"],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} font-light w-full flex flex-col min-h-screen bg-uk-pattern bg-repeat antialiased`}>
        <Header />
        <Main cls="flex-1 grid">
          { children }
        </Main>
        <Footer />
      </body>
    </html>
  );
}
