import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
import { ProductItemType } from '@/types/cart-product'
import { saira_stencil_one } from '@/app/fonts'
import { formatPrice } from '@/utils/format-price'
import { Carousel } from './carousel'

interface IPresentation {
  products: ProductItemType[]
}
export function Presentation({ products }: IPresentation) {
  return (
    <>
      <div className="3xl:hidden">
        <Carousel slides={products} />
      </div>

      <div className="hidden 3xl:block">
        <div
          className={clsx(
            'h-[calc(100svh-108px)] grid grid-rows-[1fr_1fr_1fr]',
            '3xl:h-[calc(100svh-80px)] 3xl:grid-cols-2 3xl:grid-rows-2'
          )}
        >
          {products.slice(0, 3).map((p, i) => {
            return (
              <div
                key={p.id}
                className={clsx('w-full h-full', i === 0 && 'row-span-2')}
              >
                <div className="relative w-full h-full group overflow-hidden">
                  <Image
                    src={p.image_url}
                    alt={p.name}
                    fill
                    className="object-cover hover:scale-110 transition-all ease-linear duration-500"
                    sizes="(max-width: 768px) 70vw, (min-width: 769px) 100vw"
                  />
                  <div className="absolute flex flex-col rounded z-10 bg-black/25 backdrop-blur max-w-[50%] left-2 bottom-2 p-2">
                    <h2
                      className={clsx(
                        'font-medium text-lg text-[rgb(var(--white))]',
                        saira_stencil_one.className
                      )}
                    >
                      {p.name}
                    </h2>
                    <p className="text-sm text-[rgba(var(--white))]/80">
                      {p.description}
                    </p>
                    <span className="font-bold text-[rgba(var(--orange-low))]">
                      {formatPrice(p.price_in_cents)}
                    </span>
                    <Link
                      className={clsx(
                        'w-fit p-2 rounded mt-2 relative z-10 bg-[rgba(var(--yellow))]',
                        'outline-none focus:outline-2 focus:outline-offset-2 focus:outline-[rgb(var(--orange-low))] transition-shadow'
                      )}
                      href={`/product/${p.id}`}
                    >
                      Ir para o produto
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
