"use client"

import { CONTACT_URL } from "@/lib/docs"
import { motion } from "framer-motion"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Shield, Mic, Users, Plug } from "lucide-react"

const features = [
  { icon: Shield, title: "PII compliant handling" },
  { icon: Mic, title: "Call recording control" },
  { icon: Users, title: "Queue-based routing" },
  { icon: Users, title: "Remote supervisor capabilities" },
  { icon: Plug, title: "Integration with healthcare systems" }
]

export default function HealthcarePage() {
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
                  Patient Experience. Operational Efficiency.
                </h1>
                <p className="text-xl text-cp-slate-300 mb-8">
                  HIPAA-eligible infrastructure with the supervision tools healthcare contact centers need.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold" asChild>
                    <Link href={CONTACT_URL} target="_blank" rel="noopener noreferrer">Learn About Healthcare Solutions</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-cp-navy-900 mb-4">
                Healthcare-Relevant Features
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-cp-teal-100 flex items-center justify-center">
                        <feature.icon className="w-5 h-5 text-cp-teal-700" />
                      </div>
                      <span className="font-medium text-cp-navy-900">{feature.title}</span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-20 bg-cp-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <Card className="border-2 border-cp-teal-200">
                <CardContent className="p-8">
                  <Heart className="w-12 h-12 text-cp-teal-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-cp-navy-900 mb-2">Case Study</h3>
                  <p className="text-2xl font-serif text-cp-navy-900 mb-4">Morris Global Group</p>
                  <p className="text-cp-slate-600">
                    Healthcare technology company enables remote workforce with ConnectPath.
                  </p>
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
                Ready to Improve Patient Experience?
              </h2>
              <p className="text-xl text-cp-slate-300 mb-8">
                Learn how ConnectPath supports healthcare contact centers.
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
