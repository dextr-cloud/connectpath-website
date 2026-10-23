import { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Screenshot } from "@/components/screenshot"
import { screenshots, type ScreenshotData } from "@/lib/screenshots"
import { 
  ArrowRight, 
  LayoutDashboard, 
  Eye,
  Tv,
  Target,
  Clock,
  Users,
  TrendingUp,
  AlertCircle,
  Check
} from "lucide-react"

export const metadata: Metadata = {
  title: "Real-Time Monitoring",
  description: "Dashboards that update every 60 seconds. Complete visibility into queues, agents, and contacts—all in one view.",
}

const features = [
  {
    icon: LayoutDashboard,
    title: "Home Dashboard",
    description: "At-a-glance widgets with occupancy, abandoned %, service level, and average abandon time. Agent availability chart by status and contacts time series throughout the day.",
    details: [
      "At-a-glance widgets: Occupancy, Abandoned %, Service Level, Avg Abandon Time",
      "Agent availability chart by status (Available, Busy, ACW, Released)",
      "Contacts time series throughout the day",
      "Agent and Queue performance tables with customizable columns"
    ]
  },
  {
    icon: Eye,
    title: "LiveLook",
    description: "See individual contacts waiting in queue—not just aggregate counts. Caller ID, time waiting, queue name, and custom contact attributes from flows.",
    details: [
      "See individual contacts waiting in queue (not just aggregate counts)",
      "Caller ID, time waiting, queue name",
      "Custom contact attributes from flows",
      "Click to view contact details"
    ]
  },
  {
    icon: Tv,
    title: "Wallboard Mode",
    description: "One-click fullscreen display designed for floor monitors and TV displays. No additional configuration required.",
    details: [
      "One-click fullscreen display",
      "Designed for floor monitors and TV displays",
      "Auto-refresh without user interaction",
      "No additional configuration required"
    ]
  },
  {
    icon: Target,
    title: "Custom SLA Targets",
    description: "Configure up to 10 SLA targets with visual indicators when SLAs are at risk. Service level tracking by queue.",
    details: [
      "Up to 10 configurable SLA targets",
      "Visual indicators when SLAs are at risk",
      "Service level tracking by queue",
      "Real-time threshold alerts"
    ]
  },
]

const metrics = [
  { label: "Occupancy", value: "78%", trend: "+3%" },
  { label: "Service Level", value: "94%", trend: "+2%" },
  { label: "Abandoned", value: "2.1%", trend: "-0.5%" },
  { label: "Avg Wait", value: "0:42", trend: "-12s" },
]

// Real screenshots for features that have one; the rest keep the icon placeholder.
const featureImages: Record<string, ScreenshotData | undefined> = {
  "Home Dashboard": screenshots.slaGlance,
  "LiveLook": screenshots.liveLook,
}

export default function RealTimeMonitoringPage() {
  return (
    <>
        {/* Hero */}
        <section className="bg-gradient-hero py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cp-teal-50 text-cp-teal-700 text-sm font-medium mb-6">
                  <Clock className="size-4" />
                  Updates every 60 seconds
                </div>
                <h1 className="heading-display text-4xl md:text-5xl text-cp-navy-900 leading-[1.1] mb-6">
                  Every Metric. Every Agent. Every Contact. Right Now.
                </h1>
                <p className="text-lg text-cp-slate-600 leading-relaxed mb-8">
                  Dashboards that update every 60 seconds. Complete visibility into queues, agents, and contacts—all in one view.
                </p>
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold"
                >
                  <Link href="/get-started">
                    Start Your Free Trial
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
              
              {/* Dashboard preview */}
              <div className="relative">
                <Screenshot shot={screenshots.dashboardHome} priority />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 lg:py-28 bg-card">
          <div className="max-w-7xl mx-auto px-6">
            <div className="space-y-16">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="size-14 rounded-xl bg-cp-teal-50 flex items-center justify-center mb-6">
                      <feature.icon className="size-7 text-cp-teal-500" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-semibold text-cp-navy-900 mb-4">
                      {feature.title}
                    </h2>
                    <p className="text-lg text-cp-slate-600 mb-6">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-3">
                          <div className="size-5 rounded-full bg-cp-teal-100 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="size-3 text-cp-teal-700" />
                          </div>
                          <span className="text-cp-slate-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`bg-cp-slate-50 rounded-xl p-8 border border-cp-slate-100 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    {/* Feature illustration placeholder */}
                    {featureImages[feature.title] ? (
                      <Screenshot shot={featureImages[feature.title]!} className="shadow-sm" />
                    ) : (
                      <div className="aspect-video bg-cp-slate-100 rounded-lg flex items-center justify-center">
                        <feature.icon className="size-16 text-cp-slate-300" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Features */}
        <section className="py-16 lg:py-20 bg-cp-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-semibold text-cp-navy-900 mb-8 text-center">
              Related Supervisor Tools
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { title: "Team Collaboration", href: "/platform/supervisors/team-collaboration", icon: Users },
                { title: "Silent Monitor & Whisper Coach", href: "/platform/supervisors/monitoring-coaching", icon: AlertCircle },
                { title: "Queue Management", href: "/platform/supervisors/queue-management", icon: TrendingUp },
              ].map((item) => (
                <Link 
                  key={item.title}
                  href={item.href}
                  className="group bg-card rounded-xl border border-border p-6 hover:border-cp-teal-300 hover:shadow-md transition-brand"
                >
                  <item.icon className="size-8 text-cp-teal-500 mb-4" />
                  <h3 className="font-semibold text-cp-navy-900 group-hover:text-cp-teal-700 transition-fast">
                    {item.title}
                  </h3>
                  <ArrowRight className="size-4 text-cp-slate-400 mt-2 group-hover:text-cp-teal-500 group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-cp-navy-900 text-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Start Your Free Trial
            </h2>
            <p className="text-cp-slate-300 mb-8">
              Deploy ConnectPath in less than 15 minutes and give your supervisors real-time visibility today.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold"
            >
              <Link href="/get-started">
                Get Started
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </section>
    </>
  )
}
