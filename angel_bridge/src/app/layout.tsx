import type { Metadata } from 'next'
import Providers from './Providers'
import '@/style/global.css'

export const metadata: Metadata = {
  title: 'Angel-Bridge',
  description: '엔브입니다!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body style={{ fontSize: '62.5%' }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
