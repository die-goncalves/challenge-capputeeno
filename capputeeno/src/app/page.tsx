import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { IProduct } from '@/types/product'
import { formatPrice } from '@/utils/format-price'
import { saira_stencil_one } from './fonts'

type ResponseProduct = Omit<IProduct, 'sales' | 'created_at' | 'category'>

async function getBestProducts() {
  const url = process.env.NEXT_PUBLIC_API_URL ?? ''
  let results = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `{
            allProducts(page: 0, perPage: 3, sortField: "sales", sortOrder: "desc") {
              id,
              name,
              image_url,
              price_in_cents,
              description
            }
          }`
    })
  })
  let products = (await results.json()) as {
    data: { allProducts: ResponseProduct[] }
  }

  return {
    products: products.data.allProducts
  }
}

export default async function HomePage() {
  const { products } = await getBestProducts()

  return (
    <main className="flex flex-col">
      <div className="h-[calc(100svh-80px)] grid grid-cols-2 grid-rows-2">
        {products.map((p, i) => {
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
                  sizes="(max-width: 768px) 70vw, (min-width: 769px) 30vw"
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
    </main>
  )
}
