"use client"

import * as React from "react"
import dynamic from "next/dynamic"

const Header = dynamic(() => import("@/components/header").then(mod => mod.Header), {
  ssr: false
})

const Footer = dynamic(() => import("@/components/footer").then(mod => mod.Footer), {
  ssr: false
})

interface ClientLayoutProps {
  children: React.ReactNode
}

export function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}
