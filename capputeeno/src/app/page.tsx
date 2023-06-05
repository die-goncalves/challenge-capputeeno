import { IProduct } from '@/types/product'
import { Presentation } from '@/components/presentation'

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
            allProducts(page: 0, perPage: 10, sortField: "sales", sortOrder: "desc") {
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
      <Presentation products={products} />
    </main>
  )
}
