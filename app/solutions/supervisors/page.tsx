"use client"

import { motion } from "framer-motion"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, Check } from "lucide-react"

const painPoints = {
  before: [
    "Multiple browser tabs to see what's happening",
    "Metrics delayed by minutes, not seconds",
    "No way to see individual contacts waiting",
    "Coaching happens after the call, not during",
    "Rebalancing queues requires admin console access"
  ],
  after: [
    "Single unified interface",
    "60-second metric refresh",
    "LiveLook shows every waiting contact",
    "Live whisper coaching in real-time",
    "Drag-and-drop queue management"
  ]
}

const features = [
  "Real-time dashboards",
  "Team Status Drawer",
  "Silent monitor and whisper coach",
  "Announcements",
  "Queue management",
  "Historical reporting"
]

export default function SupervisorsSolutionPage() {
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
                  Built for Supervisors. Not Developers.
                </h1>
                <p className="text-xl text-cp-slate-300 mb-8">
                  ConnectPath was designed around how supervisors actually work—not how developers think they should work.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold" asChild>
                    <Link href="/get-started">Start Free Trial</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Before/After Comparison */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-cp-navy-900 mb-4">
                Pain Points Addressed
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-cp-danger/30 bg-cp-danger/5">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-cp-navy-900 mb-6">Before ConnectPath</h3>
                    <ul className="space-y-4">
                      {painPoints.before.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <X className="w-5 h-5 text-cp-danger flex-shrink-0 mt-0.5" />
                          <span className="text-cp-navy-900">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-cp-teal-200 bg-cp-teal-50/50">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-cp-teal-700 mb-6">With ConnectPath</h3>
                    <ul className="space-y-4">
                      {painPoints.after.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-cp-teal-400 flex-shrink-0 mt-0.5" />
                          <span className="text-cp-teal-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 bg-cp-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-cp-navy-900 mb-4">
                Key Features for Supervisors
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="text-center">
                    <CardContent className="p-4">
                      <span className="text-navy-800 font-medium">{feature}</span>
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
                Ready to Supervise Smarter?
              </h2>
              <p className="text-xl text-cp-slate-300 mb-8">
                See why supervisors love ConnectPath.
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
