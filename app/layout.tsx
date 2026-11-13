import type { Metadata } from "next";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "K4Family — Complete Design System & Component Library",
  description: "Developer Brief K4Family V04: Complete design system and responsive component library for the K4Family ecosystem.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="h-full antialiased scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FBF8F0] text-[#12303C] font-sans selection:bg-[#EBCC3D]/30 selection:text-[#12303C]">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
