import clsx from 'clsx'
import Link from 'next/link'
import { saira_stencil_one } from '@/app/fonts'

export function Logo() {
  return (
    <Link
      href={'/'}
      aria-label="Voltar para a página principal"
      className={clsx(
        'mr-auto text-[rgb(var(--brand-logo-rgb))]  font-normal rounded-lg outline-none focus:ring-2 focus:ring-[rgb(var(--orange-low))] transition-shadow',
        'text-2xl grid-in-[up-left]',
        '3xl:text-[40px] 3xl:leading-[60px] 3xl:grid-in-[logo]',
        saira_stencil_one.className
      )}
    >
      Capputeeno
    </Link>
  )
}
