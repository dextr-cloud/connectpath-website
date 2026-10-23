"use client"

import { CONTACT_URL } from "@/lib/docs"
import { motion } from "framer-motion"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Server, DollarSign, Cloud, Users } from "lucide-react"

const migrations = [
  {
    from: "Avaya",
    benefits: [
      "No seat licensing",
      "No infrastructure maintenance",
      "Same supervisor visibility, cloud-native"
    ]
  },
  {
    from: "Genesys",
    benefits: [
      "AWS ecosystem integration",
      "Pay-as-you-go model",
      "Faster innovation cycles"
    ]
  },
  {
    from: "On-Prem",
    benefits: [
      "Any agent, anywhere, any time",
      "Elastic scaling",
      "Disaster recovery built in (ACGR)"
    ]
  }
]

const support = [
  "CloudHesive professional services",
  "Configuration migration assistance",
  "Training and enablement"
]

export default function MigrationPage() {
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
                  Migrate from Avaya, Genesys, or Legacy On-Prem
                </h1>
                <p className="text-xl text-cp-slate-300 mb-8">
                  ConnectPath gives your supervisors the operational tools they&apos;re used to—without the legacy infrastructure, licensing costs, or upgrade cycles.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold" asChild>
                    <Link href={CONTACT_URL} target="_blank" rel="noopener noreferrer">Discuss Your Migration</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Migration Benefits */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-cp-navy-900 mb-4">
                Migration Benefits
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {migrations.map((migration, index) => (
                <motion.div
                  key={migration.from}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-2 mb-6">
                        <span className="text-lg font-medium text-cp-slate-500">From {migration.from}</span>
                        <ArrowRight className="w-4 h-4 text-cp-teal-400" />
                        <span className="text-lg font-medium text-cp-teal-700">ConnectPath</span>
                      </div>
                      <ul className="space-y-3">
                        {migration.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-cp-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <div className="w-2 h-2 rounded-full bg-cp-teal-400" />
                            </div>
                            <span className="text-cp-slate-700">{benefit}</span>
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

        {/* Migration Support */}
        <section className="py-20 bg-cp-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-cp-navy-900 mb-4">
                  Migration Support
                </h2>
              </motion.div>

              <Card>
                <CardContent className="p-8">
                  <ul className="space-y-4">
                    {support.map((item, index) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-4"
                      >
                        <div className="w-10 h-10 rounded-lg bg-cp-teal-100 flex items-center justify-center">
                          <Users className="w-5 h-5 text-cp-teal-700" />
                        </div>
                        <span className="text-lg text-cp-navy-800">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-cp-navy-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Ready to Migrate?
              </h2>
              <p className="text-xl text-cp-slate-300 mb-8">
                Let&apos;s discuss your migration path to Amazon Connect + ConnectPath.
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
