import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FinPath - Links",
  description: "Temukan FinPath di semua platform. Download app, ikuti media sosial kami, dan mulai perjalanan finansialmu.",
  openGraph: {
    title: "FinPath - Links",
    description: "Temukan FinPath di semua platform.",
    url: "https://www.finpathapp.com/bio",
    siteName: "FinPath",
    images: [{ url: "/images/FinPath_Logo.jpg", width: 800, height: 800, alt: "FinPath Logo" }],
    type: "website",
  },
};

export default function BioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
