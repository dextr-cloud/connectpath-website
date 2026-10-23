import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import path from "node:path"

export const OG_SIZE = { width: 1200, height: 630 }
export const OG_ALT = "ConnectPath: The contact center built for AI agent oversight"

async function dataUrl(file: string, mime: string) {
  const buf = await readFile(path.join(process.cwd(), "public", file))
  return `data:${mime};base64,${buf.toString("base64")}`
}

// Social preview card (Open Graph + Twitter), rendered at build time.
export async function renderOgImage() {
  const [logo, dashboard] = await Promise.all([
    dataUrl("logo.png", "image/png"),
    dataUrl("screenshots/dashboard-home.jpg", "image/jpeg"),
  ])

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 64px",
          background: "linear-gradient(135deg, #FFFFFF 0%, #E9F3FA 100%)",
          color: "#0A1732",
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} width={400} height={64} alt="" />

        <div style={{ display: "flex", alignItems: "center", gap: 48 }}>
          <div style={{ display: "flex", flexDirection: "column", width: 540 }}>
            <div style={{ fontSize: 60, fontWeight: 700, lineHeight: 1.1, letterSpacing: -1 }}>
              The Contact Center Built for AI Agent Oversight
            </div>
            <div style={{ fontSize: 26, marginTop: 24, color: "#475569", lineHeight: 1.35 }}>
              Real-time visibility. Instant intervention. Quality across human and AI agents.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              width: 500,
              borderRadius: 16,
              overflow: "hidden",
              border: "1px solid #CBD5E1",
              boxShadow: "0 20px 40px rgba(10, 23, 50, 0.18)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={dashboard} width={500} height={268} alt="" />
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 24 }}>
          <div style={{ display: "flex", color: "#069A98", fontWeight: 700 }}>connectpath.cx</div>
          <div style={{ display: "flex", color: "#475569" }}>Built on Amazon Connect</div>
        </div>
      </div>
    ),
    OG_SIZE,
  )
}
