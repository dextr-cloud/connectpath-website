"use client"

import { motion } from "framer-motion"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Users, BookOpen, Webhook, Shield } from "lucide-react"

const apis = [
  {
    icon: Users,
    title: "User Management API",
    description: "Create, update, delete users. Manage permissions programmatically."
  },
  {
    icon: BookOpen,
    title: "Directory API",
    description: "CRUD operations on contacts. Sync from external systems."
  },
  {
    icon: Webhook,
    title: "BYOChannel (Webhooks)",
    description: "Route any business event via RESTful API. Task creation via webhook. Integrate with CRM, ITSM, custom systems."
  },
  {
    icon: Shield,
    title: "Pre-Dial Compliance",
    description: "Gryphon API integration. Allow/deny/translate phone numbers. Denial reason modal for agents."
  }
]

export default function APIsPage() {
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
                  {"Build What We Haven't"}
                </h1>
                <p className="text-xl text-cp-slate-300 mb-8">
                  RESTful APIs for user and directory management, plus webhooks to route any business event into your contact center.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold" asChild>
                    <Link href="/resources/documentation">View API Documentation</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* APIs */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              {apis.map((api, index) => (
                <motion.div
                  key={api.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-8">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cp-teal-400 to-cp-cyan-500 flex items-center justify-center mb-6">
                        <api.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-semibold text-cp-navy-900 mb-4">{api.title}</h3>
                      <p className="text-cp-slate-600 leading-relaxed">{api.description}</p>
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
                Ready to Build?
              </h2>
              <p className="text-xl text-cp-slate-300 mb-8">
                Explore our API documentation and start integrating today.
              </p>
              <Button size="lg" className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold" asChild>
                <Link href="/resources/documentation">View Documentation</Link>
              </Button>
            </div>
          </div>
        </section>
    </>
  )
}
