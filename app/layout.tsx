import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Igorjmedia - Media that grows your business',
  description: 'Professional photography and media services',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
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
        <link rel="preload" href="/purosangue-reel.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/ferrari-1.jpg" as="image" />
        <link rel="preload" href="/ferrari-2.jpg" as="image" />
        <link rel="preload" href="/ferrari-3.jpg" as="image" />
      </head>
      <body>{children}</body>
    </html>
  )
}
