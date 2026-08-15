import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0d10",
          border: "2px solid #c9a227",
          borderRadius: 14,
          color: "#c9a227",
          fontSize: 26,
          fontWeight: 700,
          fontFamily: "monospace",
          letterSpacing: -1,
        }}
      >
        AT
      </div>
    ),
    { ...size }
  );
}
