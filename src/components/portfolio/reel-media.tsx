import { forwardRef } from 'react'

import { img, type Reel } from '@/data/portfolio'
import { cn } from '@/lib/utils'

type Props = {
  reel: Reel
  width: number
  active?: boolean
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
  { reel, width, active = true, className, eager, onTimeUpdate, onEnded },
  ref,
) {
  const poster = img(reel.poster, width)

  if (reel.video) {
    return (
      <video
        ref={ref}
        src={reel.video}
        poster={poster}
        muted
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
