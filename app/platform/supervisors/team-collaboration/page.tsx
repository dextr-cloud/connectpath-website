import { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Screenshot } from "@/components/screenshot"
import { screenshots, type ScreenshotData } from "@/lib/screenshots"
import { 
  ArrowRight, 
  Users,
  MessageSquare,
  Bell,
  UserCog,
  Eye,
  LayoutDashboard,
  TrendingUp,
  Check,
  AlertTriangle,
  Info
} from "lucide-react"

export const metadata: Metadata = {
  title: "Team Collaboration",
  description: "The Team Status Drawer keeps your entire team visible with one-click access to chat, call, or change their status.",
}

const features = [
  {
    icon: Users,
    title: "Team Status Drawer",
    description: "Persistent visibility across all ConnectPath screens. Shows all agents with current status and duration, with favorites and search for quick access.",
    details: [
      "Persistent visibility across all ConnectPath screens",
      "Shows all agents with current status and duration",
      "Mark agents as favorites for quick access",
      "Search by name",
      "Toggle to hide offline agents"
    ]
  },
  {
    icon: MessageSquare,
    title: "Agent-to-Agent Communication",
    description: "One-click chat and calling between agents—no third-party tools required. Microsoft Teams integration for Teams users in the drawer.",
    details: [
      "One-click chat between agents (no third-party required)",
      "Peer-to-peer calling with metrics tracking",
      "Microsoft Teams integration for Teams users in drawer",
      "Full conversation history"
    ]
  },
  {
    icon: Bell,
    title: "Announcements",
    description: "Multiple delivery methods to reach your team instantly. Screen pop, marquee scroller, or during-call display with urgency levels.",
    details: [
      "Screen pop: Dialogue box delivery",
      "Marquee scroller: Persistent scrolling message",
      "During-call display: Show in Contact Details",
      "Urgency levels: Info (blue) or Emergency (red)",
      "Target specific queues"
    ]
  },
  {
    icon: UserCog,
    title: "Remote Status Management",
    description: "Supervisors can change agent status remotely. Useful for break management and emergency situations.",
    details: [
      "Supervisors can change agent status remotely",
      "Useful for break management",
      "Handle emergency situations quickly",
      "No agent intervention required"
    ]
  },
]

const teamMembers = [
  { name: "Sarah Chen", status: "Available", duration: "12m", avatar: "SC" },
  { name: "Marcus Johnson", status: "On Call", duration: "4m", avatar: "MJ" },
  { name: "Emily Rodriguez", status: "ACW", duration: "2m", avatar: "ER" },
  { name: "David Kim", status: "Available", duration: "8m", avatar: "DK" },
  { name: "Lisa Thompson", status: "Break", duration: "15m", avatar: "LT" },
]

const statusColors: Record<string, string> = {
  "Available": "bg-cp-success",
  "On Call": "bg-cp-teal-400",
  "ACW": "bg-cp-warning",
  "Break": "bg-cp-slate-400",
}

// Real screenshots for features that have one; the rest keep the icon placeholder.
const featureImages: Record<string, ScreenshotData | undefined> = {
  "Team Status Drawer": screenshots.teamStatusDrawer,
  "Agent-to-Agent Communication": screenshots.agentChat,
  "Remote Status Management": screenshots.changeStatus,
}

export default function TeamCollaborationPage() {
  return (
    <>
        {/* Hero */}
        <section className="bg-gradient-hero py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cp-teal-50 text-cp-teal-700 text-sm font-medium mb-6">
                  <Users className="size-4" />
                  Team Status Drawer
                </div>
                <h1 className="heading-display text-4xl md:text-5xl text-cp-navy-900 leading-[1.1] mb-6">
                  Know Where Every Agent Is—And Reach Them Instantly
                </h1>
                <p className="text-lg text-cp-slate-600 leading-relaxed mb-8">
                  The Team Status Drawer keeps your entire team visible with one-click access to chat, call, or change their status.
                </p>
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold"
                >
                  <Link href="/get-started">
                    See Team Collaboration in Action
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
              
              {/* Team Status preview */}
              <div className="relative">
                <Screenshot shot={screenshots.teamStatusDrawer} priority />
              </div>
            </div>
          </div>
        </section>

        {/* Announcement Types */}
        <section className="py-16 lg:py-20 bg-card">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-cp-navy-900 mb-4">
                Reach Your Team Instantly
              </h2>
              <p className="text-cp-slate-600 max-w-2xl mx-auto">
                Multiple announcement types ensure your message gets through—whether it&apos;s routine information or an emergency.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-cp-slate-50 rounded-xl p-6 border border-cp-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-10 rounded-lg bg-cp-info/10 flex items-center justify-center">
                    <Info className="size-5 text-cp-info" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-cp-navy-900">Info Announcement</h3>
                    <p className="text-sm text-cp-slate-500">Routine updates and reminders</p>
                  </div>
                </div>
                <div className="bg-card rounded-lg border border-cp-info/30 p-4">
                  <div className="flex items-start gap-3">
                    <Info className="size-5 text-cp-info shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-cp-navy-900 text-sm">Team Meeting at 3pm</div>
                      <div className="text-xs text-cp-slate-500 mt-1">All hands meeting in Conference Room A</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-cp-slate-50 rounded-xl p-6 border border-cp-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-10 rounded-lg bg-cp-danger/10 flex items-center justify-center">
                    <AlertTriangle className="size-5 text-cp-danger" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-cp-navy-900">Emergency Announcement</h3>
                    <p className="text-sm text-cp-slate-500">Critical alerts requiring immediate attention</p>
                  </div>
                </div>
                <div className="bg-card rounded-lg border border-cp-danger/30 p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="size-5 text-cp-danger shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-cp-navy-900 text-sm">System Maintenance in 5 Minutes</div>
                      <div className="text-xs text-cp-slate-500 mt-1">Please wrap up current calls. Brief outage expected.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 lg:py-28 bg-cp-slate-50">
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
                  <div className={`bg-card rounded-xl p-8 border border-cp-slate-200 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
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
        <section className="py-16 lg:py-20 bg-card">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-semibold text-cp-navy-900 mb-8 text-center">
              Related Supervisor Tools
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { title: "Real-Time Monitoring", href: "/platform/supervisors/real-time-monitoring", icon: LayoutDashboard },
                { title: "Silent Monitor & Whisper Coach", href: "/platform/supervisors/monitoring-coaching", icon: Eye },
                { title: "Queue Management", href: "/platform/supervisors/queue-management", icon: TrendingUp },
              ].map((item) => (
                <Link 
                  key={item.title}
                  href={item.href}
                  className="group bg-cp-slate-50 rounded-xl border border-cp-slate-100 p-6 hover:border-cp-teal-300 hover:shadow-md transition-brand"
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
              Deploy ConnectPath in less than 15 minutes and connect your team instantly.
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
