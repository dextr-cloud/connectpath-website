import Image from "next/image"
import { cn } from "@/lib/utils"
import type { ScreenshotData } from "@/lib/screenshots"

interface ScreenshotProps {
  shot: ScreenshotData
  className?: string
  priority?: boolean
}

// Framed product screenshot. Small crops (dialogs, strips) are capped at their
// native width so they are not stretched beyond their resolution.
export function Screenshot({ shot, className, priority }: ScreenshotProps) {
  return (
    <figure
      className={cn(
        "mx-auto overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-raised)]",
        className,
      )}
      style={{ maxWidth: shot.width }}
    >
      <Image
        src={shot.src}
        alt={shot.alt}
        width={shot.width}
        height={shot.height}
        priority={priority}
        sizes="(min-width: 1024px) 560px, 100vw"
        className="h-auto w-full"
      />
    </figure>
  )
}

export default Screenshot
