'use client'

import clsx from 'clsx'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useCart } from '@/contexts/cart-context'
import { BagIcon } from './icons/bag-icon'

export function CartControl() {
  const { amountProducts } = useCart()
  const [amount, setAmount] = useState(0)

  useEffect(() => {
    setAmount(amountProducts)
  }, [amountProducts])

  return (
    <Link
      href={'/cart'}
      className={clsx(
        'relative flex rounded-full w-[42px] h-[42px] items-center justify-center focus-within:bg-[rgb(var(--shape-light-rgb))] hover:bg-[rgb(var(--shape-light-rgb))] transition-colors',
        'outline-none focus:ring-2 focus:ring-[rgb(var(--orange-low))] transition-shadow',
        'grid-in-[up-right]',
        'sm:grid-in-[cart]'
      )}
    >
      <div className="relative">
        <span>
          <BagIcon className="stroke-[rgb(var(--text-secondary-rgb))] w-6 h-6" />
        </span>
        <div className="absolute p-0.5 bottom-0 right-0 translate-x-1/2 translate-y-1/2 flex aspect-square min-w-[16px] bg-[rgb(var(--red))] rounded-full">
          <span className="m-auto leading-none text-xs font-medium text-[rgb(var(--white))]">
            {amount}
          </span>
        </div>
      </div>
    </Link>
  )
}
