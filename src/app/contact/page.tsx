import type { Metadata } from "next";
import { Mail, Clock, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "いつまに へのお問い合わせ・無料ヒアリング予約はこちら。30分のオンライン相談で、業務の「面倒」を一緒に整理します。",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-16 bg-[#f4f4f0]">
        <div className="container-narrow text-center">
          <h1 className="section-title mb-4">お問い合わせ</h1>
          <p className="text-[#6b6b68] leading-relaxed">
            「これ、自動化できる？」「どのくらいかかる？」——<br />
            どんな小さな疑問でも、気軽にどうぞ。
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-lg font-bold text-[#1a1a18] mb-4">ご連絡の前に</h2>
              <div className="space-y-5">
                {[
                  {
                    icon: Clock,
                    title: "返信は24時間以内",
                    desc: "土日祝日を除く平日にご連絡します。急ぎの場合はその旨をお書きください。",
                  },
                  {
                    icon: MessageSquare,
                    title: "ヒアリングは30分",
                    desc: "Zoom or Google Meetで実施。画面共有で業務を見せていただくと、より具体的なご提案ができます。",
                  },
                  {
                    icon: Mail,
                    title: "秘密保持は万全",
                    desc: "ヒアリングで伺った内容は外部に共有しません。必要であればNDA締結も対応します。",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-10 h-10 bg-[#e8f0eb] rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-[#3d6b4f]" />
                      </div>
                      <div>
                        <p className="font-bold text-[#1a1a18] text-sm mb-1">{item.title}</p>
                        <p className="text-sm text-[#6b6b68] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-[#f4f4f0] rounded-2xl p-6">
              <p className="text-sm font-bold text-[#1a1a18] mb-2">直接メール</p>
              <a
                href="mailto:jin@itsumani.com"
                className="text-[#3d6b4f] hover:underline text-sm font-medium"
              >
                jin@itsumani.com
              </a>
              <p className="text-xs text-[#9b9b98] mt-2">
                ※ドメインメールは設定後に有効になります
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-[#e2e2de] p-8">
              <h2 className="text-lg font-bold text-[#1a1a18] mb-6">お問い合わせフォーム</h2>
              {/* Formspree embed */}
              <form
                action="https://formspree.io/f/YOUR_FORM_ID"
                method="POST"
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#4a4a48] mb-1.5">
                      お名前 <span className="text-[#c0392b]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="山田 太郎"
                      className="w-full border border-[#e2e2de] rounded-xl px-4 py-3 text-sm text-[#1a1a18] placeholder:text-[#c4c4c0] focus:outline-none focus:border-[#3d6b4f] focus:ring-1 focus:ring-[#3d6b4f] transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-[#4a4a48] mb-1.5">
                      会社名・屋号（任意）
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="株式会社〇〇 / 個人"
                      className="w-full border border-[#e2e2de] rounded-xl px-4 py-3 text-sm text-[#1a1a18] placeholder:text-[#c4c4c0] focus:outline-none focus:border-[#3d6b4f] focus:ring-1 focus:ring-[#3d6b4f] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#4a4a48] mb-1.5">
                    メールアドレス <span className="text-[#c0392b]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="example@email.com"
                    className="w-full border border-[#e2e2de] rounded-xl px-4 py-3 text-sm text-[#1a1a18] placeholder:text-[#c4c4c0] focus:outline-none focus:border-[#3d6b4f] focus:ring-1 focus:ring-[#3d6b4f] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-[#4a4a48] mb-1.5">
                    ご興味のあるサービス
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full border border-[#e2e2de] rounded-xl px-4 py-3 text-sm text-[#1a1a18] focus:outline-none focus:border-[#3d6b4f] focus:ring-1 focus:ring-[#3d6b4f] transition-colors bg-white"
                  >
                    <option value="">選択してください</option>
                    <option value="ai-implementation">AI導入支援（中小企業・店舗向け）</option>
                    <option value="atelier-boost">アトリエboost（個人クリエイター向け）</option>
                    <option value="development">Webアプリ開発・AI自動化受託</option>
                    <option value="other">その他・まだ決まっていない</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#4a4a48] mb-1.5">
                    ご相談内容 <span className="text-[#c0392b]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="例：毎月の請求書処理を自動化したい。今は手入力で月10時間かかっている。費用感と対応できるか知りたい。"
                    className="w-full border border-[#e2e2de] rounded-xl px-4 py-3 text-sm text-[#1a1a18] placeholder:text-[#c4c4c0] focus:outline-none focus:border-[#3d6b4f] focus:ring-1 focus:ring-[#3d6b4f] transition-colors resize-none"
                  />
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-[#4a4a48] mb-1.5">
                    ご予算の目安（任意）
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full border border-[#e2e2de] rounded-xl px-4 py-3 text-sm text-[#1a1a18] focus:outline-none focus:border-[#3d6b4f] focus:ring-1 focus:ring-[#3d6b4f] transition-colors bg-white"
                  >
                    <option value="">回答しない</option>
                    <option value="under-5">5万円未満</option>
                    <option value="5-20">5万〜20万円</option>
                    <option value="20-50">20万〜50万円</option>
                    <option value="50-100">50万〜100万円</option>
                    <option value="over-100">100万円以上</option>
                    <option value="monthly">月額で考えている</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#3d6b4f] text-white font-medium rounded-full hover:bg-[#2d5a3f] transition-colors text-sm"
                >
                  送信する（無料）
                </button>
                <p className="text-xs text-center text-[#9b9b98]">
                  24時間以内にご返信します。費用は一切かかりません。
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
