import { ImageResponse } from "next/og";

import { siteConfig } from "@/data/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export const alt = `${siteConfig.name} — Online Quran classes with a 3-day free trial`;

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#081c15",
          color: "#f6f1e7",
          padding: "72px 84px",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.5,
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(208,179,115,0.18) 1px, transparent 1.6px)",
            backgroundSize: "34px 34px",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <div
            style={{
              color: "#bd9a55",
              fontSize: 24,
              letterSpacing: 6,
              textTransform: "uppercase",
              marginBottom: 28,
            }}
          >
            {siteConfig.tagline}
          </div>
          <div
            style={{
              maxWidth: 880,
              fontSize: 72,
              lineHeight: 1.08,
              fontWeight: 500,
              color: "#f6f1e7",
            }}
          >
            Learn the Quran with confidence, one step at a time.
          </div>
          <div
            style={{
              marginTop: 32,
              fontSize: 28,
              color: "rgba(246,241,231,0.72)",
            }}
          >
            30-minute classes · 3-day free trial · students worldwide
          </div>
        </div>
      </div>
    ),
    size,
  );
}
