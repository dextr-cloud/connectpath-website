"use client"

import { motion } from "framer-motion"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Headphones, Phone, Volume2, RefreshCw } from "lucide-react"

const supportedModels = [
  "Jabra Engage 50",
  "Jabra Engage 65",
  "Jabra Engage 75",
  "Jabra Biz series",
  "Jabra Pro series"
]

const features = [
  { icon: Phone, title: "Answer/End Calls", description: "Control calls directly from your headset" },
  { icon: Volume2, title: "Mute/Unmute", description: "Toggle mute without touching the screen" },
  { icon: RefreshCw, title: "State Synchronization", description: "Headset state syncs with ConnectPath" }
]

export default function HeadsetsPage() {
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
                  href="/platform/integrations"
                  className="inline-flex items-center gap-2 text-cp-teal-400 hover:text-cp-teal-300 mb-6"
                >
                  <ChevronRight className="w-4 h-4 rotate-180" />
                  Back to Integrations
                </Link>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                  Jabra Headset Integration. Built In.
                </h1>
                <p className="text-xl text-cp-slate-300 mb-8">
                  Call control and state management directly from your Jabra headset—answer, hang up, mute, and more without touching the screen.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold" asChild>
                    <Link href="/get-started">Start Free Trial</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Supported Models */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-serif font-bold text-cp-navy-900 mb-6">Supported Models</h2>
                <Card>
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      {supportedModels.map((model) => (
                        <li key={model} className="flex items-center gap-3">
                          <Headphones className="w-5 h-5 text-cp-teal-400" />
                          <span className="text-cp-slate-700">{model}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h2 className="text-3xl font-serif font-bold text-cp-navy-900 mb-6">Features</h2>
                <div className="space-y-4">
                  {features.map((feature) => (
                    <Card key={feature.title}>
                      <CardContent className="p-4 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-cp-teal-100 flex items-center justify-center">
                          <feature.icon className="w-5 h-5 text-cp-teal-700" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-cp-navy-900">{feature.title}</h3>
                          <p className="text-sm text-cp-slate-600">{feature.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-cp-navy-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Ready to Go Hands-Free?
              </h2>
              <p className="text-xl text-cp-slate-300 mb-8">
                Headset integration that works out of the box.
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
