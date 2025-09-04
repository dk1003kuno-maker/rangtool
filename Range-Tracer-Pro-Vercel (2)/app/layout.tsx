
import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Range Tracer Pro',
  description: 'レンジ思考を鍛えるポーカー学習ツール',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
