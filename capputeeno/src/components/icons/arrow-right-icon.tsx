import { SVGProps } from 'react'

type IArrowRightIcon = Omit<
  SVGProps<SVGSVGElement>,
  'viewBox' | 'preserveAspectRatio'
>
export function ArrowRightIcon(props: IArrowRightIcon) {
  return (
    <svg
      viewBox="0 0 24 24"
      preserveAspectRatio="xMinYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14 16L10 12L14 8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
