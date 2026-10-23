"use client"

import { DEMO_URL } from "@/lib/docs"
import { motion } from "framer-motion"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Search, 
  FileText, 
  Download, 
  Filter,
  ChevronRight,
  Database,
  Mic,
  FileDown
} from "lucide-react"

const features = [
  {
    icon: Search,
    title: "Activity Search",
    description: "Search up to 100,000 records with advanced filters by date range, channel, queue, agent, and disposition. Use composite searches with & operator.",
    details: [
      "Filter by date range, channel, queue, agent, disposition",
      "Composite searches with & operator",
      "Attribute search by name and value",
      "Transcript search with Contact Lens"
    ]
  },
  {
    icon: FileText,
    title: "Activity Details",
    description: "Full contact record with recording playback, transcripts, sentiment analysis, and related activity history.",
    details: [
      "Full contact record",
      "Recording playback (smart playback with Contact Lens)",
      "Transcripts and sentiment analysis",
      "Related activity (previous customer interactions)",
      "Activity notes tied to contact or account"
    ]
  },
  {
    icon: Download,
    title: "Export",
    description: "Download filtered results with all columns available in Excel and CSV formats.",
    details: [
      "Download filtered results",
      "All columns available",
      "Excel and CSV formats"
    ]
  }
]

const searchExamples = [
  { query: "queue: sales & channel: email", description: "Find all email contacts from the sales queue" },
  { query: 'attribute: spanishQueue, true', description: "Find contacts with Spanish queue attribute" },
  { query: 'transcript: "refund request"', description: "Search transcripts for refund mentions" }
]

export default function ActivityPage() {
  return (
    <>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cp-navy-900 via-cp-navy-800 to-cp-navy-900" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link 
                  href="/platform/agents/desktop"
                  className="inline-flex items-center gap-2 text-cp-teal-400 hover:text-cp-teal-300 mb-6"
                >
                  <ChevronRight className="w-4 h-4 rotate-180" />
                  Back to Agent Desktop
                </Link>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                  Find Any Interaction. Instantly.
                </h1>
                <p className="text-xl text-cp-slate-300 mb-8">
                  Advanced activity search with up to 100,000 records, composite queries, and Contact Lens integration for transcripts and sentiment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold" asChild>
                    <Link href="/get-started">Start Free Trial</Link>
                  </Button>
                  <Button size="lg" className="border border-white/20 bg-transparent text-white hover:bg-white/10" asChild>
                    <Link href={DEMO_URL} target="_blank" rel="noopener noreferrer">Explore Activity Search</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="space-y-12">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden">
                    <CardContent className="p-8">
                      <div className="flex flex-col lg:flex-row gap-8">
                        <div className="lg:w-1/3">
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cp-teal-400 to-cp-cyan-500 flex items-center justify-center mb-4">
                            <feature.icon className="w-7 h-7 text-white" />
                          </div>
                          <h3 className="text-2xl font-semibold text-cp-navy-900 mb-2">{feature.title}</h3>
                          <p className="text-cp-slate-600">{feature.description}</p>
                        </div>
                        <div className="lg:w-2/3">
                          <ul className="grid sm:grid-cols-2 gap-3">
                            {feature.details.map((detail, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <div className="w-5 h-5 rounded-full bg-cp-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <div className="w-2 h-2 rounded-full bg-cp-teal-400" />
                                </div>
                                <span className="text-cp-slate-700">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Search Examples */}
        <section className="py-20 bg-cp-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-cp-navy-900 mb-4">
                Search Examples
              </h2>
              <p className="text-lg text-cp-slate-600 max-w-2xl mx-auto">
                Powerful query syntax for finding exactly what you need.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-4">
              {searchExamples.map((example, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <code className="block text-lg font-mono text-cp-teal-700 bg-cp-teal-50 px-4 py-2 rounded mb-3">
                        {example.query}
                      </code>
                      <p className="text-cp-slate-600">{example.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-cp-navy-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Stop Searching. Start Finding.
              </h2>
              <p className="text-xl text-cp-slate-300 mb-8">
                Powerful activity search that actually works.
              </p>
              <Button size="lg" className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold" asChild>
                <Link href="/get-started">Start Free Trial</Link>
              </Button>
            </div>
          </div>
        </section>
    </>
  )
}
