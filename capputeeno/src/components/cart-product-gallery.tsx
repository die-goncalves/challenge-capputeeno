'use client'

import { useEffect, useState } from 'react'
import { CartProductCard } from './cart-product-card'
import { Skeleton } from './skeleton'
import { useCart } from '@/contexts/cart-context'
import { ICartProduct } from '@/types/cart-product'
import { formatPrice } from '@/utils/format-price'
import clsx from 'clsx'

let start = false
export function CartProductGallery() {
  const [cart, setCart] = useState<ICartProduct[]>([])
  const [amount, setAmount] = useState(0)
  const [subTotalFormatted, setSubTotalFormatted] = useState('R$ 0,00')
  const { cart: c, subTotal, amountProducts } = useCart()

  useEffect(() => {
    setCart(c)
    start = true
  }, [c])

  useEffect(() => {
    setAmount(amountProducts)
  }, [amountProducts])

  useEffect(() => {
    setSubTotalFormatted(formatPrice(subTotal))
  }, [subTotal])

  return (
    <>
      <div className="flex flex-col gap-2">
        <p className={clsx('font-medium uppercase text-lg', '3xl:text-2xl')}>
          Seu carrinho
        </p>
        <p className="font-light">
          Total ({amount} produtos){' '}
          <span className="font-semibold">{subTotalFormatted}</span>
        </p>
      </div>
      <div className={clsx('flex flex-col gap-4 pt-6', '3xl:py-6')}>
        {!start ? (
          <>
            <Skeleton className="h-44 w-full" />
            <Skeleton className="h-44 w-full" />
          </>
        ) : (
          cart.map(product => {
            return (
              <CartProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                imageURL={product.image_url}
                price={product.price_in_cents}
                amount={product.amount}
              />
            )
          })
        )}
      </div>
    </>
  )
}
