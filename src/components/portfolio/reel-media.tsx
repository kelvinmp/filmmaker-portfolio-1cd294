import { forwardRef, useEffect, useRef } from 'react'

import { img, type Reel } from '@/data/portfolio'
import { cn } from '@/lib/utils'

type Props = {
  reel: Reel
  width: number
  active?: boolean
  muted?: boolean // 👈 NUEVA PROPIEDAD
  className?: string
  eager?: boolean
  onTimeUpdate?: React.ReactEventHandler<HTMLVideoElement>
  onEnded?: () => void
}

/**
 * Plays the real clip when a reel has a `video`, otherwise animates the
 * poster with a slow push-in so every card feels like footage.
 */
export const ReelMedia = forwardRef<HTMLVideoElement, Props>(function ReelMedia(
  { reel, width, active = true, muted = true, className, eager, onTimeUpdate, onEnded }, // 👈 Agregamos muted = true aquí
  forwardedRef,
) {
  const poster = img(reel.poster, width)
  const internalRef = useRef<HTMLVideoElement | null>(null)

  // Obligamos al video a reproducirse o pausarse cuando entra/sale de la pantalla
  useEffect(() => {
    const video = internalRef.current
    if (!video) return

    if (active) {
      video.play().catch(() => {})
    } else {
      video.pause()
    }
  }, [active])

  if (reel.video) {
    return (
      <video
        ref={(node) => {
          internalRef.current = node
          if (typeof forwardedRef === 'function') {
            forwardedRef(node)
          } else if (forwardedRef) {
            forwardedRef.current = node
          }
        }}
        src={reel.video}
        poster={poster}
        muted={muted} // 👈 Usamos la propiedad dinámica
        loop={!onEnded}
        playsInline
        autoPlay={active}
        preload={eager ? 'auto' : 'metadata'}
        onTimeUpdate={onTimeUpdate}
        onEnded={onEnded}
        className={cn('h-full w-full object-cover', className)}
      />
    )
  }

  return (
    <img
      src={poster}
      alt={`${reel.title} para ${reel.brand}`}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      draggable={false}
      className={cn(
        'h-full w-full object-cover',
        active && 'kenburns',
        className,
      )}
    />
  )
})