'use client'

import { clsx } from 'clsx'
import Link from 'next/link'
import { useParams, useSearchParams } from 'next/navigation'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { ArrowDownIcon } from './icons/arrow-down-icon'
import { SortPTBR, sorts } from '@/types/sort'
import { createUrl } from '@/utils/createUrl'

function ActiveLink(props: {
  slug: string
  name: string
  active: boolean
  collection?: string
  q: string | null
}) {
  const { slug, name, active, collection, q } = props

  const collectionParam = collection ? '/' + collection : ''
  const href = createUrl(`/search${collectionParam}`, { sort: slug, q })

  return (
    <NavigationMenu.Link asChild>
      <Link
        className={clsx(
          'flex items-center text-sm leading-[22px] h-6',
          'rounded outline-none focus:ring-2 focus:ring-[rgb(var(--orange-low))] transition-shadow',
          active
            ? 'text-[rgb(var(--text-primary-rgb))] font-semibold underline decoration-[rgb(var(--orange-low))] decoration-4 underline-offset-4'
            : 'text-[rgb(var(--text-secondary-rgb))]'
        )}
        href={href}
        prefetch={false}
      >
        {name}
      </Link>
    </NavigationMenu.Link>
  )
}

export default function Sorts() {
  const params = useParams()
  const searchParams = useSearchParams()
  const searchValue = searchParams.get('q')
  const sortValue = searchParams.get('sort')

  return (
    <NavigationMenu.Root className="relative z-[1] flex justify-center">
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger asChild>
            <button className="flex items-center gap-2 rounded outline-none focus:ring-2 focus:ring-[rgb(var(--orange-low))] transition-shadow">
              <span className="text-sm leading-[22px] text-[rgb(var(--text-secondary-rgb))]">
                Organizar por
              </span>
              <ArrowDownIcon className="stroke-[rgb(var(--text-secondary-rgb))] w-6 h-6" />
            </button>
          </NavigationMenu.Trigger>

          <NavigationMenu.Content className="absolute bg-[rgb(var(--white))] shadow-[0px_4px_12px_0px_rgba(0,_0,_0,_0.1)] rounded px-4 py-3 top-full right-0 w-44 mt-1 outline-none focus:ring-2 focus:ring-[rgb(var(--orange-low))] transition-shadow">
            <ul className="flex flex-col gap-1 w-full">
              {sorts.map(c => {
                return (
                  <li key={c}>
                    <ActiveLink
                      slug={c}
                      name={SortPTBR[c]}
                      active={sortValue === c}
                      collection={params.collection}
                      q={searchValue}
                    />
                  </li>
                )
              })}
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}
