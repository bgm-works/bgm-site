import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Noto_Sans_JP } from "next/font/google";
import { cn } from "@/lib/utils";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bgm-works.com"),
  title: {
    default: "BGM | Business Growth Mechanics — 仕組みで事業成長を設計する",
    template: "%s | BGM",
  },
  description:
    "がんばりを、仕組みに変えよう。業務設計と実装力で、中小企業・個人事業主の成長を継続的にサポートします。",
  keywords: ["業務改善支援", "時間削減", "Webアプリ開発", "中小企業DX", "事業成長", "GAS連携", "Business Growth Mechanics", "BGM"],
  authors: [{ name: "BGM / JIN" }],
  creator: "BGM",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://bgm-works.com",
    siteName: "BGM",
    title: "BGM | Business Growth Mechanics",
    description:
      "がんばりを、仕組みに変えよう。業務設計と実装力で、あなたの事業に成長の仕組みを。",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BGM – Business Growth Mechanics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BGM | Business Growth Mechanics",
    description: "がんばりを、仕組みに変えよう。",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={cn("font-sans", notoSansJp.variable)}>
      <body className="min-h-screen bg-background">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
