"use client"

import { CONTACT_URL } from "@/lib/docs"
import { motion } from "framer-motion"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, Settings, Shield, Sparkles } from "lucide-react"

const valueProps = [
  {
    icon: Zap,
    title: "Faster Time to Value",
    points: [
      "Deploy in < 15 minutes",
      "No development required for dashboards and wallboards",
      "Out-of-box reports ready to run"
    ]
  },
  {
    icon: Settings,
    title: "Operational Control",
    points: [
      "Configuration snapshots with rollback",
      "Self-service routing profile changes",
      "Skills-based queue management"
    ]
  },
  {
    icon: Shield,
    title: "Compliance & Quality",
    points: [
      "Call dispositions built in",
      "Pre-dial compliance (Gryphon)",
      "Recording control permissions"
    ]
  },
  {
    icon: Sparkles,
    title: "Future-Ready",
    points: [
      "SwarmControl: live supervision of ACXD AI agents",
      "Whisper, approve, and intercept AI contacts"
    ]
  }
]

export default function OperationsSolutionPage() {
  return (
    <>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cp-navy-900 via-cp-navy-800 to-cp-navy-900" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                  Operational Excellence on Amazon Connect
                </h1>
                <p className="text-xl text-cp-slate-300 mb-8">
                  Real-time visibility, historical reporting, and configuration control—without building custom solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold" asChild>
                    <Link href={CONTACT_URL} target="_blank" rel="noopener noreferrer">Talk to Our Team</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Value Propositions */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              {valueProps.map((prop, index) => (
                <motion.div
                  key={prop.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-8">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cp-teal-400 to-cp-cyan-500 flex items-center justify-center mb-6">
                        <prop.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-semibold text-cp-navy-900 mb-4">{prop.title}</h3>
                      <ul className="space-y-3">
                        {prop.points.map((point) => (
                          <li key={point} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-cp-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <div className="w-2 h-2 rounded-full bg-cp-teal-400" />
                            </div>
                            <span className="text-cp-slate-700">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-cp-navy-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Ready to Optimize Operations?
              </h2>
              <p className="text-xl text-cp-slate-300 mb-8">
                Talk to our team about your operational needs.
              </p>
              <Button size="lg" className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold" asChild>
                <Link href={CONTACT_URL} target="_blank" rel="noopener noreferrer">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
    </>
  )
}
