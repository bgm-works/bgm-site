import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      <p className="text-8xl font-bold text-[#e2e2de] mb-6">404</p>
      <h1 className="text-2xl font-bold text-[#1a1a18] mb-3">ページが見つかりません</h1>
      <p className="text-[#6b6b68] mb-8">URLを確認するか、トップページに戻ってください。</p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-[#3d6b4f] text-white rounded-full hover:bg-[#2d5a3f] transition-colors text-sm font-medium"
      >
        トップへ戻る <ArrowRight size={15} />
      </Link>
    </section>
  );
}
