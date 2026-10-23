"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, MonitorX, MonitorCheck, X, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Screenshot } from "@/components/screenshot"
import { screenshots } from "@/lib/screenshots"

const withoutFeatures = [
  "Multiple browser tabs",
  "Delayed metrics",
  "No queue visibility",
  "Manual coordination",
]

const withFeatures = [
  "Single unified interface",
  "60-second refresh",
  "LiveLook visibility",
  "Instant action",
]

export function ProblemSection() {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-cp-navy-900 leading-tight mb-6">
            Your Supervisors Deserve Better Tools
          </h2>
          <p className="text-lg text-cp-slate-600 leading-relaxed">
            Contact center supervisors are expected to maintain service levels, coach agents, and respond 
            to issues in real-time. But most platforms give them scattered dashboards, delayed metrics, 
            and no way to intervene when it matters. ConnectPath changes that. One unified interface. 
            Metrics updated every 60 seconds. The ability to monitor, coach, and act—instantly.
          </p>
        </motion.div>
        
        {/* Comparison visual */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Without ConnectPath */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-xl overflow-hidden border-2 border-cp-slate-200 bg-cp-slate-50">
              <div className="px-6 py-4 bg-cp-slate-100 border-b border-cp-slate-200">
                <div className="flex items-center gap-3">
                  <MonitorX className="size-5 text-cp-slate-500" />
                  <span className="font-semibold text-cp-slate-700">Typical Contact Center Tools</span>
                </div>
              </div>
              <div className="p-6">
                {/* Mock scattered screens */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div 
                      key={i} 
                      className="aspect-video rounded-lg bg-cp-slate-200 border border-cp-slate-300 flex items-center justify-center"
                    >
                      <div className="w-8 h-1 bg-cp-slate-300 rounded" />
                    </div>
                  ))}
                </div>
                
                <ul className="space-y-3">
                  {withoutFeatures.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="size-5 rounded-full bg-cp-danger/10 flex items-center justify-center shrink-0">
                        <X className="size-3 text-cp-danger" />
                      </div>
                      <span className="text-sm text-cp-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
          
          {/* With ConnectPath */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative rounded-xl overflow-hidden border-2 border-cp-teal-400 bg-card shadow-lg shadow-cp-teal-400/10">
              <div className="px-6 py-4 bg-cp-teal-50 border-b border-cp-teal-200">
                <div className="flex items-center gap-3">
                  <MonitorCheck className="size-5 text-cp-teal-500" />
                  <span className="font-semibold text-cp-navy-900">ConnectPath</span>
                </div>
              </div>
              <div className="p-6">
                {/* Mock unified dashboard */}
                <Screenshot shot={screenshots.dashboardHome} className="mb-6 rounded-lg shadow-sm" />
                
                <ul className="space-y-3">
                  {withFeatures.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="size-5 rounded-full bg-cp-success/10 flex items-center justify-center shrink-0">
                        <Check className="size-3 text-cp-success" />
                      </div>
                      <span className="text-sm text-cp-navy-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-12"
        >
          <Button asChild variant="outline" className="border-cp-navy-200 text-cp-navy-700 hover:bg-cp-navy-50">
            <Link href="/platform">
              See How It Works
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default ProblemSection
