import type { Metadata } from "next";
import metadata from "@/data/metadata.json";
import localFont from "next/font/local";
import "./globals.css";

import { SidebarProvider } from "@/components/ui/sidebar"
import AppSidebar from "@/components/AppSidebar";

import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

export const pageMetadata: Metadata = metadata;

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

const fullWidthCls = "";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fullWidthCls}`}>
      <body className={`${fullWidthCls} ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SidebarProvider defaultOpen={false}>
          <AppSidebar />
          <div className="w-full flex flex-col">
            <Header />
            <Main>
              { children }
            </Main>
            <Footer />
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
