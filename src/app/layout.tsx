// src/app/layout.tsx
import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import Link from "next/link";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "A Krishna Srikar",
  description: "A Krishna Srikar's Portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${jakartaSans.variable} font-sans text-slate-100 h-full m-0 p-0 bg-black`}
      >
        <SidebarProvider>
          <div className="flex h-screen w-screen overflow-hidden">
            <AppSidebar />
            <SidebarInset className="flex-1 bg-[#0F0F0F]">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-[#0F0F0F]">
                <div className="flex items-center gap-4">
                  <SidebarTrigger className="cursor-pointer hover:bg-[#212121]" />
                  <span className="text-white font-semibold tracking-wide hidden sm:inline-flex">
                    You
                  </span>
                </div>

                <nav className="flex items-center gap-6 text-sm font-medium text-gray-400">
                  <Link
                    href="/"
                    className="hover:text-white border-b-2 border-transparent hover:border-white pb-1"
                  >
                    Home
                  </Link>
                  <Link
                    href="/projects"
                    className="hover:text-white border-b-2 border-transparent hover:border-white pb-1"
                  >
                    Projects
                  </Link>
                  <Link
                    href="/Experience"
                    className="hover:text-white border-b-2 border-transparent hover:border-white pb-1"
                  >
                    Experience
                  </Link>
                  <Link
                    href="/reviews"
                    className="hover:text-white border-b-2 border-transparent hover:border-white pb-1"
                  >
                    Reviews
                  </Link>
                </nav>
              </div>

              <div className="flex flex-col h-full">
                <div className="flex-1 overflow-y-auto scrollbar-hide">
                  {children}
                </div>
              </div>
            </SidebarInset>{" "}
            {/*Comment */}
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
