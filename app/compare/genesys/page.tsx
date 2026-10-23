"use client"

import { DEMO_URL } from "@/lib/docs"
import Link from "next/link"
import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, 
  Check, 
  DollarSign,
  Brain,
  Zap,
  Users,
  Phone,
  Shield
} from "lucide-react"
import { motion } from "framer-motion"

const quickComparisonData = [
  { factor: "Starting Price", connectpath: "~$0.25/user/hour + AWS usage", genesys: "$75–$240/user/month" },
  { factor: "Minimum Commitment", connectpath: "None", genesys: "~$2,000/month" },
  { factor: "Pricing Model", connectpath: "Pay-as-you-go", genesys: "Named or concurrent licenses" },
  { factor: "AI Tokens", connectpath: "Unlimited (usage-based AWS pricing)", genesys: "250–350 tokens/org/month included" },
  { factor: "Setup Time", connectpath: "Under 15 minutes", genesys: "Weeks with professional services" },
  { factor: "Contract Terms", connectpath: "Month-to-month via AWS Marketplace", genesys: "Annual commitment required" },
  { factor: "Telephony", connectpath: "Included (158 countries)", genesys: "BYOC or Genesys Cloud Voice" },
]

const advantages = [
  {
    icon: DollarSign,
    title: "No Minimum Commitments",
    description: "Genesys requires approximately $2,000 per month minimum—regardless of how small your contact center is.",
    connectpathValue: "ConnectPath has no minimums. A 5-agent team pays for 5 agents. Scale to 500 during peak, scale back when volume drops. AWS and ConnectPath charge for actual usage."
  },
  {
    icon: Brain,
    title: "AI Without Token Counting",
    description: "Genesys Cloud includes 250-350 AI Experience tokens per organization per month. Once depleted, features stop working or incur additional charges.",
    connectpathValue: "Amazon Q for agent assistance, Contact Lens for real-time analytics, Amazon Lex for conversational AI—all usage-based pricing with no artificial caps. You don't ration AI features."
  },
  {
    icon: Zap,
    title: "Faster Time to Value",
    description: "Genesys implementations typically require professional services, integration planning, and weeks of configuration.",
    connectpathValue: "ConnectPath onboarding takes under 15 minutes with a CloudFormation template. Your existing Amazon Connect instance gains supervisor dashboards immediately—no separate deployment project required."
  },
  {
    icon: Users,
    title: "Purpose-Built Supervisor Experience",
    description: "Genesys CX provides supervisor capabilities distributed across the platform. You navigate between screens for different functions.",
    connectpathValue: "Team Status Drawer shows every agent with right-click actions. LiveLook shows individual contacts with caller ID. Drag-and-drop queue management. One-click wallboards. What takes 4-5 clicks in Genesys takes one in ConnectPath."
  },
  {
    icon: Phone,
    title: "Simpler Telephony",
    description: "Genesys offers Cloud Voice or BYOC—both add complexity with separate services, SBCs, and number porting.",
    connectpathValue: "Amazon Connect includes telephony. DID and toll-free numbers in 158 countries, direct carrier connections, built-in redundancy. No separate vendor, no trunks to manage."
  },
]

const genesysStrengths = [
  {
    title: "Experience Orchestration",
    description: "Genesys's journey management and predictive engagement capabilities are sophisticated for complex, multi-touch customer journeys."
  },
  {
    title: "Workforce Engagement",
    description: "Their WEM suite—scheduling, forecasting, quality management, gamification—is comprehensive and mature."
  },
  {
    title: "Professional Services",
    description: "Genesys's implementation and consulting ecosystem is extensive for organizations that want hands-on guidance."
  },
]

const concerns = [
  {
    question: "Isn't Genesys more 'enterprise'?",
    answer: "Amazon Connect runs Amazon's own retail customer service—among the largest contact center operations globally. The platform is proven at genuine enterprise scale. The \"enterprise\" label often means \"expensive with long implementations.\""
  },
  {
    question: "What about Genesys's partner ecosystem?",
    answer: "Genesys's AppFoundry marketplace is extensive. AWS's partner network is larger, and Amazon Connect integrates natively with 200+ AWS services. For CRM, both platforms connect to Salesforce, Microsoft Dynamics, Zendesk, and ServiceNow."
  },
  {
    question: "Don't I need Genesys's routing sophistication?",
    answer: "Amazon Connect's routing has matured significantly. Skills-based routing, customer profiling, ML-powered predictive routing—it's all available. ConnectPath adds visual queue management and drag-and-drop agent assignment on top."
  },
]

const fitCriteria = {
  connectpath: [
    "The $2,000/month minimum feels like paying for features you won't use",
    "AI token limits and usage tracking create operational friction",
    "Your supervisors need better real-time tools without custom development",
    "Fast deployment matters more than exhaustive customization options",
    "You want to avoid long-term contract commitments"
  ],
  genesys: [
    "You need advanced journey orchestration across dozens of touchpoints",
    "Your organization requires Genesys's specific WEM capabilities",
    "You have existing Genesys expertise and investments in-house",
    "Professional services and hands-on vendor support are priorities"
  ]
}

export default function CompareGenesysPage() {
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
                  ConnectPath vs Genesys Cloud CX
                </h1>
                <p className="text-lg md:text-xl text-cp-slate-600 leading-relaxed mb-8">
                  Enterprise Power Without Enterprise Complexity
                </p>
                <p className="text-base text-cp-slate-500 mb-8 max-w-2xl mx-auto">
                  Genesys Cloud CX is respected for a reason—it&apos;s a feature-rich platform with deep enterprise 
                  capabilities. But that depth comes with complexity, rigid pricing, and a minimum commitment 
                  that puts it out of reach for many organizations.
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
                  Genesys Cloud CX
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
                    <span className="text-sm text-cp-slate-600">{row.genesys}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Where ConnectPath Wins */}
        <section className="py-16 lg:py-20 bg-cp-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-cp-navy-900 mb-4 text-center">
              Where ConnectPath Wins
            </h2>
            <p className="text-cp-slate-600 text-center mb-12 max-w-2xl mx-auto">
              Operational capability without unnecessary complexity
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* What Genesys Does Well */}
        <section className="py-16 lg:py-20 bg-card">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-cp-navy-900 mb-4 text-center">
              What Genesys Does Well
            </h2>
            <p className="text-cp-slate-600 text-center mb-12 max-w-2xl mx-auto">
              An honest assessment of where Genesys has strengths
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {genesysStrengths.map((strength) => (
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

        {/* Addressing Common Questions */}
        <section className="py-16 lg:py-20 bg-cp-navy-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-cp-navy-900 mb-4 text-center">
              Addressing Common Questions
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
              
              {/* Genesys */}
              <div className="bg-cp-slate-50 rounded-xl p-8 border border-cp-slate-200">
                <h3 className="font-semibold text-cp-navy-900 mb-6 text-lg">Genesys may be better if:</h3>
                <ul className="space-y-3">
                  {fitCriteria.genesys.map((criterion) => (
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
              Genesys Cloud CX is a capable platform with genuine enterprise features. But capability 
              isn&apos;t free—it comes with minimum commitments, token-based AI, complex pricing, and 
              longer implementations.
              <br /><br />
              ConnectPath on Amazon Connect delivers what most contact centers actually need: 
              clear supervisor visibility, flexible agent tools, and operational control—without the 
              overhead. And you pay for usage, not potential.
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
