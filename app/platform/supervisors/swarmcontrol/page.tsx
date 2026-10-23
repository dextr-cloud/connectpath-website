import { Metadata } from "next"
import Link from "next/link"
import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Screenshot } from "@/components/screenshot"
import { screenshots } from "@/lib/screenshots"
import { docsUrl, CONTACT_URL, DEMO_URL } from "@/lib/docs"
import {
  ArrowRight,
  ChevronRight,
  Sparkles,
  Eye,
  Mic,
  ShieldCheck,
  Hand,
  PencilRuler,
  Link2,
  MonitorPlay,
  CheckCircle,
} from "lucide-react"

export const metadata: Metadata = {
  title: "SwarmControl: Supervise Your AI Agents",
  description:
    "ConnectPath SwarmControl is now available. Watch live AI conversations, whisper, nudge, override, approve, and intercept—built for Amazon Connect Agentic CX Designer (ACXD) AI agents.",
}

const capabilities = [
  {
    icon: Eye,
    title: "Watch AI conversations live",
    description:
      "Every AI contact appears on one grid with its channel, status, and turn count. Open a contact to follow the live transcript, with Customer and AI turns side by side.",
  },
  {
    icon: Mic,
    title: "Whisper, nudge, or override",
    description:
      "Whisper gives the AI private, light guidance. Nudge gives strong guidance it should follow. Override sets a one-time line the AI says on its next turn.",
  },
  {
    icon: ShieldCheck,
    title: "Approve before the AI acts",
    description:
      "When an ACXD flow asks for sign-off, the contact lands in the Approvals tab. A supervisor approves or denies from there.",
  },
  {
    icon: Hand,
    title: "Intercept and hand off",
    description:
      "Arm Intercept and the contact goes to a human on the customer's next turn. Send it to your default queue or a supervisor queue.",
  },
]

const tabs = [
  { label: "Live", description: "Contacts in progress" },
  { label: "Done", description: "Finished contacts" },
  { label: "Approvals", description: "Contacts awaiting a decision" },
  { label: "Escalated", description: "Contacts handed to a human" },
]

const acxdSteps = [
  {
    icon: PencilRuler,
    title: "Design in ACXD",
    description:
      "Build your AI agents and flows in Amazon Connect Agentic CX Designer (ACXD), the AWS tool for designing agentic customer experiences.",
  },
  {
    icon: Link2,
    title: "Onboard your flows",
    description:
      "Connect your ACXD flows to ConnectPath using the data requests and Amazon Connect blocks in the setup guide.",
  },
  {
    icon: MonitorPlay,
    title: "Supervise in SwarmControl",
    description:
      "Your AI contacts show up in SwarmControl with the same live-supervision model supervisors already use in ConnectPath.",
  },
]

export default function SwarmControlPage() {
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
              <Sparkles className="size-4" />
              New: Now Available
            </div>

            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
              Introducing ConnectPath SwarmControl
            </h1>
            <p className="text-xl text-cp-slate-300 mb-8">
              Live supervision for your AI agents. Watch conversations as they happen, coach the AI in
              real time, approve high-stakes actions, and take over when it matters—built for
              Amazon Connect Agentic CX Designer (ACXD) agents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold"
              >
                <Link href={DEMO_URL} target="_blank" rel="noopener noreferrer">
                  See SwarmControl in a Demo
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <Link href={CONTACT_URL} target="_blank" rel="noopener noreferrer">Talk to Us About ACXD</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-cp-slate-700 leading-relaxed mb-6">
              AI agents now handle real customer conversations. Amazon Connect Agentic CX Designer (ACXD)
              makes them easier to build; someone still has to supervise them.
            </p>
            <p className="heading-display text-2xl md:text-3xl text-cp-navy-900 mb-6">
              Who watches the AI? Your supervisors do.
            </p>
            <p className="text-lg text-cp-slate-700 leading-relaxed">
              <strong>SwarmControl</strong> lives in ConnectPath at <span className="font-mono text-base">/swarmcontrol</span>,
              right in the left navigation. Supervisors get the same live view and the same hands-on controls they
              expect for human agents, now for AI contacts.
            </p>
          </div>
        </div>
      </section>

      {/* In the product */}
      <section className="pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            <figure>
              <Screenshot shot={screenshots.swarmControlGrid} />
              <figcaption className="mt-4 text-sm text-cp-slate-600">
                <span className="font-semibold text-cp-navy-900">One grid for every contact.</span>{" "}
                Red and yellow markers flag contacts that need an approval or an intercept.
              </figcaption>
            </figure>
            <figure>
              <Screenshot shot={screenshots.swarmControlTranscript} />
              <figcaption className="mt-4 text-sm text-cp-slate-600">
                <span className="font-semibold text-cp-navy-900">Open a contact to steer it.</span>{" "}
                Follow the live transcript, then whisper, nudge, override, or intercept.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 lg:py-20 bg-cp-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="cp-eyebrow mb-2">What supervisors can do</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-cp-navy-900">
              See it. Steer it. Stop it.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((capability) => (
              <div
                key={capability.title}
                className="bg-card rounded-xl border border-border p-8 shadow-[var(--shadow-card)]"
              >
                <div className="size-12 rounded-xl bg-cp-teal-50 flex items-center justify-center mb-5">
                  <capability.icon className="size-6 text-cp-teal-700" />
                </div>
                <h3 className="text-xl font-semibold text-cp-navy-900 mb-3">{capability.title}</h3>
                <p className="text-cp-slate-600 leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="mt-12 bg-card rounded-xl border border-border p-6 shadow-[var(--shadow-card)]">
            <p className="cp-eyebrow mb-4">Four views keep the grid focused</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {tabs.map((tab) => (
                <div key={tab.label} className="rounded-lg bg-cp-slate-50 border border-cp-slate-100 p-4">
                  <div className="font-semibold text-cp-navy-900">{tab.label}</div>
                  <div className="text-sm text-cp-slate-600">{tab.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ACXD */}
      <section className="py-16 lg:py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="cp-eyebrow mb-2">Built for ACXD</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-cp-navy-900 mb-4">
              From Agentic CX Designer to supervised in production
            </h2>
            <p className="text-cp-slate-600">
              ACXD is Amazon Connect Agentic CX Designer. SwarmControl is how your supervisors see and
              steer the AI agents you design with it.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {acxdSteps.map((step, index) => (
              <div key={step.title} className="rounded-xl border border-border bg-cp-slate-50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-10 rounded-lg bg-cp-navy-900 text-white flex items-center justify-center font-mono text-sm">
                    {index + 1}
                  </div>
                  <step.icon className="size-5 text-cp-teal-700" />
                </div>
                <h3 className="font-semibold text-cp-navy-900 mb-2">{step.title}</h3>
                <p className="text-sm text-cp-slate-600 leading-relaxed">{step.description}</p>
                {index === 1 && (
                  <a
                    href={docsUrl("/swarmcontrol-acxd-setup/")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-cp-teal-700 hover:text-cp-navy-900 transition-fast"
                  >
                    ACXD setup guide
                    <ArrowRight className="size-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Try it */}
      <section className="py-16 lg:py-20 bg-cp-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto bg-card rounded-xl border-2 border-cp-teal-200 p-8 shadow-[var(--shadow-card)]">
            <h2 className="text-2xl font-semibold text-cp-navy-900 mb-4">Try it before you connect anything</h2>
            <p className="text-cp-slate-600 mb-6">
              SwarmControl opens in demo mode with a simulated feed, so supervisors can explore the page
              without any ACXD setup. Live data turns on once your ACXD flows are onboarded and an
              administrator enables it.
            </p>
            <ul className="space-y-3">
              {[
                "Demo mode with simulated AI contacts is on by default",
                "Live data needs onboarded ACXD flows and an administrator to switch it on",
                "Access is controlled by security profile, like the rest of ConnectPath",
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
              Put a supervisor in front of your AI agents
            </h2>
            <p className="text-xl text-cp-slate-300 mb-8">
              Book a walkthrough and we will show you SwarmControl and what it takes to connect your ACXD flows.
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
        </div>
      </section>
    </PageLayout>
  )
}
