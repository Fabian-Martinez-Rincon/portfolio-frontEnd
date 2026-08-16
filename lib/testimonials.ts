/**
 * ⚠️ PLACEHOLDER — contenido inventado para previsualizar el diseño de la sección.
 * Ninguna de estas personas/empresas existe. NO publicar así: reemplazar cada
 * cita, nombre y rol por testimonios reales antes de deployar a producción.
 */
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  rating: number;
  featured?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Nos entregó el panel antes de la fecha pactada y nos explicó cada decisión técnica sin vueltas. Se nota que primero entiende el problema y después programa.",
    name: "Julia Ferrero",
    role: "Fundadora, Estudio Lumen",
    rating: 5,
    featured: true,
  },
  {
    quote:
      "Lo que más valoramos fue que no llegamos a un 'sistema genérico': llegamos exactamente a lo que necesitábamos, ni una pantalla de más.",
    name: "Nicolás Paredes",
    role: "Gerente de operaciones, Contable+",
    rating: 5,
  },
  {
    quote:
      "Sigue dando soporte meses después de la entrega, algo que no es tan común. Cualquier duda la responde el mismo día.",
    name: "Lucía Manzano",
    role: "Directora, Café Nómade",
    rating: 4,
  },
];
