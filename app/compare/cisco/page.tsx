"use client"

import { DEMO_URL } from "@/lib/docs"
import { motion } from "framer-motion"
import Link from "next/link"
import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  ChevronRight, 
  Check, 
  X, 
  DollarSign,
  Zap,
  Clock,
  Phone,
  Users,
  Shield,
  Globe,
  HelpCircle,
  Building2,
  Bot
} from "lucide-react"

const quickComparison = [
  { factor: "Pricing Transparency", connectpath: "Published, pay-as-you-go", cisco: "Contact sales for quotes", winner: "connectpath" },
  { factor: "Pricing Model", connectpath: "Per minute + per logged-in hour", cisco: "Per agent/month, named or concurrent", winner: "connectpath" },
  { factor: "Estimated Cost", connectpath: "~$0.25/user/hour + AWS usage", cisco: "~$150-$300+/agent/month (estimates vary)", winner: "connectpath" },
  { factor: "AI Capabilities", connectpath: "Amazon Q, Contact Lens, Lex—included", cisco: "AI Assistant—usage-based tokens", winner: "connectpath" },
  { factor: "Setup Time", connectpath: "Under 15 minutes", cisco: "Weeks with professional services", winner: "connectpath" },
  { factor: "Telephony", connectpath: "Included (158 countries)", cisco: "BYOC or Webex Calling integration", winner: "connectpath" },
  { factor: "Contract Complexity", connectpath: "Month-to-month via AWS Marketplace", cisco: "Enterprise agreements typical", winner: "connectpath" },
]

const connectpathWins = [
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "Cisco doesn't publish Webex Contact Center pricing publicly. You submit inquiry forms, speak with sales teams, and receive custom quotes. Third-party estimates suggest $150-$300+ per agent per month.",
    highlight: "ConnectPath pricing is published: approximately $0.25 per logged-in hour per user. You know costs before you talk to anyone."
  },
  {
    icon: Bot,
    title: "AI Without Token Complexity",
    description: "Cisco's AI Assistant uses a consumption model: \"units\" that provide voice minutes and digital sessions, pooled across agents. You purchase units, track usage, and manage capacity.",
    highlight: "Amazon Connect's AI is straightforward—Amazon Q, Contact Lens, and Lex with usage-based pricing. No token pools to manage."
  },
  {
    icon: Clock,
    title: "Faster Path to Production",
    description: "Cisco implementations typically involve discovery phases, professional services engagement, and staged deployment timelines. Even for cloud-native Webex Contact Center, deployment takes weeks.",
    highlight: "ConnectPath onboards in under 15 minutes. CloudFormation deploys operational dashboards immediately."
  },
  {
    icon: Phone,
    title: "Independent Telephony",
    description: "Webex Contact Center integrates with Webex Calling or supports BYOC. Both approaches add layers—either additional Cisco costs or carrier integration complexity.",
    highlight: "Amazon Connect includes telephony as a core capability. DIDs across 158 countries, no separate vendor, no trunk management."
  },
  {
    icon: Users,
    title: "Supervisor Tools Built for Action",
    description: "Cisco's interfaces are capable, but user reviews note a learning curve and interface complexity—particularly around reporting and custom configurations.",
    highlight: "ConnectPath was designed supervisor-first: Team Status Drawer, LiveLook, one-click whisper coaching, visual queue management."
  },
]

const ciscoStrengths = [
  {
    icon: Building2,
    title: "Unified Collaboration",
    description: "If your organization uses Webex Meetings, Webex Calling, and Webex Messaging, adding Webex Contact Center creates a single-vendor collaboration stack."
  },
  {
    icon: DollarSign,
    title: "Enterprise Relationships",
    description: "For organizations with existing Cisco enterprise agreements, Webex Contact Center can be added to existing contracts with potentially favorable terms."
  },
  {
    icon: Shield,
    title: "Security and Compliance",
    description: "Cisco has deep enterprise security expertise. Webex Contact Center carries security certifications that align with enterprise IT requirements."
  },
  {
    icon: Globe,
    title: "Global Deployment",
    description: "Webex Contact Center is available in 87+ countries with established regional support infrastructure."
  },
]

const commonQuestions = [
  {
    question: "Doesn't Cisco's enterprise presence provide more stability?",
    answer: "Cisco is certainly stable. But AWS is larger, with demonstrated long-term investment in Amazon Connect. Both are stable vendors—the question is which model fits better, not which will exist in 10 years."
  },
  {
    question: "What about existing Cisco investments?",
    answer: "Existing Cisco infrastructure can coexist with Amazon Connect. Organizations migrate incrementally—some queues on Amazon Connect, some remaining on Cisco—until confidence builds. ConnectPath supports this hybrid operational period."
  },
  {
    question: "Is Amazon Connect proven at enterprise scale?",
    answer: "Amazon Connect handles customer service for Amazon Retail—among the largest contact center operations globally. 12 billion minutes optimized by AI annually. \"Enterprise\" capability isn't exclusive to traditional enterprise vendors."
  },
  {
    question: "What about Cisco's partner ecosystem?",
    answer: "Cisco has extensive partner networks. AWS's partner ecosystem is larger and continues to grow. For contact center specifically, ConnectPath adds the operational layer that Amazon Connect lacks natively—without waiting for partner solutions."
  },
]

export default function CiscoComparisonPage() {
  return (
<PageLayout>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cp-navy-900 via-cp-navy-800 to-cp-navy-900" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link 
                  href="/compare"
                  className="inline-flex items-center gap-2 text-cp-teal-400 hover:text-cp-teal-300 mb-6"
                >
                  <ChevronRight className="w-4 h-4 rotate-180" />
                  Back to Comparisons
                </Link>
                
                <p className="text-cp-teal-400 font-medium mb-4">Enterprise Grade Without Enterprise Opacity</p>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                  ConnectPath vs. Cisco Webex Contact Center
                </h1>
                <p className="text-xl text-cp-slate-300 mb-8">
                  Cisco Webex Contact Center carries the credibility of one of the world&apos;s largest enterprise technology companies. But Cisco&apos;s approach—opaque pricing, complex licensing, and feature tiers that require detailed conversation to understand—may not match how modern contact centers want to buy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold" asChild>
                    <Link href="/get-started">Start Free Trial</Link>
                  </Button>
                  <Button size="lg" className="border border-white/20 bg-transparent text-white hover:bg-white/10" asChild>
                    <Link href={DEMO_URL} target="_blank" rel="noopener noreferrer">Request Demo</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Comparison Table */}
        <section className="py-20 bg-cp-slate-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-cp-navy-900 mb-4">
                Quick Comparison
              </h2>
              <p className="text-lg text-cp-slate-600 max-w-2xl mx-auto">
                See how ConnectPath + Amazon Connect compares to Cisco Webex Contact Center
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-3 bg-cp-navy-900 text-white">
                  <div className="p-4 font-medium">Factor</div>
                  <div className="p-4 font-medium text-center border-l border-white/10">ConnectPath + Amazon Connect</div>
                  <div className="p-4 font-medium text-center border-l border-white/10">Cisco Webex Contact Center</div>
                </div>
                {quickComparison.map((row, index) => (
                  <div key={index} className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-white' : 'bg-cp-slate-50'}`}>
                    <div className="p-4 font-medium text-cp-navy-900 border-t border-cp-slate-200">{row.factor}</div>
                    <div className={`p-4 text-center border-t border-l border-cp-slate-200 ${row.winner === 'connectpath' ? 'bg-cp-teal-50 text-cp-teal-700' : 'text-cp-slate-600'}`}>
                      {row.connectpath}
                    </div>
                    <div className={`p-4 text-center border-t border-l border-cp-slate-200 ${row.winner === 'cisco' ? 'bg-cp-teal-50 text-cp-teal-700' : 'text-cp-slate-600'}`}>
                      {row.cisco}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Where ConnectPath Wins */}
        <section className="py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-cp-navy-900 mb-4">
                Where ConnectPath Wins
              </h2>
            </motion.div>

            <div className="space-y-8 max-w-4xl mx-auto">
              {connectpathWins.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-16 bg-cp-navy-900 flex items-center justify-center p-4 md:p-0">
                          <item.icon className="w-8 h-8 text-cp-teal-400" />
                        </div>
                        <div className="flex-1 p-6">
                          <h3 className="text-xl font-serif font-bold text-cp-navy-900 mb-3">{item.title}</h3>
                          <p className="text-cp-slate-600 mb-4">{item.description}</p>
                          <div className="bg-cp-teal-50 border-l-4 border-cp-teal-400 p-4 rounded-r">
                            <p className="text-cp-teal-700 font-medium">{item.highlight}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What Cisco Does Well */}
        <section className="py-20 bg-cp-slate-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-cp-navy-900 mb-4">
                What Cisco Webex Does Well
              </h2>
              <p className="text-lg text-cp-slate-600 max-w-2xl mx-auto">
                Fair assessment of Cisco&apos;s strengths
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {ciscoStrengths.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-cp-slate-100 flex items-center justify-center mb-4">
                        <item.icon className="w-6 h-6 text-cp-slate-600" />
                      </div>
                      <h3 className="text-lg font-serif font-bold text-cp-navy-900 mb-2">{item.title}</h3>
                      <p className="text-cp-slate-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Questions */}
        <section className="py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-cp-navy-900 mb-4">
                Addressing Common Questions
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-6">
              {commonQuestions.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-cp-teal-100 flex items-center justify-center flex-shrink-0">
                          <HelpCircle className="w-5 h-5 text-cp-teal-700" />
                        </div>
                        <div>
                          <h3 className="text-lg font-serif font-bold text-cp-navy-900 mb-2">{item.question}</h3>
                          <p className="text-cp-slate-600">{item.answer}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* When to Choose */}
        <section className="py-20 bg-cp-slate-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-cp-navy-900 mb-4">
                When to Choose
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-cp-teal-200">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-full bg-cp-teal-100 flex items-center justify-center mb-6">
                      <Check className="w-6 h-6 text-cp-teal-700" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-cp-navy-900 mb-4">Choose ConnectPath If...</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-cp-teal-400 flex-shrink-0 mt-0.5" />
                        <span className="text-cp-slate-600">Pricing transparency matters more than enterprise sales engagement</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-cp-teal-400 flex-shrink-0 mt-0.5" />
                        <span className="text-cp-slate-600">AI usage should be straightforward—not managed through token pools</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-cp-teal-400 flex-shrink-0 mt-0.5" />
                        <span className="text-cp-slate-600">You want operational supervisor tools without custom development</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-cp-teal-400 flex-shrink-0 mt-0.5" />
                        <span className="text-cp-slate-600">Month-to-month flexibility beats multi-year enterprise agreements</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-cp-teal-400 flex-shrink-0 mt-0.5" />
                        <span className="text-cp-slate-600">Integrated telephony is simpler than managing separate voice infrastructure</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-full bg-cp-slate-100 flex items-center justify-center mb-6">
                      <Building2 className="w-6 h-6 text-cp-slate-600" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-cp-navy-900 mb-4">Cisco Webex May Be Better If...</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-cp-slate-400 flex-shrink-0 mt-0.5" />
                        <span className="text-cp-slate-600">Your organization has significant existing Cisco investments and enterprise agreements</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-cp-slate-400 flex-shrink-0 mt-0.5" />
                        <span className="text-cp-slate-600">Consolidating collaboration and contact center under one vendor has strategic value</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-cp-slate-400 flex-shrink-0 mt-0.5" />
                        <span className="text-cp-slate-600">You prefer working with established Cisco partner channels</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-cp-slate-400 flex-shrink-0 mt-0.5" />
                        <span className="text-cp-slate-600">Specific Cisco security or compliance certifications are requirements</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Bottom Line */}
        <section className="py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-cp-navy-900 mb-6">
                The Bottom Line
              </h2>
              <p className="text-lg text-cp-slate-600 mb-6">
                Cisco Webex Contact Center is a capable enterprise platform backed by a stable, established vendor. But &quot;enterprise&quot; often means opacity—unclear pricing, complex licensing, and buying processes designed for procurement teams rather than operators.
              </p>
              <p className="text-lg text-cp-slate-700 font-medium mb-8">
                ConnectPath on Amazon Connect delivers enterprise capability with modern simplicity. You know what it costs before you talk to sales. AI is included, not tokenized. Supervisor tools work immediately, not after professional services engagement.
              </p>
              <p className="text-xl text-cp-navy-900 font-serif font-bold">
                If you want enterprise grade without enterprise friction, ConnectPath is the answer.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-cp-navy-900">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                Ready to See the Difference?
              </h2>
              <p className="text-xl text-cp-slate-300 mb-8 max-w-2xl mx-auto">
                Experience enterprise-grade contact center operations without enterprise complexity
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold" asChild>
                  <Link href="/get-started">Start Free Trial via AWS Marketplace</Link>
                </Button>
                <Button size="lg" className="border border-white/20 bg-transparent text-white hover:bg-white/10" asChild>
                  <Link href={DEMO_URL} target="_blank" rel="noopener noreferrer">Request a Demo</Link>
                </Button>
              </div>
              <p className="text-sm text-cp-slate-400 mt-8">
                ConnectPath is built by CloudHesive, an AWS Premier Consulting Partner with Amazon Connect Service Ready specialization.
              </p>
            </motion.div>
          </div>
</section>
    </PageLayout>
  )
}
