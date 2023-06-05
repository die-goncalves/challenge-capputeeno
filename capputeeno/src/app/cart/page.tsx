import { CartSummary } from '@/components/cart-summary'
import { CartProductGallery } from '@/components/cart-product-gallery'
import { GoBack } from '@/components/go-back'

export default function CartPage() {
  return (
    <main className="flex flex-col items-center justify-between mx-40">
      <div className="flex w-full">
        <div className="flex flex-col w-full max-w-[736px]">
          <GoBack />

          <CartProductGallery />
        </div>
        <CartSummary />
      </div>
    </main>
  )
}
