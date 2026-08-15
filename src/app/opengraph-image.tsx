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
          background: "#f5f1e8",
          color: "#0b0d10",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 4, color: "#96650d", textTransform: "uppercase" }}>
          Conseiller bancaire agréé AMF · Développeur full-stack
        </div>
        <div style={{ display: "flex", fontSize: 84, marginTop: 28, fontWeight: 800 }}>Ange Trésor Djomo</div>
        <div style={{ display: "flex", fontSize: 30, marginTop: 24, color: "#6f6a5e" }}>
          Enseignant → Technicien → Conseiller financier → Développeur → Quant Developer
        </div>
        <div style={{ display: "flex", marginTop: 48, height: 3, width: 260, background: "#c98f2e" }} />
      </div>
    ),
    { ...size }
  );
}
