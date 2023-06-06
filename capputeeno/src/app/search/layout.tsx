import { Suspense } from 'react'
import Collections from '@/components/collections'
import Sorts from '@/components/sorts'
import clsx from 'clsx'

export default function SearchLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className={clsx(
        'flex flex-col mt-8 mb-5 px-4',
        'sm:px-8',
        'lg:px-20',
        '2xl:px-40'
      )}
    >
      <div
        className={clsx('grid grid-cols-[1fr,auto] grid-rows-1 items-start')}
      >
        <Suspense>
          <Collections />
          <Sorts />
        </Suspense>
      </div>
      {children}
    </div>
  )
}
