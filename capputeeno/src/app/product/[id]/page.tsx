import Image from 'next/image'
import { AddToCart } from '@/components/add-to-cart'
import { GoBack } from '@/components/go-back'
import { formatPrice } from '@/utils/format-price'
import { Collection, CollectionPTBR } from '@/types/collection'
import { IProduct } from '@/types/product'
import clsx from 'clsx'

//  what happens when a dynamic segment is visited that was not generated with generateStaticParams.
// This option replaces the fallback: true | false | blocking option of getStaticPaths in the pages directory.
export const dynamicParams = true // true is default

// Versions of this page will be statically generated using the `params` returned by `generateStaticParams`
export async function generateStaticParams() {
  // Get the top 10 best selling products
  const url = process.env.NEXT_PUBLIC_API_URL ?? ''
  let results = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `{
            allProducts(page: 0, perPage: 10, sortField: "sales", sortOrder: "desc") {
              id
            }
          }`
    })
  })
  let products = (await results.json()) as {
    data: { allProducts: { id: string }[] }
  }
  return products.data.allProducts.map(p => ({
    id: p.id
  }))
}

async function getProduct(id: string) {
  const url = process.env.NEXT_PUBLIC_API_URL ?? ''
  let results = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `{
            allProducts(filter: {id: "${id}"}) {
              id
              price_in_cents
              name
              description
              image_url
              category
              sales
              created_at,
            },
          }`
    })
  })
  let product = (await results.json()) as {
    data: { allProducts: IProduct[] }
  }

  return {
    product: product.data.allProducts[0]
  }
}

export default async function Product({ params }: { params: { id: string } }) {
  const { product } = await getProduct(params.id)

  const priceFormatted = formatPrice(product.price_in_cents)
  return (
    <main
      className={clsx(
        'w-full px-4 h-[calc(100svh-108px)]',
        '3xl:h-[calc(100svh-80px)] 3xl:px-40'
      )}
    >
      <GoBack />

      <div
        className={clsx(
          'flex flex-col gap-4',
          '3xl:grid 3xl:grid-cols-[640px_1fr] 3xl:gap-8 3xl:h-[calc(100vh-232px)]'
        )}
      >
        <div
          className={clsx(
            'relative w-full h-64 rounded overflow-hidden',
            '3xl:h-full 3xl:w-[640px]'
          )}
        >
          <Image
            src={product.image_url}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 70vw, (min-width: 769px) 30vw"
          />
        </div>
        <div className="flex flex-col">
          <span>{CollectionPTBR[product.category as Collection]}</span>
          <h1 className="text-[32px] font-light mt-3 mb-1">{product.name}</h1>
          <span className="font-semibold text-xl text-[rgb(var(--text-tertiary-rgb))]">
            {priceFormatted}
          </span>
          <span className="text-xs mt-6 mb-14">
            *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
            R$900,00.
          </span>
          <div className={'flex flex-col gap-2'}>
            <span className="uppercase font-medium text-[rgb(var(--text-secondary-rgb))]">
              Descrição
            </span>
            <span className="text-sm">{product.description}</span>
          </div>
          <AddToCart
            id={product.id}
            description={product.description}
            image_url={product.image_url}
            name={product.name}
            price_in_cents={product.price_in_cents}
          />
        </div>
      </div>
    </main>
  )
}
