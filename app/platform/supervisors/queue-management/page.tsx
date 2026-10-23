import { DEMO_URL } from "@/lib/docs"
import { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Screenshot } from "@/components/screenshot"
import { screenshots, type ScreenshotData } from "@/lib/screenshots"
import { 
  ArrowRight, 
  LayoutGrid,
  GripVertical,
  Star,
  History,
  UserCog,
  Users,
  LayoutDashboard,
  Eye,
  Check
} from "lucide-react"

export const metadata: Metadata = {
  title: "Queue Management",
  description: "Visual queue management with drag-and-drop agent assignment, skills-based matching, and configuration snapshots for instant rollback.",
}

const features = [
  {
    icon: LayoutGrid,
    title: "Visual Queue Overview",
    description: "Single screen showing all queues, associated agents, and routing profiles. Real-time metrics per queue let you filter and observe before taking action.",
    details: [
      "Single screen showing all queues, associated agents, routing profiles",
      "Real-time metrics per queue",
      "Filter and observe before taking action",
      "Queue-level performance at a glance"
    ]
  },
  {
    icon: GripVertical,
    title: "Drag-and-Drop Assignment",
    description: "Select agents and drag to different queues. Copy (creates new routing profile) or Move (updates existing)—no need to navigate Amazon Connect admin console.",
    details: [
      "Select agents and drag to different queues",
      "Copy (creates new routing profile) or Move (updates existing)",
      "No need to navigate Amazon Connect admin console",
      "Instant visual feedback"
    ]
  },
  {
    icon: Star,
    title: "Skills-Based Matching",
    description: "Define skills as arbitrary tags and assign to both agents and queues. 3-star proficiency levels let you filter candidate agents by capability.",
    details: [
      "Define skills as arbitrary tags",
      "Assign skills to both agents and queues",
      "3-star proficiency levels",
      "Skills used as filters for candidate agents"
    ]
  },
  {
    icon: History,
    title: "Configuration Snapshots",
    description: "Save versions of your current configuration and rollback to previous states instantly. View change history within ConnectPath.",
    details: [
      "Save versions of current configuration",
      "Rollback to previous states instantly",
      "View change history within ConnectPath",
      "Audit trail for compliance"
    ]
  },
  {
    icon: UserCog,
    title: "Self-Service Routing Profile",
    description: "Enable agents and supervisors to change their own routing profile. No admin intervention required.",
    details: [
      "Enable agents/supervisors to change their own routing profile",
      "No admin intervention required",
      "Permission-controlled access",
      "Reduces IT tickets"
    ]
  },
]

// Real screenshots for features that have one; the rest keep the icon placeholder.
const featureImages: Record<string, ScreenshotData | undefined> = {
  "Visual Queue Overview": screenshots.queueExpanded,
  "Configuration Snapshots": screenshots.queueSnapshot,
}

export default function QueueManagementPage() {
  return (
    <>
        {/* Hero */}
        <section className="bg-gradient-hero py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cp-teal-50 text-cp-teal-700 text-sm font-medium mb-6">
                  <GripVertical className="size-4" />
                  Drag-and-Drop Control
                </div>
                <h1 className="heading-display text-4xl md:text-5xl text-cp-navy-900 leading-[1.1] mb-6">
                  Rebalance Your Workforce in Seconds
                </h1>
                <p className="text-lg text-cp-slate-600 leading-relaxed mb-8">
                  Visual queue management with drag-and-drop agent assignment, skills-based matching, and configuration snapshots for instant rollback.
                </p>
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold"
                >
                  <Link href={DEMO_URL} target="_blank" rel="noopener noreferrer">
                    See Queue Management Demo
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
              
              {/* Queue preview */}
              <div className="relative space-y-4">
                <Screenshot shot={screenshots.queueList} priority />
                <Screenshot shot={screenshots.queueExpanded} />
              </div>
            </div>
          </div>
        </section>

        {/* Skills Preview */}
        <section className="py-16 lg:py-20 bg-card">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-cp-navy-900 mb-4">
                  Skills-Based Routing Made Visual
                </h2>
                <p className="text-lg text-cp-slate-600 mb-6">
                  Define skills, assign proficiency levels, and match agents to queues based on capabilities—all without touching the admin console.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="px-3 py-1 rounded-full bg-cp-teal-100 text-cp-teal-700 text-sm font-medium">
                      Spanish
                    </div>
                    <div className="flex items-center gap-0.5">
                      <Star className="size-4 text-cp-warning fill-current" />
                      <Star className="size-4 text-cp-warning fill-current" />
                      <Star className="size-4 text-cp-warning fill-current" />
                    </div>
                    <span className="text-sm text-cp-slate-500">Native fluency</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="px-3 py-1 rounded-full bg-cp-cyan-100 text-cp-cyan-700 text-sm font-medium">
                      Technical
                    </div>
                    <div className="flex items-center gap-0.5">
                      <Star className="size-4 text-cp-warning fill-current" />
                      <Star className="size-4 text-cp-warning fill-current" />
                      <Star className="size-4 text-cp-slate-300" />
                    </div>
                    <span className="text-sm text-cp-slate-500">Intermediate</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="px-3 py-1 rounded-full bg-cp-navy-100 text-cp-navy-700 text-sm font-medium">
                      VIP
                    </div>
                    <div className="flex items-center gap-0.5">
                      <Star className="size-4 text-cp-warning fill-current" />
                      <Star className="size-4 text-cp-warning fill-current" />
                      <Star className="size-4 text-cp-warning fill-current" />
                    </div>
                    <span className="text-sm text-cp-slate-500">Certified</span>
                  </div>
                </div>
              </div>
              <Screenshot shot={screenshots.queueSkills} />
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
                { title: "Team Collaboration", href: "/platform/supervisors/team-collaboration", icon: Users },
                { title: "Silent Monitor & Whisper Coach", href: "/platform/supervisors/monitoring-coaching", icon: Eye },
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
              See Queue Management in Action
            </h2>
            <p className="text-cp-slate-300 mb-8">
              Request a demo to see how ConnectPath makes workforce rebalancing effortless.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold"
            >
              <Link href={DEMO_URL} target="_blank" rel="noopener noreferrer">
                Request a Demo
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </section>
    </>
  )
}
