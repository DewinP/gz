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
    <ClerkProvider>
      <html lang="en">
        <body
          className={`font-sans ${inter.variable} mx-auto max-w-[1920px] overflow-hidden`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            <TRPCReactProvider>{children}</TRPCReactProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
