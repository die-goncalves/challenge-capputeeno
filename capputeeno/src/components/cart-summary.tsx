'use client'

import clsx from 'clsx'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useCart } from '@/contexts/cart-context'
import { formatPrice } from '@/utils/format-price'

export function CartSummary() {
  const [subTotalFormatted, setSubTotalFormatted] = useState('R$ 0,00')
  const [totalFormatted, setTotalFormatted] = useState('R$ 0,00')
  const [amount, setAmount] = useState(0)
  const { subTotal, amountProducts } = useCart()

  useEffect(() => {
    setSubTotalFormatted(formatPrice(subTotal))
    setTotalFormatted(formatPrice(subTotal + 4000))
  }, [subTotal])

  useEffect(() => {
    setAmount(amountProducts)
  }, [amountProducts])

  const delivery = formatPrice(4000)

  return (
    <div
      className={clsx(
        'flex flex-col flex-1 bg-[rgb(var(--white))] h-[calc(100vh-120px)] sticky top-[120px]',
        'my-10 p-4 rounded',
        'md:ml-8 md:mb-0 md:rounded-none md:pt-4 md:px-6 md:pb-6'
      )}
    >
      <h1 className="text-xl font-semibold uppercase mb-7">Resumo do pedido</h1>
      <div className="flex justify-between items-center mb-3">
        <p>Subtotal de produtos</p>
        <p>{subTotalFormatted}</p>
      </div>
      <div className="flex justify-between items-center mb-6">
        <p>Entrega</p>
        <p>{delivery}</p>
      </div>
      <hr className="border-[1px] border-[rgb(var(--shape-gray-rgb))]" />
      <div className="flex font-semibold justify-between items-center mt-2 mb-10">
        <p>Total</p>
        <p>{totalFormatted}</p>
      </div>
      <button
        disabled={amount === 0}
        className={clsx(
          'h-11 rounded bg-[rgb(var(--green))]',
          amount === 0 && 'cursor-not-allowed bg-[rgba(var(--green))]/40',
          'outline-none focus:ring-2 focus:ring-[rgb(var(--orange-low))] transition-shadow'
        )}
      >
        <span
          className={clsx('uppercase font-medium text-[rgb(var(--white))]')}
        >
          Finalizar compra
        </span>
      </button>
      <div className={clsx('flex flex-col gap-3 mt-6 uppercase', 'md:mt-auto')}>
        <Link
          href="/help"
          className={clsx(
            'inline-flex w-fit rounded underline decoration-solid decoration-1 underline-offset-2',
            'outline-none focus:ring-2 focus:ring-[rgb(var(--orange-low))] transition-shadow'
          )}
        >
          Ajuda
        </Link>
        <Link
          href="/refunds"
          className={clsx(
            'inline-flex w-fit rounded underline decoration-solid decoration-1 underline-offset-2',
            'outline-none focus:ring-2 focus:ring-[rgb(var(--orange-low))] transition-shadow'
          )}
        >
          reembolsos
        </Link>
        <Link
          href="/deliveries-freight"
          className={clsx(
            'inline-flex w-fit rounded underline decoration-solid decoration-1 underline-offset-2',
            'outline-none focus:ring-2 focus:ring-[rgb(var(--orange-low))] transition-shadow'
          )}
        >
          entregas e frete
        </Link>
        <Link
          href="/exchanges-returns"
          className={clsx(
            'inline-flex w-fit rounded underline decoration-solid decoration-1 underline-offset-2',
            'outline-none focus:ring-2 focus:ring-[rgb(var(--orange-low))] transition-shadow'
          )}
        >
          trocas e devoluções
        </Link>
      </div>
    </div>
  )
}
