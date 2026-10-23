import { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Screenshot } from "@/components/screenshot"
import { screenshots, type ScreenshotData } from "@/lib/screenshots"
import { 
  ArrowRight, 
  Monitor,
  MessageSquare,
  Phone,
  Mail,
  Video,
  Smartphone,
  BookOpen,
  Moon,
  Zap,
  Globe,
  Check
} from "lucide-react"

export const metadata: Metadata = {
  title: "Unified Agent Desktop",
  description: "Voice, chat, email, SMS, tasks, metrics, team status, directory—all unified in a single browser tab.",
}

const channels = [
  { icon: Phone, label: "Voice", description: "Inbound, outbound, callbacks" },
  { icon: MessageSquare, label: "Chat", description: "Web chat, WhatsApp" },
  { icon: Mail, label: "Email", description: "Threading, reply-all, multi-domain" },
  { icon: Smartphone, label: "SMS/MMS", description: "Pinpoint integration" },
  { icon: Video, label: "Video", description: "Screen sharing included" },
  { icon: BookOpen, label: "Tasks", description: "Amazon Connect Tasks" },
]

const features = [
  {
    icon: Monitor,
    title: "Unified Interface",
    description: "No tab-switching between CCP, admin console, and CRM. Customizable layout with drag-and-drop widgets and dark mode for reduced eye strain.",
    details: [
      "No tab-switching between CCP, admin console, CRM",
      "Customizable layout with drag-and-drop widgets",
      "Dark mode for reduced eye strain",
      "Persistent across sessions"
    ]
  },
  {
    icon: Globe,
    title: "Omnichannel Ready",
    description: "Handle voice, chat, email, SMS, and video from a single interface. Tasks from Amazon Connect Tasks integrated seamlessly.",
    details: [
      "Voice with dialpad and transfer options",
      "Chat with real-time translation",
      "Email with threading and attachments",
      "SMS/MMS with conversation history"
    ]
  },
  {
    icon: Zap,
    title: "Quick Actions",
    description: "Click-to-call from directory, last number redial, change caller ID per call, and DTMF with commas for extension dialing.",
    details: [
      "Click-to-call from directory",
      "Last number redial",
      "Change caller ID per call",
      "DTMF with commas for extension dialing"
    ]
  },
  {
    icon: BookOpen,
    title: "Personal Productivity",
    description: "Personal and global directory, favorites for quick access, scripts (pre-canned responses), and custom links and bookmarks.",
    details: [
      "Personal and global directory",
      "Favorites for quick access",
      "Scripts (pre-canned responses)",
      "Custom links and bookmarks"
    ]
  },
]

// Real screenshots for features that have one; the rest keep the icon placeholder.
const featureImages: Record<string, ScreenshotData | undefined> = {
  "Unified Interface": screenshots.dashboardHome,
  "Omnichannel Ready": screenshots.chatUi,
}

export default function AgentDesktopPage() {
  return (
    <>
        {/* Hero */}
        <section className="bg-gradient-hero py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cp-teal-50 text-cp-teal-700 text-sm font-medium mb-6">
                  <Monitor className="size-4" />
                  Agent Desktop
                </div>
                <h1 className="heading-display text-4xl md:text-5xl text-cp-navy-900 leading-[1.1] mb-6">
                  Everything Your Agents Need. One Interface.
                </h1>
                <p className="text-lg text-cp-slate-600 leading-relaxed mb-8">
                  Voice, chat, email, SMS, tasks, metrics, team status, directory—all unified in a single browser tab.
                </p>
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
              </div>
              
              {/* Agent Desktop preview */}
              <div className="relative">
                <Screenshot shot={screenshots.callDisposition} priority />
              </div>
            </div>
          </div>
        </section>

        {/* Channels */}
        <section className="py-16 lg:py-20 bg-card">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-cp-navy-900 mb-4">
                Every Channel. One Conversation.
              </h2>
              <p className="text-cp-slate-600 max-w-2xl mx-auto">
                Handle voice, chat, email, SMS, WhatsApp, video, and tasks without losing context—complete customer journey in one view.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {channels.map((channel) => (
                <div 
                  key={channel.label}
                  className="bg-cp-slate-50 rounded-xl p-6 text-center border border-cp-slate-100 hover:border-cp-teal-300 hover:shadow-md transition-brand"
                >
                  <div className="size-12 rounded-xl bg-cp-teal-100 flex items-center justify-center mx-auto mb-3">
                    <channel.icon className="size-6 text-cp-teal-700" />
                  </div>
                  <h3 className="font-semibold text-cp-navy-900 text-sm">{channel.label}</h3>
                  <p className="text-xs text-cp-slate-500 mt-1">{channel.description}</p>
                </div>
              ))}
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

        {/* More Agent Pages */}
        <section className="py-16 lg:py-20 bg-card">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-semibold text-cp-navy-900 mb-8 text-center">
              Explore Agent Features
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { title: "Omnichannel Engagement", href: "/platform/agents/omnichannel", icon: Globe, description: "Handle every channel seamlessly" },
                { title: "Activity & History", href: "/platform/agents/activity", icon: BookOpen, description: "Find any interaction instantly" },
                { title: "Directory & Contacts", href: "/platform/agents/directory", icon: Phone, description: "Built-in contact management" },
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
                  <p className="text-sm text-cp-slate-500 mt-1">{item.description}</p>
                  <ArrowRight className="size-4 text-cp-slate-400 mt-3 group-hover:text-cp-teal-500 group-hover:translate-x-1 transition-all" />
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
              Deploy ConnectPath in less than 15 minutes and give your agents a unified desktop experience.
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
