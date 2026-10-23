import { DEMO_URL } from "@/lib/docs"
import { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Screenshot } from "@/components/screenshot"
import { screenshots, type ScreenshotData } from "@/lib/screenshots"
import { 
  ArrowRight, 
  Eye,
  Mic,
  PhoneForwarded,
  MessageSquare,
  Users,
  LayoutDashboard,
  TrendingUp,
  Check,
  AlertCircle
} from "lucide-react"

export const metadata: Metadata = {
  title: "Silent Monitor & Whisper Coach",
  description: "Listen silently, speak directly to your agent without the customer hearing, or join the call—all from a right-click in Team Status.",
}

const features = [
  {
    icon: Eye,
    title: "Silent Monitor",
    description: "Listen to active calls without agent or customer awareness. Accessible from Team Status when an agent shows \"Connected\"—no separate tool or console required.",
    details: [
      "Listen to active calls without agent or customer awareness",
      "Accessible from Team Status when agent shows \"Connected\"",
      "No separate tool or console required",
      "Full call audio in real-time"
    ]
  },
  {
    icon: Mic,
    title: "Whisper Coach (Live)",
    description: "Speak directly to the agent in real-time while the customer cannot hear. Perfect for training, escalation guidance, and compliance scenarios.",
    details: [
      "Speak directly to the agent in real-time",
      "Customer cannot hear the supervisor",
      "Perfect for training and escalation guidance",
      "This is LIVE whisper—not pre-recorded whisper flows"
    ],
    highlight: true
  },
  {
    icon: PhoneForwarded,
    title: "Barge-In",
    description: "Join active calls as a participant. Useful for escalations or when a customer requests to speak with a supervisor.",
    details: [
      "Join active calls as a participant",
      "Useful for escalations",
      "Customer requests to speak with supervisor",
      "Seamless transition from monitoring to participation"
    ]
  },
  {
    icon: MessageSquare,
    title: "Chat Barge",
    description: "Join agent-customer chats with full conversation history. Translation support maintained, and supervisor messages are visible to both parties.",
    details: [
      "Join agent-customer chats with full conversation history",
      "Translation support maintained",
      "Supervisor messages visible to both parties",
      "Real-time text coaching available"
    ]
  },
]

// Real screenshots for features that have one; the rest keep the icon placeholder.
const featureImages: Record<string, ScreenshotData | undefined> = {
  "Silent Monitor": screenshots.silentMonitor,
}

export default function MonitoringCoachingPage() {
  return (
    <>
        {/* Hero */}
        <section className="bg-gradient-hero py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cp-teal-50 text-cp-teal-700 text-sm font-medium mb-6">
                  <Mic className="size-4" />
                  Live Coaching
                </div>
                <h1 className="heading-display text-4xl md:text-5xl text-cp-navy-900 leading-[1.1] mb-6">
                  Coach in the Moment. Not After the Fact.
                </h1>
                <p className="text-lg text-cp-slate-600 leading-relaxed mb-8">
                  Listen silently, speak directly to your agent without the customer hearing, or join the call—all from a right-click in Team Status.
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
              
              {/* Coaching preview */}
              <div className="relative">
                <Screenshot shot={screenshots.silentMonitor} priority />
              </div>
            </div>
          </div>
        </section>

        {/* Key Differentiation */}
        <section className="py-12 bg-cp-teal-50 border-y border-cp-teal-100">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex items-start gap-4">
              <div className="size-10 rounded-lg bg-cp-teal-100 flex items-center justify-center shrink-0">
                <AlertCircle className="size-5 text-cp-teal-700" />
              </div>
              <div>
                <h3 className="font-semibold text-cp-navy-900 mb-2">Important Distinction</h3>
                <p className="text-cp-slate-700">
                  ConnectPath provides <strong>LIVE whisper coaching</strong>—supervisors speak directly to agents during active calls, in real-time. This is true coaching, not pre-recorded prompts.
                </p>
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
                    <div className={`size-14 rounded-xl flex items-center justify-center mb-6 ${feature.highlight ? 'bg-cp-teal-100' : 'bg-cp-teal-50'}`}>
                      <feature.icon className={`size-7 ${feature.highlight ? 'text-cp-teal-700' : 'text-cp-teal-500'}`} />
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

        {/* Use Cases */}
        <section className="py-16 lg:py-20 bg-cp-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-cp-navy-900 mb-4">
                When to Use Each Feature
              </h2>
              <p className="text-cp-slate-600 max-w-2xl mx-auto">
                Different situations call for different levels of intervention.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card rounded-xl border border-border p-6">
                <Eye className="size-8 text-cp-teal-500 mb-4" />
                <h3 className="font-semibold text-cp-navy-900 mb-2">Silent Monitor</h3>
                <ul className="space-y-2 text-sm text-cp-slate-600">
                  <li>Quality assurance reviews</li>
                  <li>New agent observation</li>
                  <li>Compliance verification</li>
                  <li>Performance assessment</li>
                </ul>
              </div>
              <div className="bg-card rounded-xl border border-cp-teal-200 p-6 ring-1 ring-cp-teal-100">
                <Mic className="size-8 text-cp-teal-500 mb-4" />
                <h3 className="font-semibold text-cp-navy-900 mb-2">Whisper Coach</h3>
                <ul className="space-y-2 text-sm text-cp-slate-600">
                  <li>Real-time training</li>
                  <li>Escalation guidance</li>
                  <li>Complex issue support</li>
                  <li>Compliance reminders</li>
                </ul>
              </div>
              <div className="bg-card rounded-xl border border-border p-6">
                <PhoneForwarded className="size-8 text-cp-teal-500 mb-4" />
                <h3 className="font-semibold text-cp-navy-900 mb-2">Barge-In</h3>
                <ul className="space-y-2 text-sm text-cp-slate-600">
                  <li>Customer escalation requests</li>
                  <li>Urgent intervention</li>
                  <li>VIP customer handling</li>
                  <li>Dispute resolution</li>
                </ul>
              </div>
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
              See Live Coaching in Action
            </h2>
            <p className="text-cp-slate-300 mb-8">
              Request a demo to see how ConnectPath&apos;s live whisper coaching transforms agent training.
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
