'use client'

import { useRouter } from 'next/navigation'
import { ArrowBackIcon } from './icons/arrow-back-icon'

export function GoBack() {
  const router = useRouter()
  return (
    <button
      onClick={() => router.back()}
      className="inline-flex w-fit items-center gap-2 my-6 rounded outline-none focus:ring-2 focus:ring-[rgb(var(--orange-low))] transition-shadow"
    >
      <ArrowBackIcon className="stroke-[rgb(var(--text-secondary-rgb))] w-6 h-6" />
      <span className="text-sm font-medium text-[rgb(var(--text-secondary-rgb))]">
        Voltar
      </span>
    </button>
  )
}
