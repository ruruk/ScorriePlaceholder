import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import GoogleAnalytics from "./google-analytics";
import { Suspense } from "react";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Scorrie | A Revolutionary Trust-First Marketplace",
  description:
    "Scorrie is building a revolutionary platform where trust meets transactions. Connect safely in a world full of uncertainty. Launching June 2026.",
  keywords:
    "marketplace, secure transactions, trust, community, AI-powered, scam prevention, online safety",
  authors: [{ name: "Ruan Klopper" }],
  creator: "Ruan Klopper",
  publisher: "Scorrie",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.scorrie.com",
    title: "Scorrie | A Revolutionary Trust-First Marketplace",
    description:
      "A revolutionary platform where trust meets transactions. Connect safely in a world full of uncertainty.",
    siteName: "Scorrie",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Scorrie - A Revolutionary Trust-First Marketplace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scorrie | A Revolutionary Trust-First Marketplace",
    description:
      "A revolutionary platform where trust meets transactions. Connect safely in a world full of uncertainty.",
    images: ["/og-image.png"],
    creator: "@ruanklopper",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://www.scorrie.com"),
  generator: "placeholder made with v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#a855f7" />
      </head>
      <body className={inter.className}>
        {/* Add Google Analytics - Replace with your actual measurement ID when available */}
        <Suspense>
          <GoogleAnalytics GA_MEASUREMENT_ID="G-H1DX8HT7MC" />
        </Suspense>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
