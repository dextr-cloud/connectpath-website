"use client"

import { motion } from "framer-motion"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Server, Shield, Rocket, Settings, Code } from "lucide-react"

const highlights = [
  {
    icon: Server,
    title: "Architecture",
    points: [
      "Serverless (Lambda, API Gateway, DynamoDB)",
      "CloudFormation template deployment",
      "IAM role with scoped permissions",
      "Data can live in customer's AWS account"
    ]
  },
  {
    icon: Shield,
    title: "Security",
    points: [
      "Encryption at rest and in transit",
      "PII compliant",
      "AWS security and compliance inherited"
    ]
  },
  {
    icon: Rocket,
    title: "Deployment",
    points: [
      "< 15 minutes with CloudFormation",
      "Available in all AWS Connect regions",
      "Instance re-onboarding supported"
    ]
  },
  {
    icon: Settings,
    title: "Management",
    points: [
      "Permission groups for feature access",
      "CloudFormation stack updates for new features",
      "Health display in application"
    ]
  },
  {
    icon: Code,
    title: "APIs",
    points: [
      "User Management API",
      "Directory API",
      "Webhook integration"
    ]
  }
]

export default function ITAdminPage() {
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
                  Serverless. Secure. Simple to Deploy.
                </h1>
                <p className="text-xl text-cp-slate-300 mb-8">
                  ConnectPath runs on AWS infrastructure you control. CloudFormation deployment, IAM role permissions, and data sovereignty options.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold" asChild>
                    <Link href="/resources/documentation">View Technical Documentation</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technical Highlights */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-cp-navy-900 mb-4">
                Technical Highlights
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-cp-teal-100 flex items-center justify-center mb-4">
                        <highlight.icon className="w-6 h-6 text-cp-teal-700" />
                      </div>
                      <h3 className="text-xl font-semibold text-cp-navy-900 mb-4">{highlight.title}</h3>
                      <ul className="space-y-2">
                        {highlight.points.map((point) => (
                          <li key={point} className="text-sm text-cp-slate-600 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-cp-teal-400 mt-1.5 flex-shrink-0" />
                            {point}
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
        <section className="py-20 bg-cp-navy-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Ready to Deploy?
              </h2>
              <p className="text-xl text-cp-slate-300 mb-8">
                Get started in less than 15 minutes with our CloudFormation template.
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
