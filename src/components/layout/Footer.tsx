import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[#e2e2de] bg-[#f4f4f0] mt-20">
      <div className="container-wide py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex flex-col leading-none mb-3">
              <span className="text-lg font-bold text-[#1a1a18]">BGM</span>
              <span className="text-[10px] text-[#6b6b68] tracking-widest uppercase">Business Growth Mechanics</span>
            </div>
            <p className="text-sm text-[#6b6b68] leading-relaxed">
              がんばりを、仕組みに変えよう。<br />
              AIと設計力で、あなたの事業に成長の仕組みを。
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-bold text-[#1a1a18] mb-3">サービス</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/ai-implementation" className="text-sm text-[#6b6b68] hover:text-[#3d6b4f] transition-colors">
                  AI導入支援
                </Link>
              </li>
              <li>
                <Link href="/services/atelier-boost" className="text-sm text-[#6b6b68] hover:text-[#3d6b4f] transition-colors">
                  アトリエboost
                </Link>
              </li>
              <li>
                <Link href="/services/development" className="text-sm text-[#6b6b68] hover:text-[#3d6b4f] transition-colors">
                  Webアプリ開発
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-[#1a1a18] mb-3">リンク</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/works" className="text-sm text-[#6b6b68] hover:text-[#3d6b4f] transition-colors">
                  実績・ポートフォリオ
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-[#6b6b68] hover:text-[#3d6b4f] transition-colors">
                  料金
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-[#6b6b68] hover:text-[#3d6b4f] transition-colors">
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-[#6b6b68] hover:text-[#3d6b4f] transition-colors">
                  ブログ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#e2e2de] flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs text-[#6b6b68]">
            © 2026 BGM – Business Growth Mechanics. All rights reserved.
          </p>
          <p className="text-xs text-[#6b6b68]">
            全国対応 ｜ オンラインで完結
          </p>
        </div>
      </div>
    </footer>
  );
}
