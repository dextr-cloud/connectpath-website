"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Eye, Zap, Settings } from "lucide-react"

const pillars = [
  {
    icon: Eye,
    title: "Real-Time Visibility",
    subtitle: "See Everything",
    description: "Watch every queue, every agent, every contact in one place. LiveLook shows you exactly who's waiting and who's handling what—updated every 60 seconds.",
    features: [
      "Team Status Drawer with agent durations",
      "At-a-glance metrics: Occupancy, SLA, Abandonment",
      "Contacts in queue with caller details",
      "Wallboard mode for floor displays"
    ],
    link: { label: "Explore Dashboards", href: "/platform/reporting/dashboards" },
    color: "cp-teal-400"
  },
  {
    icon: Zap,
    title: "Intervention When It Matters",
    subtitle: "Act Instantly",
    description: "Don't wait for post-call reports. Monitor calls silently, coach agents in real-time, or change their status remotely. Take control the moment something goes wrong.",
    features: [
      "Silent monitoring from Team Status",
      "Live whisper coaching (speak to agent, customer can't hear)",
      "Barge into calls or chats",
      "Remote agent status changes",
      "Push announcements instantly"
    ],
    link: { label: "See Supervisor Tools", href: "/platform/supervisors/monitoring-coaching" },
    color: "cp-cyan-500"
  },
  {
    icon: Settings,
    title: "Queue Management Made Visual",
    subtitle: "Control Your Floor",
    description: "Rebalance your workforce in seconds. Drag agents between queues, define skills with proficiency levels, and save configuration snapshots for rollback.",
    features: [
      "Drag-and-drop agent assignment",
      "Skills-based matching with proficiency",
      "Configuration version control",
      "Self-service routing profile changes"
    ],
    link: { label: "Learn About Queue Management", href: "/platform/supervisors/queue-management" },
    color: "cp-navy-600"
  }
]

export function FeaturesSection() {
  return (
    <section className="py-20 lg:py-28 bg-cp-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-cp-navy-900 leading-tight mb-6">
            Everything Supervisors Need. One Platform.
          </h2>
        </motion.div>
        
        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="h-full bg-card rounded-xl border border-border p-6 lg:p-8 hover:shadow-lg hover:border-cp-slate-300 transition-brand group">
                {/* Icon */}
                <div className={`size-12 rounded-xl bg-${pillar.color}/10 flex items-center justify-center mb-6`}>
                  <pillar.icon className={`size-6 text-${pillar.color}`} style={{ color: `var(--${pillar.color.replace('cp-', 'cp-')})` }} />
                </div>
                
                {/* Header */}
                <div className="mb-4">
                  <span className="text-sm font-semibold text-cp-teal-500 uppercase tracking-wider">
                    {pillar.subtitle}
                  </span>
                  <h3 className="text-xl font-semibold text-cp-navy-900 mt-1">
                    {pillar.title}
                  </h3>
                </div>
                
                {/* Description */}
                <p className="text-cp-slate-600 leading-relaxed mb-6">
                  {pillar.description}
                </p>
                
                {/* Features list */}
                <ul className="space-y-2 mb-6">
                  {pillar.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-cp-slate-600">
                      <span className="text-cp-teal-400 mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* Link */}
                <Link 
                  href={pillar.link.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cp-teal-700 hover:text-cp-navy-900 transition-fast group-hover:gap-3"
                >
                  {pillar.link.label}
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
