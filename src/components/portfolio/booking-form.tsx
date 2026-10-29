import { useState, type FormEvent } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'

import { cn } from '@/lib/utils'

type State = 'idle' | 'pending' | 'success' | 'error'

const formats = ['Anuncio UGC', 'Film de marca', 'Pack de contenido', 'Aún no lo sé']

const field =
  'w-full border-0 border-b-2 border-white/15 bg-transparent px-0 py-3 text-lg text-foreground placeholder:text-white/30 transition focus:border-primary focus:outline-none focus:ring-0'

export function BookingForm() {
  const [state, setState] = useState<State>('idle')
  const [format, setFormat] = useState(formats[0])

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (state === 'pending') return
    const body = new URLSearchParams()
    new FormData(event.currentTarget).forEach((value, key) => body.append(key, String(value)))
    setState('pending')
    try {
      const response = await fetch('/contact-form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
        signal: AbortSignal.timeout(15000),
      })
      if (!response.ok) throw new Error('Submission failed')
      if (/\bdata-netlify\s*=/i.test(await response.text())) throw new Error('Form handling is unavailable')
      setState('success')
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div role="status" className="fade-up flex min-h-[420px] flex-col items-start justify-center gap-6">
        <div className="grid size-16 place-items-center rounded-full bg-primary text-primary-foreground">
          <Check className="size-8" />
        </div>
        <p className="font-display text-5xl uppercase leading-none md:text-6xl">¡Corte, se queda!</p>
        <p className="max-w-sm text-lg text-muted-foreground">
          Tu brief llegó. Te respondo en menos de 24 horas con las primeras ideas de ganchos.
        </p>
        <button
          type="button"
          onClick={() => setState('idle')}
          className="font-mono text-xs uppercase tracking-widest text-primary underline-offset-4 hover:underline"
        >
          Enviar otro brief
        </button>
      </div>
    )
  }

  return (
    <form
      name="booking"
      method="POST"
      action="/contact-form.html"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={submit}
      onChange={() => {
        if (state === 'error') setState('idle')
      }}
    >
      <input type="hidden" name="form-name" value="booking" />
      <input type="hidden" name="format" value={format} />
      <p hidden>
        <label>
          Dejar vacío
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <fieldset disabled={state === 'pending'} className="grid gap-6">
        <legend className="sr-only">Brief del proyecto</legend>
        <div className="grid gap-6 sm:grid-cols-2">
          <label className="block">
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Nombre</span>
            <input name="name" autoComplete="name" required maxLength={100} placeholder="Tu nombre" className={field} />
          </label>
          <label className="block">
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Correo</span>
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
              placeholder="tu@marca.com"
              className={field}
            />
          </label>
        </div>
        <label className="block">
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Marca / usuario</span>
          <input name="brand" maxLength={120} placeholder="@tumarca" className={field} />
        </label>

        <div>
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">¿Qué necesitas?</span>
          <div className="mt-3 flex flex-wrap gap-2" role="radiogroup" aria-label="Formato">
            {formats.map((f) => (
              <button
                key={f}
                type="button"
                role="radio"
                aria-checked={format === f}
                onClick={() => setFormat(f)}
                className={cn(
                  'rounded-full border px-4 py-2 text-sm font-semibold transition active:scale-95',
                  format === f
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-white/20 text-foreground hover:border-white/60',
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <label className="block">
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">El brief</span>
          <textarea
            name="message"
            required
            maxLength={2000}
            rows={3}
            placeholder="Producto, objetivo, fecha límite, estilo…"
            className={cn(field, 'resize-none')}
          />
        </label>

        <button
          type="submit"
          className="group mt-2 flex w-full items-center justify-between rounded-full bg-primary py-4 pl-7 pr-3 font-display text-2xl uppercase text-primary-foreground transition hover:bg-white active:scale-[0.98] disabled:opacity-60"
        >
          {state === 'pending' ? 'Enviando…' : 'Reservar rodaje'}
          <span className="grid size-11 place-items-center rounded-full bg-black text-primary transition group-hover:rotate-45">
            <ArrowUpRight />
          </span>
        </button>
        {state === 'error' && (
          <p role="alert" className="text-sm text-rec">
            Aún no se envió nada; tus datos siguen aquí. Inténtalo de nuevo en un momento.
          </p>
        )}
      </fieldset>
    </form>
  )
}
