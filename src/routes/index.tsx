import { useMemo, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { ArrowDownRight, ArrowUpRight, Eye, Mail, Play } from 'lucide-react'

import {
  categories,
  fotos,
  img,
  marquee,
  profile,
  reels,
  services,
  stats,
  type Reel,
} from '@/data/portfolio'
import { cn } from '@/lib/utils'
import { BookingForm } from '@/components/portfolio/booking-form'
import { HeroPhone } from '@/components/portfolio/hero-phone'
import { CountUp, useReveal } from '@/components/portfolio/motion'
import { ReelMedia } from '@/components/portfolio/reel-media'
import { ReelPlayer } from '@/components/portfolio/reel-player'

export const Route = createFileRoute('/')({
  component: Home,
})

// Adaptamos "fotos" al formato Reel globalmente para usarlo en el Hero y en la galería
const photoReels: Reel[] = fotos.map((f, idx) => ({
  id: `${f.id}-${idx}`,
  title: f.title,
  brand: 'Fotografía',
  category: [],      // 👈 Lo dejamos vacío
  hook: f.hook || f.title,
  poster: f.src,
  views: '',         // 👈 Lo dejamos vacío
  retention: '',     // 👈 Lo dejamos vacío
  duration: 5,
}))

function Home() {
  const [filter, setFilter] = useState<(typeof categories)[number]>('Todo')
  const [player, setPlayer] = useState<{ list: Reel[]; index: number } | null>(null)
  const visible = useMemo(
    () => (filter === 'Todo' ? reels : reels.filter((r) => r.category.includes(filter))),
    [filter],
  )

  return (
    <div className="relative overflow-x-clip">
      <div className="grain" aria-hidden />
      <Nav />

      <Hero onOpen={(list, index) => setPlayer({ list, index })} />
      <Marquee />

      {/* ---------- THE FEED (VIDEOS) ---------- */}
      <section id="reels" className="mx-auto max-w-7xl px-5 pb-32 pt-24 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">● Trabajo destacado</p>
            <h2 className="mt-3 font-display text-[clamp(3.5rem,11vw,9rem)] uppercase leading-[0.85]">
              audiovisual
            </h2>
          </div>
          <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 md:mx-0 md:px-0">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                aria-pressed={filter === c}
                className={cn(
                  'shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition active:scale-95',
                  filter === c
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-white/15 hover:border-white/50',
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {visible.map((reel, i) => (
            <ReelCard
              key={`${reel.id}-${i}`}
              reel={reel}
              index={i}
              isPlayerOpen={!!player} // <-- 1. Agrega esta línea
              onOpen={() => setPlayer({ list: visible, index: i })}
            />
          ))}
        </div>
        <p className="mt-24 text-center font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Toca cualquier reel y sigue deslizando
        </p>
      </section>

      {/* ---------- SECCIÓN DE FOTOS ---------- */}
      <section id="fotos" className="mx-auto max-w-7xl px-5 pb-32 pt-10 md:px-10">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">● Trabajo fotográfico</p>
          <h2 className="mt-3 font-display text-[clamp(3.5rem,11vw,9rem)] uppercase leading-[0.85]">
            Fotografía
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {fotos.map((foto, i) => (
            <button
              key={`${foto.id}-${i}`}
              type="button"
              onClick={() => setPlayer({ list: photoReels, index: i })}
              aria-label={`Ver foto ${foto.title}`}
              className="group relative aspect-[4/5] w-full cursor-pointer overflow-hidden rounded-2xl bg-card text-left"
            >
              <img
                src={img(foto.src, 700)}
                alt={foto.title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <p className="absolute bottom-4 left-4 font-display text-xl uppercase text-white opacity-0 transition group-hover:opacity-100">
                {foto.title}
              </p>
            </button>
          ))}
        </div>
      </section>

      <Stats />
      <About />
      <Services />
      <Contact />
      <Footer />

      {player && (
        <ReelPlayer reels={player.list} startIndex={player.index} onClose={() => setPlayer(null)} />
      )}
    </div>
  )
}

/* ---------------------------------------------------------------------- */

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.41 9.41 0 0 1-1.44-5.02c0-5.2 4.23-9.43 9.44-9.43 2.52 0 4.89.98 6.67 2.77a9.37 9.37 0 0 1 2.76 6.67c0 5.2-4.24 9.43-9.45 9.43m8.03-17.46A11.28 11.28 0 0 0 12.05.72C5.79.72.7 5.81.7 12.07c0 2 .52 3.95 1.52 5.67L.6 23.62l6.02-1.58a11.33 11.33 0 0 0 5.42 1.38h.01c6.26 0 11.35-5.09 11.35-11.35 0-3.03-1.18-5.88-3.32-8.03" />
    </svg>
  )
}

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 mix-blend-difference">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
        <a href="#top" className="font-display text-xl uppercase tracking-wide text-white">
          {profile.name}
        </a>
        <nav className="flex items-center gap-3 text-sm font-semibold text-white">
          <a
            href={`https://wa.me/${profile.whatsapp}?text=${encodeURIComponent('¡Hola Giovanni! Vi tu portafolio y me gustaría hablar sobre un proyecto.')}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Escríbeme por WhatsApp"
            className="grid size-9 place-items-center rounded-full border border-white transition hover:bg-white hover:text-black"
          >
            <WhatsAppIcon className="size-4" />
          </a>
          <a href="#book" className="rounded-full border border-white px-4 py-1.5 transition hover:bg-white hover:text-black">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  )
}

function Hero({ onOpen }: { onOpen: (list: Reel[], i: number) => void }) {
  const lines = ['¡Hagamos', 'arte!']

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden pt-24">
      <img
        src={img('/img/hero.png', 1200)}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-25 md:left-auto md:w-1/2"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-10 md:grid-cols-[1.25fr_1fr] md:px-10 md:pt-16">
        <div>
          <p className="fade-up font-mono text-xs uppercase tracking-[0.3em] text-primary" style={{ animationDelay: '0.05s' }}>
            {profile.role}
          </p>
          <h1 className="mt-5 font-display text-[clamp(5rem,17vw,13rem)] uppercase leading-[0.82]">
            {lines.map((l, i) => (
              <span key={l} className="block overflow-hidden">
                <span
                  className={cn('rise block', i === lines.length - 1 && 'text-primary')}
                  style={{ animationDelay: `${0.1 + i * 0.1}s` }}
                >
                  {l}
                </span>
              </span>
            ))}
          </h1>
          <p
            className="fade-up mt-8 max-w-md text-lg text-white/75 md:text-xl"
            style={{ animationDelay: '0.4s' }}
          >
            Creación de Contenido para Marcas, Tiendas, Negocios con fotografía y videografía cinematográfica. Estrategias, paquetes y cronogramas de contenido personalizado para cada marca.
          </p>
          <div className="fade-up mt-10 flex flex-wrap gap-3" style={{ animationDelay: '0.5s' }}>
            <a
              href="#book"
              className="group flex items-center gap-3 rounded-full bg-primary py-2 pl-2 pr-6 font-semibold text-primary-foreground transition hover:bg-white active:scale-95"
            >
              <span className="grid size-10 place-items-center rounded-full bg-black text-primary transition group-hover:scale-110">
                <Mail className="size-4" />
              </span>
              Contacto
            </a>
          </div>
        </div>

        <div className="fade-up flex justify-center md:justify-end" style={{ animationDelay: '0.2s' }}>
          <HeroPhone reels={photoReels} onOpen={(index) => onOpen(photoReels, index)} />
        </div>
      </div>
    </section>
  )
}

function Marquee() {
  const row = [...marquee, ...marquee]
  return (
    <div className="relative -rotate-2 border-y border-black bg-primary py-4 text-primary-foreground">
      <div className="marquee flex w-max gap-10 whitespace-nowrap">
        {row.map((b, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-3xl uppercase md:text-4xl">
            {b} <span className="text-2xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

function ReelCard({ 
  reel, 
  index, 
  isPlayerOpen, 
  onOpen 
}: { 
  reel: Reel; 
  index: number; 
  isPlayerOpen: boolean; 
  onOpen: () => void 
}) {
  const reveal = useReveal<HTMLButtonElement>()
  return (
    <button
      ref={reveal.ref}
      type="button"
      onClick={onOpen}
      aria-label={`Reproducir ${reel.title} para ${reel.brand}`}
      className={cn(
        reveal.className,
        'group relative aspect-[9/16] overflow-hidden rounded-2xl bg-card text-left',
        index % 2 === 1 && 'translate-y-8 md:translate-y-16',
      )}
      style={{ transitionDelay: `${(index % 4) * 80}ms` }}
    >
      <div className="absolute inset-0 transition duration-700 group-hover:scale-105">
        {/* 3. Cambia active para que se pause si el player está abierto */}
        <ReelMedia 
          reel={reel} 
          width={500} 
          active={reveal.inView && !isPlayerOpen} 
        />
      </div>
      <div className="absolute left-3 right-3 top-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-white/80">
        <span className="rounded-full bg-black/40 px-2 py-1 backdrop-blur">
          {reel.category.join(' · ')}
        </span>
        <span className="flex items-center gap-1 rounded-full bg-black/40 px-2 py-1 backdrop-blur">
          <Eye className="size-3" /> {reel.views}
        </span>
      </div>

      <div className="absolute inset-x-3 top-1/3 -rotate-3 text-center opacity-0 transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
        <span className="inline-block bg-primary px-2 py-0.5 font-display text-lg uppercase leading-tight text-primary-foreground md:text-2xl">
          {reel.hook}
        </span>
      </div>

      <div className="absolute inset-0 grid place-items-center opacity-0 transition duration-300 group-hover:opacity-100">
        <span className="mt-24 grid size-14 scale-75 place-items-center rounded-full bg-white/90 text-black transition duration-300 group-hover:scale-100">
          <Play className="size-5 fill-current" />
        </span>
      </div>

      <div className="absolute inset-x-3 bottom-3 md:inset-x-4 md:bottom-4">
        <p className="font-mono text-[10px] uppercase tracking-widest text-primary">{reel.brand}</p>
        <p className="mt-1 font-display text-xl uppercase leading-none text-white md:text-2xl">{reel.title}</p>
      </div>
    </button>
  )
}

function Stats() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-5">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={cn(
              'border-border px-4 py-12 lg:px-8 md:py-16',
              i % 2 === 0 ? 'border-r md:border-r-0' : '',
              i < 4 ? 'border-b md:border-b-0' : '',
              i < 4 ? 'md:border-r' : '',
            )}
          >
            <p className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-none text-primary">
              <CountUp value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground lg:text-[11px]">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

function About() {
  const reveal = useReveal<HTMLDivElement>()
  return (
    <section id="sobre-mi" className="mx-auto max-w-7xl px-5 py-32 md:px-10">
      <div ref={reveal.ref} className={cn(reveal.className, 'grid items-center gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20')}>
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-3 -rotate-3 rounded-[2rem] border-2 border-primary" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <img
              src={img('/img/giovanni.jpg', 700)}
              alt={`${profile.name} detrás de cámara`}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <span className="absolute -bottom-5 -right-3 rotate-6 rounded-full bg-rec px-4 py-2 font-mono text-xs uppercase tracking-widest text-white">
            ● Detrás de escena
          </span>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">● Sobre mí</p>
          <h2 className="mt-4 font-display text-[clamp(3rem,7vw,6rem)] uppercase leading-[1.2]">
            {profile.bioTitle}
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-white/75 md:text-xl">
            {profile.bio.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {['Guion', 'Dirección', 'Cámara', 'Imagen de Marca', 'Edición', 'Color'].map((t) => (
              <span key={t} className="rounded-full border border-white/15 px-4 py-1.5 text-sm">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-32 md:px-10">
      <h2 className="font-display text-[clamp(3rem,9vw,7rem)] uppercase leading-[0.85]">
        Lo que <span className="text-primary">hago</span>
      </h2>
      <div className="mt-12 border-t border-border">
        {services.map((s) => (
          <div
            key={s.code}
            className="group grid items-baseline gap-2 border-b border-border py-8 transition-colors hover:bg-primary hover:text-primary-foreground md:grid-cols-[6rem_1fr_1.2fr_3rem] md:gap-8 md:px-4"
          >
            <span className="font-mono text-xs text-muted-foreground group-hover:text-primary-foreground">{s.code}</span>
            <h3 className="font-display text-4xl uppercase md:text-5xl">{s.title}</h3>
            <p className="text-white/65 group-hover:text-primary-foreground/80">{s.text}</p>
            <ArrowDownRight className="hidden size-8 transition group-hover:-rotate-90 md:block" />
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="book" className="relative overflow-hidden border-t border-border bg-[#111111]">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 py-28 md:grid-cols-2 md:px-10 md:gap-24">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            ● Cotiza tu Proyecto
          </p>
          <h2 className="mt-4 font-display text-[clamp(3.5rem,7vw,7rem)] uppercase leading-[0.95] text-white">
            Comencemos <br /> a crear <br />
            <span className="text-primary">juntos.</span>
          </h2>
          <p className="mt-8 max-w-md text-lg text-white/70">
            Hablemos de tus objetivos, la inversión en este negocio y cómo podemos lograrlo.
          </p>
          <div className="mt-12 space-y-4">
            <a 
              href={`mailto:${profile.email}`} 
              className="block font-display text-2xl md:text-3xl uppercase text-white hover:text-primary transition-colors"
            >
              {profile.email}
            </a>
            <div className="flex gap-4">
              {profile.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-sm font-semibold text-white/50 hover:text-white transition-colors"
                >
                  {s.label} <ArrowUpRight className="size-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Aquí va el formulario */}
        <BookingForm />
      </div>
    </section>
  )
  
}

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-[#111111]">
      <div className="relative flex w-full items-center justify-center overflow-hidden">
        <p className="select-none whitespace-nowrap py-10 text-center font-display text-[clamp(4rem,16vw,26rem)] uppercase leading-none text-white/[0.04]">
          {profile.name}
        </p>
      </div>
      
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 pb-8 font-mono text-[11px] uppercase tracking-widest text-white/40 md:flex-row md:px-10">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>{profile.location}</span>
      </div>
    </footer>
  )
}
