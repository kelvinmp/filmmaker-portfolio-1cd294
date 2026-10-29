// Everything a visitor sees lives here (all copy is in Spanish): swap in your
// real name, links, numbers and videos without touching any component.

export const profile = {
  name: 'Giovanni Neuman Serafini',
  handle: '@giovanni.films',
  role: 'Filmmaker · Creador UGC · Fotógrafo Periodístico',
  location: 'Disponible en todo el mundo',
  email: 'hola@giovanni.films',
  // WhatsApp number in international format, digits only (placeholder).
  whatsapp: '5210000000000',
  socials: [
    { label: 'TikTok', href: 'https://www.tiktok.com/' },
    { label: 'Instagram', href: 'https://www.instagram.com/' },
    { label: 'YouTube', href: 'https://www.youtube.com/' },
  ],
  bioTitle: 'Hago que el pulgar se detenga.',
  bio: [
    'Soy filmmaker y hago contenido UGC. Convierto marcas en historias verticales que se sienten nativas en TikTok, Reels y Shorts: rápidas, honestas y diseñadas para enganchar desde el primer fotograma.',
    'Escribo el gancho, grabo, actúo y edito. Un solo equipo, cero fricción. Si tu audiencia decide en tres segundos, yo trabajo para ganar esos tres segundos.',
  ],
}

export type Reel = {
  id: string
  title: string
  brand: string
  category: Category
  /** The on-screen hook — what plays in the first 3 seconds. */
  hook: string
  poster: string
  /** Optional MP4/WebM URL. When set, the card and player play the real clip. */
  video?: string
  views: string
  retention: string
  duration: number
}

export const categories = [
  'Todo',
  'UGC',
  'Entrevistas',
  'Vlogs',
  'Ads',
] as const
export type Category = Exclude<(typeof categories)[number], 'Todo'>

export const reels: Reel[] = [
  {
    id: 'glow',
    title: 'Rutina glow en 7 segundos',
    brand: 'Lumé Skin',
    category: 'UGC',
    hook: 'POV: tu piel después de 7 días',
    poster: '/img/reel-skincare.png',
    views: '2.4M',
    retention: '71%',
    duration: 6,
  },
  {
    id: 'pour',
    title: 'Latte art que nunca falla',
    brand: 'Oro Coffee',
    category: 'Entrevistas',
    hook: 'Espera al último vertido…',
    poster: '/img/reel-coffee.png',
    views: '1.1M',
    retention: '64%',
    duration: 6,
  },
  {
    id: 'jump',
    title: 'Salto en la azotea',
    brand: 'Kinetic Runners',
    category: 'Ads',
    hook: 'No lo intentes con tenis nuevos',
    poster: '/img/reel-sneakers.png',
    views: '3.8M',
    retention: '78%',
    duration: 6,
  },
  {
    id: 'cliff',
    title: 'El borde del mapa',
    brand: 'Nómada Travel',
    category: 'Vlogs',
    hook: 'Casi no publico esto',
    poster: '/img/reel-travel.png',
    views: '5.2M',
    retention: '82%',
    duration: 6,
  },
  {
    id: 'taco',
    title: 'Tacos a medianoche',
    brand: 'Fuego Street Food',
    category: 'Vlogs',
    hook: 'Los mejores $2 que he gastado',
    poster: '/img/reel-food.png',
    views: '980K',
    retention: '69%',
    duration: 6,
  },
  {
    id: 'sprint',
    title: 'Club de las 5AM, pero cinematográfico',
    brand: 'Pulse Athletics',
    category: 'Ads',
    hook: 'Nadie ve esta parte',
    poster: '/img/reel-fitness.png',
    views: '1.7M',
    retention: '66%',
    duration: 6,
  },
  {
    id: 'unbox',
    title: 'Unboxing en una sola toma',
    brand: 'Nova Mobile',
    category: 'UGC',
    hook: 'Reseña honesta, sin guion',
    poster: '/img/reel-tech.png',
    views: '2.9M',
    retention: '74%',
    duration: 6,
  },
  {
    id: 'spin',
    title: 'Abrigo rojo, calles mojadas',
    brand: 'Atelier Rouge',
    category: 'Entrevistas',
    hook: 'La lluvia no estaba en el plan',
    poster: '/img/reel-fashion.png',
    views: '4.1M',
    retention: '80%',
    duration: 6,
  },
]

export const stats = [
  { value: 48, suffix: 'M+', label: 'Vistas orgánicas' },
  { value: 74, suffix: '%', label: 'Retención media a 3s' },
  { value: 120, suffix: '+', label: 'Videos entregados' },
  { value: 35, suffix: '', label: 'Marcas atendidas' },
]

/** Phrases for the scrolling band under the hero. */
export const marquee = [
  'Contenido UGC',
  'Ganchos de 3 segundos',
  'Films de marca',
  'Reels · TikTok · Shorts',
  'Guion, cámara y edición',
  'Hecho para frenar el scroll',
]

export const services = [
  {
    code: '01',
    title: 'Anuncios UGC',
    text: 'Anuncios nativos del scroll que se sienten como la recomendación de un amigo. Ganchos, variaciones y archivos listos para pauta.',
  },
  {
    code: '02',
    title: 'Films de marca',
    text: 'Piezas cortas cinematográficas con producción real: iluminación, color y diseño sonoro.',
  },
  {
    code: '03',
    title: 'Packs de contenido',
    text: 'Lotes mensuales de Reels, TikToks y Shorts pensados para tus lanzamientos y tendencias.',
  },
  {
    code: '04',
    title: 'Testeo de ganchos',
    text: 'Cinco aperturas por concepto para encontrar los 3 segundos que realmente convierten.',
  },
]

/** Serve originals through the Netlify Image CDN, resized and converted to WebP. */
export function img(src: string, w: number) {
  return `/.netlify/images?url=${encodeURIComponent(src)}&w=${w}&fm=webp&q=72`
}
