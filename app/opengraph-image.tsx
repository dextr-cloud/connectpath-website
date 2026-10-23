export const dynamic = "force-static"
import { renderOgImage, OG_ALT, OG_SIZE } from "@/lib/og"

export const alt = OG_ALT
export const size = OG_SIZE
export const contentType = "image/png"

export default function Image() {
  return renderOgImage()
}
