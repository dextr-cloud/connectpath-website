"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { docsUrl, DOCS_BASE_URL } from "@/lib/docs"
import { 
  BookOpen, 
  Home, 
  Headphones, 
  Search, 
  Users, 
  BarChart3, 
  Settings,
  Plug,
  HelpCircle,
  ExternalLink,
  Sparkles,
  Megaphone
} from "lucide-react"

const categories = [
  { icon: BookOpen, title: "Getting Started", path: "/onboarding/", items: ["Onboarding Guide", "First Login", "Enabling Notifications"] },
  { icon: Home, title: "Dashboard & Home", path: "/home/", items: ["Real-time Metrics", "Wallboard Mode", "LiveLook"] },
  { icon: Headphones, title: "Engage (Agent Desktop)", path: "/engage/", items: ["Voice Controls", "Chat & Email", "Omnichannel"] },
  { icon: Search, title: "Activity Search", path: "/activity/", items: ["Search Queries", "Contact Details", "Export Options"] },
  { icon: Users, title: "Directory", path: "/directory/", items: ["Personal Contacts", "Global Directory", "API Integration"] },
  { icon: BarChart3, title: "Queue Management", path: "/queue-management/", items: ["Drag & Drop", "Skills Matching", "Snapshots"] },
  { icon: BarChart3, title: "Historical Reports", path: "/historicalReports/", items: ["Pre-Built Reports", "Scheduling", "Export Formats"] },
  { icon: Sparkles, title: "SwarmControl", path: "/swarmcontrol/", items: ["Supervisor Actions", "Demo and Live Modes", "ACXD Setup Guide"] },
  { icon: Settings, title: "Settings & Configuration", path: "/settings/", items: ["Permissions", "User Management", "Instance Settings"] },
  { icon: Plug, title: "Integrations", path: "/CRM-Integration/", items: ["CRM Setup", "Teams Integration", "APIs & Webhooks"] },
  { icon: Megaphone, title: "Release Notes", path: "/release-notes/", items: ["What's New", "Improvements", "Fixes"] },
  { icon: HelpCircle, title: "FAQs", path: "/faq/", items: ["Common Questions", "Troubleshooting", "Best Practices"] }
]

export default function DocumentationPage() {
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
                  ConnectPath Documentation
                </h1>
                <p className="text-xl text-cp-slate-300 mb-8">
                  User guides, admin guides, and technical documentation to help you get the most from ConnectPath.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={docsUrl(category.path)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block h-full rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                  <Card className="h-full group-hover:shadow-lg group-hover:border-cp-teal-300 transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-10 h-10 rounded-lg bg-cp-teal-100 flex items-center justify-center mb-4">
                        <category.icon className="w-5 h-5 text-cp-teal-700" />
                      </div>
                      <h3 className="text-lg font-semibold text-cp-navy-900 mb-3">{category.title}</h3>
                      <ul className="space-y-2">
                        {category.items.map((item) => (
                          <li key={item} className="text-sm text-cp-slate-600 flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-cp-slate-400" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-cp-teal-700 group-hover:text-cp-navy-900 transition-fast">
                        Read in the docs
                        <ExternalLink className="w-3.5 h-3.5" />
                      </span>
                    </CardContent>
                  </Card>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* External Docs Link */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6">
            <Card className="border-cp-teal-200 bg-cp-teal-50/50">
              <CardContent className="p-8 text-center">
                <p className="text-cp-slate-700 mb-4">
                  Full documentation is available in our dedicated documentation portal.
                </p>
                <Button className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold" asChild>
                  <a href={DOCS_BASE_URL} target="_blank" rel="noopener noreferrer">
                    Open Documentation Portal
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-cp-navy-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                {"Can't Find What You Need?"}
              </h2>
              <p className="text-xl text-cp-slate-300 mb-8">
                Our support team is here to help.
              </p>
              <Button size="lg" className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold" asChild>
                <Link href="/resources/support">Contact Support</Link>
              </Button>
            </div>
          </div>
        </section>
    </PageLayout>
  )
}
