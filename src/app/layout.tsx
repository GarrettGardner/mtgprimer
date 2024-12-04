import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.scss";

export const metadata: Metadata = {
  authors: [
    {
      name: "Garrett Gardner",
      url: "https://github.com/GarrettGardner",
    },
  ],
  creator: "Garrett Gardner",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  applicationName: "MTG Primer",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mtgprimer.com",
    siteName: "MTG Primer",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [],
    shortcut: ["/favicon.ico"],
  },
  metadataBase: new URL("https://mtgprimer.com"),
};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      <GoogleAnalytics gaId="UA-61176008-6" />
    </html>
  );
}
