import './globals.css'

import { Suspense } from 'react'
import { Logo } from '@/components/logo'
import { SearchBar } from '@/components/search-bar'
import { BagIcon } from '@/components/icons/bag-icon'
import { CartContextProvider } from '@/contexts/cart-context'
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
      <body>
        <CartContextProvider>
          <header className="w-full h-[80px] px-40 bg-[rgba(var(--white))]/95 sticky top-0 z-10 backdrop-blur shadow-[0px_4px_12px_0px_rgba(0,_0,_0,_0.1)]">
            <nav className="w-full h-full flex justify-between items-center">
              <Logo />
              <div className="flex gap-4 items-center">
                <Suspense>
                  <SearchBar />
                </Suspense>
                <BagIcon className="stroke-[rgb(var(--text-secondary-rgb))] w-6 h-6" />
              </div>
            </nav>
          </header>

          {children}
        </CartContextProvider>
      </body>
    </html>
  )
}
