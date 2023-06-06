import clsx from 'clsx'
import { CartSummary } from '@/components/cart-summary'
import { CartProductGallery } from '@/components/cart-product-gallery'
import { GoBack } from '@/components/go-back'

export default function CartPage() {
  return (
    <main
      className={clsx(
        'flex flex-col items-center justify-between px-4',
        'sm:px-8',
        'lg:px-20',
        '2xl:px-40'
      )}
    >
      <div className={clsx('flex w-full flex-col', 'md:flex-row')}>
        <div
          className={clsx(
            'flex flex-col w-full',
            'md:max-w-[336px]',
            'lg:max-w-[480px]',
            'xl:max-w-[640px]',
            '3xl:max-w-[736px]'
          )}
        >
          <GoBack />

          <CartProductGallery />
        </div>
        <CartSummary />
      </div>
    </main>
  )
}
