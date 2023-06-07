import { Pagination } from '@/components/pagination'
import { ProductCard } from '@/components/product-card'
import { IProduct } from '@/types/product'
import { Suspense } from 'react'

const perPage = 12

async function getCollectionProducts({
  collection,
  page: pageString,
  sort,
  q
}: {
  collection: string
  page: string | undefined
  sort: string | undefined
  q: string | undefined
}) {
  const page = pageString ? Number(pageString) : 1

  let sortQuery = ''
  if (sort) {
    switch (sort) {
      case 'news': {
        sortQuery = 'sortField: "created_at", sortOrder: "desc"'
        break
      }
      case 'asc': {
        sortQuery = 'sortField: "price_in_cents", sortOrder: "asc"'
        break
      }
      case 'desc': {
        sortQuery = 'sortField: "price_in_cents", sortOrder: "desc"'
        break
      }
      case 'sales': {
        sortQuery = 'sortField: "sales", sortOrder: "desc"'
        break
      }
      default: {
        sortQuery = ''
      }
    }
  }
  let pageQuery = `page: ${page - 1}, perPage: ${perPage}`
  let filterQuery = `filter: { category: "${collection}"}`

  let query = `${sortQuery.length > 0 ? sortQuery + ', ' : ''}
                ${pageQuery.length > 0 ? pageQuery : ''}
                  ${filterQuery.length > 0 ? ', ' + filterQuery : ''}`

  const url = process.env.NEXT_PUBLIC_API_URL ?? ''
  let results = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `{
            allProducts(${query}) {
              id
              price_in_cents
              name
              description
              image_url
              category
              sales
              created_at
            },
            _allProductsMeta(${filterQuery}) {
              count
            }
          }`
    })
  })
  let products = (await results.json()) as {
    data: { allProducts: IProduct[]; _allProductsMeta: { count: number } }
  }
  return {
    list: products.data.allProducts,
    count: products.data._allProductsMeta.count
  }
}

export default async function CollectionPage({
  params,
  searchParams
}: {
  params: { collection: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const { collection } = params as { [key: string]: string }
  const {
    page,
    sort,
    q: searchValue
  } = searchParams as { [key: string]: string }

  const products = await getCollectionProducts({
    collection,
    page,
    sort,
    q: searchValue
  })

  return (
    <main className="flex w-full flex-col items-center">
      <div className="ml-auto mt-6 mb-8">
        <Suspense>
          <Pagination totalCount={products.count} perPage={perPage} />
        </Suspense>
      </div>

      <div className="w-full grid grid-cols-[repeat(auto-fill,_minmax(256px,auto))] gap-y-8 gap-x-6">
        {products.list.map(p => {
          return (
            <ProductCard
              key={p.id}
              id={p.id}
              name={p.name}
              imageURL={p.image_url}
              price={p.price_in_cents}
            />
          )
        })}
      </div>

      <div className="ml-auto mt-6 mb-8">
        <Suspense>
          <Pagination totalCount={products.count} perPage={perPage} />
        </Suspense>
      </div>
    </main>
  )
}
