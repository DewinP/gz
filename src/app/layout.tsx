import "~/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "~/components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Get Z Tickets ",
  description: "Get Z Tickets is a ticketing platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${inter.variable} mx-auto max-w-[1920px] overflow-hidden`}
      >
        <ClerkProvider>
          <ThemeProvider attribute="class">
            <TRPCReactProvider>{children}</TRPCReactProvider>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
