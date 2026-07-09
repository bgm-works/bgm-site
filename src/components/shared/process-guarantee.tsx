import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

const steps = [
  {
    step: "01",
    title: "無料相談・無料AI診断",
    price: "0円",
    desc: "30分のオンラインヒアリング。先に概算だけ知りたい方は、2問の無料AI診断もあります。",
  },
  {
    step: "02",
    title: "ディスカバリー",
    price: "5万〜15万円",
    desc: "要件の整理と動く試作まで。試作を触ってから、本開発に進むかを判断できます。本開発に進む場合は費用を全額充当し、内容にご満足いただけない場合は返金します。",
  },
  {
    step: "03",
    title: "本開発",
    price: "成果物別の目安",
    desc: "開発中は週次で動くものをお見せしながら進めます。",
  },
  {
    step: "04",
    title: "月額保守",
    price: "1万〜10万円/月",
    desc: "公開後の運用と改善、業務の変化への追従。範囲に応じて設定します。",
  },
];

export function ProcessGuarantee({
  showPricingLink = true,
  className,
}: {
  showPricingLink?: boolean;
  className?: string;
}) {
  return (
    <section className={cn("py-20", className)}>
      <div className="container-wide">
        <SectionHeader label="PROCESS" title="進め方と保証" align="center" className="mb-4" />
        <p className="mx-auto mb-10 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
          いきなり数十万円の発注は不安だと思います。当社ではまず、要件の整理と動く試作までをディスカバリーとして行い、確かめてから進められるようにしています。
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <Reveal key={s.step}>
              <Card className="h-full border-border/80">
                <CardHeader>
                  <p className="font-mono text-4xl text-muted">#{s.step}</p>
                  <CardTitle className="text-base">{s.title}</CardTitle>
                  <p className="text-sm font-bold text-primary">{s.price}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
        {showPricingLink ? (
          <p className="mt-8 text-center text-sm text-muted-foreground">
            成果物別の金額の目安は、
            <Link href="/pricing" className="text-primary hover:underline">
              料金ページ
            </Link>
            にまとめています。
          </p>
        ) : null}
      </div>
    </section>
  );
}
