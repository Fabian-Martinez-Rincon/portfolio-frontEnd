import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "linear-gradient(135deg, #0a0f0d 0%, #0f1f17 55%, #14261a 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              display: "flex",
              width: 52,
              height: 52,
              borderRadius: 8,
              background: "#0f9d58",
            }}
          />
          <div style={{ fontSize: 34, fontWeight: 800, letterSpacing: -1 }}>Fabo.</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 900 }}>
          <div style={{ fontSize: 62, fontWeight: 800, lineHeight: 1.1, letterSpacing: -2 }}>
            Construyo aplicaciones web a medida para tu negocio
          </div>
          <div style={{ fontSize: 28, color: "#a8bdae" }}>
            Full-stack · Next.js · Integraciones de pagos y APIs · Automatizaciones
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
