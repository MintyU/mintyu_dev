// src/app/layout.tsx
import '@/app/globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: { default: 'mintyu.dev', template: '%s | mintyu.dev' },
  description: '네트워킹·컴퓨터비전·개발 블로그',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning className="dark">
      {/* ▼ 1) 직접 CSS 변수로 확인 */}
      <body
        style={{ borderTop: '6px solid var(--color-mint-500)' }}
        className="font-sans antialiased"
      >
        {/* ▼ 2) Tailwind v4 수식 문법으로 확인 */}
        <header className="bg-[oklch(var(--color-mint-500))] py-4 text-white">
          <h1 className="mx-auto max-w-4xl px-4 text-lg font-bold">
            mintyu.dev
          </h1>
        </header>

        <main className="mx-auto max-w-3xl px-4 py-8">{children}</main>

        <footer className="mx-auto max-w-3xl px-4 py-10 text-sm opacity-70">
          © {new Date().getFullYear()} Minty U — Powered by Next.js 15 & Tailwind v4
        </footer>
      </body>
    </html>
  );
}
