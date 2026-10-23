"use client"

import { CONTACT_URL } from "@/lib/docs"
import { motion } from "framer-motion"
import Link from "next/link"
import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Plane, Heart, Shield, Code, ArrowRight } from "lucide-react"
import { caseStudies } from "@/lib/case-studies"

const industryIcons = {
  "Travel & Hospitality": Plane,
  "Financial Services": Shield,
  Government: Building2,
  "Healthcare / Technology": Heart,
  Technology: Code,
} as const

function SuccessStoriesContent() {
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
                Customer Success Stories
              </h1>
              <p className="text-xl text-cp-slate-300 mb-8">
                See how organizations across industries are using ConnectPath to transform their contact center operations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={`/resources/success-stories/${study.slug}`}
                  className="block h-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cp-teal-400"
                >
                  <Card className="h-full hover:shadow-lg transition-shadow group">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-cp-teal-100 flex items-center justify-center">
                          {(() => {
                            const Icon = industryIcons[study.industry as keyof typeof industryIcons] ?? Building2
                            return <Icon className="w-5 h-5 text-cp-teal-700" />
                          })()}
                        </div>
                        <span className="text-sm text-cp-slate-500">{study.industry}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-cp-navy-900 mb-2">{study.company}</h3>
                      <p className="text-cp-teal-700 font-medium mb-3">{study.title}</p>
                      <p className="text-cp-slate-600 text-sm mb-4">{study.summary}</p>
                      <span className="inline-flex items-center gap-1 text-cp-teal-700 text-sm font-medium group-hover:gap-2 transition-all">
                        Read Case Study <ArrowRight className="w-4 h-4" />
                      </span>
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
              Want to Share Your Story?
            </h2>
            <p className="text-xl text-cp-slate-300 mb-8">
              We&apos;d love to hear about your success with ConnectPath.
            </p>
            <Button size="lg" className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold" asChild>
              <Link href={CONTACT_URL} target="_blank" rel="noopener noreferrer">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default function SuccessStoriesPage() {
  return <SuccessStoriesContent />
}
