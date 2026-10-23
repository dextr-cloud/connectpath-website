"use client"

import { CONTACT_URL } from "@/lib/docs"
import { motion } from "framer-motion"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Database, 
  Users, 
  Headphones, 
  Cloud,
  Code,
  ArrowRight
} from "lucide-react"

const categories = [
  {
    icon: Database,
    title: "CRM Integrations",
    description: "Salesforce (CTI Adapter), Microsoft Dynamics, Zendesk, Custom CRM iFrame",
    href: "/platform/integrations/crm"
  },
  {
    icon: Users,
    title: "Microsoft Teams",
    description: "Teams users in Team Status Drawer, presence synchronization",
    href: "/platform/integrations/teams"
  },
  {
    icon: Headphones,
    title: "Headset Support",
    description: "Jabra headsets (Engage 50, 65, 75, Biz, Pro series)",
    href: "/platform/integrations/headsets"
  },
  {
    icon: Cloud,
    title: "AWS Services",
    description: "Contact Lens, Amazon Q, Customer Profiles, Cases, VoiceID",
    href: "/platform"
  },
  {
    icon: Code,
    title: "APIs & Webhooks",
    description: "User Management API, Directory API, BYOChannel webhooks, Pre-dial compliance",
    href: "/platform/integrations/apis"
  }
]

export default function IntegrationsPage() {
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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                  Connect to What You Already Use
                </h1>
                <p className="text-xl text-cp-slate-300 mb-8">
                  Pre-built integrations with Salesforce, Microsoft Dynamics, Zendesk, Microsoft Teams, and more—plus APIs and webhooks for custom connections.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold" asChild>
                    <Link href="/get-started">Start Free Trial</Link>
                  </Button>
                  <Button size="lg" className="border border-white/20 bg-transparent text-white hover:bg-white/10" asChild>
                    <Link href={CONTACT_URL} target="_blank" rel="noopener noreferrer">Explore All Integrations</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Integration Categories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-cp-navy-900 mb-4">
                Integration Categories
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={category.href}>
                    <Card className="h-full hover:shadow-lg transition-all hover:border-cp-teal-200 group cursor-pointer">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-lg bg-cp-teal-100 flex items-center justify-center mb-4 group-hover:bg-cp-teal-200 transition-colors">
                          <category.icon className="w-6 h-6 text-cp-teal-700" />
                        </div>
                        <h3 className="text-xl font-semibold text-cp-navy-900 mb-2 flex items-center gap-2">
                          {category.title}
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                        <p className="text-cp-slate-600">{category.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
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
                Need a Custom Integration?
              </h2>
              <p className="text-xl text-cp-slate-300 mb-8">
                Our APIs and webhooks let you build what we haven&apos;t.
              </p>
              <Button size="lg" className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold" asChild>
                <Link href="/platform/integrations/apis">View API Documentation</Link>
              </Button>
            </div>
          </div>
        </section>
    </>
  )
}
