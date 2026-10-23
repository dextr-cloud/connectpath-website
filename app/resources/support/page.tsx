"use client"

import { DOCS_BASE_URL } from "@/lib/docs"
import { motion } from "framer-motion"
import Link from "next/link"
import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Ticket, Phone, BookOpen, ExternalLink } from "lucide-react"

const phoneNumbers = [
  { region: "United States", number: "+1 800-860-2040" },
  { region: "United Kingdom", number: "+44 800 032 2803" },
  { region: "Australia", number: "+61 (2) 80742932" },
  { region: "Argentina", number: "+54 810 112 7076" }
]

export default function SupportPage() {
  return (
    <PageLayout>
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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                  ConnectPath Support
                </h1>
                <p className="text-xl text-cp-slate-300 mb-8">
                  Need help? Submit a ticket or contact our support team.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Service Ticket */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-cp-teal-100 flex items-center justify-center mx-auto mb-6">
                      <Ticket className="w-8 h-8 text-cp-teal-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-cp-navy-900 mb-4">Service Ticket Portal</h3>
                    <p className="text-cp-slate-600 mb-6">
                      Submit tickets via ServiceNow portal. Track ticket status and view history.
                    </p>
                    <Button className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold w-full" asChild>
                      <a href="https://cloudhesive.service-now.com" target="_blank" rel="noopener noreferrer">
                        Submit a Ticket
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Phone Support */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-cp-teal-100 flex items-center justify-center mx-auto mb-6">
                      <Phone className="w-8 h-8 text-cp-teal-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-cp-navy-900 mb-4">Phone Support</h3>
                    <div className="space-y-3 text-left">
                      {phoneNumbers.map((phone) => (
                        <div key={phone.region} className="flex justify-between text-sm">
                          <span className="text-cp-slate-600">{phone.region}</span>
                          <span className="font-mono text-cp-navy-800">{phone.number}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Documentation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Card className="h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-cp-teal-100 flex items-center justify-center mx-auto mb-6">
                      <BookOpen className="w-8 h-8 text-cp-teal-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-cp-navy-900 mb-4">Documentation</h3>
                    <p className="text-cp-slate-600 mb-6">
                      Browse user guides, admin guides, and FAQs for self-service help.
                    </p>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={DOCS_BASE_URL} target="_blank" rel="noopener noreferrer">
                        View Documentation
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
    </PageLayout>
  )
}
