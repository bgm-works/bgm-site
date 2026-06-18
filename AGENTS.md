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
