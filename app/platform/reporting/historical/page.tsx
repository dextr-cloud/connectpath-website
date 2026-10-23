"use client"

import { DEMO_URL } from "@/lib/docs"
import { motion } from "framer-motion"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  FileText, 
  Calendar, 
  Clock, 
  Download,
  BarChart2,
  ChevronRight
} from "lucide-react"

const features = [
  {
    icon: FileText,
    title: "Pre-Built Reports",
    description: "Agent performance, queue performance, disposition analysis, agent state/status detail, and SLA metrics ready to run."
  },
  {
    icon: Calendar,
    title: "Time Filters",
    description: "YTD, QTD, MTD, or custom date ranges. No restrictions on time period."
  },
  {
    icon: Clock,
    title: "Scheduling",
    description: "Daily, weekly, monthly delivery. Email notifications. Automatic generation."
  },
  {
    icon: Download,
    title: "Export Options",
    description: "Excel with detailed tabs, CSV, PDF. Charts available as SVG or PNG."
  }
]

const metrics = [
  "Handled, Abandoned, Missed",
  "ASA, AHT, AACW",
  "Hold counts and durations",
  "Queue and agent distribution"
]

export default function HistoricalPage() {
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
                  Operational Reports. Ready to Run.
                </h1>
                <p className="text-xl text-cp-slate-300 mb-8">
                  Build, schedule, and deliver historical reports with no time period restrictions. YTD, QTD, MTD, or custom ranges—exported to Excel, CSV, or PDF.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold" asChild>
                    <Link href="/get-started">Start Free Trial</Link>
                  </Button>
                  <Button size="lg" className="border border-white/20 bg-transparent text-white hover:bg-white/10" asChild>
                    <Link href={DEMO_URL} target="_blank" rel="noopener noreferrer">Explore Historical Reporting</Link>
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

        {/* Report Metrics */}
        <section className="py-20 bg-cp-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-4">
                  Report Metrics
                </h2>
                <p className="text-lg text-cp-slate-600">
                  All the metrics you need to understand your contact center performance.
                </p>
              </motion.div>

              <Card>
                <CardContent className="p-8">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {metrics.map((metric, index) => (
                      <motion.div
                        key={metric}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <BarChart2 className="w-5 h-5 text-cp-teal-400" />
                        <span className="text-navy-800">{metric}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-navy-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Reports That Work for You
              </h2>
              <p className="text-xl text-cp-slate-300 mb-8">
                Schedule once, deliver automatically. Historical reporting made simple.
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
