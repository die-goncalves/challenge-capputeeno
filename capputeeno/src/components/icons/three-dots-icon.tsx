import { SVGProps } from 'react'

type IThreeDotsIcon = Omit<
  SVGProps<SVGSVGElement>,
  'viewBox' | 'preserveAspectRatio'
>
export function ThreeDotsIcon(props: IThreeDotsIcon) {
  return (
    <svg
      viewBox="0 0 256 256"
      preserveAspectRatio="xMinYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"></path>
    </svg>
  )
}
