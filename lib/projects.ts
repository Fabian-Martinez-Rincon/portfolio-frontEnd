export type Project = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  highlights: string[];
  /** ⚠️ PLACEHOLDER — número de ejemplo para previsualizar el diseño. No es un dato real, reemplazar antes de publicar. */
  metric?: { value: string; label: string };
};

export const projects: Project[] = [
  {
    id: "academia-fabo",
    name: "Academia Fabo",
    tagline: "Plataforma educativa con editor de código real en el navegador",
    description:
      "Un aula virtual donde el alumno no mira código: lo escribe y lo corre. Cursos completos de programación con el mismo motor de edición que usa VS Code y corrección automática de ejercicios, sostenido con un modelo de suscripción paga.",
    stack: ["Next.js", "TypeScript", "Monaco Editor", "Mercado Pago", "Google OAuth"],
    highlights: [
      "Editor de código real (Monaco) para varios lenguajes, corriendo ejercicios al instante",
      "7 materias completas con contenido propio y ejecución automática de código",
      "Login con Google + suscripción mensual/trimestral vía Mercado Pago",
    ],
    metric: { value: "1.200+", label: "alumnos activos" }, // PLACEHOLDER, dato inventado
  },
  {
    id: "gestor-tareas",
    name: "Gestor de Tareas",
    tagline: "Panel central para manejar varios proyectos a la vez",
    description:
      "La herramienta que uso todos los días para no perder el hilo entre proyectos: un solo tablero para organizar tareas, y la posibilidad de prender, apagar y ver los logs de cada servidor de desarrollo sin salir del navegador.",
    stack: ["Next.js", "TypeScript"],
    highlights: [
      "Tablero de tareas agrupado por proyecto, sin la fricción de un Kanban",
      "Arranque/parada de servidores de desarrollo con logs en tiempo real",
    ],
    metric: { value: "35 hs/mes", label: "ahorradas en coordinación" }, // PLACEHOLDER, dato inventado
  },
  {
    id: "gimnasio-stats",
    name: "Gimnasio Stats",
    tagline: "Seguimiento de entrenamientos y progreso físico",
    description:
      "Todo lo que pasa en el gimnasio, en un solo lugar: entrenamientos, cardio, medidas corporales y asistencia, con gráficos que muestran si el esfuerzo de hoy se refleja en el progreso de mañana.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    highlights: [
      "Registro de entrenamientos, cardio, medidas corporales y asistencia",
      "Gráficos de progreso y modo claro/oscuro",
    ],
    metric: { value: "4.800+", label: "entrenamientos registrados" }, // PLACEHOLDER, dato inventado
  },
  {
    id: "ingles-flashcards",
    name: "Inglés Flashcards",
    tagline: "Vocabulario con repetición espaciada y práctica de conversación",
    description:
      "Vocabulario que se queda: flashcards con el algoritmo de repetición espaciada SM-2 para memorizar a largo plazo, sumado a un modo de conversación libre y ejercicios de gramática con contenido propio, no genérico.",
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
      "Un sitio para conocer a los pueblos no alcanzados dentro de la Ventana 10/40, con datos reales — no genéricos — tomados de organizaciones especializadas como Joshua Project, Wycliffe y Open Doors.",
    stack: ["Next.js", "TypeScript"],
    highlights: ["Contenido alimentado con datos reales de fuentes públicas especializadas"],
  },
  {
    id: "publicador-redes",
    name: "Publicador de Redes",
    tagline: "Automatización de publicación en redes sociales",
    description:
      "Publicar en YouTube, LinkedIn e Instagram sin abrir tres apps distintas: un solo lugar para subir contenido, armar reels automáticamente con ffmpeg y ver las estadísticas de cada cuenta.",
    stack: ["Next.js", "TypeScript", "YouTube API", "Instagram Graph API", "ffmpeg"],
    highlights: [
      "Integración con YouTube Data API, LinkedIn e Instagram Graph API",
      "Armado automático de reels (video + audio) con ffmpeg",
    ],
    metric: { value: "180+", label: "publicaciones automatizadas/mes" }, // PLACEHOLDER, dato inventado
  },
];
