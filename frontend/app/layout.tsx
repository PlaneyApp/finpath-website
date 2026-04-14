import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.finpathapp.com'),
  title: "FinPath - Manage Your Finances Smarter with AI",
  description: "Kelola keuangan lebih pintar dengan AI. Dapatkan rekomendasi personal, lacak transaksi otomatis, dan wujudkan tujuan finansialmu dengan mudah dan cerdas.",
  keywords: ["personal finance", "AI finance", "budget management", "financial tracking", "AI insights", "money management", "FinPath"],
  authors: [{ name: "FinPath Team" }],
  icons: {
    icon: '/icon.ico',
    shortcut: '/icon.ico',
    apple: '/icon.ico',
  },
  openGraph: {
    title: "FinPath - Manage Your Finances Smarter with AI",
    description: "Kelola keuangan lebih pintar dengan AI. Dapatkan rekomendasi personal, lacak transaksi otomatis.",
    url: "https://www.finpathapp.com",
    siteName: "FinPath",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "/images/FinPath_Logo.jpg", // Gambar yang akan muncul di WhatsApp/Telegram
        width: 800,
        height: 800,
        alt: "FinPath Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FinPath - Manage Your Finances Smarter with AI",
    description: "Dapatkan kebebasan finansial melalui insight AI real-time bersama FinPath.",
    images: ["/finpath-home.png"], // Gambar banner untuk Twitter
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
