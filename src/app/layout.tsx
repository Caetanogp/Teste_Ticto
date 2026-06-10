import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name} | Ticto`,
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} | Ticto`,
    description: siteConfig.description,
    type: "website",
    locale: "pt_BR",
    siteName: "Outlier Experience",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#0a0a0a] font-sans text-white">
        {children}
      </body>
    </html>
  );
}
