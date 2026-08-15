import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Ange Trésor Djomo · Développeur & Conseiller financier agréé";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0b0d10",
          color: "#edeae2",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 4, color: "#c9a227", textTransform: "uppercase" }}>
          Conseiller bancaire agréé AMF · Développeur full-stack
        </div>
        <div style={{ display: "flex", fontSize: 84, marginTop: 28, fontWeight: 600 }}>Ange Trésor Djomo</div>
        <div style={{ display: "flex", fontSize: 30, marginTop: 24, color: "#8b9099" }}>
          Enseignant → Technicien → Conseiller financier → Développeur → Quant Developer
        </div>
        <div style={{ display: "flex", marginTop: 48, height: 2, width: 260, background: "#c9a227" }} />
      </div>
    ),
    { ...size }
  );
}
