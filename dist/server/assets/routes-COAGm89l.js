import { n as cn } from "./router-EzBX4rSO.js";
import { forwardRef, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowDownRight, ArrowUpRight, Check, ChevronDown, ChevronUp, Eye, Heart, Mail, MessageCircle, Pause, Play, Send, Volume2, VolumeX, X } from "lucide-react";
// src/data/portfolio.ts
var profile = {
	name: "Giovanni Neuman",
	handle: "@gio_neuman",
	role: "Filmmaker · Creador UGC · Fotógrafo Periodístico",
	location: "Venezuela",
	email: "giovannineuman2@gmail.com",
	whatsapp: "584241845353",
	socials: [
		{
			label: "TikTok",
			href: "https://www.tiktok.com/@gio.neuman?_r=1&_t=ZS-9AyGj758nOG"
		},
		{
			label: "Instagram",
			href: "https://www.instagram.com/gio_neuman?mdxt=MXIzcGZpNW9la2xsMQ%3D%3D&utm_source=qr"
		},
		{
			label: "Whatsapp",
			href: "https://api.whatsapp.com/send/?phone=584241845353&text=Hola%20Giovanni,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20hablar%20sobre%20un%20proyecto.&type=phone_number&app_absent=0"
		}
	],
	bioTitle: "tu marca no será invisible",
	bio: ["Soy Giovanni Neuman, Filmmaker y Fotógrafo periodístico que busca ilustrar el arte visual en diferentes ambientes laborales innovando, creando identidad, impulsando y marcando una diferencia en las tendencias de los medios sociales.", "Cumplo con las tareas de crear un plan de acción, estrategia de contenido y gestión de Redes Sociales. Recolecto el material, lo edito, se entrega y se gestiona para llegar a un mayor alcance de audiencia, mercado y viralidad."]
};
var fotos = [
	{
		id: "foto-1",
		title: "Sin perder la fe",
		hook: "",
		src: "/img/arepa.jpg"
	},
	{
		id: "foto-2",
		title: "Clases de gimnasia",
		hook: "",
		src: "/img/monica.JPG"
	},
	{
		id: "foto-1",
		title: "Infancia",
		hook: "",
		src: "/img/niñarepa.JPG"
	},
	{
		id: "foto-1",
		title: "Pasos pesados",
		hook: "",
		src: "/img/espalda.JPG"
	},
	{
		id: "foto-1",
		title: "Focus...",
		hook: "",
		src: "/img/camina.jpg"
	},
	{
		id: "foto-1",
		title: "Fluye",
		hook: "",
		src: "/img/natycami.JPG"
	},
	{
		id: "foto-1",
		title: "Ojos de esperanza",
		hook: "",
		src: "/img/luisjose.JPG"
	},
	{
		id: "foto-1",
		title: "Hidrátate con los mejores",
		hook: "",
		src: "/img/tomar.JPG"
	},
	{
		id: "foto-1",
		title: "Trabajo en equipo",
		hook: "",
		src: "/img/grecia.JPG"
	},
	{
		id: "foto-1",
		title: "La ayuda continúa...",
		hook: "",
		src: "/img/equipo.JPG"
	},
	{
		id: "foto-1",
		title: "¡Ensayos y más ensayos!",
		hook: "",
		src: "/img/punta.JPG"
	},
	{
		id: "foto-1",
		title: "¡Resiste y persiste!",
		hook: "",
		src: "/img/gio.JPG"
	},
	{
		id: "foto-1",
		title: "¡Bien preparado!",
		hook: "",
		src: "/img/bolso.JPG"
	},
	{
		id: "foto-1",
		title: "¡No hay tiempo que perder!",
		hook: "",
		src: "/img/ojos.JPG"
	},
	{
		id: "foto-1",
		title: "Corazón en el fogón",
		hook: "",
		src: "/img/negra.JPG"
	},
	{
		id: "foto-1",
		title: "Fuerza materna",
		hook: "",
		src: "/img/mom.JPG"
	},
	{
		id: "foto-1",
		title: "Tu buena dosis de proteína",
		hook: "",
		src: "/img/vaso.JPG"
	},
	{
		id: "foto-1",
		title: "Comparte tu rutina",
		hook: "",
		src: "/img/grupo.JPG"
	},
	{
		id: "foto-1",
		title: "unión",
		hook: "",
		src: "/img/black.JPG"
	},
	{
		id: "foto-1",
		title: "¡A comer!",
		hook: "",
		src: "/img/arepamano.JPG"
	},
	{
		id: "foto-1",
		title: "El resultado de tu esfuerzo...",
		hook: "",
		src: "/img/batido.JPG"
	}
];
var categories = [
	"Todo",
	"UGC",
	"Entrevistas",
	"Vlogs",
	"Ads",
	"Viral"
];
var reels = [
	{
		id: "glow",
		title: "Entrevista FITGAMES",
		brand: "@vikingsprogram_",
		category: ["Entrevistas"],
		hook: "Entrevista de David Lozano y Ender La Cruz",
		poster: "/img/negro.jpg",
		video: "/img/entrevistafit.mp4",
		views: "4.1K",
		retention: "71%",
		duration: 5
	},
	{
		id: "pour",
		title: "MOVERSE",
		brand: "@mpdanza",
		category: ["Ads", "Viral"],
		hook: "\"El mejor cambio para ti...\"",
		poster: "/img/negro.jpg",
		video: "/img/moverse.mp4",
		views: "23.8K",
		retention: "64%",
		duration: 7
	},
	{
		id: "cliff",
		title: "percances de la vida",
		brand: "@mpdanza",
		category: ["Viral"],
		hook: "¡¿qué pan?!",
		poster: "/img/negro.jpg",
		video: "/img/pan.mp4",
		views: "14.4K",
		retention: "82%",
		duration: 6
	},
	{
		id: "cliff",
		title: "ruido",
		brand: "@gio_neuman",
		category: ["UGC", "Viral"],
		hook: "sentimiento guaireño",
		poster: "/img/negro.jpg",
		video: "/img/ruido.mp4",
		views: "283K",
		retention: "82%",
		duration: 6
	},
	{
		id: "cliff",
		title: "enemigos",
		brand: "@mpdanza",
		category: ["Viral"],
		hook: "la nueva generación",
		poster: "/img/negro.jpg",
		video: "/img/niña.mp4",
		views: "16.7K",
		retention: "82%",
		duration: 6
	},
	{
		id: "jump",
		title: "VLOG OPEN 26.1",
		brand: "@samueelozano_ X @dalmlozano",
		category: ["Vlogs"],
		hook: "Piernas destruidas",
		poster: "/img/negro.jpg",
		video: "/img/open1.mp4",
		views: "3.9K",
		retention: "78%",
		duration: 6
	},
	{
		id: "cliff",
		title: "presentación navideña",
		brand: "@mpdanza",
		category: ["Vlogs"],
		hook: "\"recap de nuestra muestra coreográfica\"",
		poster: "/img/negro.jpg",
		video: "/img/navidad.mp4",
		views: "4.4K",
		retention: "82%",
		duration: 6
	},
	{
		id: "cliff",
		title: "2 meses",
		brand: "@gio_neuman",
		category: ["UGC", "Viral"],
		hook: "a 2 meses de una tragedia...",
		poster: "/img/negro.jpg",
		video: "/img/2meses.mp4",
		views: "10.3K",
		retention: "82%",
		duration: 6
	},
	{
		id: "taco",
		title: "Vlog open 26.2",
		brand: "@samueelozano_ X @dalmlozano",
		category: ["Vlogs"],
		hook: "open segunda fase...",
		poster: "/img/negro.jpg",
		video: "/img/open2.mp4",
		views: "3K",
		retention: "69%",
		duration: 6
	},
	{
		id: "sprint",
		title: "fundador luis garcía",
		brand: "@granitosamazonia",
		category: ["Entrevistas"],
		hook: "la mejor remodelación para tu hogar",
		poster: "/img/negro.jpg",
		video: "/img/luis.mp4",
		views: "1K",
		retention: "66%",
		duration: 6
	},
	{
		id: "unbox",
		title: "Diferencia entre calentar y estirar",
		brand: "@mpdanza x @gio_neuman",
		category: ["UGC"],
		hook: "\"¿calentar y estirar es lo mismo?\"",
		poster: "/img/negro.jpg",
		video: "/img/estiramiento.mp4",
		views: "6.7K",
		retention: "74%",
		duration: 6
	},
	{
		id: "spin",
		title: "heroes sin capa",
		brand: "@mpdanza",
		category: ["Ads", "Viral"],
		hook: "Presentación anual de danza",
		poster: "/img/negro.jpg",
		video: "/img/heroes.mp4",
		views: "19.4K",
		retention: "80%",
		duration: 6
	},
	{
		id: "spin",
		title: "documental youtube",
		brand: "@roimarcano",
		category: ["UGC"],
		hook: "\"¡venezuela nos necesita!\"",
		poster: "/img/negro.jpg",
		video: "/img/youtube.mp4",
		views: "4.1K",
		retention: "80%",
		duration: 6
	},
	{
		id: "spin",
		title: "tattoo sesion",
		brand: "@saint_tattoo_art",
		category: ["UGC"],
		hook: "Tatuaje a detalle",
		poster: "/img/negro.jpg",
		video: "/img/tattoo.mp4",
		views: "1.3K",
		retention: "80%",
		duration: 6
	},
	{
		id: "spin",
		title: "renovación de baños",
		brand: "@granitosamazonia",
		category: ["Ads", "Viral"],
		hook: "ahorra y renueva",
		poster: "/img/negro.jpg",
		video: "/img/baño.mp4",
		views: "13.6K",
		retention: "80%",
		duration: 6
	},
	{
		id: "spin",
		title: "danza contemporanea",
		brand: "@mpdanza x @gio_neuman",
		category: ["UGC"],
		hook: "fluye con el cuerpo",
		poster: "/img/negro.jpg",
		video: "/img/contempo.mp4",
		views: "4.1K",
		retention: "80%",
		duration: 6
	}
];
var stats = [
	{
		value: 2,
		suffix: "",
		label: "Años de Experiencia"
	},
	{
		value: 100,
		suffix: "+",
		label: "Videos entregados"
	},
	{
		value: 800,
		suffix: "K+",
		label: "Alcance Visual"
	},
	{
		value: 50,
		suffix: "%",
		label: "Tasa de interacción"
	},
	{
		value: 65,
		suffix: "%",
		label: "Retención Visual"
	}
];
/** Phrases for the scrolling band under the hero. */
var marquee = [
	"Contenido UGC",
	"Gestión en Redes Sociales",
	"Fotografía",
	"Feed · Historias · Reels · TikTok",
	"Guion · Cámara · Edición"
];
var services = [
	{
		code: "01",
		title: "Packs de contenido",
		text: "Paquetes personalizados de acuerdo a las necesidades del cliente. Gestión de Redes, Fotografía, Videografía."
	},
	{
		code: "02",
		title: "Films de marca",
		text: "Trabajos individuales cinematográficos planificados con preproducción, producción y postproducción."
	},
	{
		code: "03",
		title: "Gestión en Redes Sociales",
		text: "Planificación de contenido, horario de publicación, estadísticas, reuniones y más."
	},
	{
		code: "04",
		title: "Investigación",
		text: "Monitoreo constante de nuevas tendencias, pruebas de efectos, estilos, musicalidad, apoyo visual, entre otras."
	}
];
/** Serve originals through the Netlify Image CDN, resized and converted to WebP. */
function img(src, w) {
	return `/.netlify/images?url=${encodeURIComponent(src)}&w=${w}&fm=webp&q=72`;
}
// src/components/portfolio/booking-form.tsx
var formats = [
	"Gestión RR.SS",
	"Fotografía",
	"Producción Audiovisual",
	"Aún no lo sé"
];
var fieldDark = "w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 transition focus:border-primary/50 focus:outline-none focus:ring-0";
var fieldLine = "w-full border-0 border-b border-white/20 bg-transparent px-0 py-3 text-lg text-white placeholder:text-white/30 transition focus:border-primary focus:outline-none focus:ring-0";
function BookingForm() {
	const [state, setState] = useState("idle");
	const [format, setFormat] = useState(formats[3]);
	async function submit(event) {
		event.preventDefault();
		if (state === "pending") return;
		const formData = new FormData(event.currentTarget);
		formData.append("access_key", "ce002179-ee80-4582-a768-a53d7634550b");
		setState("pending");
		try {
			if ((await (await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				body: formData
			})).json()).success) setState("success");
			else throw new Error("Error");
		} catch {
			setState("error");
		}
	}
	if (state === "success") return /* @__PURE__ */ jsxs("div", {
		role: "status",
		className: "fade-up flex min-h-[420px] flex-col items-start justify-center gap-6",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "grid size-16 place-items-center rounded-full bg-primary text-primary-foreground",
				children: /* @__PURE__ */ jsx(Check, { className: "size-8" })
			}),
			/* @__PURE__ */ jsx("p", {
				className: "font-display text-5xl uppercase leading-none md:text-6xl",
				children: "¡Corte, se queda!"
			}),
			/* @__PURE__ */ jsx("p", {
				className: "max-w-sm text-lg text-muted-foreground",
				children: "Tu brief llegó. Te respondo en menos de 24 horas con las primeras ideas de ganchos."
			}),
			/* @__PURE__ */ jsx("button", {
				type: "button",
				onClick: () => setState("idle"),
				className: "font-mono text-xs uppercase tracking-widest text-primary underline-offset-4 hover:underline",
				children: "Enviar otro brief"
			})
		]
	});
	return /* @__PURE__ */ jsxs("form", {
		onSubmit: submit,
		onChange: () => {
			if (state === "error") setState("idle");
		},
		className: "flex flex-col gap-6",
		children: [
			/* @__PURE__ */ jsx("input", {
				type: "hidden",
				name: "format",
				value: format
			}),
			/* @__PURE__ */ jsx("input", {
				type: "checkbox",
				name: "botcheck",
				className: "hidden",
				style: { display: "none" }
			}),
			/* @__PURE__ */ jsxs("fieldset", {
				disabled: state === "pending",
				className: "grid gap-6",
				children: [
					/* @__PURE__ */ jsx("legend", {
						className: "sr-only",
						children: "Brief del proyecto"
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ jsxs("label", {
							className: "block",
							children: [/* @__PURE__ */ jsx("span", {
								className: "font-mono text-[10px] uppercase tracking-widest text-white/50",
								children: "Nombre"
							}), /* @__PURE__ */ jsx("input", {
								name: "name",
								autoComplete: "name",
								required: true,
								maxLength: 100,
								placeholder: "Tu nombre",
								className: cn(fieldDark, "mt-2")
							})]
						}), /* @__PURE__ */ jsxs("label", {
							className: "block",
							children: [/* @__PURE__ */ jsx("span", {
								className: "font-mono text-[10px] uppercase tracking-widest text-white/50",
								children: "Correo"
							}), /* @__PURE__ */ jsx("input", {
								name: "email",
								type: "email",
								autoComplete: "email",
								required: true,
								maxLength: 254,
								placeholder: "tu@marca.com",
								className: cn(fieldDark, "mt-2")
							})]
						})]
					}),
					/* @__PURE__ */ jsxs("label", {
						className: "block",
						children: [/* @__PURE__ */ jsx("span", {
							className: "font-mono text-[10px] uppercase tracking-widest text-white/50",
							children: "Marca / usuario / Red social"
						}), /* @__PURE__ */ jsx("input", {
							name: "brand",
							maxLength: 120,
							placeholder: "@tumarca",
							className: fieldLine
						})]
					}),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
						className: "font-mono text-[10px] uppercase tracking-widest text-white/50",
						children: "¿Qué deseas?"
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-3 flex flex-wrap gap-2",
						role: "radiogroup",
						"aria-label": "Formato",
						children: formats.map((f) => /* @__PURE__ */ jsx("button", {
							type: "button",
							role: "radio",
							"aria-checked": format === f,
							onClick: () => setFormat(f),
							className: cn("rounded-full border px-4 py-2 text-xs font-semibold transition active:scale-95", format === f ? "border-primary bg-primary text-primary-foreground" : "border-white/20 text-white/70 hover:border-white/50"),
							children: f
						}, f))
					})] }),
					/* @__PURE__ */ jsxs("label", {
						className: "block mt-2",
						children: [/* @__PURE__ */ jsx("span", {
							className: "font-mono text-[10px] uppercase tracking-widest text-white/50",
							children: "El brief"
						}), /* @__PURE__ */ jsx("textarea", {
							name: "message",
							required: true,
							maxLength: 2e3,
							rows: 2,
							placeholder: "Cuéntame tu idea...",
							className: cn(fieldLine, "resize-none")
						})]
					}),
					/* @__PURE__ */ jsxs("button", {
						type: "submit",
						className: "group mt-6 flex w-full items-center justify-between rounded-full bg-primary py-3 pl-8 pr-3 font-display text-xl uppercase text-primary-foreground transition hover:bg-white active:scale-[0.98] disabled:opacity-60",
						children: [state === "pending" ? "Enviando…" : "Reservar reunión", /* @__PURE__ */ jsx("span", {
							className: "grid size-10 place-items-center rounded-full bg-black text-white transition group-hover:scale-105",
							children: /* @__PURE__ */ jsx(ArrowUpRight, { className: "size-5" })
						})]
					}),
					state === "error" && /* @__PURE__ */ jsx("p", {
						role: "alert",
						className: "text-sm text-rec",
						children: "Aún no se envió nada; tus datos siguen aquí. Inténtalo de nuevo en un momento."
					})
				]
			})
		]
	});
}
// src/components/portfolio/reel-media.tsx
/**
* Plays the real clip when a reel has a `video`, otherwise animates the
* poster with a slow push-in so every card feels like footage.
*/
var ReelMedia = forwardRef(function ReelMedia({ reel, width, active = true, muted = true, className, eager, onTimeUpdate, onEnded }, forwardedRef) {
	const poster = img(reel.poster, width);
	const internalRef = useRef(null);
	useEffect(() => {
		const video = internalRef.current;
		if (!video) return;
		if (active) video.play().catch(() => {});
		else video.pause();
	}, [active]);
	if (reel.video) return /* @__PURE__ */ jsx("video", {
		ref: (node) => {
			internalRef.current = node;
			if (typeof forwardedRef === "function") forwardedRef(node);
			else if (forwardedRef) forwardedRef.current = node;
		},
		src: reel.video,
		poster,
		muted,
		loop: !onEnded,
		playsInline: true,
		autoPlay: active,
		preload: eager ? "auto" : "metadata",
		onTimeUpdate,
		onEnded,
		className: cn("h-full w-full object-cover", className)
	});
	return /* @__PURE__ */ jsx("img", {
		src: poster,
		alt: `${reel.title} para ${reel.brand}`,
		loading: eager ? "eager" : "lazy",
		decoding: "async",
		draggable: false,
		className: cn("h-full w-full object-cover", active && "kenburns", className)
	});
});
// src/components/portfolio/hero-phone.tsx
var CYCLE_MS = 2600;
/** Phone mock in the hero that flips through reels on its own. */
function HeroPhone({ reels, onOpen }) {
	const [i, setI] = useState(0);
	useEffect(() => {
		const t = window.setInterval(() => setI((x) => (x + 1) % reels.length), CYCLE_MS);
		return () => window.clearInterval(t);
	}, [reels.length]);
	const reel = reels[i];
	return /* @__PURE__ */ jsxs("button", {
		type: "button",
		onClick: () => onOpen(i),
		"aria-label": `Reproducir ${reel.title}`,
		className: "group relative aspect-[9/16] w-[min(78vw,340px)] rotate-3 overflow-hidden rounded-[2.4rem] border-[6px] border-[#1d1d1d] bg-black text-left shadow-[0_40px_120px_-20px_hsl(17_97%_51%/0.35)] transition duration-500 hover:rotate-0 hover:scale-[1.02]",
		children: [
			reels.map((r, idx) => /* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 transition-opacity duration-300",
				style: { opacity: idx === i ? 1 : 0 },
				children: /* @__PURE__ */ jsx(ReelMedia, {
					reel: r,
					width: 500,
					active: idx === i,
					eager: idx < 2
				})
			}, r.id)),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/70 to-transparent" }),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/90 to-transparent" }),
			/* @__PURE__ */ jsx("div", {
				className: "absolute inset-x-3 top-3 flex gap-1",
				children: reels.map((r, idx) => /* @__PURE__ */ jsx("div", {
					className: "h-[3px] flex-1 overflow-hidden rounded-full bg-white/25",
					children: idx <= i && /* @__PURE__ */ jsx("div", {
						className: "h-full bg-white",
						style: idx === i ? {
							animation: `phone-bar ${CYCLE_MS}ms linear forwards`,
							transformOrigin: "left"
						} : void 0
					}, idx === i ? `run-${i}` : "full")
				}, r.id))
			}),
			/* @__PURE__ */ jsx("div", {
				className: "absolute inset-x-4 top-[30%] -rotate-3 text-center",
				children: /* @__PURE__ */ jsx("span", {
					className: "fade-up inline-block bg-primary px-2 py-0.5 font-display text-2xl uppercase leading-tight text-primary-foreground",
					children: reel.hook
				})
			}, reel.id),
			/* @__PURE__ */ jsxs("div", {
				className: "absolute bottom-24 right-3 flex flex-col items-center gap-4 text-white",
				children: [
					/* @__PURE__ */ jsx(Heart, { className: "size-6 fill-rec text-rec" }),
					/* @__PURE__ */ jsx(MessageCircle, { className: "size-6" }),
					/* @__PURE__ */ jsx(Send, { className: "size-6" })
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "absolute inset-x-4 bottom-5 text-white",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "text-xs font-semibold opacity-80",
						children: profile.handle
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-0.5 font-display text-xl uppercase leading-none",
						children: reel.title
					}),
					/* @__PURE__ */ jsxs("p", {
						className: "mt-2 font-mono text-[10px] uppercase tracking-widest text-primary",
						children: [reel.views, " vistas · toca para ver"]
					})
				]
			})
		]
	});
}
// src/components/portfolio/motion.tsx
/** Adds `is-in` once the element scrolls into view (pairs with the `.reveal` class). */
function useReveal() {
	const ref = useRef(null);
	const [inView, setInView] = useState(false);
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setInView(true);
				io.disconnect();
			}
		}, { threshold: .15 });
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return {
		ref,
		inView,
		className: inView ? "reveal is-in" : "reveal"
	};
}
function CountUp({ value, suffix }) {
	const { ref, inView } = useReveal();
	const [n, setN] = useState(0);
	useEffect(() => {
		if (!inView) return;
		let raf = 0;
		const start = performance.now();
		const tick = (now) => {
			const t = Math.min(1, (now - start) / 1400);
			setN(Math.round(value * (1 - Math.pow(1 - t, 3))));
			if (t < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [inView, value]);
	return /* @__PURE__ */ jsxs("span", {
		ref,
		className: "tabular-nums",
		children: [n, suffix]
	});
}
// src/components/portfolio/reel-player.tsx
/** Fullscreen, stories-style vertical player: auto-advances and loops forever. */
function ReelPlayer({ reels, startIndex, onClose }) {
	const [index, setIndex] = useState(startIndex);
	const [progress, setProgress] = useState(0);
	const progressRef = useRef(0);
	const [paused, setPaused] = useState(false);
	const [isMuted, setIsMuted] = useState(true);
	const holdTimer = useRef(null);
	const held = useRef(false);
	const downAt = useRef(null);
	const wheelLock = useRef(0);
	const touchY = useRef(null);
	const reel = reels[index];
	const go = useCallback((dir) => {
		setIndex((i) => (i + dir + reels.length) % reels.length);
		progressRef.current = 0;
		setProgress(0);
	}, [reels.length]);
	useEffect(() => {
		if (reel.video || paused) return;
		let raf = 0;
		let last = performance.now();
		let p = progressRef.current;
		const tick = (now) => {
			p += (now - last) / 1e3 / reel.duration;
			last = now;
			if (p >= 1) {
				go(1);
				return;
			}
			progressRef.current = p;
			setProgress(p);
			raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [
		reel,
		paused,
		go
	]);
	const videoRef = useRef(null);
	useEffect(() => {
		const v = videoRef.current;
		if (!v) return;
		if (paused) v.pause();
		else v.play().catch(() => {});
	}, [paused, index]);
	useEffect(() => {
		const onKey = (e) => {
			if (e.key === "Escape") onClose();
			else if (e.key === "ArrowDown" || e.key === "ArrowRight") go(1);
			else if (e.key === "ArrowUp" || e.key === "ArrowLeft") go(-1);
			else if (e.key === " ") {
				e.preventDefault();
				setPaused((p) => !p);
			}
		};
		const prevOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", onKey);
		return () => {
			document.body.style.overflow = prevOverflow;
			window.removeEventListener("keydown", onKey);
		};
	}, [go, onClose]);
	const onWheel = (e) => {
		const now = Date.now();
		if (now - wheelLock.current < 650 || Math.abs(e.deltaY) < 20) return;
		wheelLock.current = now;
		go(e.deltaY > 0 ? 1 : -1);
	};
	const startHold = (e) => {
		held.current = false;
		downAt.current = {
			x: e.clientX,
			y: e.clientY
		};
		holdTimer.current = window.setTimeout(() => {
			held.current = true;
			setPaused(true);
		}, 220);
	};
	const endHold = (e) => {
		if (holdTimer.current) window.clearTimeout(holdTimer.current);
		if (held.current) {
			setPaused(false);
			return;
		}
		const d = downAt.current;
		if (d && Math.hypot(e.clientX - d.x, e.clientY - d.y) > 12) return;
		const rect = e.currentTarget.getBoundingClientRect();
		go(e.clientX - rect.left < rect.width / 3 ? -1 : 1);
	};
	return /* @__PURE__ */ jsxs("div", {
		role: "dialog",
		"aria-modal": "true",
		"aria-label": `${reel.title} — ${reel.brand}`,
		className: "fade-up fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl",
		onWheel,
		onTouchStart: (e) => touchY.current = e.touches[0].clientY,
		onTouchEnd: (e) => {
			if (touchY.current === null) return;
			const dy = touchY.current - e.changedTouches[0].clientY;
			touchY.current = null;
			if (Math.abs(dy) > 60) go(dy > 0 ? 1 : -1);
		},
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "pointer-events-none absolute inset-0 opacity-40 blur-3xl saturate-150",
				children: /* @__PURE__ */ jsx(ReelMedia, {
					reel,
					width: 200,
					active: false
				}, `bg-${reel.id}`)
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative h-[100dvh] w-full max-w-[min(100vw,calc(100dvh*9/16))] overflow-hidden bg-black sm:h-[92dvh] sm:rounded-3xl",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "absolute inset-0 cursor-pointer select-none",
						onPointerDown: startHold,
						onPointerUp: endHold,
						onPointerLeave: () => {
							if (holdTimer.current) window.clearTimeout(holdTimer.current);
							if (held.current) setPaused(false);
						},
						children: /* @__PURE__ */ jsx(ReelMedia, {
							ref: videoRef,
							reel,
							width: 900,
							eager: true,
							muted: isMuted,
							className: paused ? "[animation-play-state:paused]" : void 0,
							onTimeUpdate: (e) => {
								const v = e.currentTarget;
								if (v.duration) setProgress(v.currentTime / v.duration);
							},
							onEnded: () => go(1)
						}, reel.id)
					}),
					/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 to-transparent" }),
					/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-black/90 via-black/40 to-transparent" }),
					/* @__PURE__ */ jsx("div", {
						className: "absolute inset-x-3 top-3 flex gap-1",
						children: reels.map((r, i) => /* @__PURE__ */ jsx("div", {
							className: "h-[3px] flex-1 overflow-hidden rounded-full bg-white/25",
							children: /* @__PURE__ */ jsx("div", {
								className: "h-full origin-left bg-white",
								style: { transform: `scaleX(${i < index ? 1 : i === index ? progress : 0})` }
							})
						}, r.id))
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "absolute inset-x-4 top-7 flex items-center justify-between",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2 font-mono text-[11px] tracking-widest text-white/80",
							children: [
								/* @__PURE__ */ jsx("span", { className: "rec-dot inline-block size-2 rounded-full bg-rec" }),
								String(index + 1).padStart(2, "0"),
								"/",
								String(reels.length).padStart(2, "0")
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex gap-2",
							children: [
								/* @__PURE__ */ jsx("button", {
									type: "button",
									onClick: () => setIsMuted((m) => !m),
									"aria-label": isMuted ? "Activar sonido" : "Silenciar",
									className: "grid size-9 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20",
									children: isMuted ? /* @__PURE__ */ jsx(VolumeX, { className: "size-4" }) : /* @__PURE__ */ jsx(Volume2, { className: "size-4" })
								}),
								/* @__PURE__ */ jsx("button", {
									type: "button",
									onClick: () => setPaused((p) => !p),
									"aria-label": paused ? "Reproducir" : "Pausar",
									className: "grid size-9 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20",
									children: paused ? /* @__PURE__ */ jsx(Play, { className: "size-4" }) : /* @__PURE__ */ jsx(Pause, { className: "size-4" })
								}),
								/* @__PURE__ */ jsx("button", {
									type: "button",
									onClick: onClose,
									"aria-label": "Cerrar reproductor",
									className: "grid size-9 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20",
									children: /* @__PURE__ */ jsx(X, { className: "size-4" })
								})
							]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "fade-up pointer-events-none absolute inset-x-5 bottom-6",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "text-sm font-semibold text-white/80",
								children: profile.handle
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "mt-1 font-display text-4xl uppercase leading-[0.95] text-white",
								children: reel.title
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-3 flex flex-wrap items-center gap-2 text-xs",
								children: [/* @__PURE__ */ jsx("span", {
									className: "rounded-full bg-primary/100 px-2.5 py-1 font-bold text-black",
									children: reel.brand
								}), reel.video && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("span", {
									className: "rounded-full border border-white/30 px-2.5 py-1 text-white/90",
									children: reel.category.join(" · ")
								}), /* @__PURE__ */ jsxs("span", {
									className: "flex items-center gap-1 rounded-full border border-white/30 px-2.5 py-1 text-white/90",
									children: [
										/* @__PURE__ */ jsx(Eye, { className: "size-3" }),
										" ",
										reel.views
									]
								})] })]
							})
						]
					}, `meta-${reel.id}`),
					paused && /* @__PURE__ */ jsx("div", {
						className: "pointer-events-none absolute inset-0 grid place-items-center",
						children: /* @__PURE__ */ jsx("div", {
							className: "grid size-20 place-items-center rounded-full bg-black/50 backdrop-blur",
							children: /* @__PURE__ */ jsx(Pause, { className: "size-8 text-white" })
						})
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col gap-3 md:flex",
				children: [/* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: () => go(-1),
					"aria-label": "Reel anterior",
					className: "grid size-12 place-items-center rounded-full border border-white/20 text-white transition hover:bg-white hover:text-black",
					children: /* @__PURE__ */ jsx(ChevronUp, {})
				}), /* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: () => go(1),
					"aria-label": "Siguiente reel",
					className: "grid size-12 place-items-center rounded-full border border-white/20 text-white transition hover:bg-white hover:text-black",
					children: /* @__PURE__ */ jsx(ChevronDown, {})
				})]
			}),
			/* @__PURE__ */ jsx("p", {
				className: "absolute bottom-4 left-6 hidden font-mono text-[11px] uppercase tracking-widest text-white/40 md:block",
				children: "Scroll · ← → · Espacio para pausar · Mantén para congelar"
			})
		]
	});
}
// src/routes/index.tsx?tsr-split=component
var photoReels = fotos.map((f, idx) => ({
	id: `${f.id}-${idx}`,
	title: f.title,
	brand: "Fotografía",
	category: [],
	hook: f.hook || f.title,
	poster: f.src,
	views: "",
	retention: "",
	duration: 5
}));
function Home() {
	const [filter, setFilter] = useState("Todo");
	const [player, setPlayer] = useState(null);
	const visible = useMemo(() => filter === "Todo" ? reels : reels.filter((r) => r.category.includes(filter)), [filter]);
	return /* @__PURE__ */ jsxs("div", {
		className: "relative overflow-x-clip",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "grain",
				"aria-hidden": true
			}),
			/* @__PURE__ */ jsx(Nav, {}),
			/* @__PURE__ */ jsx(Hero, { onOpen: (list, index) => setPlayer({
				list,
				index
			}) }),
			/* @__PURE__ */ jsx(Marquee, {}),
			/* @__PURE__ */ jsxs("section", {
				id: "reels",
				className: "mx-auto max-w-7xl px-5 pb-32 pt-24 md:px-10",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-col gap-8 md:flex-row md:items-end md:justify-between",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "font-mono text-xs uppercase tracking-[0.3em] text-primary",
							children: "● Trabajo destacado"
						}), /* @__PURE__ */ jsx("h2", {
							className: "mt-3 font-display text-[clamp(3.5rem,11vw,9rem)] uppercase leading-[0.85]",
							children: "audiovisual"
						})] }), /* @__PURE__ */ jsx("div", {
							className: "no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 md:mx-0 md:px-0",
							children: categories.map((c) => /* @__PURE__ */ jsx("button", {
								type: "button",
								onClick: () => setFilter(c),
								"aria-pressed": filter === c,
								className: cn("shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition active:scale-95", filter === c ? "border-primary bg-primary text-primary-foreground" : "border-white/15 hover:border-white/50"),
								children: c
							}, c))
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-14 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5",
						children: visible.map((reel, i) => /* @__PURE__ */ jsx(ReelCard, {
							reel,
							index: i,
							isPlayerOpen: !!player,
							onOpen: () => setPlayer({
								list: visible,
								index: i
							})
						}, `${reel.id}-${i}`))
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-24 text-center font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground",
						children: "Toca cualquier reel y sigue deslizando"
					})
				]
			}),
			/* @__PURE__ */ jsxs("section", {
				id: "fotos",
				className: "mx-auto max-w-7xl px-5 pb-32 pt-10 md:px-10",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
					className: "font-mono text-xs uppercase tracking-[0.3em] text-primary",
					children: "● Trabajo fotográfico"
				}), /* @__PURE__ */ jsx("h2", {
					className: "mt-3 font-display text-[clamp(3.5rem,11vw,9rem)] uppercase leading-[0.85]",
					children: "Fotografía"
				})] }), /* @__PURE__ */ jsx("div", {
					className: "mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5",
					children: fotos.map((foto, i) => /* @__PURE__ */ jsxs("button", {
						type: "button",
						onClick: () => setPlayer({
							list: photoReels,
							index: i
						}),
						"aria-label": `Ver foto ${foto.title}`,
						className: "group relative aspect-[4/5] w-full cursor-pointer overflow-hidden rounded-2xl bg-card text-left",
						children: [
							/* @__PURE__ */ jsx("img", {
								src: img(foto.src, 700),
								alt: foto.title,
								loading: "lazy",
								className: "h-full w-full object-cover transition duration-700 group-hover:scale-105"
							}),
							/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" }),
							/* @__PURE__ */ jsx("p", {
								className: "absolute bottom-4 left-4 font-display text-xl uppercase text-white opacity-0 transition group-hover:opacity-100",
								children: foto.title
							})
						]
					}, `${foto.id}-${i}`))
				})]
			}),
			/* @__PURE__ */ jsx(Stats, {}),
			/* @__PURE__ */ jsx(About, {}),
			/* @__PURE__ */ jsx(Services, {}),
			/* @__PURE__ */ jsx(Contact, {}),
			/* @__PURE__ */ jsx(Footer, {}),
			player && /* @__PURE__ */ jsx(ReelPlayer, {
				reels: player.list,
				startIndex: player.index,
				onClose: () => setPlayer(null)
			})
		]
	});
}
function WhatsAppIcon({ className }) {
	return /* @__PURE__ */ jsx("svg", {
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": true,
		className,
		children: /* @__PURE__ */ jsx("path", { d: "M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.41 9.41 0 0 1-1.44-5.02c0-5.2 4.23-9.43 9.44-9.43 2.52 0 4.89.98 6.67 2.77a9.37 9.37 0 0 1 2.76 6.67c0 5.2-4.24 9.43-9.45 9.43m8.03-17.46A11.28 11.28 0 0 0 12.05.72C5.79.72.7 5.81.7 12.07c0 2 .52 3.95 1.52 5.67L.6 23.62l6.02-1.58a11.33 11.33 0 0 0 5.42 1.38h.01c6.26 0 11.35-5.09 11.35-11.35 0-3.03-1.18-5.88-3.32-8.03" })
	});
}
function Nav() {
	return /* @__PURE__ */ jsx("header", {
		className: "fixed inset-x-0 top-0 z-40 mix-blend-difference",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10",
			children: [/* @__PURE__ */ jsx("a", {
				href: "#top",
				className: "font-display text-xl uppercase tracking-wide text-white",
				children: profile.name
			}), /* @__PURE__ */ jsxs("nav", {
				className: "flex items-center gap-3 text-sm font-semibold text-white",
				children: [/* @__PURE__ */ jsx("a", {
					href: `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent("¡Hola Giovanni! Vi tu portafolio y me gustaría hablar sobre un proyecto.")}`,
					target: "_blank",
					rel: "noreferrer",
					"aria-label": "Escríbeme por WhatsApp",
					className: "grid size-9 place-items-center rounded-full border border-white transition hover:bg-white hover:text-black",
					children: /* @__PURE__ */ jsx(WhatsAppIcon, { className: "size-4" })
				}), /* @__PURE__ */ jsx("a", {
					href: "#book",
					className: "rounded-full border border-white px-4 py-1.5 transition hover:bg-white hover:text-black",
					children: "Contacto"
				})]
			})]
		})
	});
}
function Hero({ onOpen }) {
	const lines = ["¡Hagamos", "arte!"];
	return /* @__PURE__ */ jsxs("section", {
		id: "top",
		className: "relative min-h-[100svh] overflow-hidden pt-24",
		children: [
			/* @__PURE__ */ jsx("img", {
				src: img("/img/hero.png", 1200),
				alt: "",
				"aria-hidden": true,
				className: "absolute inset-0 h-full w-full object-cover opacity-25 md:left-auto md:w-1/2"
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" }),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" }),
			/* @__PURE__ */ jsxs("div", {
				className: "relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-10 md:grid-cols-[1.25fr_1fr] md:px-10 md:pt-16",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("p", {
						className: "fade-up font-mono text-xs uppercase tracking-[0.3em] text-primary",
						style: { animationDelay: "0.05s" },
						children: profile.role
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "mt-5 font-display text-[clamp(5rem,17vw,13rem)] uppercase leading-[0.82]",
						children: lines.map((l, i) => /* @__PURE__ */ jsx("span", {
							className: "block overflow-hidden",
							children: /* @__PURE__ */ jsx("span", {
								className: cn("rise block", i === lines.length - 1 && "text-primary"),
								style: { animationDelay: `${.1 + i * .1}s` },
								children: l
							})
						}, l))
					}),
					/* @__PURE__ */ jsx("p", {
						className: "fade-up mt-8 max-w-md text-lg text-white/75 md:text-xl",
						style: { animationDelay: "0.4s" },
						children: "Creación de Contenido para Marcas, Tiendas, Negocios con fotografía y videografía cinematográfica. Estrategias, paquetes y cronogramas de contenido personalizado para cada marca."
					}),
					/* @__PURE__ */ jsx("div", {
						className: "fade-up mt-10 flex flex-wrap gap-3",
						style: { animationDelay: "0.5s" },
						children: /* @__PURE__ */ jsxs("a", {
							href: "#book",
							className: "group flex items-center gap-3 rounded-full bg-primary py-2 pl-2 pr-6 font-semibold text-primary-foreground transition hover:bg-white active:scale-95",
							children: [/* @__PURE__ */ jsx("span", {
								className: "grid size-10 place-items-center rounded-full bg-black text-primary transition group-hover:scale-110",
								children: /* @__PURE__ */ jsx(Mail, { className: "size-4" })
							}), "Contacto"]
						})
					})
				] }), /* @__PURE__ */ jsx("div", {
					className: "fade-up flex justify-center md:justify-end",
					style: { animationDelay: "0.2s" },
					children: /* @__PURE__ */ jsx(HeroPhone, {
						reels: photoReels,
						onOpen: (index) => onOpen(photoReels, index)
					})
				})]
			})
		]
	});
}
function Marquee() {
	const row = [...marquee, ...marquee];
	return /* @__PURE__ */ jsx("div", {
		className: "relative -rotate-2 border-y border-black bg-primary py-4 text-primary-foreground",
		children: /* @__PURE__ */ jsx("div", {
			className: "marquee flex w-max gap-10 whitespace-nowrap",
			children: row.map((b, i) => /* @__PURE__ */ jsxs("span", {
				className: "flex items-center gap-10 font-display text-3xl uppercase md:text-4xl",
				children: [
					b,
					" ",
					/* @__PURE__ */ jsx("span", {
						className: "text-2xl",
						children: "✦"
					})
				]
			}, i))
		})
	});
}
function ReelCard({ reel, index, isPlayerOpen, onOpen }) {
	const reveal = useReveal();
	return /* @__PURE__ */ jsxs("button", {
		ref: reveal.ref,
		type: "button",
		onClick: onOpen,
		"aria-label": `Reproducir ${reel.title} para ${reel.brand}`,
		className: cn(reveal.className, "group relative aspect-[9/16] overflow-hidden rounded-2xl bg-card text-left", index % 2 === 1 && "translate-y-8 md:translate-y-16"),
		style: { transitionDelay: `${index % 4 * 80}ms` },
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 transition duration-700 group-hover:scale-105",
				children: /* @__PURE__ */ jsx(ReelMedia, {
					reel,
					width: 500,
					active: reveal.inView && !isPlayerOpen
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "absolute left-3 right-3 top-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-white/80",
				children: [/* @__PURE__ */ jsx("span", {
					className: "rounded-full bg-black/40 px-2 py-1 backdrop-blur",
					children: reel.category.join(" · ")
				}), /* @__PURE__ */ jsxs("span", {
					className: "flex items-center gap-1 rounded-full bg-black/40 px-2 py-1 backdrop-blur",
					children: [
						/* @__PURE__ */ jsx(Eye, { className: "size-3" }),
						" ",
						reel.views
					]
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "absolute inset-x-3 top-1/3 -rotate-3 text-center opacity-0 transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100",
				children: /* @__PURE__ */ jsx("span", {
					className: "inline-block bg-primary px-2 py-0.5 font-display text-lg uppercase leading-tight text-primary-foreground md:text-2xl",
					children: reel.hook
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 grid place-items-center opacity-0 transition duration-300 group-hover:opacity-100",
				children: /* @__PURE__ */ jsx("span", {
					className: "mt-24 grid size-14 scale-75 place-items-center rounded-full bg-white/90 text-black transition duration-300 group-hover:scale-100",
					children: /* @__PURE__ */ jsx(Play, { className: "size-5 fill-current" })
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "absolute inset-x-3 bottom-3 md:inset-x-4 md:bottom-4",
				children: [/* @__PURE__ */ jsx("p", {
					className: "font-mono text-[10px] uppercase tracking-widest text-primary",
					children: reel.brand
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-1 font-display text-xl uppercase leading-none text-white md:text-2xl",
					children: reel.title
				})]
			})
		]
	});
}
function Stats() {
	return /* @__PURE__ */ jsx("section", {
		className: "border-y border-border bg-card",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-5",
			children: stats.map((s, i) => /* @__PURE__ */ jsxs("div", {
				className: cn("border-border px-4 py-12 lg:px-8 md:py-16", i % 2 === 0 ? "border-r md:border-r-0" : "", i < 4 ? "border-b md:border-b-0" : "", i < 4 ? "md:border-r" : ""),
				children: [/* @__PURE__ */ jsx("p", {
					className: "font-display text-[clamp(2.5rem,6vw,5rem)] leading-none text-primary",
					children: /* @__PURE__ */ jsx(CountUp, {
						value: s.value,
						suffix: s.suffix
					})
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground lg:text-[11px]",
					children: s.label
				})]
			}, s.label))
		})
	});
}
function About() {
	const reveal = useReveal();
	return /* @__PURE__ */ jsx("section", {
		id: "sobre-mi",
		className: "mx-auto max-w-7xl px-5 py-32 md:px-10",
		children: /* @__PURE__ */ jsxs("div", {
			ref: reveal.ref,
			className: cn(reveal.className, "grid items-center gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20"),
			children: [/* @__PURE__ */ jsxs("div", {
				className: "relative mx-auto w-full max-w-sm",
				children: [
					/* @__PURE__ */ jsx("div", { className: "absolute -inset-3 -rotate-3 rounded-[2rem] border-2 border-primary" }),
					/* @__PURE__ */ jsx("div", {
						className: "relative aspect-[4/5] overflow-hidden rounded-[2rem]",
						children: /* @__PURE__ */ jsx("img", {
							src: img("/img/giovanni.jpg", 700),
							alt: `${profile.name} detrás de cámara`,
							loading: "lazy",
							className: "h-full w-full object-cover"
						})
					}),
					/* @__PURE__ */ jsx("span", {
						className: "absolute -bottom-5 -right-3 rotate-6 rounded-full bg-rec px-4 py-2 font-mono text-xs uppercase tracking-widest text-white",
						children: "● Detrás de escena"
					})
				]
			}), /* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx("p", {
					className: "font-mono text-xs uppercase tracking-[0.3em] text-primary",
					children: "● Sobre mí"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-4 font-display text-[clamp(3rem,7vw,6rem)] uppercase leading-[1.2]",
					children: profile.bioTitle
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-8 space-y-5 text-lg leading-relaxed text-white/75 md:text-xl",
					children: profile.bio.map((p) => /* @__PURE__ */ jsx("p", { children: p }, p))
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-10 flex flex-wrap gap-2",
					children: [
						"Guion",
						"Dirección",
						"Cámara",
						"Imagen de Marca",
						"Edición",
						"Color"
					].map((t) => /* @__PURE__ */ jsx("span", {
						className: "rounded-full border border-white/15 px-4 py-1.5 text-sm",
						children: t
					}, t))
				})
			] })]
		})
	});
}
function Services() {
	return /* @__PURE__ */ jsxs("section", {
		className: "mx-auto max-w-7xl px-5 pb-32 md:px-10",
		children: [/* @__PURE__ */ jsxs("h2", {
			className: "font-display text-[clamp(3rem,9vw,7rem)] uppercase leading-[0.85]",
			children: ["Lo que ", /* @__PURE__ */ jsx("span", {
				className: "text-primary",
				children: "hago"
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "mt-12 border-t border-border",
			children: services.map((s) => /* @__PURE__ */ jsxs("div", {
				className: "group grid items-baseline gap-2 border-b border-border py-8 transition-colors hover:bg-primary hover:text-primary-foreground md:grid-cols-[6rem_1fr_1.2fr_3rem] md:gap-8 md:px-4",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "font-mono text-xs text-muted-foreground group-hover:text-primary-foreground",
						children: s.code
					}),
					/* @__PURE__ */ jsx("h3", {
						className: "font-display text-4xl uppercase md:text-5xl",
						children: s.title
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-white/65 group-hover:text-primary-foreground/80",
						children: s.text
					}),
					/* @__PURE__ */ jsx(ArrowDownRight, { className: "hidden size-8 transition group-hover:-rotate-90 md:block" })
				]
			}, s.code))
		})]
	});
}
function Contact() {
	return /* @__PURE__ */ jsx("section", {
		id: "book",
		className: "relative overflow-hidden border-t border-border bg-[#111111]",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid max-w-7xl gap-16 px-5 py-28 md:grid-cols-2 md:px-10 md:gap-24",
			children: [/* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx("p", {
					className: "font-mono text-xs uppercase tracking-[0.3em] text-primary",
					children: "● Cotiza tu Proyecto"
				}),
				/* @__PURE__ */ jsxs("h2", {
					className: "mt-4 font-display text-[clamp(3.5rem,7vw,7rem)] uppercase leading-[0.95] text-white",
					children: [
						"Comencemos ",
						/* @__PURE__ */ jsx("br", {}),
						" a crear ",
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("span", {
							className: "text-primary",
							children: "juntos."
						})
					]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-8 max-w-md text-lg text-white/70",
					children: "Hablemos de tus objetivos, la inversión en este negocio y cómo podemos lograrlo."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-12 space-y-4",
					children: [/* @__PURE__ */ jsx("a", {
						href: `mailto:${profile.email}`,
						className: "block font-display text-2xl md:text-3xl uppercase text-white hover:text-primary transition-colors",
						children: profile.email
					}), /* @__PURE__ */ jsx("div", {
						className: "flex gap-4",
						children: profile.socials.map((s) => /* @__PURE__ */ jsxs("a", {
							href: s.href,
							target: "_blank",
							rel: "noreferrer",
							className: "flex items-center gap-1 text-sm font-semibold text-white/50 hover:text-white transition-colors",
							children: [
								s.label,
								" ",
								/* @__PURE__ */ jsx(ArrowUpRight, { className: "size-3.5" })
							]
						}, s.label))
					})]
				})
			] }), /* @__PURE__ */ jsx(BookingForm, {})]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "relative overflow-hidden border-t border-border bg-[#111111]",
		children: [/* @__PURE__ */ jsx("div", {
			className: "relative flex w-full items-center justify-center overflow-hidden",
			children: /* @__PURE__ */ jsx("p", {
				className: "select-none whitespace-nowrap py-10 text-center font-display text-[clamp(4rem,16vw,26rem)] uppercase leading-none text-white/[0.04]",
				children: profile.name
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 pb-8 font-mono text-[11px] uppercase tracking-widest text-white/40 md:flex-row md:px-10",
			children: [/* @__PURE__ */ jsxs("span", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" ",
				profile.name
			] }), /* @__PURE__ */ jsx("span", { children: profile.location })]
		})]
	});
}
export { Home as component };
