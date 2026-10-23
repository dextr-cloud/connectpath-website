"use client"

import { DEMO_URL } from "@/lib/docs"
import Link from "next/link"
import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, 
  Check, 
  Layers,
  Brain,
  Zap,
  Users,
  Building2,
  Shield
} from "lucide-react"
import { motion } from "framer-motion"

const quickComparisonData = [
  { factor: "Starting Price", connectpath: "~$0.25/user/hour + AWS usage", talkdesk: "$85–$165+/user/month" },
  { factor: "Pricing Model", connectpath: "Pay-as-you-go", talkdesk: "Named user licenses + add-ons" },
  { factor: "Voice + Digital", connectpath: "Included together", talkdesk: "Separate plans (Digital Essentials vs Voice Essentials)" },
  { factor: "AI Agent Assistance", connectpath: "Amazon Q—included", talkdesk: "Talkdesk Copilot—varies by tier" },
  { factor: "Industry Solutions", connectpath: "Build on flexible platform", talkdesk: "Experience Clouds (separate pricing)" },
  { factor: "Setup Time", connectpath: "Under 15 minutes", talkdesk: "Weeks typical" },
  { factor: "Contract Terms", connectpath: "Month-to-month", talkdesk: "Annual commitments common" },
]

const advantages = [
  {
    icon: Layers,
    title: "Unified Voice and Digital—No Split Plans",
    description: "Talkdesk structures entry tiers as separate products: Digital Essentials ($85/month) has no voice, Voice Essentials ($105/month) has no digital. Elite ($165/month) finally combines both.",
    connectpathValue: "ConnectPath includes voice, chat, email, SMS, and video from the start. There's no artificial separation between channels—omnichannel is the default, not the upgrade."
  },
  {
    icon: Brain,
    title: "AI That Doesn't Require the Top Tier",
    description: "Talkdesk's Copilot, Virtual Agents, and Interaction Analytics require higher-tier plans or paid add-ons. Autopilot and Navigator are positioned as premium capabilities.",
    connectpathValue: "Amazon Q delivers real-time agent guidance, Contact Lens provides sentiment analysis and transcription, Amazon Lex powers intelligent IVR. Generative AI summaries happen automatically without tier upgrades."
  },
  {
    icon: Building2,
    title: "No Industry Cloud Surcharges",
    description: "Talkdesk offers \"Experience Clouds\" for banking, insurance, healthcare, retail, and government—with additional pricing beyond the base platform.",
    connectpathValue: "Amazon Connect serves healthcare (HIPAA-eligible), financial services, government (FedRAMP), and retail without industry-specific surcharges. Build on a compliant, flexible foundation."
  },
  {
    icon: Zap,
    title: "Simpler Path to Production",
    description: "Talkdesk implementations involve professional services, training, and staged rollouts. Even \"quick start\" options typically take weeks.",
    connectpathValue: "ConnectPath onboarding takes under 15 minutes. Run a CloudFormation template, connect your Amazon Connect instance, and operational dashboards are live. No extended project timelines."
  },
  {
    icon: Users,
    title: "Supervisor Tools Built for Daily Operations",
    description: "Talkdesk's Workspace interface is modern, but supervisor workflows are distributed across the platform rather than consolidated for efficiency.",
    connectpathValue: "Team Status Drawer with right-click actions, LiveLook showing individual callers with phone numbers and wait times, one-click whisper coaching, visual queue rebalancing, instant announcements to targeted groups."
  },
]

const talkdeskStrengths = [
  {
    title: "Modern Interface Design",
    description: "Talkdesk's agent workspace is clean and intuitive. If interface aesthetics matter to your team, Talkdesk invests there."
  },
  {
    title: "Industry-Specific Packaging",
    description: "For organizations that want pre-built vertical solutions with tailored workflows, Talkdesk's Experience Clouds reduce customization work—at additional cost."
  },
  {
    title: "Mobile Agent App",
    description: "Talkdesk Conversations provides mobile capability for agents working outside traditional desktop environments."
  },
]

const concerns = [
  {
    question: "Doesn't Talkdesk have better AI?",
    answer: "Talkdesk's AI products are capable. But Amazon's AI investments are substantial—Amazon Q for Business, Contact Lens analytics, Lex conversational AI. The gap isn't capability; it's packaging. AWS provides AI as native services; Talkdesk packages them as product tiers."
  },
  {
    question: "What about Talkdesk's uptime guarantees?",
    answer: "Talkdesk offers SLA commitments. Amazon Connect runs on AWS infrastructure with 99.99% availability across multiple global regions. Both are reliable—AWS's scale is simply larger."
  },
  {
    question: "Is Amazon Connect too 'build-your-own'?",
    answer: "ConnectPath removes the \"build-your-own\" concern. You get pre-built supervisor dashboards, agent tools, team collaboration, and operational visibility—without custom development. The underlying AWS flexibility exists if you want it; the operational layer works out of the box."
  },
]

const fitCriteria = {
  connectpath: [
    "Split voice/digital plans don't match how your contact center actually operates",
    "AI should be accessible without premium tier upgrades",
    "Industry-specific pricing feels like a surcharge on capability you'd build anyway",
    "Supervisor tools should work immediately—not after professional services engagement",
    "Pay-as-you-go pricing aligns better with variable contact volumes"
  ],
  talkdesk: [
    "Their pre-built Industry Experience Clouds match your exact vertical needs",
    "Interface design and agent experience aesthetics are primary decision factors",
    "You prefer a single-vendor, fully-packaged approach over AWS-native flexibility",
    "Mobile agent workflows are critical for your operations"
  ]
}

export default function CompareTalkdeskPage() {
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
                  ConnectPath vs Talkdesk
                </h1>
                <p className="text-lg md:text-xl text-cp-slate-600 leading-relaxed mb-8">
                  Modern Contact Center Without the Complexity Tax
                </p>
                <p className="text-base text-cp-slate-500 mb-8 max-w-2xl mx-auto">
                  Talkdesk has positioned itself as a modern, AI-forward contact center platform—and their 
                  technology backs that up. But &quot;modern&quot; doesn&apos;t always mean &quot;simple,&quot; and their tiered pricing, 
                  add-on structure, and industry-specific packaging can quickly complicate decisions.
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
                  Talkdesk
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
                    <span className="text-sm text-cp-slate-600">{row.talkdesk}</span>
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
              Simplicity and capability without tier restrictions
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

        {/* What Talkdesk Does Well */}
        <section className="py-16 lg:py-20 bg-card">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-cp-navy-900 mb-4 text-center">
              What Talkdesk Does Well
            </h2>
            <p className="text-cp-slate-600 text-center mb-12 max-w-2xl mx-auto">
              An honest assessment of where Talkdesk has strengths
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {talkdeskStrengths.map((strength) => (
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
              
              {/* Talkdesk */}
              <div className="bg-cp-slate-50 rounded-xl p-8 border border-cp-slate-200">
                <h3 className="font-semibold text-cp-navy-900 mb-6 text-lg">Talkdesk may be better if:</h3>
                <ul className="space-y-3">
                  {fitCriteria.talkdesk.map((criterion) => (
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
              Talkdesk is a modern platform with genuine AI capabilities. But their tiered structure—
              separate voice/digital plans, premium AI features, industry cloud surcharges—adds layers 
              of pricing complexity that don&apos;t exist with ConnectPath.
              <br /><br />
              If you want omnichannel capability, AI assistance, and supervisor tools from day one—
              without navigating which tier or add-on unlocks what you need—ConnectPath on 
              Amazon Connect delivers. And you pay for actual usage, not potential usage across 
              multiple licensing constructs.
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
