import { useState, type FormEvent } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'

import { cn } from '@/lib/utils'

type State = 'idle' | 'pending' | 'success' | 'error'

const formats = ['Gestión RR.SS', 'Fotografía', 'Producción Audiovisual', 'Aún no lo sé']

// Input con fondo oscuro (para Nombre y Correo)
const fieldDark =
  'w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 transition focus:border-primary/50 focus:outline-none focus:ring-0'

// Input con línea inferior (para Marca y Brief)
const fieldLine =
  'w-full border-0 border-b border-white/20 bg-transparent px-0 py-3 text-lg text-white placeholder:text-white/30 transition focus:border-primary focus:outline-none focus:ring-0'

export function BookingForm() {
  const [state, setState] = useState<State>('idle')
  // Por defecto seleccionamos el último botón como en la imagen
  const [format, setFormat] = useState(formats[3])

    async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (state === 'pending') return
    
    const formData = new FormData(event.currentTarget)
    
    // 👇 PEGA AQUÍ LA CLAVE QUE TE LLEGÓ A TU CORREO
    formData.append("access_key", "ce002179-ee80-4582-a768-a53d7634550b")
    
    setState('pending')
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })
      
      const data = await response.json()
      
      if (data.success) {
        setState('success')
      } else {
        throw new Error('Error')
      }
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
      onSubmit={submit}
      onChange={() => {
        if (state === 'error') setState('idle')
      }}
      className="flex flex-col gap-6"
    >
      {/* Solo mantenemos el input oculto del formato */}
      <input type="hidden" name="format" value={format} />
      
      {/* Honeypot para evitar spam (Web3Forms lo soporta) */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
      
      <fieldset disabled={state === 'pending'} className="grid gap-6">
        <legend className="sr-only">Brief del proyecto</legend>
        
        {/* Fila 1: Nombre y Correo (Fondo oscuro) */}
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">Nombre</span>
            <input name="name" autoComplete="name" required maxLength={100} placeholder="Tu nombre" className={cn(fieldDark, 'mt-2')} />
          </label>
          <label className="block">
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">Correo</span>
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
              placeholder="tu@marca.com"
              className={cn(fieldDark, 'mt-2')}
            />
          </label>
        </div>

        {/* Fila 2: Marca (Línea inferior) */}
        <label className="block">
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">Marca / usuario / Red social</span>
          <input name="brand" maxLength={120} placeholder="@tumarca" className={fieldLine} />
        </label>

        {/* Fila 3: ¿Qué deseas? */}
        <div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">¿Qué deseas?</span>
          <div className="mt-3 flex flex-wrap gap-2" role="radiogroup" aria-label="Formato">
            {formats.map((f) => (
              <button
                key={f}
                type="button"
                role="radio"
                aria-checked={format === f}
                onClick={() => setFormat(f)}
                className={cn(
                  'rounded-full border px-4 py-2 text-xs font-semibold transition active:scale-95',
                  format === f
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-white/20 text-white/70 hover:border-white/50',
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Fila 4: El Brief (Línea inferior) */}
        <label className="block mt-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">El brief</span>
          <textarea
            name="message"
            required
            maxLength={2000}
            rows={2}
            placeholder="Cuéntame tu idea..."
            className={cn(fieldLine, 'resize-none')}
          />
        </label>

        {/* Botón Grande */}
        <button
          type="submit"
          className="group mt-6 flex w-full items-center justify-between rounded-full bg-primary py-3 pl-8 pr-3 font-display text-xl uppercase text-primary-foreground transition hover:bg-white active:scale-[0.98] disabled:opacity-60"
        >
          {state === 'pending' ? 'Enviando…' : 'Reservar reunión'}
          <span className="grid size-10 place-items-center rounded-full bg-black text-white transition group-hover:scale-105">
            <ArrowUpRight className="size-5" />
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