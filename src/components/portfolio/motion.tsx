import { useEffect, useRef, useState } from 'react'

/** Adds `is-in` once the element scrolls into view (pairs with the `.reveal` class). */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return { ref, inView, className: inView ? 'reveal is-in' : 'reveal' }
}

export function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const { ref, inView } = useReveal<HTMLSpanElement>()
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / 1400)
      setN(Math.round(value * (1 - Math.pow(1 - t, 3))))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])
  return (
    <span ref={ref} className="tabular-nums">
      {n}
      {suffix}
    </span>
  )
}
