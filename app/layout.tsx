import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './css/globals.css';
import './css/font.css';
import './css/common.css';
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Maestlog',
  description: 'Maestlog Demo page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div className="inner">
          <div className="nav-bar">
            <h1 className=""><Link href="/list">Maestlog</Link></h1>
          </div>
          {children}
        </div>
      </body>
    </html>
  )
}
