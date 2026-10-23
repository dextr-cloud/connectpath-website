"use client"

import { CONTACT_URL, MARKETPLACE_URL } from "@/lib/docs"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ExternalLink, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-cp-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-cp-navy-900 leading-tight mb-6">
            Up and Running in 15 Minutes
          </h2>
          <p className="text-lg text-cp-slate-600 leading-relaxed">
            No servers to provision. No software to install. No IT project that takes months. 
            ConnectPath deploys in minutes, and your supervisors can be monitoring the floor the same day. 
            Start with a 14-day free trial. No credit card required.
          </p>
        </motion.div>
        
        {/* Two-column CTA */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* AWS Marketplace */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-full bg-card rounded-xl border-2 border-cp-teal-400 p-8 text-center shadow-lg shadow-cp-teal-400/10">
              <div className="size-12 rounded-xl bg-cp-teal-50 flex items-center justify-center mx-auto mb-6">
                <ExternalLink className="size-6 text-cp-teal-500" />
              </div>
              <h3 className="text-xl font-semibold text-cp-navy-900 mb-3">
                Start Your Free Trial
              </h3>
              <p className="text-cp-slate-600 mb-6">
                14 days free. Full access. No commitment.
              </p>
              <Button 
                asChild 
                size="lg" 
                className="w-full bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold"
              >
                <Link href={MARKETPLACE_URL} target="_blank" rel="noopener noreferrer">
                  Get Started on AWS Marketplace
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
          
          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="h-full bg-card rounded-xl border border-border p-8 text-center">
              <div className="size-12 rounded-xl bg-cp-navy-50 flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="size-6 text-cp-navy-600" />
              </div>
              <h3 className="text-xl font-semibold text-cp-navy-900 mb-3">
                Talk to Our Team
              </h3>
              <p className="text-cp-slate-600 mb-6">
                Have questions? Want a personalized demo? We&apos;re here to help.
              </p>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="w-full border-cp-navy-200 text-cp-navy-700 hover:bg-cp-navy-50"
              >
                <Link href={CONTACT_URL} target="_blank" rel="noopener noreferrer">
                  Contact Us
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
