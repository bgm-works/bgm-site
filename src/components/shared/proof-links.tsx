import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal } from "@/components/shared/reveal";

const products = [
  {
    name: "RunNavi",
    desc: "マラソン大会の検索と締切管理。会員認証からSNS連携まで自社で運用しています。",
    url: "https://runnavi.aidial.jp",
  },
  {
    name: "AiDIAL 無料AI診断",
    desc: "2問答えると、概算費用と補助金の実質負担の目安がわかります。",
    url: "https://shindan.aidial.jp",
  },
  {
    name: "aidialポータル",
    desc: "花火大会やウォーキングの情報サイト群。共通設計で運用を続けています。",
    url: "https://aidial.jp",
  },
];

export function ProofLinks() {
  return (
    <section className="border-y border-border bg-secondary/40 py-16">
      <div className="container-wide">
        <SectionHeader
          label="PROOF"
          title="実物で確かめてください"
          subtitle="当社が作って運用しているサービスは、すべて本番のURLから触れます。"
          align="center"
          className="mb-8"
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {products.map((p) => (
            <Reveal key={p.name}>
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                <Card className="h-full border-border/80 transition-colors hover:border-primary/60">
                  <CardContent className="p-5">
                    <p className="flex items-center gap-2 font-bold text-foreground">
                      {p.name}
                      <ExternalLink size={13} className="flex-shrink-0 text-primary" />
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  </CardContent>
                </Card>
              </a>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button variant="outline" render={<Link href="/works" />} className="px-6">
            すべての公開プロダクトを見る <ArrowRight size={15} />
          </Button>
        </div>
      </div>
    </section>
  );
}
