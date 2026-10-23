"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Check, X, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

const comparisonItems = [
  {
    feature: "Global telephony in 158 countries",
    howItWorks: "AWS carrier network",
  },
  {
    feature: "Elastic scaling for peak seasons",
    howItWorks: "Serverless architecture",
  },
  {
    feature: "AI-powered transcription & sentiment",
    howItWorks: "Contact Lens built in",
  },
  {
    feature: "99.99% availability",
    howItWorks: "AWS global infrastructure",
  },
  {
    feature: "HIPAA, PCI, SOC 2, FedRAMP eligible",
    howItWorks: "AWS compliance inheritance",
  },
]

export function ComparisonSection() {
  return (
    <section className="py-20 lg:py-28 bg-cp-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-cp-navy-900 leading-tight mb-6">
            Enterprise Infrastructure. Zero Infrastructure Headaches.
          </h2>
          <p className="text-lg text-cp-slate-600 leading-relaxed">
            ConnectPath runs on AWS—the same cloud infrastructure behind Amazon&apos;s own customer service. 
            You get global reliability, elastic scaling, and native AI capabilities without owning servers, 
            negotiating telecom contracts, or managing upgrades. We handle the contact center. AWS handles 
            the infrastructure. You focus on your customers.
          </p>
        </motion.div>
        
        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm">
            {/* Header */}
            <div className="grid grid-cols-2 bg-cp-navy-900 text-white">
              <div className="p-4 font-medium text-sm">What You Get</div>
              <div className="p-4 font-medium text-sm text-cp-teal-400 border-l border-white/10">How It Works</div>
            </div>
            
            {/* Rows */}
            {comparisonItems.map((item, index) => (
              <div 
                key={item.feature}
                className={`grid grid-cols-2 ${index !== comparisonItems.length - 1 ? 'border-b border-border' : ''}`}
              >
                <div className="p-4 text-sm text-cp-navy-900 font-medium flex items-center">
                  <Check className="size-4 text-cp-success mr-3 shrink-0" />
                  {item.feature}
                </div>
                <div className="p-4 text-sm text-cp-slate-600 border-l border-border flex items-center">
                  {item.howItWorks}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Partnership badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-card border border-border">
            <Award className="size-5 text-cp-warning" />
            <span className="text-sm font-medium text-cp-navy-900">AWS Premier Consulting Partner</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-card border border-border">
            <Award className="size-5 text-cp-teal-500" />
            <span className="text-sm font-medium text-cp-navy-900">Powered by AWS</span>
          </div>
        </motion.div>
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Button asChild variant="outline" className="border-cp-navy-200 text-cp-navy-700 hover:bg-cp-navy-50">
            <Link href="/compare/amazon-connect">
              Compare to Native Connect
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default ComparisonSection
