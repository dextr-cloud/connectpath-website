"use client"

import { motion } from "framer-motion"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingCart, Cloud, LogIn, Check } from "lucide-react"

const steps = [
  { icon: ShoppingCart, title: "Step 1", description: "Subscribe via AWS Marketplace" },
  { icon: Cloud, title: "Step 2", description: "Run CloudFormation template" },
  { icon: LogIn, title: "Step 3", description: "Log in and start supervising" }
]

const getFeatures = [
  "Unified supervisor dashboard",
  "Team Status Drawer",
  "LiveLook for queue visibility",
  "Silent monitor and whisper coach",
  "Wallboard mode",
  "Historical reporting",
  "Call dispositions",
  "Agent-to-agent collaboration"
]

const keepFeatures = [
  "All existing contact flows",
  "All Amazon Connect features",
  "All AWS integrations"
]

export default function EnhanceConnectPage() {
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
                  Already on Amazon Connect? Level Up.
                </h1>
                <p className="text-xl text-cp-slate-300 mb-8">
                  ConnectPath CX deploys on top of your existing Amazon Connect instance with zero downtime and no infrastructure changes. Your investment in Amazon Connect continues. Your supervisors get the tools they need.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold" asChild>
                    <Link href="/get-started">Add ConnectPath to Your Instance</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Enhancement Path */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-cp-navy-900 mb-4">
                Enhancement Path
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center h-full">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 rounded-full bg-cp-teal-100 flex items-center justify-center mx-auto mb-4">
                        <step.icon className="w-8 h-8 text-cp-teal-700" />
                      </div>
                      <h3 className="text-xl font-semibold text-cp-navy-900 mb-2">{step.title}</h3>
                      <p className="text-cp-slate-600">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What You Get / What You Keep */}
        <section className="py-20 bg-cp-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold text-cp-navy-900 mb-6">What You Get</h3>
                    <ul className="space-y-3">
                      {getFeatures.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-cp-teal-400" />
                          <span className="text-cp-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-cp-teal-200 bg-cp-teal-50/50">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold text-cp-navy-900 mb-6">What You Keep</h3>
                    <ul className="space-y-3">
                      {keepFeatures.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-cp-teal-400" />
                          <span className="text-cp-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-cp-navy-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Ready to Enhance Your Amazon Connect?
              </h2>
              <p className="text-xl text-cp-slate-300 mb-8">
                Add ConnectPath in less than 15 minutes.
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
