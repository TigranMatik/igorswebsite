import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export const metadata: Metadata = {
  title: 'Igorjmedia - Media that grows your business',
  description: 'Professional photography and media services',
  icons: {
    icon: [
      { url: '/logo.png', sizes: 'any' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="preload" href="/ferrari-1.jpg" as="image" />
        <link rel="preload" href="/ferrari-2.jpg" as="image" />
        <link rel="preload" href="/ferrari-3.jpg" as="image" />
      </head>
      <body>{children}</body>
    </html>
  )
}
