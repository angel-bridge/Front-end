import type { Metadata } from 'next'
import Providers from './Providers'
import '@/style/global.css'
import Header from '@/common/components/Header'
import Footer from '@/common/components/Footer'

export const metadata: Metadata = {
  title: 'Angel-Bridge',
  description: '챌린지형 창업 교육 플랫폼, 창업의 시작은 엔젤브릿지와 함께',
  icons: {
    icon: "/assets/favicon.ico",
},
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </head>
      <body style={{ fontSize: '62.5%' }}>
        <Providers><Header /> {children}</Providers>
        <Footer />
      </body>
    </html>
  )
}
