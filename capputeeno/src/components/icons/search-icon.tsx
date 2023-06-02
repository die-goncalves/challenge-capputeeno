import { SVGProps } from 'react'

type ISearchIcon = Omit<
  SVGProps<SVGSVGElement>,
  'viewBox' | 'preserveAspectRatio'
>
export function SearchIcon(props: ISearchIcon) {
  return (
    <svg
      viewBox="0 0 24 24"
      preserveAspectRatio="xMinYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="11.059"
        cy="11.0586"
        r="7.06194"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.0034 20.0033L16.0518 16.0517"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
