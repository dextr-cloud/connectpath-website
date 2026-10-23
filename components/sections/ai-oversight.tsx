"use client"

import { DEMO_URL } from "@/lib/docs"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Screenshot } from "@/components/screenshot"
import { screenshots } from "@/lib/screenshots"

export function AIoversightSection() {
  return (
    <section className="py-20 lg:py-28 bg-cp-navy-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <Screenshot shot={screenshots.swarmControlTranscript} className="relative border-white/10" />

            {/* Decorative glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-cp-teal-400/20 rounded-full blur-3xl" />
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cp-teal-400/10 border border-cp-teal-400/20 text-cp-teal-400 text-sm font-medium mb-6">
              <Sparkles className="size-4" />
              New: Now Available
            </div>

            <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
              Introducing SwarmControl. Supervise Your AI Agents.
            </h2>
            <p className="text-lg text-cp-slate-300 leading-relaxed mb-6">
              AI agents are handling real customer conversations. ConnectPath SwarmControl gives
              supervisors a live view of them, with the controls to whisper, nudge, override, approve,
              and intercept.
            </p>
            <p className="text-cp-slate-400 mb-8">
              Built for AI agents designed in Amazon Connect Agentic CX Designer (ACXD). Explore it in demo
              mode today, then connect your ACXD flows for live data.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold">
                <Link href="/platform/supervisors/swarmcontrol">
                  Explore SwarmControl
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <Link href={DEMO_URL} target="_blank" rel="noopener noreferrer">Request a Demo</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AIoversightSection
