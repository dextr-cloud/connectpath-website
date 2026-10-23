"use client"

import { DEMO_URL } from "@/lib/docs"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Play, Award, Clock, Shield, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Screenshot } from "@/components/screenshot"
import { screenshots } from "@/lib/screenshots"

const trustBadges = [
  { icon: Award, label: "AWS Premier Consulting Partner" },
  { icon: Shield, label: "Powered by AWS" },
  { icon: Clock, label: "Deploys in < 15 minutes" },
  { icon: Building2, label: "Trusted by government, healthcare, and enterprise" },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Dark background, matching the other page heroes */}
      <div className="absolute inset-0 bg-gradient-to-br from-cp-navy-900 via-cp-navy-800 to-cp-navy-900" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left"
          >
            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
              The Contact Center Built for AI Agent Oversight
            </h1>
            <p className="text-lg md:text-xl text-cp-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              Real-time visibility. Instant intervention. Complete accountability. ConnectPath gives supervisors the tools to monitor, coach, and ensure quality—whether the agent on the line is a person or an AI, and across every interaction.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                asChild 
                size="lg" 
                className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold text-base px-8 h-12"
              >
                <Link href="/get-started">
                  Start Free Trial
                  <ArrowRight className="ml-2 size-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white font-medium text-base px-8 h-12"
              >
                <Link href={DEMO_URL} target="_blank" rel="noopener noreferrer">
                  <Play className="mr-2 size-4" />
                  Request a Demo
                </Link>
              </Button>
            </div>
          </motion.div>
          
          {/* Dashboard visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <Screenshot shot={screenshots.dashboardHome} priority className="shadow-2xl" />
            
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-card rounded-lg shadow-lg border border-border p-3"
            >
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-full bg-cp-success/10 flex items-center justify-center">
                  <Clock className="size-4 text-cp-success" />
                </div>
                <div>
                  <div className="text-xs font-medium text-foreground">Real-time updates</div>
                  <div className="text-xs text-muted-foreground">Every 60 seconds</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-12 border-t border-white/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-12">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-3 justify-center md:justify-start">
                <div className="size-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <badge.icon className="size-5 text-cp-teal-400" />
                </div>
                <span className="text-sm text-cp-slate-300 font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
