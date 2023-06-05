import clsx from 'clsx'

interface ISkeleton {
  className: string
}
export function Skeleton({ className }: ISkeleton) {
  return (
    <div
      className={clsx(
        className,
        "rounded-lg relative overflow-hidden bg-[rgb(var(--shape-gray-rgb))] after:absolute after:inset-0 after:bg-skeleton after:opacity-10 after:content-[''] after:animate-shimmer"
      )}
    />
  )
}
