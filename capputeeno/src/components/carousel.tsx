'use client'

import clsx from 'clsx'
import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import { ProductItemType } from '@/types/cart-product'
import { formatPrice } from '@/utils/format-price'
import { saira_stencil_one } from '@/app/fonts'

interface IThumb {
  selected: boolean
  imgSrc: string
  name: string
  onClick: () => void
}
function Thumb({ imgSrc, name, onClick, selected }: IThumb) {
  return (
    <div
      className={clsx(
        'flex-[0_0_28%] relative',
        selected ? 'opacity-100' : 'opacity-20'
      )}
    >
      <button onClick={onClick} className="" type="button">
        <div className={clsx('w-full h-12', 'sm:h-14')}>
          <Image
            src={imgSrc}
            alt={name}
            fill
            sizes="(max-width: 768px) 70vw, (min-width: 769px) 100vw"
            className="object-cover rounded"
          />
        </div>
      </button>
    </div>
  )
}

interface ICarousel {
  slides: ProductItemType[]
  options?: EmblaOptionsType
}
export function Carousel({ slides, options }: ICarousel) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true
  })

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaMainApi) return
    onSelect()
    emblaMainApi.on('select', onSelect)
    emblaMainApi.on('reInit', onSelect)
  }, [emblaMainApi, onSelect])

  return (
    <section
      className={clsx(
        'flex flex-col h-[calc(100svh-108px)] p-4',
        'sm:h-[calc(100svh-80px)] sm:px-8'
      )}
    >
      <div className="flex h-full overflow-hidden" ref={emblaMainRef}>
        <div className="flex -ml-4 flex-1">
          {slides.map(p => (
            <div key={p.id} className="relative  flex-[0_0_100%] pl-4 min-w-0">
              <div className="relative w-full h-full rounded overflow-hidden">
                <Image
                  src={p.image_url}
                  alt={p.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 70vw, (min-width: 769px) 100vw"
                />
                <div
                  className={clsx(
                    'absolute flex flex-col rounded z-10 bg-black/25 backdrop-blur left-2 right-2 bottom-2 p-2',
                    'sm:right-1/2',
                    'md:right-1/3'
                  )}
                >
                  <h2
                    className={clsx(
                      'font-medium text-lg text-[rgb(var(--white))] line-clamp-1',
                      saira_stencil_one.className
                    )}
                  >
                    {p.name}
                  </h2>
                  <p className="text-sm text-[rgba(var(--white))]/80 line-clamp-2">
                    {p.description}
                  </p>
                  <span className="font-bold text-[rgba(var(--orange-low))]">
                    {formatPrice(p.price_in_cents)}
                  </span>
                  <Link
                    className={clsx(
                      'w-fit p-2 rounded mt-2 relative z-10 bg-[rgba(var(--yellow))]',
                      'outline-none focus:outline-2 focus:outline-offset-2 focus:outline-[rgb(var(--orange-low))] transition-shadow'
                    )}
                    href={`/product/${p.id}`}
                  >
                    Ir para o produto
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <div className="overflow-hidden" ref={emblaThumbsRef}>
          <div className="flex gap-2">
            {slides.map((p, index) => (
              <Thumb
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                imgSrc={p.image_url}
                name={p.name}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
