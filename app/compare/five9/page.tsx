"use client"

import { DEMO_URL } from "@/lib/docs"
import Link from "next/link"
import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, 
  Check, 
  X, 
  DollarSign,
  Layers,
  Brain,
  Zap,
  Users,
  Shield
} from "lucide-react"
import { motion } from "framer-motion"

const quickComparisonData = [
  { factor: "Starting Price", connectpath: "~$0.25/user/hour + AWS usage", five9: "$119–$229/user/month" },
  { factor: "Minimum Seats", connectpath: "None", five9: "50 seats required" },
  { factor: "Omnichannel", connectpath: "Included at all levels", five9: "Premium plan or higher" },
  { factor: "Contract Terms", connectpath: "Month-to-month", five9: "36-month contracts typical" },
  { factor: "AI Features", connectpath: "Amazon Q, Contact Lens, Lex—included", five9: "Add-ons (IVA, Agent Assist, etc.)" },
  { factor: "Setup Time", connectpath: "Under 15 minutes", five9: "Weeks to months" },
  { factor: "Workforce Management", connectpath: "Available via integration", five9: "Optimum/Ultimate plans only" },
]

const advantages = [
  {
    icon: Users,
    title: "No 50-Seat Minimum",
    description: "Five9 requires a minimum of 50 seats across all plans. Running a 20-agent contact center? You're paying for 30 empty seats.",
    connectpathValue: "ConnectPath has no minimums. Start with 5 agents, grow to 500, scale back to 50 during slow seasons. Pay for actual logged-in time—nothing more."
  },
  {
    icon: Layers,
    title: "Omnichannel From Day One",
    description: "Five9 splits their offerings: Digital plan ($119/month) has no voice, Core plan ($119/month) has no digital channels. Premium plan combines both.",
    connectpathValue: "ConnectPath on Amazon Connect includes voice, chat, email, SMS, and video at the base level. Omnichannel isn't an upgrade—it's the standard."
  },
  {
    icon: Brain,
    title: "AI Without the Add-On Tax",
    description: "Five9's Intelligent Virtual Agent, Agent Assist, Social Engagement, Video Sharing, and Digital Outreach are all separate add-ons requiring quotes.",
    connectpathValue: "Amazon Q provides real-time agent assistance, Contact Lens delivers transcription and sentiment analysis, Amazon Lex powers conversational IVR—all native capabilities with usage-based pricing."
  },
  {
    icon: Zap,
    title: "Faster, Simpler Deployment",
    description: "Five9 implementations involve discovery, design, configuration, testing, and training phases. Even streamlined deployments take weeks.",
    connectpathValue: "ConnectPath onboards in under 15 minutes using a CloudFormation template. Your existing Amazon Connect instance gains operational dashboards immediately."
  },
]

const five9Strengths = [
  {
    title: "Outbound Dialing",
    description: "Five9's predictive, progressive, and power dialing capabilities are mature and well-regarded for high-volume outbound operations."
  },
  {
    title: "Compliance for Regulated Industries",
    description: "Their HIPAA and PCI DSS compliance posture is solid, with specific features for healthcare, financial services, and legal sectors."
  },
  {
    title: "Managed Experience",
    description: "Five9 positions itself as a managed solution—organizations that want more vendor hand-holding may appreciate this model."
  },
]

const concerns = [
  {
    question: "What about Five9's reliability?",
    answer: "Five9 has invested in geo-redundancy and uptime. Amazon Connect runs on AWS infrastructure with 99.99% availability SLA and built-in redundancy across availability zones. Both are reliable—AWS's infrastructure scale is simply larger."
  },
  {
    question: "Isn't Five9 easier because it's more 'packaged'?",
    answer: "\"Packaged\" often means \"you get what we decided to include.\" ConnectPath on Amazon Connect offers structured capability with room to extend using the AWS ecosystem. It's organized without being rigid."
  },
  {
    question: "What about CRM integrations?",
    answer: "Both platforms offer Salesforce, Microsoft Dynamics, Zendesk, and ServiceNow connectors. ConnectPath includes pre-built CRM integrations with the ability to open customer records in-line or in separate tabs based on contact context."
  },
]

const fitCriteria = {
  connectpath: [
    "A 50-seat minimum doesn't align with your current team size",
    "You need omnichannel without paying premium-tier prices",
    "AI should be included—not line-itemed as add-ons",
    "36-month contracts feel unnecessarily binding",
    "Supervisor visibility matters and you don't want to buy more add-ons"
  ],
  five9: [
    "High-volume outbound dialing is your primary use case",
    "You have 50+ agents and prefer predictable per-seat pricing",
    "You want a more managed, less DIY vendor relationship",
    "Specific Five9 compliance certifications align with your requirements"
  ]
}

export default function CompareFive9Page() {
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
                  ConnectPath vs Five9
                </h1>
                <p className="text-lg md:text-xl text-cp-slate-600 leading-relaxed mb-8">
                  Built for Flexibility, Not Seat Minimums
                </p>
                <p className="text-base text-cp-slate-500 mb-8 max-w-2xl mx-auto">
                  Five9 has built a solid reputation in cloud contact centers, particularly for outbound operations. 
                  But their pricing structure—50-seat minimums, split voice/digital plans, and expensive add-ons—makes 
                  it a challenging fit for many organizations.
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
                  Five9
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
                    <span className="text-sm text-cp-slate-600">{row.five9}</span>
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
              Flexibility and capability without artificial restrictions
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

        {/* What Five9 Does Well */}
        <section className="py-16 lg:py-20 bg-card">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-cp-navy-900 mb-4 text-center">
              What Five9 Does Well
            </h2>
            <p className="text-cp-slate-600 text-center mb-12 max-w-2xl mx-auto">
              An honest assessment of where Five9 has strengths
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {five9Strengths.map((strength) => (
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
              
              {/* Five9 */}
              <div className="bg-cp-slate-50 rounded-xl p-8 border border-cp-slate-200">
                <h3 className="font-semibold text-cp-navy-900 mb-6 text-lg">Five9 may be better if:</h3>
                <ul className="space-y-3">
                  {fitCriteria.five9.map((criterion) => (
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
              Five9 is a legitimate contact center platform, especially for outbound-heavy operations. 
              But their pricing structure—seat minimums, split plans, add-on dependencies—creates barriers 
              that don&apos;t exist with ConnectPath.
              <br /><br />
              If you want omnichannel capability, real-time supervisor tools, and AI features without 
              navigating tier restrictions and add-on quotes, ConnectPath on Amazon Connect delivers. 
              And you scale up or down without paying for empty seats.
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
