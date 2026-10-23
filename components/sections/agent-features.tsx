"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { 
  ArrowRight, 
  LayoutDashboard, 
  MessageSquare, 
  Search, 
  BookOpen, 
  Tag, 
  Languages 
} from "lucide-react"
import { Button } from "@/components/ui/button"

const agentFeatures = [
  {
    icon: LayoutDashboard,
    title: "Unified Agent Desktop",
    description: "Single interface for all channels and metrics"
  },
  {
    icon: MessageSquare,
    title: "Omnichannel Engagement",
    description: "Voice, chat, email, SMS, WhatsApp, video, tasks"
  },
  {
    icon: Search,
    title: "Smart Activity Search",
    description: "Find any interaction with advanced filters—up to 100K records"
  },
  {
    icon: BookOpen,
    title: "Personal & Global Directory",
    description: "Click-to-call contact management with favorites"
  },
  {
    icon: Tag,
    title: "Call Dispositions",
    description: "Multi-level categorization built in—no Lambda required"
  },
  {
    icon: Languages,
    title: "Real-Time Translation",
    description: "Auto-translate chat and email conversations"
  }
]

export function AgentFeaturesSection() {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-display text-3xl md:text-4xl text-cp-navy-900 leading-tight mb-6">
              A Unified Desktop for Every Agent
            </h2>
            <p className="text-lg text-cp-slate-600 leading-relaxed mb-8">
              ConnectPath isn&apos;t just for supervisors. Agents get a unified desktop that handles 
              voice, chat, email, SMS, and tasks—all in one interface. No tab-switching. No context loss.
            </p>
            <Button asChild className="bg-cp-navy-700 hover:bg-cp-navy-800 text-white">
              <Link href="/platform/agents/desktop">
                Explore Agent Features
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </motion.div>
          
          {/* Feature grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {agentFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                  className="bg-cp-slate-50 rounded-xl p-5 border border-cp-slate-100 hover:border-cp-slate-200 hover:shadow-sm transition-brand"
                >
                  <div className="size-10 rounded-lg bg-cp-teal-50 flex items-center justify-center mb-3">
                    <feature.icon className="size-5 text-cp-teal-500" />
                  </div>
                  <h3 className="font-semibold text-cp-navy-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-cp-slate-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AgentFeaturesSection
