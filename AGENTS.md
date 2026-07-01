<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Design（UIを書く前に必読）

UI/スタイルを書く前に、ワークスペースの以下2つを必ず読むこと:

1. `08_リソース/DESIGN.md`（L1 普遍ルール v3.0）— 3層トークン・OKLCH・直値禁止・Anti-AI-Slop・自己検証チェックリスト
2. `08_リソース/BGMWorks_ブランドガイド.md`（L2 ブランドトークン v2.0）— BGMの確定色（Primary `#0E8B8B` 中間ターコイズ）・60-30-10比率・ダークパレット §3.5・Don'ts §8

MUST: 色・余白・タイポは**直値で書かず** `globals.css` の semantic トークン（`bg-primary` 等）経由で使う。
MUST NOT: 影/グラデ/全要素角丸/Inter一辺倒/絵文字アイコン（DESIGN.md §A.1）。旧色 `#1b6b6b`/`#C9A24E` 禁止。

# 文章（コピー）を書く前に必読 — AI臭を消す

サイトのコピー・見出し・説明文・LP文言・メール等、**日本語の文章を生成/校正する前に必ず読む**:

- 正本 = `08_リソース/文章スタイル/日本語.md`（英語は `English.md`）。索引 `08_リソース/文章スタイル/README.md`。
- MUST NOT: **全角ダッシュ「——」「—」で説明・言い換え・余韻を作る**（日本語では不自然でAIの典型）。「。」「：」「〜（範囲）」「（）」に置換する。
- MUST NOT: 定型句（「〜と言えるでしょう」「いかがでしたか」）・末尾の問いかけ・行動指示（「ぜひ試してみてください」）・過剰な太字/絵文字。
- 完了前に日本語.md §2 のチェックリストで自己校正（特に「—」が残っていないか）。BGM Works はクライアントに読まれる文章なので、AI臭は信頼を損なう。
