import { DEMO_URL } from "@/lib/docs"
import { Metadata } from "next"
import Link from "next/link"
import { PageLayout } from "@/components/page-layout"
import { Screenshot } from "@/components/screenshot"
import { screenshots } from "@/lib/screenshots"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, 
  Monitor, 
  Users, 
  Headphones, 
  FolderOpen,
  LayoutDashboard,
  MessageSquare,
  FileText,
  BookOpen,
  BarChart3,
  Clock,
  Plug,
  Globe,
  Server,
  Shield,
  Languages,
  Zap,
  Sparkles,
  PhoneOutgoing
} from "lucide-react"

export const metadata: Metadata = {
  title: "Platform Overview",
  description: "One platform. Complete control. Real-time dashboards, instant intervention tools, omnichannel engagement, and operational reporting—everything your contact center needs.",
}

const supervisorFeatures = [
  {
    icon: Monitor,
    title: "Real-Time Monitoring",
    description: "Dashboards updated every 60 seconds with team status, queue metrics, and LiveLook visibility.",
    href: "/platform/supervisors/real-time-monitoring"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Team Status Drawer with one-click chat, call, and status changes.",
    href: "/platform/supervisors/team-collaboration"
  },
  {
    icon: Headphones,
    title: "Silent Monitor & Whisper Coach",
    description: "Live coaching during calls—speak to agents without customers hearing.",
    href: "/platform/supervisors/monitoring-coaching"
  },
  {
    icon: FolderOpen,
    title: "Queue Management",
    description: "Drag-and-drop agent assignment with skills-based matching.",
    href: "/platform/supervisors/queue-management"
  },
]

const agentFeatures = [
  {
    icon: LayoutDashboard,
    title: "Unified Agent Desktop",
    description: "Everything agents need in one interface—no tab switching.",
    href: "/platform/agents/desktop"
  },
  {
    icon: MessageSquare,
    title: "Omnichannel Engagement",
    description: "Voice, chat, email, SMS, WhatsApp, video, and tasks.",
    href: "/platform/agents/omnichannel"
  },
  {
    icon: FileText,
    title: "Activity & History",
    description: "Find any interaction with up to 100K records searchable.",
    href: "/platform/agents/activity"
  },
  {
    icon: BookOpen,
    title: "Directory & Contacts",
    description: "Personal and global directories with click-to-call.",
    href: "/platform/agents/directory"
  },
]

const newReleases = [
  {
    icon: Sparkles,
    title: "SwarmControl",
    description: "Live supervision for AI agents built with Amazon Connect Agentic CX Designer (ACXD): watch, whisper, nudge, override, approve, and intercept.",
    href: "/platform/supervisors/swarmcontrol"
  },
  {
    icon: PhoneOutgoing,
    title: "Proactive Outreach",
    description: "A built-in outbound dialer with an activity audit log and retained call history for outbound campaigns.",
    href: "/platform/outreach"
  },
]

const technicalSpecs = [
  { icon: Clock, label: "60-second metric refresh" },
  { icon: Globe, label: "WebRTC browser support" },
  { icon: FileText, label: "100K activity search records" },
  { icon: Languages, label: "6 languages supported" },
  { icon: Server, label: "Serverless architecture" },
  { icon: Shield, label: "Data sovereignty options" },
]

const architectureFeatures = [
  "Serverless architecture that scales automatically",
  "Available globally (all major AWS regions)",
  "Data sovereignty options for regulated industries",
  "SOC 2, HIPAA-eligible, PCI DSS compliant",
]

export default function PlatformPage() {
return (
  <PageLayout>
        {/* Hero */}
        <section className="bg-gradient-hero py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-cp-navy-900 leading-[1.1] mb-6">
                One Platform. Complete Control.
              </h1>
              <p className="text-lg md:text-xl text-cp-slate-600 leading-relaxed mb-8">
                Real-time dashboards, instant intervention tools, omnichannel engagement, and operational 
                reporting—everything your contact center needs, unified in a single platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold"
                >
                  <Link href="/get-started">
                    Start Free Trial
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="border-cp-navy-200 text-cp-navy-700 hover:bg-cp-navy-50"
                >
                  <Link href={DEMO_URL} target="_blank" rel="noopener noreferrer">Request Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture Overview */}
        <section className="py-16 lg:py-20 bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-cp-navy-900 mb-4">
                  Enterprise-Grade Infrastructure
                </h2>
                <p className="text-cp-slate-600 mb-6">
                  ConnectPath CX runs on AWS infrastructure—serverless, scalable, and secure. Deploy in your own AWS account for complete data control, or let us host it for you.
                </p>
                <ul className="space-y-4">
                  {architectureFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="size-5 rounded-full bg-cp-teal-100 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="size-2 rounded-full bg-cp-teal-500" />
                      </div>
                      <span className="text-cp-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-cp-navy-900 rounded-xl p-6 text-white">
                <div className="text-xs text-cp-slate-400 mb-4 font-mono">Architecture Diagram</div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-cp-navy-800 border border-white/10">
                    <span className="text-sm">ConnectPath</span>
                    <span className="text-xs text-cp-teal-400">Your browser</span>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-px h-6 bg-cp-slate-600" />
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-cp-navy-800 border border-white/10">
                    <span className="text-sm">API Gateway + Lambda</span>
                    <span className="text-xs text-cp-cyan-400">Serverless</span>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-px h-6 bg-cp-slate-600" />
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-cp-navy-800 border border-white/10">
                    <span className="text-sm">Amazon Connect</span>
                    <span className="text-xs text-cp-warning">AWS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* For Supervisors */}
        <section className="py-16 lg:py-20 bg-cp-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-cp-navy-900 mb-4">
                For Supervisors
              </h2>
              <p className="text-cp-slate-600 max-w-2xl mx-auto">
                Complete visibility and control over your contact center operations.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {supervisorFeatures.map((feature) => (
                <Link 
                  key={feature.title}
                  href={feature.href}
                  className="group bg-card rounded-xl border border-border p-6 hover:border-cp-teal-300 hover:shadow-lg transition-brand"
                >
                  <div className="size-12 rounded-xl bg-cp-teal-50 flex items-center justify-center mb-4 group-hover:bg-cp-teal-100 transition-brand">
                    <feature.icon className="size-6 text-cp-teal-500" />
                  </div>
                  <h3 className="font-semibold text-cp-navy-900 mb-2 group-hover:text-cp-teal-700 transition-fast">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-cp-slate-600 mb-4">
                    {feature.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-cp-teal-500 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="size-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* For Agents */}
        <section className="py-16 lg:py-20 bg-card">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-cp-navy-900 mb-4">
                For Agents
              </h2>
              <p className="text-cp-slate-600 max-w-2xl mx-auto">
                A unified desktop experience that makes agents more productive.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {agentFeatures.map((feature) => (
                <Link 
                  key={feature.title}
                  href={feature.href}
                  className="group bg-cp-slate-50 rounded-xl border border-cp-slate-100 p-6 hover:border-cp-navy-200 hover:shadow-lg transition-brand"
                >
                  <div className="size-12 rounded-xl bg-cp-navy-50 flex items-center justify-center mb-4 group-hover:bg-cp-navy-100 transition-brand">
                    <feature.icon className="size-6 text-cp-navy-600" />
                  </div>
                  <h3 className="font-semibold text-cp-navy-900 mb-2 group-hover:text-cp-navy-700 transition-fast">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-cp-slate-600 mb-4">
                    {feature.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-cp-navy-600 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="size-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* New releases */}
        <section className="py-16 lg:py-20 bg-cp-navy-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="cp-eyebrow !text-cp-teal-400 mb-2">New</p>
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                Recently Released
              </h2>
              <p className="text-cp-slate-300 max-w-2xl mx-auto">
                The newest additions to ConnectPath.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {newReleases.map((release) => (
                <Link
                  key={release.title}
                  href={release.href}
                  className="group rounded-xl bg-cp-navy-800 border border-white/10 p-6 hover:border-cp-teal-400/50 transition-brand"
                >
                  <div className="size-12 rounded-xl bg-cp-teal-400/10 flex items-center justify-center mb-4">
                    <release.icon className="size-6 text-cp-teal-400" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{release.title}</h3>
                  <p className="text-sm text-cp-slate-300 mb-4">{release.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-cp-teal-400 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="size-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Reporting & Analytics Preview */}
        <section className="py-16 lg:py-20 bg-cp-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cp-cyan-50 text-cp-cyan-600 text-sm font-medium mb-4">
                  <BarChart3 className="size-4" />
                  Reporting & Analytics
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold text-cp-navy-900 mb-4">
                  Dashboards, Wallboards & Historical Reports
                </h2>
                <p className="text-cp-slate-600 mb-6">
                  One-click wallboard mode for floor displays, historical reports with no time restrictions, 
                  and custom report builder with data lake integration.
                </p>
                <Button asChild variant="outline" className="border-cp-navy-200 text-cp-navy-700 hover:bg-cp-navy-50">
                  <Link href="/platform/reporting/dashboards">
                    Explore Reporting
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
              <div className="space-y-4">
                <Screenshot shot={screenshots.slaGlance} />
                <Screenshot shot={screenshots.reportCharts} />
              </div>
            </div>
          </div>
        </section>

        {/* Integrations Preview */}
        <section className="py-16 lg:py-20 bg-card">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 grid grid-cols-3 gap-4">
                {[
                  { name: "Salesforce", color: "bg-cp-cyan-50 text-cp-cyan-700" },
                  { name: "Dynamics", color: "bg-cp-navy-50 text-cp-navy-700" },
                  { name: "Zendesk", color: "bg-cp-teal-50 text-cp-teal-700" },
                  { name: "Teams", color: "bg-cp-cyan-50 text-cp-cyan-700" },
                  { name: "Jabra", color: "bg-cp-navy-50 text-cp-navy-700" },
                  { name: "APIs", color: "bg-cp-slate-100 text-cp-slate-600" },
                ].map((integration) => (
                  <div 
                    key={integration.name}
                    className={`${integration.color} rounded-xl p-4 text-center font-medium text-sm`}
                  >
                    {integration.name}
                  </div>
                ))}
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cp-navy-50 text-cp-navy-600 text-sm font-medium mb-4">
                  <Plug className="size-4" />
                  Integrations
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold text-cp-navy-900 mb-4">
                  Connect to What You Already Use
                </h2>
                <p className="text-cp-slate-600 mb-6">
                  Pre-built integrations with Salesforce, Microsoft Dynamics, Zendesk, Microsoft Teams, 
                  and Jabra headsets—plus APIs and webhooks for custom connections.
                </p>
                <Button asChild variant="outline" className="border-cp-navy-200 text-cp-navy-700 hover:bg-cp-navy-50">
                  <Link href="/platform/integrations">
                    Explore Integrations
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16 lg:py-20 bg-cp-navy-900 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                Technical Specifications
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {technicalSpecs.map((spec) => (
                <div key={spec.label} className="text-center">
                  <div className="size-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-3">
                    <spec.icon className="size-6 text-cp-teal-400" />
                  </div>
                  <p className="text-sm text-cp-slate-300">{spec.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-cp-slate-50">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-cp-navy-900 mb-4">
              See ConnectPath in Action
            </h2>
            <p className="text-cp-slate-600 mb-8">
              Ready to see how ConnectPath can transform your contact center operations? 
              Request a personalized demo from our team.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold"
            >
              <Link href={DEMO_URL} target="_blank" rel="noopener noreferrer">
                Request Demo
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </section>
    </PageLayout>
  )
}
