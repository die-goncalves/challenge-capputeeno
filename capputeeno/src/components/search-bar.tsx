'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { SearchIcon } from './icons/search-icon'
import { createUrl } from '@/utils/createUrl'
import clsx from 'clsx'

export function SearchBar() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const searchValue = searchParams.get('q')

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formElement = e.target as HTMLFormElement
    const inputElement = formElement.search as HTMLInputElement

    if (inputElement.value) {
      const href = createUrl('/search', { q: inputElement.value })
      router.push(href)
    }
  }

  return (
    <form
      className={clsx('grid-in-[bottom]', 'sm:grid-in-[search]')}
      onSubmit={onSubmit}
    >
      <label className="relative block">
        <input
          className={clsx(
            'rounded-lg pl-4 pr-12 py-2.5 bg-[rgb(var(--input-background-rgb))] text-sm leading-[22px] placeholder:text-[rgb(var(--text-secondary-rgb))] block border-none',
            'outline-none focus:ring-2 focus:ring-[rgb(var(--orange-low))] transition-shadow',
            'w-full',
            'sm:w-72',
            '3xl:w-96'
          )}
          name="search"
          placeholder="Procurando por algo específico?"
          defaultValue={searchValue ?? ''}
        />
        <span className="absolute flex inset-y-0 right-4 items-center cursor-text">
          <SearchIcon className="stroke-[rgb(var(--text-secondary-rgb))] w-6 h-6" />
        </span>
      </label>
    </form>
  )
}
