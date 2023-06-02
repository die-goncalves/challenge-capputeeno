import { SVGProps } from 'react'

type IArrowDownIcon = Omit<
  SVGProps<SVGSVGElement>,
  'viewBox' | 'preserveAspectRatio'
>
export function ArrowDownIcon(props: IArrowDownIcon) {
  return (
    <svg
      viewBox="0 0 24 24"
      preserveAspectRatio="xMinYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 10L12 14L16 10"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
