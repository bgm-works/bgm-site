import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal } from "@/components/shared/reveal";
import { BrowserFrame } from "@/components/shared/browser-frame";

const products = [
  {
    name: "RunNavi",
    desc: "マラソン大会の検索と締切管理。会員認証からSNS連携まで自社で運用しています。",
    url: "https://runnavi.aidial.jp",
    shot: { src: "/screenshots/runnavi.png", alt: "RunNaviの実際の画面", url: "runnavi.aidial.jp" },
  },
  {
    name: "AiDIAL 無料AI診断",
    desc: "2問答えると、概算費用と補助金の実質負担の目安がわかります。",
    url: "https://shindan.aidial.jp",
    shot: { src: "/screenshots/shindan.png", alt: "AiDIAL無料AI診断の実際の画面", url: "shindan.aidial.jp" },
  },
  {
    name: "aidialポータル",
    desc: "花火大会やウォーキングの情報サイト群。共通設計で運用を続けています。",
    url: "https://aidial.jp",
    shot: { src: "/screenshots/aidial.png", alt: "aidialポータルの実際の画面", url: "aidial.jp" },
  },
];

export function ProofLinks() {
  return (
    <section className="border-y border-border bg-secondary/40 py-16">
      <div className="container-wide">
        <SectionHeader
          label="Proof"
          title="実物で確かめてください"
          subtitle="当社が作って運用しているサービスは、すべて本番のURLから触れます。"
          className="mb-10"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {products.map((p) => (
            <Reveal key={p.name}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full rounded-2xl border border-border bg-background p-4 transition-all hover:-translate-y-0.5 hover:border-primary"
              >
                <BrowserFrame src={p.shot.src} alt={p.shot.alt} url={p.shot.url} />
                <div className="px-2 pb-1 pt-4">
                  <p className="flex items-center gap-2 font-bold text-foreground">
                    {p.name}
                    <ArrowUpRight className="size-4 flex-shrink-0 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button variant="outline" render={<Link href="/works" />} className="group px-6">
            すべての公開プロダクトを見る{" "}
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
