import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Fa'iz Alfarisi - Building Intelligent Systems",
    template: "%s | Fa'iz Alfarisi",
  },
  description:
    "Backend Developer with a Mathematics background, building intelligent systems that combine AI, software engineering, and real-world usability.",
  keywords: [
    "Fa'iz Alfarisi",
    "Backend Developer",
    "AI Engineer",
    "Machine Learning",
    "Computer Vision",
    "RAG",
    "Software Engineering",
    "Portfolio",
  ],
  authors: [{ name: "Fa'iz Alfarisi" }],
  creator: "Fa'iz Alfarisi",
  metadataBase: new URL("https://faizalfarisi.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://faizalfarisi.vercel.app",
    siteName: "Fa'iz Alfarisi Portfolio",
    title: "Fa'iz Alfarisi - Building Intelligent Systems",
    description:
      "Backend Developer with a Mathematics background, building intelligent systems that combine AI, software engineering, and real-world usability.",
    images: [
      {
        url: "https://faizalfarisi.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fa'iz Alfarisi Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fa'iz Alfarisi - Building Intelligent Systems",
    description:
      "Backend Developer with a Mathematics background, building intelligent systems that combine AI, software engineering, and real-world usability.",
    images: ["https://faizalfarisi.vercel.app/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf9f7" },
    { media: "(prefers-color-scheme: dark)", color: "#1f1c19" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
