import type { Metadata } from 'next'
import './globals.css'
import SolanaProviders from './providers'

export const metadata: Metadata = {
  title: 'Agent Guild — Solana',
  description: 'Coordination for human + autonomous agents on Solana.',
  icons: [{ rel: 'icon', url: '/assets/pixel-robot.svg' }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="text-white">
        <SolanaProviders>{children}</SolanaProviders>
      </body>
    </html>
  )
}
