export type Project = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  highlights: string[];
};

export const projects: Project[] = [
  {
    id: "academia-fabo",
    name: "Academia Fabo",
    tagline: "Plataforma educativa con editor de código real en el navegador",
    description:
      "Plataforma de e-learning para materias de programación: teoría, ejercicios y evaluación automática, todo corriendo en vivo dentro del navegador con el mismo motor de VS Code (Monaco). Incluye login con Google y suscripción paga.",
    stack: ["Next.js", "TypeScript", "Monaco Editor", "Mercado Pago", "Google OAuth"],
    highlights: [
      "Editor de código real (Monaco) para varios lenguajes, corriendo ejercicios al instante",
      "7 materias completas con contenido propio y ejecución automática de código",
      "Login con Google + suscripción mensual/trimestral vía Mercado Pago",
    ],
  },
  {
    id: "gestor-tareas",
    name: "Gestor de Tareas",
    tagline: "Panel central para manejar varios proyectos a la vez",
    description:
      "Herramienta interna para organizar tareas de todos mis proyectos en un solo tablero, con la posibilidad de arrancar y parar cada servidor de desarrollo y ver sus logs en vivo desde la misma pantalla.",
    stack: ["Next.js", "TypeScript"],
    highlights: [
      "Tablero de tareas agrupado por proyecto, sin la fricción de un Kanban",
      "Arranque/parada de servidores de desarrollo con logs en tiempo real",
    ],
  },
  {
    id: "gimnasio-stats",
    name: "Gimnasio Stats",
    tagline: "Seguimiento de entrenamientos y progreso físico",
    description:
      "App para registrar entrenamientos, cardio, medidas corporales y asistencia al gimnasio, con gráficos que muestran la evolución a lo largo del tiempo.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    highlights: [
      "Registro de entrenamientos, cardio, medidas corporales y asistencia",
      "Gráficos de progreso y modo claro/oscuro",
    ],
  },
  {
    id: "ingles-flashcards",
    name: "Inglés Flashcards",
    tagline: "Vocabulario con repetición espaciada y práctica de conversación",
    description:
      "App para aprender inglés con flashcards basadas en el algoritmo de repetición espaciada SM-2, más un modo de práctica de conversación libre y ejercicios de gramática con contenido propio.",
    stack: ["Next.js", "TypeScript", "SM-2 (spaced repetition)"],
    highlights: [
      "Repetición espaciada (SM-2) para memorizar vocabulario a largo plazo",
      "Práctica de conversación libre y sección de gramática con ejercicios",
    ],
  },
  {
    id: "ventana-10-40",
    name: "Ventana 10/40",
    tagline: "Sitio informativo con datos reales de pueblos no alcanzados",
    description:
      "Sitio para difundir información sobre pueblos no alcanzados dentro de la Ventana 10/40, con datos reales tomados de organizaciones como Joshua Project, Wycliffe y Open Doors.",
    stack: ["Next.js", "TypeScript"],
    highlights: ["Contenido alimentado con datos reales de fuentes públicas especializadas"],
  },
  {
    id: "publicador-redes",
    name: "Publicador de Redes",
    tagline: "Automatización de publicación en redes sociales",
    description:
      "App para publicar contenido en YouTube, LinkedIn e Instagram desde un solo lugar, sin pasar por cada app oficial, incluyendo armado de reels con ffmpeg y estadísticas de cuentas.",
    stack: ["Next.js", "TypeScript", "YouTube API", "Instagram Graph API", "ffmpeg"],
    highlights: [
      "Integración con YouTube Data API, LinkedIn e Instagram Graph API",
      "Armado automático de reels (video + audio) con ffmpeg",
    ],
  },
];
