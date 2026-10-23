"use client"

import { DEMO_URL } from "@/lib/docs"
import Link from "next/link"
import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, 
  Check, 
  Cloud,
  DollarSign,
  Zap,
  Brain,
  Users,
  Shield,
  AlertTriangle
} from "lucide-react"
import { motion } from "framer-motion"

const quickComparisonData = [
  { factor: "Deployment Model", connectpath: "100% cloud", avaya: "Public cloud, private cloud, hybrid, on-premises—fragmented" },
  { factor: "Pricing Model", connectpath: "Pay-as-you-go, per minute/hour", avaya: "Per-seat licenses, varies by deployment" },
  { factor: "Starting Price", connectpath: "~$0.25/user/hour + AWS usage", avaya: "$48–$125/user/month (AXP Public Cloud)" },
  { factor: "Contract Complexity", connectpath: "Month-to-month", avaya: "Multiple options, often multi-year" },
  { factor: "AI Capabilities", connectpath: "Native AWS AI—included", avaya: "Avaya AI—varies by product line" },
  { factor: "Setup Time", connectpath: "Under 15 minutes", avaya: "Varies significantly by deployment" },
  { factor: "Vendor Stability", connectpath: "AWS infrastructure", avaya: "Two bankruptcies since 2017" },
]

const movingReasons = [
  {
    icon: AlertTriangle,
    title: "The Complexity Problem",
    description: "Avaya's portfolio includes AXP Public Cloud, AXP Private Cloud, Avaya Enterprise Cloud, Avaya Aura, and Avaya IP Office—each with different capabilities, pricing, and integration approaches.",
    connectpathValue: "ConnectPath has one model: Cloud-native on Amazon Connect. No hybrid confusion, no deployment choice paralysis—just a modern platform that works."
  },
  {
    icon: Shield,
    title: "Financial Stability Concerns",
    description: "Avaya filed for bankruptcy in 2017, then again in 2023. They've restructured, emerged, and are working to rebuild—but the pattern has shaken enterprise confidence.",
    connectpathValue: "AWS infrastructure provides a different foundation. Amazon Connect runs on the world's largest cloud provider with demonstrated long-term investment. No restructuring risk, no acquisition uncertainty."
  },
  {
    icon: DollarSign,
    title: "The Upgrade Tax",
    description: "Many Avaya customers sit on aging on-premises systems because the \"upgrade\" path isn't an upgrade—it's a migration to an entirely different product line that costs as much as switching vendors.",
    connectpathValue: "If you're paying migration prices anyway, you should evaluate migration options. ConnectPath supports parallel deployment—run new queues while maintaining existing operations."
  },
]

const advantages = [
  {
    icon: Cloud,
    title: "True Cloud-Native Architecture",
    description: "Avaya's cloud offerings evolved from on-premises products—carrying architectural decisions made for data centers.",
    connectpathValue: "Amazon Connect was built cloud-native from inception, designed for their own retail customer service. The architecture assumes elasticity, global distribution, and API-first integration."
  },
  {
    icon: DollarSign,
    title: "Transparent, Usage-Based Pricing",
    description: "Avaya Experience Platform Public Cloud is seat-based with typical enterprise SaaS commitments.",
    connectpathValue: "ConnectPath charges per minute and per logged-in hour. Seasonal fluctuations? Pay for agents you actually use. No true-up negotiations, no unused seat inventory."
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Avaya implementations—especially hybrid or on-premises—involve significant project timelines.",
    connectpathValue: "ConnectPath onboards in under 15 minutes. Run a CloudFormation template, connect your instance, configure queues, and you're operational. Decision to production in hours."
  },
  {
    icon: Brain,
    title: "AI Without Product Line Confusion",
    description: "Avaya has AI capabilities distributed across product lines with varying availability by deployment model.",
    connectpathValue: "Amazon Q for agent assistance, Contact Lens for transcription and sentiment, Amazon Lex for conversational IVR. These work with Amazon Connect—period. No compatibility matrix."
  },
  {
    icon: Users,
    title: "Modern Supervisor Tools",
    description: "Avaya's supervisor tools exist, but the interface reflects older product thinking.",
    connectpathValue: "LiveLook shows individual contacts with phone numbers and wait times, real-time whisper coaching, one-click silent monitoring, visual queue management, instant announcements to targeted groups."
  },
]

const avayaStrengths = [
  {
    title: "Established Enterprise Presence",
    description: "Organizations with decades of Avaya investment have institutional knowledge, established support relationships, and proven deployments."
  },
  {
    title: "On-Premises Options",
    description: "For organizations with genuine requirements for on-premises deployment—air-gapped environments, specific data residency mandates—Avaya still offers that model."
  },
  {
    title: "Voice Quality Heritage",
    description: "Avaya's telephony roots run deep. Their voice path quality has been refined over decades of enterprise deployment."
  },
]

const concerns = [
  {
    question: "Migration from Avaya seems disruptive",
    answer: "Any platform change involves transition effort. But Avaya-to-Avaya migrations often require similar effort. ConnectPath supports parallel deployment—run new queues on Amazon Connect while maintaining existing operations, then migrate gradually."
  },
  {
    question: "Our agents know Avaya",
    answer: "Modern agent desktops—including ConnectPath's Engage interface—are intuitive by design. Training timelines are measured in hours, not weeks."
  },
  {
    question: "What about our existing telephony investment?",
    answer: "Amazon Connect includes telephony across 158 countries with 40+ tier-1 carrier connections. You don't need to bring your existing carrier—though you can use BYOC if specific requirements demand it."
  },
  {
    question: "We need Avaya's compliance certifications",
    answer: "Amazon Connect is HIPAA-eligible, PCI DSS certified, SOC 1/2/3 compliant, FedRAMP authorized, HITRUST certified, and meets GDPR requirements. AWS's compliance portfolio is among the broadest in the industry."
  },
]

const fitCriteria = {
  connectpath: [
    "Avaya's product line complexity has become a liability",
    "Vendor stability concerns affect your long-term planning",
    "You're facing an Avaya \"upgrade\" that feels more like a forced migration",
    "Pay-as-you-go pricing better matches your operational reality",
    "You want modern supervisor tools without custom development"
  ],
  avaya: [
    "You have genuine on-premises requirements (air-gapped, specific data residency)",
    "Your current Avaya deployment is stable and you have no near-term change drivers",
    "Existing Avaya expertise in-house provides meaningful operational advantage",
    "Multi-year Avaya contracts have favorable remaining terms"
  ]
}

export default function CompareAvayaPage() {
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
                  ConnectPath vs Avaya
                </h1>
                <p className="text-lg md:text-xl text-cp-slate-600 leading-relaxed mb-8">
                  Leave Legacy Behind Without Leaving Capability
                </p>
                <p className="text-base text-cp-slate-500 mb-8 max-w-2xl mx-auto">
                  Avaya has been in enterprise communications longer than most competitors have existed. 
                  That history brings genuine capability—but also complexity, hybrid deployment confusion, 
                  and financial uncertainty that&apos;s left many organizations looking for a cleaner path forward.
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
                  Avaya Experience Platform
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
                    <span className="text-sm text-cp-slate-600">{row.avaya}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Organizations Are Moving */}
        <section className="py-16 lg:py-20 bg-cp-warning/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-cp-navy-900 mb-4 text-center">
              Why Organizations Are Moving from Avaya
            </h2>
            <p className="text-cp-slate-600 text-center mb-12 max-w-2xl mx-auto">
              Common concerns driving contact center teams to evaluate alternatives
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {movingReasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-xl border border-border p-6 hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="size-12 rounded-lg bg-cp-warning/10 flex items-center justify-center mb-4">
                    <reason.icon className="size-6 text-cp-warning" />
                  </div>
                  <h3 className="text-lg font-semibold text-cp-navy-900 mb-3">{reason.title}</h3>
                  <p className="text-sm text-cp-slate-500 mb-4">{reason.description}</p>
                  <div className="bg-cp-teal-50 rounded-lg p-4 border border-cp-teal-100">
                    <p className="text-sm text-cp-teal-700">{reason.connectpathValue}</p>
                  </div>
                </motion.div>
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
              Modern capabilities built for today&apos;s contact center needs
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-xl border border-border p-6"
                >
                  <div className="size-10 rounded-lg bg-cp-teal-50 flex items-center justify-center mb-4">
                    <advantage.icon className="size-5 text-cp-teal-700" />
                  </div>
                  <h3 className="font-semibold text-cp-navy-900 mb-2">{advantage.title}</h3>
                  <p className="text-sm text-cp-slate-500 mb-3">{advantage.description}</p>
                  <p className="text-sm text-cp-teal-700 font-medium">{advantage.connectpathValue}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What Avaya Does Well */}
        <section className="py-16 lg:py-20 bg-card">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-cp-navy-900 mb-4 text-center">
              What Avaya Does Well
            </h2>
            <p className="text-cp-slate-600 text-center mb-12 max-w-2xl mx-auto">
              An honest assessment of where Avaya has strengths
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {avayaStrengths.map((strength) => (
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

        {/* Addressing Migration Concerns */}
        <section className="py-16 lg:py-20 bg-cp-navy-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-cp-navy-900 mb-4 text-center">
              Addressing Migration Concerns
            </h2>
            <p className="text-cp-slate-600 text-center mb-12">
              Questions we hear from organizations considering a move
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
              
              {/* Avaya */}
              <div className="bg-cp-slate-50 rounded-xl p-8 border border-cp-slate-200">
                <h3 className="font-semibold text-cp-navy-900 mb-6 text-lg">Staying with Avaya may make sense if:</h3>
                <ul className="space-y-3">
                  {fitCriteria.avaya.map((criterion) => (
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
              Avaya&apos;s history in enterprise communications is real—but history doesn&apos;t guarantee 
              future capability or stability. Two bankruptcies, fragmented product lines, and complex 
              deployment options have pushed many organizations to evaluate cleaner alternatives.
              <br /><br />
              ConnectPath on Amazon Connect offers modern contact center capability on infrastructure 
              that will exist and improve for decades. You get supervisor tools that work today, AI that&apos;s 
              included rather than optional, and pricing that reflects actual usage.
              <br /><br />
              <strong className="text-white">If you&apos;re already considering whether to stay with Avaya, 
              the answer is probably to start evaluating alternatives seriously.</strong>
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
