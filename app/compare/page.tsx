"use client"

import { DEMO_URL } from "@/lib/docs"
import Link from "next/link"
import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, 
  Check,
  X,
  AlertCircle
} from "lucide-react"
import { motion } from "framer-motion"

const competitors = [
  {
    name: "Native Amazon Connect",
    tagline: "We don't replace it. We make it operational.",
    description: "See what ConnectPath adds on top of what Amazon provides—supervisor tools, agent desktop, reporting, and queue management.",
    href: "/compare/amazon-connect",
    highlight: true
  },
  {
    name: "NICE CXone",
    tagline: "The smarter way to run your contact center",
    description: "Compare pay-as-you-go pricing vs. $71–$249/user/month seat licenses, and AI that's included vs. premium tiers.",
    href: "/compare/nice"
  },
  {
    name: "Five9",
    tagline: "Built for flexibility, not seat minimums",
    description: "No 50-seat minimum, omnichannel from day one, and AI without the add-on tax.",
    href: "/compare/five9"
  },
  {
    name: "Genesys Cloud CX",
    tagline: "Enterprise power without enterprise complexity",
    description: "No $2,000/month minimum, no AI token counting, and faster time to value.",
    href: "/compare/genesys"
  },
  {
    name: "Avaya",
    tagline: "Leave legacy behind without leaving capability",
    description: "Modern cloud-native architecture vs. fragmented deployment options and financial uncertainty.",
    href: "/compare/avaya"
  },
  {
    name: "Talkdesk",
    tagline: "Modern contact center without the complexity tax",
    description: "Unified voice and digital from day one, no industry cloud surcharges, and simpler path to production.",
    href: "/compare/talkdesk"
  },
]

const keyDifferentiators = [
  {
    feature: "Pay-as-you-go pricing",
    connectpath: true,
    competitors: false,
    note: "No seat minimums, no annual commitments"
  },
  {
    feature: "AI included at all tiers",
    connectpath: true,
    competitors: false,
    note: "Amazon Q, Contact Lens, Lex—no add-ons required"
  },
  {
    feature: "15-minute deployment",
    connectpath: true,
    competitors: false,
    note: "CloudFormation template, not weeks of professional services"
  },
  {
    feature: "Supervisor-first design",
    connectpath: true,
    competitors: "partial",
    note: "LiveLook, whisper coaching, visual queue management"
  },
  {
    feature: "AWS infrastructure",
    connectpath: true,
    competitors: false,
    note: "99.99% uptime SLA, global scale"
  },
  {
    feature: "Built on Amazon Connect",
    connectpath: true,
    competitors: false,
    note: "Leverage all native features, plus operational layer"
  },
]

function StatusIcon({ status }: { status: boolean | string }) {
  if (status === true) {
    return (
      <div className="size-6 rounded-full bg-cp-success/10 flex items-center justify-center">
        <Check className="size-4 text-cp-success" />
      </div>
    )
  }
  if (status === "partial") {
    return (
      <div className="size-6 rounded-full bg-cp-warning/10 flex items-center justify-center">
        <AlertCircle className="size-4 text-cp-warning" />
      </div>
    )
  }
  return (
    <div className="size-6 rounded-full bg-cp-slate-100 flex items-center justify-center">
      <X className="size-4 text-cp-slate-400" />
    </div>
  )
}

export default function ComparePage() {
  return (
    <PageLayout>
        {/* Hero */}
        <section className="bg-gradient-hero py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="heading-display text-4xl md:text-5xl text-cp-navy-900 leading-[1.1] mb-6">
                  How ConnectPath Compares
                </h1>
                <p className="text-lg md:text-xl text-cp-slate-600 leading-relaxed mb-8">
                  Honest, detailed comparisons against the platforms you&apos;re evaluating. 
                  See how ConnectPath stacks up on supervisor tools, pricing, deployment, and AI capabilities.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Competitor Cards */}
        <section className="py-16 lg:py-20 bg-card">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-cp-navy-900 mb-4 text-center">
              Choose a Comparison
            </h2>
            <p className="text-cp-slate-600 text-center mb-12 max-w-2xl mx-auto">
              Click on any comparison below for a detailed, honest breakdown
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {competitors.map((competitor, index) => (
                <motion.div
                  key={competitor.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    href={competitor.href}
                    className={`block h-full rounded-xl border p-6 transition-all duration-300 hover:shadow-card-hover ${
                      competitor.highlight 
                        ? 'bg-cp-teal-50 border-cp-teal-200 hover:border-cp-teal-300' 
                        : 'bg-card border-border hover:border-cp-slate-300'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-cp-navy-900 text-lg">
                        vs. {competitor.name}
                      </h3>
                      <ArrowRight className="size-5 text-cp-teal-500" />
                    </div>
                    <p className="text-sm font-medium text-cp-teal-700 mb-2">
                      {competitor.tagline}
                    </p>
                    <p className="text-sm text-cp-slate-600">
                      {competitor.description}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Differentiators Table */}
        <section className="py-16 lg:py-20 bg-cp-slate-50">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-cp-navy-900 mb-4 text-center">
              Key Differentiators at a Glance
            </h2>
            <p className="text-cp-slate-600 text-center mb-12 max-w-2xl mx-auto">
              What sets ConnectPath apart from traditional CCaaS platforms
            </p>
            
            <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm">
              <div className="grid grid-cols-4 bg-cp-navy-900 text-white">
                <div className="col-span-2 p-4 font-semibold text-sm">Capability</div>
                <div className="p-4 font-semibold text-sm text-center border-l border-white/10">
                  <span className="text-cp-teal-400">ConnectPath</span>
                </div>
                <div className="p-4 font-semibold text-sm text-center border-l border-white/10">
                  Traditional CCaaS
                </div>
              </div>
              
              {keyDifferentiators.map((item, index) => (
                <div 
                  key={item.feature}
                  className={`grid grid-cols-4 ${index !== keyDifferentiators.length - 1 ? 'border-b border-border' : ''}`}
                >
                  <div className="col-span-2 p-4">
                    <div className="font-medium text-cp-navy-900 text-sm">{item.feature}</div>
                    <div className="text-xs text-cp-slate-500 mt-1">{item.note}</div>
                  </div>
                  <div className="p-4 border-l border-border flex justify-center items-center">
                    <StatusIcon status={item.connectpath} />
                  </div>
                  <div className="p-4 border-l border-border bg-cp-slate-50/50 flex justify-center items-center">
                    <StatusIcon status={item.competitors} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-cp-navy-900 text-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Ready to See the Difference?
            </h2>
            <p className="text-cp-slate-300 mb-8">
              Start a free trial via AWS Marketplace and experience ConnectPath firsthand. 
              No commitments, no seat minimums—just 15 minutes to operational visibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold"
              >
                <Link href="/get-started">
                  Start Free Trial
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                className="border border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                <Link href={DEMO_URL} target="_blank" rel="noopener noreferrer">Request Demo</Link>
              </Button>
            </div>
          </div>
        </section>
    </PageLayout>
  )
}
