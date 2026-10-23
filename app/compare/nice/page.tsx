"use client"

import { DEMO_URL } from "@/lib/docs"
import { Metadata } from "next"
import Link from "next/link"
import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, 
  Check, 
  X, 
  DollarSign,
  Zap,
  Users,
  Phone,
  Brain,
  Clock,
  Shield
} from "lucide-react"
import { motion } from "framer-motion"

const quickComparisonData = [
  { factor: "Starting Price", connectpath: "~$0.25/user/hour + AWS usage", nice: "$71–$249/user/month" },
  { factor: "Pricing Model", connectpath: "Pay-as-you-go, no minimums", nice: "Annual seat licenses" },
  { factor: "AI Capabilities", connectpath: "Native Amazon Q, Contact Lens, Lex—included", nice: "Enlighten AI—additional tiers required" },
  { factor: "Setup Time", connectpath: "Under 15 minutes", nice: "Weeks to months" },
  { factor: "Contracts", connectpath: "None required", nice: "Multi-year commitments typical" },
  { factor: "Infrastructure", connectpath: "AWS global network (99.99% uptime)", nice: "Proprietary cloud" },
  { factor: "Supervisor Tools", connectpath: "Purpose-built, out-of-box", nice: "Available, requires configuration" },
]

const advantages = [
  {
    icon: DollarSign,
    title: "True Pay-As-You-Go Pricing",
    description: "NICE CXone plans start at $71/month and climb to $249/month per agent. For a 50-agent contact center, that's $6,000–$10,000+ monthly before handling a single call.",
    connectpathValue: "ConnectPath charges ~$0.25 per logged-in hour. Supervisors who log in twice a week pay for those hours—not a full seat license. Seasonal scaling means you pay nothing for agents who aren't there."
  },
  {
    icon: Brain,
    title: "AI That's Actually Included",
    description: "NICE's Enlighten AI requires higher-tier plans or add-ons. Their Ultimate Suite at $249/user/month includes full automation—but that's a significant investment before proving ROI.",
    connectpathValue: "Amazon Q provides generative AI, Contact Lens delivers real-time transcription and sentiment analysis, Amazon Lex powers intelligent IVR. All available without premium tiers—enable with a checkbox, not a contract."
  },
  {
    icon: Users,
    title: "Supervisor-First Design",
    description: "NICE CXone provides supervisor tools as part of a larger platform designed primarily around agent workflows.",
    connectpathValue: "ConnectPath was built with supervisors at the center: LiveLook shows individual callers in queue, real-time whisper coaching, one-click silent monitoring, visual queue rebalancing, and instant announcements."
  },
  {
    icon: Phone,
    title: "No Telecom to Manage",
    description: "NICE CXone requires customers to either use their telephony or integrate third-party carriers—adding complexity and potential points of failure.",
    connectpathValue: "Amazon Connect includes telephony across 158 countries with direct connections to 40+ tier-1 carriers. No separate telecom vendor, no trunk management, no carrier contracts."
  },
]

const niceStrengths = [
  {
    title: "Workforce Engagement Management",
    description: "NICE's WEM suite (scheduling, quality management, performance tracking) is mature and comprehensive."
  },
  {
    title: "30+ Digital Channels",
    description: "Their native channel support is extensive. Amazon Connect covers core channels but NICE edges ahead on niche integrations."
  },
  {
    title: "Established Enterprise Presence",
    description: "Organizations with existing NICE relationships may benefit from consolidated vendor management."
  },
]

const concerns = [
  {
    question: "Is Amazon Connect enterprise-ready?",
    answer: "Amazon Connect handles customer service for Amazon Retail—one of the largest contact center operations on Earth. It's been a Gartner Magic Quadrant Leader and currently optimizes 12 billion minutes of customer interactions with AI annually."
  },
  {
    question: "Doesn't NICE have better analytics?",
    answer: "NICE Interaction Analytics is mature. But Contact Lens—Amazon's conversation analytics—has caught up rapidly and continues to improve with AWS's AI investments. For most use cases, the capability gap has closed."
  },
  {
    question: "What about regulatory compliance?",
    answer: "Both platforms support HIPAA, PCI DSS, GDPR, and SOC 2. AWS's compliance portfolio is actually broader, covering additional frameworks like FedRAMP, HITRUST, and ISO 27001."
  },
]

const fitCriteria = {
  connectpath: [
    "You're already on AWS or considering cloud-first infrastructure",
    "Predictable per-seat licensing feels wasteful for your usage patterns",
    "Supervisors need better real-time tools without custom development",
    "You want AI capabilities included—not gated behind premium tiers",
    "Speed of deployment matters (weeks, not months)"
  ],
  nice: [
    "You need specific niche digital channels not yet in Amazon Connect",
    "Your organization has existing NICE contracts with favorable terms",
    "Workforce management is your primary investment priority"
  ]
}

export default function CompareNicePage() {
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
                  ConnectPath vs NICE CXone
                </h1>
                <p className="text-lg md:text-xl text-cp-slate-600 leading-relaxed mb-8">
                  The Smarter Way to Run Your Amazon Connect Contact Center
                </p>
                <p className="text-base text-cp-slate-500 mb-8 max-w-2xl mx-auto">
                  When evaluating contact center platforms, the decision often comes down to value, flexibility, 
                  and where your organization is headed. NICE CXone is a capable platform—but if you&apos;re already 
                  invested in AWS or considering Amazon Connect, ConnectPath delivers more operational power 
                  at a fraction of the cost.
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
                    className="border border-cp-navy-200 bg-white text-cp-navy-700 hover:bg-cp-navy-50"
                  >
                    <Link href={DEMO_URL} target="_blank" rel="noopener noreferrer">Request Demo</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Comparison Table */}
        <section className="py-16 lg:py-20 bg-card">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-cp-navy-900 mb-8 text-center">
              Quick Comparison
            </h2>
            
            <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm">
              <div className="grid grid-cols-3 bg-cp-navy-900 text-white">
                <div className="p-4 font-semibold text-sm">Factor</div>
                <div className="p-4 font-semibold text-sm text-center border-l border-white/10">
                  <span className="text-cp-teal-400">ConnectPath + Amazon Connect</span>
                </div>
                <div className="p-4 font-semibold text-sm text-center border-l border-white/10">
                  NICE CXone
                </div>
              </div>
              
              {quickComparisonData.map((row, index) => (
                <div 
                  key={row.factor}
                  className={`grid grid-cols-3 ${index !== quickComparisonData.length - 1 ? 'border-b border-border' : ''}`}
                >
                  <div className="p-4 text-sm font-medium text-cp-navy-900 bg-cp-slate-50/50">
                    {row.factor}
                  </div>
                  <div className="p-4 border-l border-border">
                    <div className="flex items-center gap-2">
                      <Check className="size-4 text-cp-success shrink-0" />
                      <span className="text-sm text-cp-slate-700">{row.connectpath}</span>
                    </div>
                  </div>
                  <div className="p-4 border-l border-border bg-cp-slate-50/30">
                    <span className="text-sm text-cp-slate-600">{row.nice}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Where ConnectPath Pulls Ahead */}
        <section className="py-16 lg:py-20 bg-cp-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-cp-navy-900 mb-4 text-center">
              Where ConnectPath Pulls Ahead
            </h2>
            <p className="text-cp-slate-600 text-center mb-12 max-w-2xl mx-auto">
              Purpose-built capabilities that address real operational needs
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-xl border border-border p-6 hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="size-12 rounded-lg bg-cp-teal-50 flex items-center justify-center mb-4">
                    <advantage.icon className="size-6 text-cp-teal-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-cp-navy-900 mb-3">{advantage.title}</h3>
                  <p className="text-sm text-cp-slate-500 mb-4">{advantage.description}</p>
                  <div className="bg-cp-teal-50 rounded-lg p-4 border border-cp-teal-100">
                    <p className="text-sm text-cp-teal-700">{advantage.connectpathValue}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What NICE Does Well */}
        <section className="py-16 lg:py-20 bg-card">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-cp-navy-900 mb-4 text-center">
              What NICE CXone Does Well
            </h2>
            <p className="text-cp-slate-600 text-center mb-12 max-w-2xl mx-auto">
              An honest assessment of where the competition has strengths
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {niceStrengths.map((strength) => (
                <div 
                  key={strength.title}
                  className="bg-cp-slate-50 rounded-xl p-6 border border-cp-slate-200"
                >
                  <h3 className="font-semibold text-cp-navy-900 mb-2">{strength.title}</h3>
                  <p className="text-sm text-cp-slate-600">{strength.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Concerns Addressed */}
        <section className="py-16 lg:py-20 bg-cp-navy-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-cp-navy-900 mb-4 text-center">
              Common Concerns—Addressed
            </h2>
            <p className="text-cp-slate-600 text-center mb-12">
              Questions we hear from organizations evaluating alternatives
            </p>
            
            <div className="space-y-6">
              {concerns.map((concern, index) => (
                <motion.div
                  key={concern.question}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-xl p-6 border border-border"
                >
                  <h3 className="font-semibold text-cp-navy-900 mb-3 flex items-start gap-3">
                    <Shield className="size-5 text-cp-teal-500 shrink-0 mt-0.5" />
                    {concern.question}
                  </h3>
                  <p className="text-cp-slate-600 ml-8">{concern.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* When to Choose */}
        <section className="py-16 lg:py-20 bg-card">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-cp-navy-900 mb-12 text-center">
              When to Choose
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* ConnectPath */}
              <div className="bg-cp-teal-50 rounded-xl p-8 border border-cp-teal-200">
                <h3 className="font-semibold text-cp-navy-900 mb-6 text-lg">Choose ConnectPath if:</h3>
                <ul className="space-y-3">
                  {fitCriteria.connectpath.map((criterion) => (
                    <li key={criterion} className="flex items-start gap-3">
                      <Check className="size-5 text-cp-teal-700 shrink-0 mt-0.5" />
                      <span className="text-cp-slate-700">{criterion}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* NICE */}
              <div className="bg-cp-slate-50 rounded-xl p-8 border border-cp-slate-200">
                <h3 className="font-semibold text-cp-navy-900 mb-6 text-lg">NICE may be better if:</h3>
                <ul className="space-y-3">
                  {fitCriteria.nice.map((criterion) => (
                    <li key={criterion} className="flex items-start gap-3">
                      <div className="size-5 rounded-full bg-cp-slate-300 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="size-2 rounded-full bg-cp-slate-500" />
                      </div>
                      <span className="text-cp-slate-600">{criterion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Line */}
        <section className="py-16 lg:py-20 bg-cp-navy-900 text-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              The Bottom Line
            </h2>
            <p className="text-cp-slate-300 mb-8 leading-relaxed">
              NICE CXone is a legitimate enterprise platform. But it carries enterprise complexity 
              and enterprise pricing—even for organizations that don&apos;t need everything it offers.
              <br /><br />
              ConnectPath on Amazon Connect delivers the supervisor visibility, agent tools, and 
              operational flexibility that modern contact centers need—built on AWS infrastructure 
              that&apos;s already proven at Amazon&apos;s own scale. And you pay for what you use, not what 
              you might use someday.
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
            <p className="text-sm text-cp-slate-400 mt-8">
              ConnectPath is built by CloudHesive, an AWS Premier Consulting Partner with Amazon Connect Service Ready specialization.
            </p>
          </div>
        </section>
    </PageLayout>
  )
}
