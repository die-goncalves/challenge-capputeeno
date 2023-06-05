import clsx from 'clsx'
import { CartSummary } from '@/components/cart-summary'
import { CartProductGallery } from '@/components/cart-product-gallery'
import { GoBack } from '@/components/go-back'

export default function CartPage() {
  return (
    <main
      className={clsx(
        'flex flex-col items-center justify-between mx-4',
        '3xl:mx-40'
      )}
    >
      <div className={clsx('flex w-full flex-col', '3xl:flex-row')}>
        <div className="flex flex-col w-full max-w-[736px]">
          <GoBack />

          <CartProductGallery />
        </div>
        <CartSummary />
      </div>
    </main>
  )
}
