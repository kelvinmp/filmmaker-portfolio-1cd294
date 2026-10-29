import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronDown, ChevronUp, Eye, Pause, Play, X } from 'lucide-react'

import type { Reel } from '@/data/portfolio'
import { profile } from '@/data/portfolio'
import { ReelMedia } from './reel-media'

type Props = {
  reels: Reel[]
  startIndex: number
  onClose: () => void
}

/** Fullscreen, stories-style vertical player: auto-advances and loops forever. */
export function ReelPlayer({ reels, startIndex, onClose }: Props) {
  const [index, setIndex] = useState(startIndex)
  const [progress, setProgress] = useState(0)
  const progressRef = useRef(0)
  const [paused, setPaused] = useState(false)
  const holdTimer = useRef<number | null>(null)
  const held = useRef(false)
  const downAt = useRef<{ x: number; y: number } | null>(null)
  const wheelLock = useRef(0)
  const touchY = useRef<number | null>(null)
  const reel = reels[index]

  const go = useCallback(
    (dir: 1 | -1) => {
      setIndex((i) => (i + dir + reels.length) % reels.length)
      progressRef.current = 0
      setProgress(0)
    },
    [reels.length],
  )

  // Timer for poster-only reels; real videos report their own progress.
  useEffect(() => {
    if (reel.video || paused) return
    let raf = 0
    let last = performance.now()
    let p = progressRef.current
    const tick = (now: number) => {
      p += (now - last) / 1000 / reel.duration
      last = now
      if (p >= 1) {
        go(1)
        return
      }
      progressRef.current = p
      setProgress(p)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [reel, paused, go])

  const videoRef = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    if (paused) v.pause()
    else void v.play().catch(() => {})
  }, [paused, index])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') go(1)
      else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') go(-1)
      else if (e.key === ' ') {
        e.preventDefault()
        setPaused((p) => !p)
      }
    }
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [go, onClose])

  const onWheel = (e: React.WheelEvent) => {
    const now = Date.now()
    if (now - wheelLock.current < 650 || Math.abs(e.deltaY) < 20) return
    wheelLock.current = now
    go(e.deltaY > 0 ? 1 : -1)
  }

  const startHold = (e: React.PointerEvent) => {
    held.current = false
    downAt.current = { x: e.clientX, y: e.clientY }
    holdTimer.current = window.setTimeout(() => {
      held.current = true
      setPaused(true)
    }, 220)
  }
  const endHold = (e: React.PointerEvent<HTMLDivElement>) => {
    if (holdTimer.current) window.clearTimeout(holdTimer.current)
    if (held.current) {
      setPaused(false)
      return
    }
    const d = downAt.current
    // a swipe, not a tap — the touch handler takes care of it
    if (d && Math.hypot(e.clientX - d.x, e.clientY - d.y) > 12) return
    const rect = e.currentTarget.getBoundingClientRect()
    go(e.clientX - rect.left < rect.width / 3 ? -1 : 1)
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${reel.title} — ${reel.brand}`}
      className="fade-up fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl"
      onWheel={onWheel}
      onTouchStart={(e) => (touchY.current = e.touches[0].clientY)}
      onTouchEnd={(e) => {
        if (touchY.current === null) return
        const dy = touchY.current - e.changedTouches[0].clientY
        touchY.current = null
        if (Math.abs(dy) > 60) go(dy > 0 ? 1 : -1)
      }}
    >
      {/* blurred ambient copy of the frame */}
      <div className="pointer-events-none absolute inset-0 opacity-40 blur-3xl saturate-150">
        <ReelMedia key={`bg-${reel.id}`} reel={reel} width={200} active={false} />
      </div>

      <div className="relative h-[100dvh] w-full max-w-[min(100vw,calc(100dvh*9/16))] overflow-hidden bg-black sm:h-[92dvh] sm:rounded-3xl">
        <div
          className="absolute inset-0 cursor-pointer select-none"
          onPointerDown={startHold}
          onPointerUp={endHold}
          onPointerLeave={() => {
            if (holdTimer.current) window.clearTimeout(holdTimer.current)
            if (held.current) setPaused(false)
          }}
        >
          <ReelMedia
            key={reel.id}
            ref={videoRef}
            reel={reel}
            width={900}
            eager
            className={paused ? '[animation-play-state:paused]' : undefined}
            onTimeUpdate={(e) => {
              const v = e.currentTarget
              if (v.duration) setProgress(v.currentTime / v.duration)
            }}
            onEnded={() => go(1)}
          />
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        {/* progress segments */}
        <div className="absolute inset-x-3 top-3 flex gap-1">
          {reels.map((r, i) => (
            <div key={r.id} className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/25">
              <div
                className="h-full origin-left bg-white"
                style={{
                  transform: `scaleX(${i < index ? 1 : i === index ? progress : 0})`,
                }}
              />
            </div>
          ))}
        </div>

        <div className="absolute inset-x-4 top-7 flex items-center justify-between">
          <div className="flex items-center gap-2 font-mono text-[11px] tracking-widest text-white/80">
            <span className="rec-dot inline-block size-2 rounded-full bg-rec" />
            {String(index + 1).padStart(2, '0')}/{String(reels.length).padStart(2, '0')}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              aria-label={paused ? 'Reproducir' : 'Pausar'}
              className="grid size-9 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
            >
              {paused ? <Play className="size-4" /> : <Pause className="size-4" />}
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar reproductor"
              className="grid size-9 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>

        {/* hook caption — big, like the real thing */}
        <div key={`hook-${reel.id}`} className="pointer-events-none absolute inset-x-6 top-[22%] text-center">
          <div className="inline-block -rotate-2">
            <p className="fade-up bg-primary px-3 py-1 font-display text-3xl uppercase leading-none text-primary-foreground sm:text-4xl">
              {reel.hook}
            </p>
          </div>
        </div>

        <div key={`meta-${reel.id}`} className="fade-up pointer-events-none absolute inset-x-5 bottom-6">
          <p className="text-sm font-semibold text-white/80">{profile.handle}</p>
          <h3 className="mt-1 font-display text-4xl uppercase leading-[0.95] text-white">{reel.title}</h3>
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
            <span className="rounded-full bg-white px-2.5 py-1 font-semibold text-black">{reel.brand}</span>
            <span className="rounded-full border border-white/30 px-2.5 py-1 text-white/90">{reel.category}</span>
            <span className="flex items-center gap-1 rounded-full border border-white/30 px-2.5 py-1 text-white/90">
              <Eye className="size-3" /> {reel.views}
            </span>
            <span className="rounded-full border border-primary/60 px-2.5 py-1 text-primary">
              {reel.retention} retención a 3s
            </span>
          </div>
        </div>

        {paused && (
          <div className="pointer-events-none absolute inset-0 grid place-items-center">
            <div className="grid size-20 place-items-center rounded-full bg-black/50 backdrop-blur">
              <Pause className="size-8 text-white" />
            </div>
          </div>
        )}
      </div>

      <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col gap-3 md:flex">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Reel anterior"
          className="grid size-12 place-items-center rounded-full border border-white/20 text-white transition hover:bg-white hover:text-black"
        >
          <ChevronUp />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Siguiente reel"
          className="grid size-12 place-items-center rounded-full border border-white/20 text-white transition hover:bg-white hover:text-black"
        >
          <ChevronDown />
        </button>
      </div>
      <p className="absolute bottom-4 left-6 hidden font-mono text-[11px] uppercase tracking-widest text-white/40 md:block">
        Scroll · ← → · Espacio para pausar · Mantén para congelar
      </p>
    </div>
  )
}
