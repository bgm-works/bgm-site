"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");

  return (
    <form action="https://formspree.io/f/xrerzbje" method="POST" className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">お名前 *</Label>
          <Input id="name" name="name" required placeholder="山田 太郎" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">会社名・屋号（任意）</Label>
          <Input id="company" name="company" placeholder="株式会社〇〇 / 個人" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">メールアドレス *</Label>
        <Input id="email" type="email" name="email" required placeholder="example@email.com" />
      </div>

      <div className="space-y-2">
        <Label>ご興味のあるサービス</Label>
        <Select value={service || null} onValueChange={(value) => setService(value ?? "")}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="選択してください" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ai-implementation">業務改善支援（中小企業・店舗向け）</SelectItem>
            <SelectItem value="atelier-boost">アトリエboost（個人クリエイター向け）</SelectItem>
            <SelectItem value="development">Webアプリ開発・業務ツール受託</SelectItem>
            <SelectItem value="other">その他・まだ決まっていない</SelectItem>
          </SelectContent>
        </Select>
        <input type="hidden" name="service" value={service} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">ご相談内容 *</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="例：毎月の請求書処理に手入力で月10時間かかっている。どれくらい時間を減らせるか、費用感とあわせて知りたい。"
        />
      </div>

      <div className="space-y-2">
        <Label>ご予算の目安（任意）</Label>
        <Select value={budget || null} onValueChange={(value) => setBudget(value ?? "")}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="回答しない" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="under-5">5万円未満</SelectItem>
            <SelectItem value="5-20">5万〜20万円</SelectItem>
            <SelectItem value="20-50">20万〜50万円</SelectItem>
            <SelectItem value="50-100">50万〜100万円</SelectItem>
            <SelectItem value="over-100">100万円以上</SelectItem>
            <SelectItem value="monthly">月額で考えている</SelectItem>
          </SelectContent>
        </Select>
        <input type="hidden" name="budget" value={budget} />
      </div>

      <Button type="submit" className="w-full rounded-full py-5">
        送信する（無料）
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        24時間以内にご返信します。費用は一切かかりません。
      </p>
    </form>
  );
}
