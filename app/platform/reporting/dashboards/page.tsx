"use client"

import { DEMO_URL } from "@/lib/docs"
import { motion } from "framer-motion"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  LayoutDashboard, 
  Monitor, 
  Settings2, 
  BarChart3,
  ChevronRight
} from "lucide-react"

const features = [
  {
    icon: LayoutDashboard,
    title: "Home Dashboard",
    description: "Real-time metrics updated every 60 seconds. Customizable widget arrangement. Queue-filtered or global view."
  },
  {
    icon: Monitor,
    title: "Wallboard Mode",
    description: "One-click fullscreen designed for TV displays and floor monitors. Auto-refresh without user interaction."
  },
  {
    icon: Settings2,
    title: "Customizable Widgets",
    description: "At-a-glance metrics, agent availability chart, contacts in queue, time series charts, and performance tables."
  },
  {
    icon: BarChart3,
    title: "Queue Performance",
    description: "Handled, abandoned, transferred metrics. Average handling time, wait time, hold time. Customizable columns."
  }
]

export default function DashboardsPage() {
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
                  Back to Platform Overview
                </Link>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                  Wallboards Without Development
                </h1>
                <p className="text-xl text-cp-slate-300 mb-8">
                  One-click fullscreen dashboards designed for floor displays. Real-time metrics, customizable widgets, no IT required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold" asChild>
                    <Link href="/get-started">Start Free Trial</Link>
                  </Button>
                  <Button size="lg" className="border border-white/20 bg-transparent text-white hover:bg-white/10" asChild>
                    <Link href={DEMO_URL} target="_blank" rel="noopener noreferrer">See Wallboard Demo</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-8">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cp-teal-400 to-cp-cyan-500 flex items-center justify-center mb-6">
                        <feature.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-semibold text-navy-900 mb-4">{feature.title}</h3>
                      <p className="text-cp-slate-600 leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-navy-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Ready to Light Up Your Floor?
              </h2>
              <p className="text-xl text-cp-slate-300 mb-8">
                Wallboards that work out of the box—no custom development required.
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
