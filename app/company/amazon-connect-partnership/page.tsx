"use client"

import { motion } from "framer-motion"
import Link from "next/link"

import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Shield, Users, Zap } from "lucide-react"

const benefits = [
  { icon: Users, title: "Direct relationship with AWS" },
  { icon: Zap, title: "Access to Amazon Connect roadmap insights" },
  { icon: Shield, title: "Integration support from AWS" },
  { icon: Award, title: "Ongoing compatibility assurance" }
]

export default function PartnershipPage() {
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
                  Amazon Connect Service Ready Partner
                </h1>
                <p className="text-xl text-cp-slate-300 mb-8">
                  ConnectPath is built on Amazon Connect by CloudHesive, an AWS Premier Consulting Partner with Amazon Connect Service Ready Specialization. This designation means AWS has validated our solution for Amazon Connect deployments.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold" asChild>
                    <Link href="/get-started">Get Started on AWS Marketplace</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Partnership Details */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-8">
                    <Award className="w-12 h-12 text-cp-teal-400 mb-6" />
                    <h3 className="text-2xl font-semibold text-cp-navy-900 mb-4">AWS Premier Consulting Partner</h3>
                    <ul className="space-y-3 text-cp-slate-600">
                      <li>Highest tier of AWS Partnership</li>
                      <li>Demonstrated expertise in AWS solutions</li>
                      <li>Continuous validation of technical capabilities</li>
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
                    <Shield className="w-12 h-12 text-cp-teal-400 mb-6" />
                    <h3 className="text-2xl font-semibold text-cp-navy-900 mb-4">Amazon Connect Service Ready</h3>
                    <ul className="space-y-3 text-cp-slate-600">
                      <li>Achieved August 2023</li>
                      <li>Validated for Amazon Connect deployments</li>
                      <li>Recognized expertise in contact center solutions</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What This Means */}
        <section className="py-20 bg-cp-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-cp-navy-900 mb-4">
                What This Means for You
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-cp-teal-100 flex items-center justify-center mx-auto mb-4">
                        <benefit.icon className="w-6 h-6 text-cp-teal-700" />
                      </div>
                      <p className="font-medium text-cp-navy-900">{benefit.title}</p>
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
                Ready to Get Started?
              </h2>
              <p className="text-xl text-cp-slate-300 mb-8">
                Deploy ConnectPath through AWS Marketplace today.
              </p>
              <Button size="lg" className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold" asChild>
                <Link href="/get-started">Start Free Trial</Link>
              </Button>
            </div>
          </div>
        </section>
    </PageLayout>
  )
}
