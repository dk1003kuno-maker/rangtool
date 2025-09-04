
# Range Tracer Pro (Vercel)

このフォルダは **Vercel にワンクリックでデプロイできる Next.js + Tailwind テンプレ**です。

## 使い方（最短）
1. GitHub に新規リポジトリを作って、このフォルダの中身を丸ごとプッシュ
2. Vercel にログイン → "New Project" → そのリポジトリを選択 → Deploy

## Range Tracer の本体を入れる
- `app/range-tracer.tsx` に、提供済みの Range Tracer コンポーネントの中身を貼り付けてください。
- すでに shadcn/ui 互換の簡易 UI コンポーネントが同梱されているので、そのままビルドが通ります。

## ローカル開発
```bash
npm install
npm run dev
```
http://localhost:3000 を開く。

## 任意設定
- `vercel.json` の `functions.regions` は `["hnd1"]`（東京）。変更可。
