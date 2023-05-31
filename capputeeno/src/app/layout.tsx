import './globals.css'
import { saira } from './fonts'

export const metadata = {
  title: 'Capputeeno',
  description: 'E-commerce'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className={saira.className}>
      <body>{children}</body>
    </html>
  )
}
