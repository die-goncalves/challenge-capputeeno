import { SVGProps } from 'react'

type IArrowLeftIcon = Omit<
  SVGProps<SVGSVGElement>,
  'viewBox' | 'preserveAspectRatio'
>
export function ArrowLeftIcon(props: IArrowLeftIcon) {
  return (
    <svg
      viewBox="0 0 24 24"
      preserveAspectRatio="xMinYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 16L14 12L10 8"
        // stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
