"use client"

import { CONTACT_URL } from "@/lib/docs"
import { motion } from "framer-motion"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Monitor, Server } from "lucide-react"

const features = {
  supervisors: [
    "Team Status shows all agents with status duration",
    "Remote status changes",
    "Live monitoring and coaching",
    "Push announcements reach everyone"
  ],
  agents: [
    "Browser-based—works anywhere",
    "Agent-to-agent chat for collaboration",
    "VDI validated for virtual desktop environments"
  ],
  it: [
    "No VPN required for agent access",
    "VB-Audio support for VDI",
    "MOS score monitoring for call quality"
  ]
}

export default function RemoteTeamsPage() {
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
                  Supervise Agents Anywhere
                </h1>
                <p className="text-xl text-cp-slate-300 mb-8">
                  Remote status changes, live whisper coaching, and team visibility—no matter where your agents are located.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold" asChild>
                    <Link href={CONTACT_URL} target="_blank" rel="noopener noreferrer">Learn About Remote Team Support</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features by Role */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-lg bg-cp-teal-100 flex items-center justify-center mb-6">
                      <Users className="w-6 h-6 text-cp-teal-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-cp-navy-900 mb-4">For Supervisors</h3>
                    <ul className="space-y-3">
                      {features.supervisors.map((feature) => (
                        <li key={feature} className="text-sm text-cp-slate-600 flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-cp-teal-400 mt-1.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-lg bg-cp-teal-100 flex items-center justify-center mb-6">
                      <Monitor className="w-6 h-6 text-cp-teal-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-cp-navy-900 mb-4">For Agents</h3>
                    <ul className="space-y-3">
                      {features.agents.map((feature) => (
                        <li key={feature} className="text-sm text-cp-slate-600 flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-cp-teal-400 mt-1.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Card className="h-full">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-lg bg-cp-teal-100 flex items-center justify-center mb-6">
                      <Server className="w-6 h-6 text-cp-teal-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-cp-navy-900 mb-4">For IT</h3>
                    <ul className="space-y-3">
                      {features.it.map((feature) => (
                        <li key={feature} className="text-sm text-cp-slate-600 flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-cp-teal-400 mt-1.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-cp-navy-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Ready for Remote-First Operations?
              </h2>
              <p className="text-xl text-cp-slate-300 mb-8">
                Supervise your distributed team effectively from anywhere.
              </p>
              <Button size="lg" className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold" asChild>
                <Link href="/get-started">Start Free Trial</Link>
              </Button>
            </div>
          </div>
        </section>
    </>
  )
}
