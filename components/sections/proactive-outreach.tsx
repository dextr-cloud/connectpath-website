"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, PhoneOutgoing, ScrollText, History } from "lucide-react"
import { Button } from "@/components/ui/button"

const highlights = [
  { icon: PhoneOutgoing, label: "Built-in outbound dialer" },
  { icon: ScrollText, label: "Activity audit log" },
  { icon: History, label: "Retained call history" },
]

export function ProactiveOutreachSection() {
  return (
    <section className="py-20 lg:py-24 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          <div>
            <p className="cp-eyebrow mb-3">New in v2.7</p>
            <h2 className="heading-display text-3xl md:text-4xl text-cp-navy-900 leading-tight mb-4">
              Outbound, Built Into ConnectPath
            </h2>
            <p className="text-lg text-cp-slate-600 leading-relaxed mb-6">
              ConnectPath Proactive Outreach adds an outbound dialer to the platform your supervisors already
              use, with an activity audit log and retained call history for your campaigns.
            </p>
            <Button asChild className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold">
              <Link href="/platform/outreach">
                Explore Proactive Outreach
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>

          <ul className="grid gap-4">
            {highlights.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-4 rounded-xl border border-border bg-cp-slate-50 p-5 shadow-[var(--shadow-card)]"
              >
                <div className="size-12 rounded-xl bg-cp-teal-50 flex items-center justify-center shrink-0">
                  <item.icon className="size-6 text-cp-teal-700" />
                </div>
                <span className="font-semibold text-cp-navy-900">{item.label}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default ProactiveOutreachSection
