"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Building2, Plane, Stethoscope } from "lucide-react"
import { Button } from "@/components/ui/button"

const caseStudies = [
  {
    icon: Building2,
    industry: "Government",
    slug: "city-of-atlanta-atl311",
    customer: "City of Atlanta (ATL311)",
    highlight: "Large municipality deploys ConnectPath for citizen services",
    color: "cp-navy-600",
    bgColor: "bg-cp-navy-50"
  },
  {
    icon: Plane,
    industry: "Travel & Hospitality",
    slug: "ace-rent-a-car",
    customer: "ACE Rent a Car",
    highlight: "Customer experience transformation with ConnectPath",
    color: "cp-cyan-500",
    bgColor: "bg-cp-cyan-50"
  },
  {
    icon: Stethoscope,
    industry: "Healthcare",
    slug: "morris-global-group",
    customer: "Morris Global Group",
    highlight: "Empowering intelligent remote agents in healthcare technology",
    color: "cp-teal-500",
    bgColor: "bg-cp-teal-50"
  }
]

export function CaseStudiesSection() {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-cp-navy-900 leading-tight mb-6">
            Powering Contact Centers Across Industries
          </h2>
        </motion.div>
        
        {/* Case study cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.customer}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link 
                href={`/resources/success-stories/${study.slug}`}
                className="block h-full bg-cp-slate-50 rounded-xl border border-cp-slate-100 p-6 hover:border-cp-slate-200 hover:shadow-md transition-brand group"
              >
                {/* Industry badge */}
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${study.bgColor} mb-4`}>
                  <study.icon className="size-4" style={{ color: `var(--${study.color})` }} />
                  <span className="text-xs font-semibold" style={{ color: `var(--${study.color})` }}>
                    {study.industry}
                  </span>
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-semibold text-cp-navy-900 mb-2 group-hover:text-cp-teal-500 transition-fast">
                  {study.customer}
                </h3>
                <p className="text-cp-slate-600 mb-4">
                  {study.highlight}
                </p>
                
                {/* Link */}
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-cp-teal-500 group-hover:gap-3 transition-all">
                  Read Case Study
                  <ArrowRight className="size-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button asChild variant="outline" className="border-cp-navy-200 text-cp-navy-700 hover:bg-cp-navy-50">
            <Link href="/resources/success-stories">
              See All Success Stories
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default CaseStudiesSection
