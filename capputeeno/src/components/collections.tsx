'use client'

import { clsx } from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CollectionPTBR, collections } from '@/types/collection'

function ActiveLink(props: { slug: string; name: string; pathname: string }) {
  const { slug, name, pathname } = props

  const active =
    (slug && pathname.includes(slug)) || (!slug && pathname === '/search')

  return (
    <Link
      className={clsx(
        'leading-[22px] uppercase rounded',
        'outline-none focus:ring-2 focus:ring-[rgb(var(--orange-low))] transition-shadow',
        active
          ? 'text-[rgb(var(--text-primary-rgb))] font-semibold underline decoration-[rgb(var(--orange-low))] decoration-4 underline-offset-4'
          : 'text-[rgb(var(--text-secondary-rgb))]'
      )}
      href={`/search/${slug}`}
      prefetch={false}
    >
      {name}
    </Link>
  )
}

export default function Collections() {
  const pathname = usePathname()

  return (
    <nav>
      <ul className="flex gap-10">
        {collections.map(c => {
          return (
            <li key={c}>
              <ActiveLink
                slug={c}
                name={CollectionPTBR[c]}
                pathname={pathname}
              />
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
