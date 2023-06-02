'use client'

import { useEffect, useState } from 'react'
import { CartProductCard } from './cart-product-card'
import { useCart } from '@/contexts/cart-context'
import { ICartProduct } from '@/types/cart-product'
import { formatPrice } from '@/utils/format-price'

export function CartProductGallery() {
  const [cart, setCart] = useState<ICartProduct[]>([])
  const [amount, setAmount] = useState(0)
  const [subTotalFormatted, setSubTotalFormatted] = useState('')
  const { cart: c, subTotal, amountProducts } = useCart()

  useEffect(() => {
    setCart(c)
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
        <p className="font-medium uppercase text-2xl">Seu carrinho</p>
        <p className="font-light">
          Total ({amount} produtos){' '}
          <span className="font-semibold">{subTotalFormatted}</span>
        </p>
      </div>
      <div className="flex flex-col gap-4 py-6">
        {cart.map(product => {
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
        })}
      </div>
    </>
  )
}
