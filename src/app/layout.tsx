import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Noto_Sans_JP, Inter, JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";

// 日本語本文・見出し（ブランドガイド §4）
const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto",
  display: "swap",
});

// ラテン・数字（ロゴ/統計/見出しのラテン）
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

// コード・桁揃え数値（表/KPI）= 等幅 + tabular-nums
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono-jb",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bgm-works.com"),
  title: {
    default: "BGM | Business Growth Mechanics | 仕組みで事業成長を設計する",
    template: "%s | BGM",
  },
  description:
    "がんばりを、仕組みに変えよう。BGM Worksは業務設計とAI実装で中小企業・個人事業の成長を支える開発会社です。ホームページ制作・受託開発・業務改善・集客支援まで一気通貫で伴走します。30分の無料相談は全国オンライン対応、事業の課題を一緒に整理します。",
  keywords: ["業務改善支援", "時間削減", "Webアプリ開発", "中小企業DX", "事業成長", "GAS連携", "Business Growth Mechanics", "BGM"],
  authors: [{ name: "BGM Works株式会社" }],
  creator: "BGM Works株式会社",
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
    <html
      lang="ja"
      className={cn("font-sans", notoSansJp.variable, inter.variable, jetBrainsMono.variable)}
    >
      <body className="min-h-screen bg-background">
        <Header />
        <main>{children}</main>
        <Footer />
        {/* GA4（bgm-works.com プロパティ G-PFX68Z3PJQ・サブドメイン一体計測） */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`}
        </Script>
      </body>
    </html>
  );
}
