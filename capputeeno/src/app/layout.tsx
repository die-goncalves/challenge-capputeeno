import './globals.css'

import { Suspense } from 'react'
import { Logo } from '@/components/logo'
import { SearchBar } from '@/components/search-bar'
import { CartControl } from '@/components/cart-control'
import { CartContextProvider } from '@/contexts/cart-context'
import { saira } from './fonts'
import clsx from 'clsx'

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
          <header
            className={clsx(
              'w-full px-4 bg-[rgba(var(--white))]/95 sticky top-0 z-10 backdrop-blur shadow-[0px_4px_12px_0px_rgba(0,_0,_0,_0.1)]',
              '3xl:px-40 3xl:h-[80px]'
            )}
          >
            <nav
              className={clsx(
                'grid grid-cols-[1fr_auto] grid-rows-2 gap-2 py-2 grid-areas-[up-left_up-right,bottom_bottom] w-full h-full justify-between items-center',
                '3xl:grid-cols-[1fr_auto_auto] 3xl:grid-rows-1 3xl:gap-4 3xl:grid-areas-[logo_search_cart]'
              )}
            >
              <Logo />
              <Suspense>
                <SearchBar />
              </Suspense>
              <Suspense>
                <CartControl />
              </Suspense>
            </nav>
          </header>

          {children}
        </CartContextProvider>
      </body>
    </html>
  )
}
