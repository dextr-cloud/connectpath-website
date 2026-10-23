"use client"

import { CONTACT_URL } from "@/lib/docs"
import { motion } from "framer-motion"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

const crms = [
  {
    name: "Salesforce",
    features: [
      "CTI Adapter for embedding ConnectPath in Salesforce",
      "Click-to-call from Salesforce records",
      "Screen pop with customer data",
      "Available on AppExchange"
    ]
  },
  {
    name: "Microsoft Dynamics",
    features: [
      "Deep integration with all channels and directions",
      "Post-contact transcript to Dynamics",
      "Queue-specific configuration"
    ]
  },
  {
    name: "Zendesk",
    features: [
      "Pre-built integration",
      "Ticket creation and updates"
    ]
  },
  {
    name: "Custom CRM",
    features: [
      "iFrame embedding per contact",
      "Attribute substitution in URLs",
      "Up to 20 integrations (5 per queue)"
    ]
  }
]

export default function CRMPage() {
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
                  href="/platform/integrations"
                  className="inline-flex items-center gap-2 text-cp-teal-400 hover:text-cp-teal-300 mb-6"
                >
                  <ChevronRight className="w-4 h-4 rotate-180" />
                  Back to Integrations
                </Link>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                  Your CRM. Your Contact Center. Connected.
                </h1>
                <p className="text-xl text-cp-slate-300 mb-8">
                  Pre-built integrations with Salesforce, Microsoft Dynamics, and Zendesk—plus flexible iFrame embedding for any CRM.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold" asChild>
                    <Link href={CONTACT_URL} target="_blank" rel="noopener noreferrer">Contact Us for CRM Setup</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CRM Options */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              {crms.map((crm, index) => (
                <motion.div
                  key={crm.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-semibold text-navy-900 mb-6">{crm.name}</h3>
                      <ul className="space-y-3">
                        {crm.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-cp-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <div className="w-2 h-2 rounded-full bg-cp-teal-400" />
                            </div>
                            <span className="text-cp-slate-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-navy-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Ready to Connect Your CRM?
              </h2>
              <p className="text-xl text-cp-slate-300 mb-8">
                Our team can help you set up and configure your CRM integration.
              </p>
              <Button size="lg" className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold" asChild>
                <Link href={CONTACT_URL} target="_blank" rel="noopener noreferrer">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
    </>
  )
}
