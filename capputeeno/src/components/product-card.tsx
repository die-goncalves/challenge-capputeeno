import Image from 'next/image'
import Link from 'next/link'
import { formatPrice } from '@/utils/format-price'

interface IProductCard {
  id: string
  name: string
  price: number
  imageURL: string
}

export function ProductCard(props: IProductCard) {
  const priceFormatted = formatPrice(props.price)

  return (
    <Link
      href={`/product/${props.id}`}
      className="w-full rounded-b rounded-t-lg overflow-hidden bg-[rgba(var(--white))]/40 border-none outline-none focus:ring-2 focus:ring-[rgb(var(--orange-low))] transition-shadow"
    >
      <div className="relative w-full h-[300px]">
        <Image
          src={props.imageURL}
          alt={props.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 70vw, (min-width: 769px) 30vw"
        />
      </div>

      <div className="flex flex-col px-3 py-2 gap-2">
        <span className="text-base leading-normal font-light">
          {props.name}
        </span>
        <hr className="h-[1px] bg-[rgb(var(--text-secondary-rgb))]" />
        <span className="text-sm leading-normal font-semibold text-[rgb(var(--text-tertiary-rgb))]">
          {priceFormatted}
        </span>
      </div>
    </Link>
  )
}
