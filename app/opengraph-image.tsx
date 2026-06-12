import { ImageResponse } from "next/og";

export const alt =
  "VetFusion — AI-assisted veterinary records, SOAPs, and care-continuity workflows";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0c2a22",
          backgroundImage:
            "radial-gradient(circle at 85% 10%, rgba(30,92,76,0.55) 0%, rgba(30,92,76,0) 55%)",
          padding: "72px 80px",
          color: "#faf7f1",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#d97742",
          }}
        >
          Setup &amp; support for animal-care teams
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
            <div style={{ fontSize: 96, fontWeight: 700 }}>VetFusion</div>
            <div style={{ fontSize: 56, color: "#d97742", fontWeight: 700 }}>
              +
            </div>
          </div>
          <div
            style={{
              fontSize: 40,
              lineHeight: 1.3,
              maxWidth: 980,
              color: "rgba(250,247,241,0.85)",
            }}
          >
            AI-assisted veterinary records, SOAPs, and care-continuity
            workflows.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(250,247,241,0.2)",
            paddingTop: 32,
            fontSize: 26,
            color: "rgba(250,247,241,0.7)",
          }}
        >
          <div style={{ display: "flex" }}>
            One setup. Launch support included.
          </div>
          <div style={{ display: "flex", color: "#d97742" }}>
            AI drafts. Veterinarians decide.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
