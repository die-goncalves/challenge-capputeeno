'use client'

import { useCartDispatch } from '@/contexts/cart-context'
import { BagIcon } from './icons/bag-icon'
import clsx from 'clsx'

interface IAddToCart {
  id: string
  name: string
  description: string
  image_url: string
  price_in_cents: number
}
export function AddToCart(props: IAddToCart) {
  const { id, name, description, image_url, price_in_cents } = props
  const { dispatch } = useCartDispatch()

  function handleAddProduct() {
    dispatch({
      type: 'add',
      payload: {
        product: {
          id,
          name,
          description,
          image_url,
          price_in_cents
        }
      }
    })
  }

  return (
    <button
      onClick={handleAddProduct}
      className={clsx(
        'flex items-center justify-center gap-3 w-full h-11 bg-[rgb(var(--brand-blue-rgb))] rounded',
        'outline-none focus:ring-2 focus:ring-[rgb(var(--orange-low))] transition-shadow',
        'my-4',
        'md:mt-auto md:mb-0'
      )}
    >
      <BagIcon className="stroke-[rgb(var(--shape-light-rgb))] w-6 h-6" />
      <span className="uppercase font-medium text-[rgb(var(--shape-light-rgb))]">
        Adicionar ao carrinho
      </span>
    </button>
  )
}
