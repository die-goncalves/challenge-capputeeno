import './globals.css'
import { poltawski_nowy } from './fonts'

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
    <html lang="pt" className={poltawski_nowy.className}>
      <body>{children}</body>
    </html>
  )
}
