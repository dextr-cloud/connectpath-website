"use client"

import { CONTACT_URL } from "@/lib/docs"
import { motion } from "framer-motion"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Wrench, 
  Database, 
  BarChart3, 
  Plug,
  ChevronRight,
  AlertCircle
} from "lucide-react"

const features = [
  {
    icon: Wrench,
    title: "Custom Report Builder",
    description: "Create your own reports in ConnectPath. No SQL or development required."
  },
  {
    icon: Database,
    title: "Data Lake Integration",
    description: "Deploys data collector in your AWS account. 15-minute data refresh. Auto-deployed views for BI tools."
  },
  {
    icon: BarChart3,
    title: "QuickSight Dashboards",
    description: "Pre-built dashboards auto-deployed. PDF export capability. Read-only user or capacity-based pricing."
  },
  {
    icon: Plug,
    title: "Bring Your Own BI",
    description: "Separate views deployment for non-QuickSight tools. Works with Tableau, Power BI, and more."
  }
]

export default function CustomReportsPage() {
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
                <Link 
                  href="/platform"
                  className="inline-flex items-center gap-2 text-cp-teal-400 hover:text-cp-teal-300 mb-6"
                >
                  <ChevronRight className="w-4 h-4 rotate-180" />
                  Back to Platform Overview
                </Link>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                  Build Your Own Reports. Own Your Data.
                </h1>
                <p className="text-xl text-cp-slate-300 mb-8">
                  Custom report builder with data lake integration, QuickSight dashboards, and 15-minute data refresh.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold" asChild>
                    <Link href={CONTACT_URL} target="_blank" rel="noopener noreferrer">Learn About Data Lake Options</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-8">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cp-teal-400 to-cp-cyan-500 flex items-center justify-center mb-6">
                        <feature.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-semibold text-navy-900 mb-4">{feature.title}</h3>
                      <p className="text-cp-slate-600 leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Availability Note */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6">
            <Card className="border-cp-warning/40 bg-cp-warning/10">
              <CardContent className="p-6 flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-cp-warning flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-cp-navy-900 mb-1">Availability Note</h3>
                  <p className="text-cp-slate-700">
                    Requires Integrations deployment. Contact us for setup assistance.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-navy-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Your Data, Your Way
              </h2>
              <p className="text-xl text-cp-slate-300 mb-8">
                Custom reporting that integrates with your existing BI tools.
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
