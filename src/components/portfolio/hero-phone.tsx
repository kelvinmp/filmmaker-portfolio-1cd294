import { useEffect, useState } from 'react'
import { Heart, MessageCircle, Send } from 'lucide-react'

import { profile, type Reel } from '@/data/portfolio'
import { ReelMedia } from './reel-media'

const CYCLE_MS = 2600

/** Phone mock in the hero that flips through reels on its own. */
export function HeroPhone({ reels, onOpen }: { reels: Reel[]; onOpen: (i: number) => void }) {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = window.setInterval(() => setI((x) => (x + 1) % reels.length), CYCLE_MS)
    return () => window.clearInterval(t)
  }, [reels.length])
  const reel = reels[i]

  return (
    <button
      type="button"
      onClick={() => onOpen(i)}
      aria-label={`Reproducir ${reel.title}`}
      className="group relative aspect-[9/16] w-[min(78vw,340px)] rotate-3 overflow-hidden rounded-[2.4rem] border-[6px] border-[#1d1d1d] bg-black text-left shadow-[0_40px_120px_-20px_hsl(17_97%_51%/0.35)] transition duration-500 hover:rotate-0 hover:scale-[1.02]"
    >
      {reels.map((r, idx) => (
        <div
          key={r.id}
          className="absolute inset-0 transition-opacity duration-300"
          style={{ opacity: idx === i ? 1 : 0 }}
        >
          <ReelMedia reel={r} width={500} active={idx === i} eager={idx < 2} />
        </div>
      ))}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/90 to-transparent" />

      <div className="absolute inset-x-3 top-3 flex gap-1">
        {reels.map((r, idx) => (
          <div key={r.id} className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/25">
            {idx <= i && (
              <div
                key={idx === i ? `run-${i}` : 'full'}
                className="h-full bg-white"
                style={
                  idx === i
                    ? { animation: `phone-bar ${CYCLE_MS}ms linear forwards`, transformOrigin: 'left' }
                    : undefined
                }
              />
            )}
          </div>
        ))}
      </div>

      <div key={reel.id} className="absolute inset-x-4 top-[30%] -rotate-3 text-center">
        <span className="fade-up inline-block bg-primary px-2 py-0.5 font-display text-2xl uppercase leading-tight text-primary-foreground">
          {reel.hook}
        </span>
      </div>

      <div className="absolute bottom-24 right-3 flex flex-col items-center gap-4 text-white">
        <Heart className="size-6 fill-rec text-rec" />
        <MessageCircle className="size-6" />
        <Send className="size-6" />
      </div>

      <div className="absolute inset-x-4 bottom-5 text-white">
        <p className="text-xs font-semibold opacity-80">{profile.handle}</p>
        <p className="mt-0.5 font-display text-xl uppercase leading-none">{reel.title}</p>
        <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-primary">
          {reel.views} vistas · toca para ver
        </p>
      </div>
    </button>
  )
}
