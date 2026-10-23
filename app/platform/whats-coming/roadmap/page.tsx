"use client"

import { CONTACT_URL } from "@/lib/docs"
import { motion } from "framer-motion"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Bot, Users, Smartphone, AlertCircle, PhoneOutgoing } from "lucide-react"

const roadmapCategories = [
  {
    icon: Bot,
    title: "AI Agent Oversight (SwarmControl)",
    items: [
      { name: "Live AI voice and chat supervision (ACXD)", status: "released" },
      { name: "Whisper, Nudge, Override, and Intercept", status: "released" },
      { name: "Approval workflows", status: "released" },
      { name: "AI performance reporting", status: "planned" }
    ]
  },
  {
    icon: PhoneOutgoing,
    title: "Proactive Outreach",
    items: [
      { name: "Built-in outbound dialer", status: "released" },
      { name: "Activity audit log", status: "released" },
      { name: "Retained outbound call history", status: "released" }
    ]
  },
  {
    icon: Users,
    title: "Supervisor Enhancements",
    items: [
      { name: "Enhanced queue rebalancing", status: "planned" },
      { name: "Predictive staffing recommendations", status: "planned" },
      { name: "Cross-channel supervision views", status: "planned" }
    ]
  },
  {
    icon: Smartphone,
    title: "Agent Experience",
    items: [
      { name: "Mobile agent support expansion", status: "planned" },
      { name: "Enhanced video capabilities", status: "planned" },
      { name: "Additional language support", status: "planned" }
    ]
  }
]

const statusLabels = {
  "released": { label: "Now Available", className: "bg-cp-teal-100 text-cp-teal-700" },
  "planned": { label: "Planned", className: "bg-cp-slate-100 text-cp-slate-700" }
}

export default function RoadmapPage() {
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
                <Link 
                  href="/platform"
                  className="inline-flex items-center gap-2 text-cp-teal-400 hover:text-cp-teal-300 mb-6"
                >
                  <ChevronRight className="w-4 h-4 rotate-180" />
                  Back to Platform
                </Link>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                  Where ConnectPath Is Headed
                </h1>
                <p className="text-xl text-cp-slate-300 mb-8">
                  Our commitment to the supervision platform for Amazon Connect—building what AWS doesn&apos;t.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Update Cadence */}
        <section className="py-12 bg-cp-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-lg text-cp-slate-700">
              ConnectPath releases updates approximately <strong>every 5 weeks</strong>. Here&apos;s what we&apos;ve recently released and what we&apos;re focused on next.
            </p>
          </div>
        </section>

        {/* Roadmap Categories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="space-y-8">
              {roadmapCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-lg bg-cp-teal-100 flex items-center justify-center">
                          <category.icon className="w-6 h-6 text-cp-teal-700" />
                        </div>
                        <h2 className="text-2xl font-semibold text-cp-navy-900">{category.title}</h2>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {category.items.map((item) => (
                          <div key={item.name} className="flex items-center justify-between p-4 bg-cp-slate-50 rounded-lg">
                            <span className="text-cp-slate-700">{item.name}</span>
                            <span className={`px-2 py-1 rounded text-xs font-medium ${statusLabels[item.status as keyof typeof statusLabels].className}`}>
                              {statusLabels[item.status as keyof typeof statusLabels].label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6">
            <Card className="border-cp-warning/40 bg-cp-warning/10">
              <CardContent className="p-6 flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-cp-warning flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-cp-navy-900 mb-1">Note</h3>
                  <p className="text-cp-slate-700">
                    Roadmap items are subject to change. Contact us for the latest on specific features.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-cp-navy-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Have a Feature Request?
              </h2>
              <p className="text-xl text-cp-slate-300 mb-8">
                We&apos;d love to hear what you need from ConnectPath.
              </p>
              <Button size="lg" className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold" asChild>
                <Link href={CONTACT_URL} target="_blank" rel="noopener noreferrer">Contact Us to Discuss Roadmap</Link>
              </Button>
            </div>
          </div>
        </section>
    </>
  )
}
