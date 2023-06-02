import { Suspense } from 'react'
import Collections from '@/components/collections'
import Sorts from '@/components/sorts'

export default function SearchLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col mt-8 mb-5 mx-40">
      <div className="flex items-center justify-between">
        <Suspense>
          <Collections />
          <Sorts />
        </Suspense>
      </div>
      {children}
    </div>
  )
}
