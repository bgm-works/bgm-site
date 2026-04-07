import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://itsumani.com"),
  title: {
    default: "いつまに | AI業務自動化・Webアプリ開発",
    template: "%s | いつまに",
  },
  description:
    "気がつけば、もう楽になっている。AI と仕組みの力で、あなたの「面倒」を静かに消します。地方の中小企業から個人クリエイターまで。",
  keywords: ["AI導入支援", "業務自動化", "Webアプリ開発", "中小企業DX", "生成AI", "GAS自動化"],
  authors: [{ name: "いつまに / JIN" }],
  creator: "いつまに",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://itsumani.com",
    siteName: "いつまに",
    title: "いつまに | AI業務自動化・Webアプリ開発",
    description:
      "気がつけば、もう楽になっている。AI と仕組みの力で、あなたの「面倒」を静かに消します。",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "いつまに",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "いつまに | AI業務自動化・Webアプリ開発",
    description: "気がつけば、もう楽になっている。",
    images: ["/og-image.png"],
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
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
