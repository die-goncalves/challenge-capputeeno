'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { usePagination } from '../hooks/usePagination'
import { ArrowLeftIcon } from './icons/arrow-left-icon'
import { ArrowRightIcon } from './icons/arrow-right-icon'
import { ThreeDotsIcon } from './icons/three-dots-icon'
import { createUrl } from '@/utils/createUrl'

interface IPagination {
  totalCount: number
  siblingCount?: number
  perPage: number
}
export function Pagination(props: IPagination) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  let page = Number(searchParams.get('page') ?? 1)
  const sort = searchParams.get('sort')
  const searchValue = searchParams.get('q')

  const { totalCount, siblingCount = 1, perPage } = props

  const paginationRange = usePagination({
    currentPage: page,
    totalCount,
    siblingCount,
    perPage
  })

  if (!paginationRange) {
    return null
  }

  if (page === 0 || paginationRange.length < 2) {
    return null
  }

  let lastPage = paginationRange[paginationRange.length - 1]

  return (
    <ul className="flex gap-1">
      {paginationRange.map(pageNumber => {
        if (typeof pageNumber === 'string') {
          return (
            <li key={pageNumber}>
              <div className="flex w-8 h-8 bg-[rgb(var(--shape-gray-rgb))] items-center justify-center rounded-[8px]">
                <span>
                  <ThreeDotsIcon className="[&_>_path]:stroke-[rgb(var(--text-secondary-rgb))] w-6 h-6" />
                </span>
              </div>
            </li>
          )
        }

        return (
          <li key={pageNumber}>
            <Link
              href={createUrl(pathname, {
                page: pageNumber,
                sort,
                q: searchValue
              })}
              onClick={ev => (page = pageNumber)}
              className={clsx(
                'flex w-8 h-8 items-center justify-center rounded-[8px] border-[1px]',
                'outline-none focus:ring-2 focus:ring-[rgb(var(--orange-low))] transition-shadow',
                pageNumber === page
                  ? 'border-[rgb(var(--orange-low))] text-[rgb(var(--orange-low))] bg-white'
                  : 'border-transparent text-[rgb(var(--text-secondary-rgb))] bg-[rgb(var(--shape-gray-rgb))]'
              )}
            >
              {pageNumber}
            </Link>
          </li>
        )
      })}
      <li>
        {page === 1 ? (
          <div className="flex w-8 h-8 bg-[rgb(var(--shape-gray-rgb))] items-center justify-center rounded-[8px] opacity-50 cursor-not-allowed">
            <span>
              <ArrowRightIcon className="[&_>_path]:stroke-[rgb(var(--text-secondary-rgb))] w-6 h-6" />
            </span>
          </div>
        ) : (
          <Link
            href={createUrl(pathname, {
              page: page - 1,
              sort,
              q: searchValue
            })}
            onClick={ev => (page = page - 1)}
            className={clsx(
              'flex w-8 h-8 bg-[rgb(var(--shape-gray-rgb))] items-center justify-center rounded-[8px]',
              'outline-none focus:ring-2 focus:ring-[rgb(var(--orange-low))] transition-shadow',
              page === 1 && 'opacity-50 cursor-not-allowed'
            )}
          >
            <span>
              <ArrowRightIcon className="[&_>_path]:stroke-[rgb(var(--text-secondary-rgb))] w-6 h-6" />
            </span>
          </Link>
        )}
      </li>
      <li>
        {page === lastPage ? (
          <div className="flex w-8 h-8 bg-[rgb(var(--shape-gray-rgb))] items-center justify-center rounded-[8px] opacity-50 cursor-not-allowed">
            <span>
              <ArrowLeftIcon className="[&_>_path]:stroke-[rgb(var(--text-secondary-rgb))] w-6 h-6" />
            </span>
          </div>
        ) : (
          <Link
            href={createUrl(pathname, {
              page: page + 1,
              sort,
              q: searchValue
            })}
            onClick={ev => (page = page + 1)}
            className={clsx(
              'flex w-8 h-8 bg-[rgb(var(--shape-gray-rgb))] items-center justify-center rounded-[8px]',
              'outline-none focus:ring-2 focus:ring-[rgb(var(--orange-low))] transition-shadow',
              page === lastPage && 'opacity-50 cursor-not-allowed'
            )}
          >
            <span>
              <ArrowLeftIcon className="[&_>_path]:stroke-[rgb(var(--text-secondary-rgb))] w-6 h-6" />
            </span>
          </Link>
        )}
      </li>
    </ul>
  )
}
