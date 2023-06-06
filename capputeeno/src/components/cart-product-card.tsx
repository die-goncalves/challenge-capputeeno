import clsx from 'clsx'
import Image from 'next/image'
import * as Select from '@radix-ui/react-select'
import { useCartDispatch } from '@/contexts/cart-context'
import { formatPrice } from '@/utils/format-price'
import { TrashIcon } from './icons/trash-icon'
import { ArrowDownIcon } from './icons/arrow-down-icon'

interface ICartProductCard {
  id: string
  name: string
  description: string
  imageURL: string
  price: number
  amount: number
}
export function CartProductCard(props: ICartProductCard) {
  const { id, name, imageURL, description, amount, price } = props
  const { dispatch } = useCartDispatch()

  function handleDeleteProduct() {
    dispatch({ type: 'remove', payload: { id } })
  }
  function handleUpdateProduct(value: string) {
    const valueNumber = Number(value)
    dispatch({ type: 'update', payload: { id, amount: valueNumber } })
  }

  const range = Array.from({ length: 2 * amount }, (v, k) => (k + 1).toString())
  const priceFormatted = formatPrice(price)
  return (
    <article
      className={clsx(
        'flex flex-col w-full h-auto bg-[rgb(var(--white))] rounded-lg overflow-hidden',
        'lg:flex-row',
        '3xl:gap-8'
      )}
    >
      <div
        className={clsx(
          'relative flex flex-none w-full h-32',
          'sm:h-44',
          'lg:w-[192px] lg:h-auto',
          '3xl:w-[256px]'
        )}
      >
        <Image
          src={imageURL}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 70vw, (min-width: 769px) 30vw"
        />
      </div>
      <div className={clsx('pt-2 px-4 pb-4', 'lg:pt-4 lg:pr-4 lg:pb-6')}>
        <header className="flex justify-between items-center">
          <h2 className="text-xl font-light">{name}</h2>
          <button
            onClick={handleDeleteProduct}
            className={clsx(
              'relative flex flex-none rounded-full w-[42px] h-[42px] items-center justify-center focus-within:bg-[rgb(var(--shape-light-rgb))] hover:bg-[rgb(var(--shape-light-rgb))] transition-[background-color]',
              'outline-none focus:ring-2 focus:ring-[rgb(var(--orange-low))] transition-shadow'
            )}
          >
            <TrashIcon className="stroke-[rgb(var(--red))] w-6 h-6" />
          </button>
        </header>
        <main className="text-xs mt-3 mb-6">{description}</main>
        <footer className="flex justify-between items-end">
          <Select.Root
            defaultValue={amount.toString()}
            onValueChange={value => handleUpdateProduct(value)}
          >
            <Select.Trigger
              className={clsx(
                'flex text-[rgb(var(--text-secondary-rgb))] gap-2 bg-[rgb(var(--input-background-rgb))] rounded-lg h-10 py-2 pl-3 pr-1 border-[1px] border-[#A8A8B3]',
                'outline-none focus:ring-2 focus:ring-[rgb(var(--orange-low))] transition-shadow'
              )}
              aria-label="Quantidade do produto"
            >
              <Select.Value />
              <Select.Icon asChild>
                <ArrowDownIcon className="stroke-[rgb(var(--text-secondary-rgb))] w-6 h-6" />
              </Select.Icon>
            </Select.Trigger>
            <Select.Portal>
              <Select.Content className="z-10 overflow-hidden bg-[rgb(var(--white))] shadow-[0px_4px_12px_0px_rgba(0,_0,_0,_0.1)] rounded top-full right-0 w-24 mt-1 outline-none focus:ring-2 focus:ring-[rgb(var(--orange-low))] transition-shadow">
                <Select.ScrollUpButton className="flex items-center justify-center bg-[rgb(var(--shape-light-rgb))] cursor-default">
                  <ArrowDownIcon className="stroke-[rgb(var(--text-secondary-rgb))] w-6 h-6 rotate-180" />
                </Select.ScrollUpButton>
                <Select.Viewport className="p-2">
                  {range.map(r => {
                    return (
                      <Select.Item
                        key={r}
                        value={r}
                        className={clsx(
                          'relative h-6 rounded pl-8 cursor-pointer',
                          '[&+div]:mt-2',
                          'outline-none focus:ring-2 focus:ring-[rgb(var(--orange-low))] transition-shadow'
                        )}
                      >
                        <Select.ItemText>{r}</Select.ItemText>
                        <Select.ItemIndicator className="absolute left-1 top-0 bottom-0 inline-flex items-center justify-center">
                          <svg
                            className="w-4 h-4 fill-[rgb(var(--green))]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                            preserveAspectRatio="xMinYMid meet"
                          >
                            <path d="M378-246 154-470l43-43 181 181 384-384 43 43-427 427Z" />
                          </svg>
                        </Select.ItemIndicator>
                      </Select.Item>
                    )
                  })}
                </Select.Viewport>
                <Select.ScrollDownButton className="flex items-center justify-center bg-[rgb(var(--shape-light-rgb))] cursor-default">
                  <ArrowDownIcon className="stroke-[rgb(var(--text-secondary-rgb))] w-6 h-6" />
                </Select.ScrollDownButton>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
          <span className="font-semibold">{priceFormatted}</span>
        </footer>
      </div>
    </article>
  )
}
