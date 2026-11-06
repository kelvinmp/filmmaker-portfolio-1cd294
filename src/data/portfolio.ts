// Everything a visitor sees lives here (all copy is in Spanish): swap in your
// real name, links, numbers and videos without touching any component.

export const profile = {
  name: 'Giovanni Neuman',
  handle: '@gio_neuman',
  role: 'Filmmaker · Creador UGC · Fotógrafo Periodístico',
  location: 'Venezuela',
  email: 'giovannineuman2@gmail.com',
  // WhatsApp number in international format, digits only (placeholder).
  whatsapp: '584241845353',
  socials: [
    { label: 'TikTok', href: 'https://www.tiktok.com/@gio.neuman?_r=1&_t=ZS-9AyGj758nOG' },
    { label: 'Instagram', href: 'https://www.instagram.com/gio_neuman?mdxt=MXIzcGZpNW9la2xsMQ%3D%3D&utm_source=qr' },
    { label: 'Whatsapp', href: 'https://api.whatsapp.com/send/?phone=584241845353&text=Hola%20Giovanni,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20hablar%20sobre%20un%20proyecto.&type=phone_number&app_absent=0' },
  ],
  bioTitle: 'tu marca no será invisible',
  bio: [
    'Soy Giovanni Neuman, Filmmaker y Fotógrafo periodístico que busca ilustrar el arte visual en diferentes ambientes laborales innovando, creando identidad, impulsando y marcando una diferencia en las tendencias de los medios sociales.',
    'Cumplo con las tareas de crear un plan de acción, estrategia de contenido y gestión de Redes Sociales. Recolecto el material, lo edito, se entrega y se gestiona para llegar a un mayor alcance de audiencia, mercado y viralidad.',
  ],
}

export type Reel = {
  id: string
  title: string
  brand: string
  category: Category[]
  hook: string
  poster: string
  video?: string // Aquí irá la ruta de tu video real (.mp4)
  views: string
  retention: string
  duration: number
}



// 2. Nuevo tipo y arreglo exclusivo para las FOTOS
export type Foto = {
  id: string
  title: string
  src: string
  hook: string
}

export const fotos: Foto[] = [
  {
    id: 'foto-1',
    title: 'Sin perder la fe',
    hook: '',
    src: '/img/arepa.jpg', // Ruta de tu foto en la carpeta public/img/
  },
  {
    id: 'foto-2',
    title: 'Clases de gimnasia',
    hook: '',
    src: '/img/monica.JPG',
  },
  {
    id: 'foto-1',
    title: 'Infancia',
    hook: '',
    src: '/img/niñarepa.JPG', // Ruta de tu foto en la carpeta public/img/
  },
  {
    id: 'foto-1',
    title: 'Pasos pesados',
    hook: '',
    src: '/img/espalda.JPG', // Ruta de tu foto en la carpeta public/img/
  },
  {
    id: 'foto-1',
    title: 'Focus...',
    hook: '',
    src: '/img/camina.jpg', // Ruta de tu foto en la carpeta public/img/
  },
  {
    id: 'foto-1',
    title: 'Fluye',
    hook: '',
    src: '/img/natycami.JPG', // Ruta de tu foto en la carpeta public/img/
  },
  {
    id: 'foto-1',
    title: 'Ojos de esperanza',
    hook: '',
    src: '/img/luisjose.JPG', // Ruta de tu foto en la carpeta public/img/
  },
  {
    id: 'foto-1',
    title: 'Hidrátate con los mejores',
    hook: '',
    src: '/img/tomar.JPG', // Ruta de tu foto en la carpeta public/img/
  },
    {
    id: 'foto-1',
    title: 'Trabajo en equipo',
    hook: '',
    src: '/img/grecia.JPG', // Ruta de tu foto en la carpeta public/img/
  },
    {
    id: 'foto-1',
    title: 'La ayuda continúa...',
    hook: '',
    src: '/img/equipo.JPG', // Ruta de tu foto en la carpeta public/img/
  },
    {
    id: 'foto-1',
    title: '¡Ensayos y más ensayos!',
    hook: '',
    src: '/img/punta.JPG', // Ruta de tu foto en la carpeta public/img/
  },
    {
    id: 'foto-1',
    title: '¡Resiste y persiste!',
    hook: '',
    src: '/img/gio.JPG', // Ruta de tu foto en la carpeta public/img/
  },
    {
    id: 'foto-1',
    title: '¡Bien preparado!',
    hook: '',
    src: '/img/bolso.JPG', // Ruta de tu foto en la carpeta public/img/
  },
    {
    id: 'foto-1',
    title: '¡No hay tiempo que perder!',
    hook: '',
    src: '/img/ojos.JPG', // Ruta de tu foto en la carpeta public/img/
  },
    {
    id: 'foto-1',
    title: 'Corazón en el fogón',
    hook: '',
    src: '/img/negra.JPG', // Ruta de tu foto en la carpeta public/img/
  },
    {
    id: 'foto-1',
    title: 'Fuerza materna',
    hook: '',
    src: '/img/mom.JPG', // Ruta de tu foto en la carpeta public/img/
  },
    {
    id: 'foto-1',
    title: 'Tu buena dosis de proteína',
    hook: '',
    src: '/img/vaso.JPG', // Ruta de tu foto en la carpeta public/img/
  },
    {
    id: 'foto-1',
    title: 'Comparte tu rutina',
    hook: '',
    src: '/img/grupo.JPG', // Ruta de tu foto en la carpeta public/img/
  },
    {
    id: 'foto-1',
    title: 'unión',
    hook: '',
    src: '/img/black.JPG', // Ruta de tu foto en la carpeta public/img/
  },
    {
    id: 'foto-1',
      title: '¡A comer!',
    hook: '',
    src: '/img/arepamano.JPG', // Ruta de tu foto en la carpeta public/img/
  },
  {
    id: 'foto-1',
    title: 'El resultado de tu esfuerzo...',
    hook: '',
    src: '/img/batido.JPG', // Ruta de tu foto en la carpeta public/img/
  },
  // ... (Agrega el resto de tus fotos aquí)
]

export const categories = [
  'Todo',
  'UGC',
  'Entrevistas',
  'Vlogs',
  'Ads',
  'Viral',
] as const
export type Category = Exclude<(typeof categories)[number], 'Todo'>

export const reels: Reel[] = [
  {
    id: 'glow',
    title: 'Entrevista FITGAMES',
    brand: '@vikingsprogram_',
    category: ['Entrevistas'],
    hook: 'Entrevista de David Lozano y Ender La Cruz',
    poster: '/img/negro.jpg',
    video: '/img/entrevistafit.mp4',
    views: '4.1K',
    retention: '71%',
    duration: 5,
  },
  {
    id: 'pour',
    title: 'MOVERSE',
    brand: '@mpdanza',
    category: ['Ads' , 'Viral'],
    hook: '"El mejor cambio para ti..."',
    poster: '/img/negro.jpg',
    video: '/img/moverse.mp4',
    views: '23.8K',
    retention: '64%',
    duration: 7,
  },
  {
    id: 'cliff',
    title: 'percances de la vida',
    brand: '@mpdanza',
    category: ['Viral'],
    hook: '¡¿qué pan?!',
    poster: '/img/negro.jpg',
    video: '/img/pan.mp4',
    views: '14.4K',
    retention: '82%',
    duration: 6,
  },
  {
    id: 'cliff',
    title: 'ruido',
    brand: '@gio_neuman',
    category: ['UGC' , 'Viral'],
    hook: 'sentimiento guaireño',
    poster: '/img/negro.jpg',
    video: '/img/ruido.mp4',
    views: '283K',
    retention: '82%',
    duration: 6,
  },
  {
    id: 'cliff',
    title: 'enemigos',
    brand: '@mpdanza',
    category: ['Viral'],
    hook: 'la nueva generación',
    poster: '/img/negro.jpg',
    video: '/img/niña.mp4',
    views: '16.7K',
    retention: '82%',
    duration: 6,
  },
  {
    id: 'jump',
    title: 'VLOG OPEN 26.1',
    brand: '@samueelozano_ X @dalmlozano',
    category: ['Vlogs'],
    hook: 'Piernas destruidas',
    poster: '/img/negro.jpg',
    video: '/img/open1.mp4',
    views: '3.9K',
    retention: '78%',
    duration: 6,
  },
  {
    id: 'cliff',
    title: 'presentación navideña',
    brand: '@mpdanza',
    category: ['Vlogs'],
    hook: '"recap de nuestra muestra coreográfica"',
    poster: '/img/negro.jpg',
    video: '/img/navidad.mp4',
    views: '4.4K',
    retention: '82%',
    duration: 6,
  },
  {
    id: 'cliff',
    title: '2 meses',
    brand: '@gio_neuman',
    category: ['UGC' , 'Viral'],
    hook: 'a 2 meses de una tragedia...',
    poster: '/img/negro.jpg',
    video: '/img/2meses.mp4',
    views: '10.3K',
    retention: '82%',
    duration: 6,
  },
  {
    id: 'taco',
    title: 'Vlog open 26.2',
    brand: '@samueelozano_ X @dalmlozano',
    category: ['Vlogs'],
    hook: 'open segunda fase...',
    poster: '/img/negro.jpg',
    video: '/img/open2.mp4',
    views: '3K',
    retention: '69%',
    duration: 6,
  },
  {
    id: 'sprint',
    title: 'fundador luis garcía',
    brand: '@granitosamazonia',
    category: ['Entrevistas'],
    hook: 'la mejor remodelación para tu hogar',
    poster: '/img/negro.jpg',
    video: '/img/luis.mp4',
    views: '1K',
    retention: '66%',
    duration: 6,
  },
  {
    id: 'unbox',
    title: 'Diferencia entre calentar y estirar',
    brand: '@mpdanza x @gio_neuman',
    category: ['UGC'],
    hook: '"¿calentar y estirar es lo mismo?"',
    poster: '/img/negro.jpg',
    video: '/img/estiramiento.mp4',
    views: '6.7K',
    retention: '74%',
    duration: 6,
  },
  {
    id: 'spin',
    title: 'heroes sin capa',
    brand: '@mpdanza',
    category: ['Ads' , 'Viral'],
    hook: 'Presentación anual de danza',
    poster: '/img/negro.jpg',
    video: '/img/heroes.mp4',
    views: '19.4K',
    retention: '80%',
    duration: 6,
  },
  {
    id: 'spin',
    title: 'documental youtube',
    brand: '@roimarcano',
    category: ['UGC'],
    hook: '"¡venezuela nos necesita!"',
    poster: '/img/negro.jpg',
    video: '/img/youtube.mp4',
    views: '4.1K',
    retention: '80%',
    duration: 6,
  },
  {
    id: 'spin',
    title: 'tattoo sesion',
    brand: '@saint_tattoo_art',
    category: ['UGC'],
    hook: 'Tatuaje a detalle',
    poster: '/img/negro.jpg',
    video: '/img/tattoo.mp4',
    views: '1.3K',
    retention: '80%',
    duration: 6,
  },
  {
    id: 'spin',
    title: 'renovación de baños',
    brand: '@granitosamazonia',
    category: ['Ads' , 'Viral'],
    hook: 'ahorra y renueva',
    poster: '/img/negro.jpg',
    video: '/img/baño.mp4',
    views: '13.6K',
    retention: '80%',
    duration: 6,
  },
  {
    id: 'spin',
    title: 'danza contemporanea',
    brand: '@mpdanza x @gio_neuman',
    category: ['UGC'],
    hook: 'fluye con el cuerpo',
    poster: '/img/negro.jpg',
    video: '/img/contempo.mp4',
    views: '4.1K',
    retention: '80%',
    duration: 6,
  },
  
]

export const stats = [
  { value: 2, suffix: '', label: 'Años de Experiencia' },
  { value: 100, suffix: '+', label: 'Videos entregados' },
  { value: 800, suffix: 'K+', label: 'Alcance Visual' },
  { value: 50, suffix: '%', label: 'Tasa de interacción' },
  { value: 65, suffix: '%', label: 'Retención Visual' },
]

/** Phrases for the scrolling band under the hero. */
export const marquee = [
  'Contenido UGC',
  'Gestión en Redes Sociales',
  'Fotografía',
  'Feed · Historias · Reels · TikTok',
  'Guion · Cámara · Edición',
]

export const services = [
  {
    code: '01',
    title: 'Packs de contenido',
    text: 'Paquetes personalizados de acuerdo a las necesidades del cliente. Gestión de Redes, Fotografía, Videografía.',
  },
  {
    code: '02',
    title: 'Films de marca',
    text: 'Trabajos individuales cinematográficos planificados con preproducción, producción y postproducción.',
  },
  {
    code: '03',
    title: 'Gestión en Redes Sociales',
    text: 'Planificación de contenido, horario de publicación, estadísticas, reuniones y más.',
  },
  {
    code: '04',
    title: 'Investigación',
    text: 'Monitoreo constante de nuevas tendencias, pruebas de efectos, estilos, musicalidad, apoyo visual, entre otras.',
  },
]

/** Serve originals through the Netlify Image CDN, resized and converted to WebP. */
/** Devuelve la ruta de la imagen directamente para compatibilidad total */
export function img(src: string, w: number) {
  return src
}
