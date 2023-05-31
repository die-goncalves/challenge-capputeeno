import clsx from 'clsx'
import Link from 'next/link'
import { saira_stencil_one } from '@/app/fonts'

export function Logo() {
  return (
    <Link
      href={'/'}
      aria-label="Voltar para a página principal"
      className={clsx(
        'text-[rgb(var(--brand-logo-rgb))] text-[40px] leading-[60px] font-normal rounded-lg outline-none focus:ring-2 focus:ring-[rgb(var(--orange-low))] transition-shadow',
        saira_stencil_one.className
      )}
    >
      Capputeeno
    </Link>
  )
}
