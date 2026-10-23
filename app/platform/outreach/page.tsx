import { CONTACT_URL, DEMO_URL } from "@/lib/docs"
import { Metadata } from "next"
import Link from "next/link"
import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  ChevronRight,
  PhoneOutgoing,
  ListChecks,
  ScrollText,
  History,
  Cloud,
  Lock,
  FlaskConical,
  CheckCircle,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Proactive Outreach: Built-In Outbound Dialer",
  description:
    "ConnectPath Proactive Outreach adds a built-in outbound dialer, an activity audit log, and retained call history for outbound campaigns. Separate from Amazon Connect Outbound Campaigns.",
}

const features = [
  {
    icon: PhoneOutgoing,
    title: "Built-in outbound dialer",
    description:
      "Run outbound campaigns from inside ConnectPath. Campaigns appears in the left navigation for users who have access.",
  },
  {
    icon: ListChecks,
    title: "Lists, customers, and phones",
    description:
      "Manage campaigns, upload contact lists from CSV, and keep customers and phone numbers together in one place.",
  },
  {
    icon: ScrollText,
    title: "Activity audit log",
    description:
      "A record of activity in your campaigns that you can review after the fact.",
  },
  {
    icon: History,
    title: "Retained call history",
    description:
      "Calls from your outbound campaigns are retained as history, so you can look back at them later.",
  },
]

const howItWorks = [
  {
    icon: Cloud,
    title: "Runs in your AWS account",
    description:
      "Proactive Outreach deploys as an optional card from Settings → Integrations. Until an administrator deploys it, none of its campaign infrastructure exists in your account.",
  },
  {
    icon: Lock,
    title: "Permissioned like the rest of ConnectPath",
    description:
      "Access follows security profiles. Users without the permission do not see Campaigns in the navigation.",
  },
  {
    icon: FlaskConical,
    title: "Rehearse before you dial",
    description:
      "A simulation mode lets you practice starting and stopping a campaign before it touches real customers.",
  },
]

export default function OutreachPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cp-navy-900 via-cp-navy-800 to-cp-navy-900" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <Link
              href="/platform"
              className="inline-flex items-center gap-2 text-cp-teal-400 hover:text-cp-teal-300 mb-6"
            >
              <ChevronRight className="size-4 rotate-180" />
              Back to Platform
            </Link>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cp-teal-400/20 text-cp-teal-300 text-sm font-medium mb-6">
              <PhoneOutgoing className="size-4" />
              New in v2.7
            </div>

            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
              ConnectPath Proactive Outreach
            </h1>
            <p className="text-xl text-cp-slate-300 mb-8">
              A built-in outbound dialer with an activity audit log and retained call history, so your
              outbound campaigns live in the same platform your supervisors already use.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold"
              >
                <Link href={CONTACT_URL} target="_blank" rel="noopener noreferrer">
                  Ask About Proactive Outreach
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <Link href={DEMO_URL} target="_blank" rel="noopener noreferrer">Request Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-20 bg-cp-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="cp-eyebrow mb-2">What is included</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-cp-navy-900">
              Outbound, with the audit trail built in
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-card rounded-xl border border-border p-8 shadow-[var(--shadow-card)]"
              >
                <div className="size-12 rounded-xl bg-cp-teal-50 flex items-center justify-center mb-5">
                  <feature.icon className="size-6 text-cp-teal-700" />
                </div>
                <h3 className="text-xl font-semibold text-cp-navy-900 mb-3">{feature.title}</h3>
                <p className="text-cp-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 lg:py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="cp-eyebrow mb-2">How it fits</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-cp-navy-900">
              Opt in, deploy, and control access
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {howItWorks.map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-cp-slate-50 p-6">
                <div className="size-10 rounded-lg bg-cp-navy-50 flex items-center justify-center mb-4">
                  <item.icon className="size-5 text-cp-navy-600" />
                </div>
                <h3 className="font-semibold text-cp-navy-900 mb-2">{item.title}</h3>
                <p className="text-sm text-cp-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clarification */}
      <section className="py-16 lg:py-20 bg-cp-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto bg-card rounded-xl border-2 border-cp-teal-200 p-8 shadow-[var(--shadow-card)]">
            <h2 className="text-2xl font-semibold text-cp-navy-900 mb-4">Good to know</h2>
            <ul className="space-y-3">
              {[
                "Proactive Outreach is separate from Amazon Connect Outbound Campaigns.",
                "It is enabled per ConnectPath instance. Contact us or open a support case to turn it on.",
                "Introduced in ConnectPath v2.7.0, released October 13, 2026.",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle className="size-5 text-cp-teal-400 shrink-0 mt-0.5" />
                  <span className="text-cp-slate-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cp-navy-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-display text-3xl md:text-4xl text-white mb-6">
              Bring outbound into ConnectPath
            </h2>
            <p className="text-xl text-cp-slate-300 mb-8">
              Tell us about your campaigns and we will show you how Proactive Outreach fits.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold"
            >
              <Link href={CONTACT_URL} target="_blank" rel="noopener noreferrer">
                Contact Us
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
