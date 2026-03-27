import type { Metadata } from 'next'
import './globals.css'
import DotGrid from './components/DotGrid'

export const metadata: Metadata = {
  title: 'Data Services Annual Report 2024-2025',
  description: 'University of Rochester Libraries - Data Services Team Annual Report',
  robots: 'noindex, nofollow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body style={{ backgroundColor: '#001E5F' }}>
        <DotGrid />
        {children}
      </body>
    </html>
  )
}