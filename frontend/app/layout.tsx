import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FinPath - Your AI-Powered Personal Finance Companion",
  description: "Kelola keuangan lebih pintar dengan AI. Dapatkan rekomendasi keuangan personal, lacak transaksi, dan capai tujuan finansialmu dengan FinPath.",
  keywords: ["personal finance", "AI finance", "budget management", "financial tracking", "AI insights", "money management"],
  authors: [{ name: "FinPath" }],
  icons: {
    icon: '/icon.ico',
    shortcut: '/icon.ico',
    apple: '/icon.ico',
  },
  openGraph: {
    title: "FinPath - Your AI-Powered Personal Finance Companion",
    description: "Kelola keuangan lebih pintar dengan AI. Dapatkan rekomendasi keuangan personal dari AI.",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "FinPath - Your AI-Powered Personal Finance Companion",
    description: "Kelola keuangan lebih pintar dengan AI. Dapatkan rekomendasi keuangan personal dari AI.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
