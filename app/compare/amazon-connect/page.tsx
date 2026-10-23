import { CONTACT_URL } from "@/lib/docs"
import { Metadata } from "next"
import Link from "next/link"
import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, 
  Check, 
  X, 
  Shield,
  Globe,
  Sparkles,
  DollarSign,
  Eye,
  MessageSquare,
  Settings,
  Monitor,
  Headphones,
  Users,
  Zap,
  Cloud
} from "lucide-react"

export const metadata: Metadata = {
  title: "ConnectPath for Amazon Connect | Your Infrastructure, Your Contact Center",
  description: "Amazon Connect powers it. ConnectPath runs it. The contact center your team actually logs into—built entirely on Amazon Connect, running in your AWS account.",
}

const amazonConnectStrengths = [
  {
    icon: Globe,
    title: "Global Telephony",
    description: "DID and toll-free numbers in 158 countries, direct connections to 40+ tier-1 carriers, built-in redundancy across availability zones."
  },
  {
    icon: Sparkles,
    title: "Native AI",
    description: "Amazon Q for agent assistance, Contact Lens for real-time transcription and sentiment analysis, Lex for conversational IVR and virtual agents."
  },
  {
    icon: Cloud,
    title: "AWS Ecosystem",
    description: "Lambda for custom logic, DynamoDB for data storage, S3 for recordings, EventBridge for integration, Kinesis for streaming—infinite extensibility."
  },
  {
    icon: DollarSign,
    title: "Usage-Based Pricing",
    description: "Per-minute voice, per-message chat, no seat licenses, no minimums—pay for what you use."
  },
  {
    icon: Shield,
    title: "Enterprise Compliance",
    description: "HIPAA-eligible, PCI DSS, SOC 2, FedRAMP, HITRUST, GDPR—the certifications enterprise security teams require."
  }
]

const capabilityComparison = [
  { capability: "See individual callers in queue", amazonConnect: "Aggregate counts only", connectpath: "LiveLook with caller ID, wait time, attributes" },
  { capability: "Live whisper coaching", amazonConnect: "Pre-recorded prompts only", connectpath: "Real-time supervisor-to-agent audio" },
  { capability: "Agent-to-agent chat", amazonConnect: "Requires Teams or custom build", connectpath: "Built-in, one click" },
  { capability: "Multi-level dispositions", amazonConnect: "Custom Lambda development", connectpath: "Native with hierarchical categories" },
  { capability: "Wallboard displays", amazonConnect: "Custom development required", connectpath: "One-click fullscreen" },
  { capability: "Screen pop announcements", amazonConnect: "Not available", connectpath: "Targeted dialogue delivery" },
  { capability: "Personal/global directory", amazonConnect: "Not available", connectpath: "Agent-managed contact lists" },
  { capability: "Configuration snapshots", amazonConnect: "Not available", connectpath: "Queue management version control" },
  { capability: "Pre-dial compliance", amazonConnect: "Custom development", connectpath: "Gryphon API integration" },
  { capability: "Jabra headset integration", amazonConnect: "Not available", connectpath: "Native call control" },
]

const operationalNeeds = [
  {
    category: "Supervisors Need to See and Act",
    icon: Eye,
    nativeProvides: "Metrics APIs, CloudWatch dashboards, real-time data streams.",
    connectpathProvides: [
      { name: "LiveLook", desc: "Individual callers in queue—phone numbers, wait times, custom attributes—not just aggregate counts" },
      { name: "Team Status Drawer", desc: "Every agent's current state and duration, always visible, with one-click access to monitor, whisper, or barge" },
      { name: "Live Whisper Coaching", desc: "Speak directly to agents during active calls without customers hearing—actually live, not pre-recorded prompts" },
      { name: "Visual Queue Management", desc: "Drag agents between routing profiles based on skills and real-time metrics" },
      { name: "Wallboard Mode", desc: "One-click fullscreen displays for the floor—no custom development required" },
    ]
  },
  {
    category: "Agents Need to Collaborate",
    icon: MessageSquare,
    nativeProvides: "Contact Control Panel for customer interactions, Quick Connects for transfers.",
    connectpathProvides: [
      { name: "Agent-to-Agent Chat", desc: "Built-in messaging, one click from the Team Status Drawer" },
      { name: "Peer-to-Peer Calling", desc: "Internal calls between agents, tracked in activity records" },
      { name: "Personal and Global Directories", desc: "Agent-managed contact lists with one-click dialing" },
      { name: "Team Announcements", desc: "Screen pops and marquee messages pushed to targeted groups" },
    ]
  },
  {
    category: "Operations Needs Workflow",
    icon: Settings,
    nativeProvides: "Contact flows, Lambda integration, attribute passing.",
    connectpathProvides: [
      { name: "Multi-Level Dispositions", desc: "Hierarchical categories with timer enforcement and queue-specific options—no Lambda required" },
      { name: "Scheduled Reporting", desc: "Daily, weekly, monthly delivery with email notifications—no QuickSight configuration" },
      { name: "Holiday Management", desc: "Configure closures in the interface, not buried in contact flow logic" },
      { name: "Post-Contact Surveys", desc: "Create, deploy, and measure without building flows from scratch" },
      { name: "Activity Search", desc: "100,000 records with advanced filtering, transcript search, and composite queries" },
    ]
  },
  {
    category: "The Agent Desktop",
    icon: Headphones,
    nativeProvides: "A functional, lightweight Contact Control Panel.",
    connectpathProvides: [
      { name: "Unified Interface", desc: "All channels, metrics, team status, and directory in a single view" },
      { name: "Customizable Layout", desc: "Drag-and-drop widget arrangement without IT involvement" },
      { name: "CRM Integration", desc: "Salesforce, Microsoft Dynamics, Zendesk, ServiceNow—embedded or tabbed" },
      { name: "Jabra Headset Control", desc: "Native integration for call control on supported models" },
      { name: "End-of-Contact Tone", desc: "Audio notification when customers disconnect" },
    ]
  },
]

const onboardingSteps = [
  { step: 1, action: "Subscribe", desc: "via AWS Marketplace" },
  { step: 2, action: "Deploy", desc: "the CloudFormation template in your AWS account" },
  { step: 3, action: "Connect", desc: "to your Amazon Connect instance" },
  { step: 4, action: "Configure", desc: "queues, users, and permissions" },
  { step: 5, action: "Operate", desc: "— your contact center is live" },
]

const whoThisIsFor = [
  { icon: Users, text: "Operations leaders who chose Amazon Connect for the infrastructure and now need to actually run a contact center on it." },
  { icon: Eye, text: "Supervisors who need to see, coach, and intervene—not just observe metrics from a distance." },
  { icon: Settings, text: "IT teams who selected Amazon Connect for its flexibility but don't have developer bandwidth to build operational tooling." },
  { icon: Monitor, text: "Organizations migrating from legacy platforms who expect a contact center to include contact center tools." },
  { icon: Zap, text: "Contact centers scaling on Amazon Connect who've proven the infrastructure and now need the operational layer." },
]

const whoShouldBuildCustom = [
  "Development-first organizations with dedicated engineers, established AWS expertise, and preference for building proprietary tooling.",
  "Highly specialized requirements that don't fit standard contact center patterns.",
  "Experimental deployments testing Amazon Connect viability before committing to scale.",
]

export default function CompareAmazonConnectPage() {
  return (
    <PageLayout>
        {/* Hero */}
        <section className="bg-gradient-hero py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-display text-4xl md:text-5xl text-cp-navy-900 leading-[1.1] mb-6">
                ConnectPath vs. Native Amazon Connect Tools
              </h1>
              <p className="text-lg md:text-xl text-cp-slate-600 leading-relaxed mb-4">
                AWS built the infrastructure. We built the contact center.
              </p>
              <p className="text-cp-slate-700 leading-relaxed mb-8">
                AWS built Amazon Connect to handle telephony at global scale, native AI, and the flexibility that comes with the world&apos;s largest cloud platform. It&apos;s exceptional infrastructure—the same infrastructure that runs Amazon&apos;s own retail customer service.
              </p>
              <p className="text-cp-slate-700 leading-relaxed mb-8">
                But infrastructure isn&apos;t a contact center. Your supervisors don&apos;t manage queues in the AWS console. Your agents don&apos;t take calls in CloudWatch. Your operations team doesn&apos;t run the floor from Lambda functions.
              </p>
              <p className="text-lg font-semibold text-cp-navy-900 mb-8">
                ConnectPath is the contact center your team actually logs into—built entirely on Amazon Connect, running in your AWS account, powered by the infrastructure you already chose.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold"
                >
                  <Link href="/get-started">
                    Start 14-Day Free Trial
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  size="lg" 
                  className="border border-cp-navy-200 bg-white text-cp-navy-900 hover:bg-cp-navy-50"
                >
                  <Link href={CONTACT_URL} target="_blank" rel="noopener noreferrer">
                    Request a Demo
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Two Decisions, Not One */}
        <section className="py-16 lg:py-20 bg-card">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-cp-navy-900 mb-4">
                Two Decisions, Not One
              </h2>
              <p className="text-cp-slate-600 max-w-2xl mx-auto">
                Selecting Amazon Connect was the infrastructure decision. The right one. Now there&apos;s an operations decision: How will your team actually run this contact center?
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Option A */}
              <div className="bg-cp-slate-50 rounded-xl border border-cp-slate-200 p-8">
                <div className="text-sm font-semibold text-cp-slate-500 mb-2">Option A</div>
                <h3 className="text-xl font-semibold text-cp-navy-900 mb-4">Assemble It Yourself</h3>
                <p className="text-cp-slate-600 mb-6">
                  Amazon Connect provides APIs, primitives, and flexibility. With enough development resources and time, you can construct dashboards in QuickSight, build disposition workflows in Lambda, create wallboards from scratch, and integrate third-party tools for agent collaboration.
                </p>
              </div>

              {/* Option B */}
              <div className="bg-cp-teal-50 rounded-xl border-2 border-cp-teal-200 p-8 relative">
                <div className="absolute -top-3 right-6 bg-cp-teal-400 text-cp-navy-950 text-xs font-semibold px-3 py-1 rounded-full">
                  Recommended
                </div>
                <div className="text-sm font-semibold text-cp-teal-700 mb-2">Option B</div>
                <h3 className="text-xl font-semibold text-cp-navy-900 mb-4">Run It Today</h3>
                <p className="text-cp-slate-700 mb-6">
                  ConnectPath delivers the contact center that sits on top of Amazon Connect infrastructure—supervisor tools, agent desktop, operational workflows, team collaboration—without building from components.
                </p>
                <div className="bg-white rounded-lg p-4 border border-cp-teal-100">
                  <div className="flex items-center gap-3 text-cp-navy-900 font-medium">
                    <Check className="size-5 text-cp-teal-500" />
                    Same Amazon Connect
                  </div>
                  <div className="flex items-center gap-3 text-cp-navy-900 font-medium mt-2">
                    <Check className="size-5 text-cp-teal-500" />
                    Same AWS infrastructure
                  </div>
                  <div className="flex items-center gap-3 text-cp-navy-900 font-medium mt-2">
                    <Check className="size-5 text-cp-teal-500" />
                    Same AI capabilities
                  </div>
                  <div className="flex items-center gap-3 text-cp-navy-900 font-medium mt-2">
                    <Check className="size-5 text-cp-teal-500" />
                    Ready to operate, not assemble
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Amazon Connect Provides */}
        <section className="py-16 lg:py-20 bg-cp-navy-900 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                What Amazon Connect Provides
              </h2>
              <p className="text-cp-slate-300 max-w-2xl mx-auto">
                Amazon Connect is genuinely excellent infrastructure. This is the foundation. ConnectPath doesn&apos;t replace it—we build on it.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {amazonConnectStrengths.map((item) => (
                <div key={item.title} className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
                  <item.icon className="size-8 text-cp-teal-400 mb-4" />
                  <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-cp-slate-300 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What a Contact Center Requires */}
        <section className="py-16 lg:py-20 bg-cp-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-cp-navy-900 mb-4">
                What a Contact Center Requires
              </h2>
              <p className="text-cp-slate-600 max-w-2xl mx-auto">
                Infrastructure handles connections. A contact center handles operations.
              </p>
            </div>

            <div className="space-y-8">
              {operationalNeeds.map((section) => (
                <div key={section.category} className="bg-card rounded-xl border border-border overflow-hidden">
                  <div className="bg-cp-navy-50 px-6 py-4 border-b border-border flex items-center gap-3">
                    <section.icon className="size-5 text-cp-teal-500" />
                    <h3 className="font-semibold text-cp-navy-900">{section.category}</h3>
                  </div>
                  <div className="p-6">
                    <div className="grid lg:grid-cols-2 gap-6">
                      <div>
                        <div className="text-sm font-semibold text-cp-slate-500 mb-2">The infrastructure provides:</div>
                        <p className="text-sm text-cp-slate-600 leading-relaxed">{section.nativeProvides}</p>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-cp-teal-700 mb-3">A contact center provides:</div>
                        <ul className="space-y-3">
                          {section.connectpathProvides.map((item) => (
                            <li key={item.name} className="flex items-start gap-2">
                              <Check className="size-4 text-cp-teal-500 shrink-0 mt-0.5" />
                              <div>
                                <span className="font-medium text-cp-navy-900">{item.name}:</span>{" "}
                                <span className="text-sm text-cp-slate-600">{item.desc}</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Architecture */}
        <section className="py-12 bg-cp-teal-50 border-y border-cp-teal-100">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-cp-navy-900">
                The Architecture
              </h2>
              <p className="text-cp-slate-600 mt-2 max-w-2xl mx-auto">
                ConnectPath isn&apos;t a separate system that integrates with Amazon Connect. It&apos;s a serverless application deployed in <em>your</em> AWS account, using Amazon Connect&apos;s APIs, running on the same infrastructure.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-cp-teal-100">
                <div className="font-semibold text-cp-navy-900 mb-1">Your data stays in your AWS account</div>
                <p className="text-cp-slate-600">ConnectPath processes and displays it—nothing is extracted to external systems.</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-cp-teal-100">
                <div className="font-semibold text-cp-navy-900 mb-1">Native AI continues working</div>
                <p className="text-cp-slate-600">Contact Lens, Amazon Q, Lex—all accessible, all functional, enhanced by operational context.</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-cp-teal-100">
                <div className="font-semibold text-cp-navy-900 mb-1">AWS billing continues</div>
                <p className="text-cp-slate-600">You pay AWS for Amazon Connect usage. ConnectPath adds ~$0.25/hour per user for the contact center layer.</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-cp-teal-100">
                <div className="font-semibold text-cp-navy-900 mb-1">Compliance posture preserved</div>
                <p className="text-cp-slate-600">HIPAA-eligible Amazon Connect instances maintain that status with ConnectPath deployed.</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-cp-slate-600">
                <strong className="text-cp-navy-900">AWS partnership is real.</strong> CloudHesive is an AWS Premier Consulting Partner with Amazon Connect Service Ready specialization. We don&apos;t compete with AWS—we complete the solution.
              </p>
            </div>
          </div>
        </section>

        {/* Capability Comparison Table */}
        <section className="py-16 lg:py-20 bg-card">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold text-cp-navy-900 mb-4">
                Features That Require a Contact Center
              </h2>
              <p className="text-cp-slate-600">
                Some capabilities don&apos;t exist in infrastructure—they exist in contact centers.
              </p>
            </div>
            
            <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm">
              {/* Table Header */}
              <div className="grid grid-cols-3 bg-cp-navy-900 text-white">
                <div className="p-4 font-semibold text-sm">Capability</div>
                <div className="p-4 font-semibold text-sm text-center border-l border-white/10">
                  Amazon Connect Infrastructure
                </div>
                <div className="p-4 font-semibold text-sm text-center border-l border-white/10 bg-cp-teal-600">
                  ConnectPath Contact Center
                </div>
              </div>
              
              {/* Table Rows */}
              {capabilityComparison.map((row, index) => (
                <div 
                  key={row.capability} 
                  className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-white' : 'bg-cp-slate-50'} border-t border-border`}
                >
                  <div className="p-4 text-sm text-cp-navy-900 font-medium">
                    {row.capability}
                  </div>
                  <div className="p-4 text-sm text-center border-l border-border">
                    <div className="flex items-center justify-center gap-2">
                      <X className="size-4 text-cp-slate-400" />
                      <span className="text-cp-slate-500">{row.amazonConnect}</span>
                    </div>
                  </div>
                  <div className="p-4 text-sm text-center border-l border-border bg-cp-teal-50/50">
                    <div className="flex items-center justify-center gap-2">
                      <Check className="size-4 text-cp-teal-500" />
                      <span className="text-cp-navy-900">{row.connectpath}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 15 Minutes to Contact Center */}
        <section className="py-16 lg:py-20 bg-cp-navy-900 text-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                15 Minutes from Infrastructure to Contact Center
              </h2>
              <p className="text-cp-slate-300 max-w-xl mx-auto">
                No professional services required. No weeks of implementation. No custom development.
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-0">
              {onboardingSteps.map((item, index) => (
                <div key={item.step} className="flex items-center">
                  <div className="flex flex-col items-center text-center px-4">
                    <div className="size-12 rounded-full bg-cp-teal-400 text-cp-navy-950 font-bold flex items-center justify-center text-lg mb-3">
                      {item.step}
                    </div>
                    <div className="font-semibold text-white">{item.action}</div>
                    <div className="text-sm text-cp-slate-300 max-w-[140px]">{item.desc}</div>
                  </div>
                  {index < onboardingSteps.length - 1 && (
                    <ArrowRight className="size-5 text-cp-teal-400 hidden md:block shrink-0" />
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <p className="text-cp-slate-300 mb-6">
                The infrastructure you already have becomes a contact center your team can run—today.
              </p>
              <Button 
                asChild 
                size="lg" 
                className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold"
              >
                <Link href="/get-started">
                  Get Started Now
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="py-16 lg:py-20 bg-card">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Who This Is For */}
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-cp-navy-900 mb-6">
                  Who This Is For
                </h2>
                <ul className="space-y-4">
                  {whoThisIsFor.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="size-8 rounded-lg bg-cp-teal-100 flex items-center justify-center shrink-0">
                        <item.icon className="size-4 text-cp-teal-700" />
                      </div>
                      <span className="text-cp-slate-700">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Who Should Build Custom */}
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-cp-navy-900 mb-6">
                  Who Should Build Custom
                </h2>
                <ul className="space-y-4">
                  {whoShouldBuildCustom.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="size-8 rounded-lg bg-cp-slate-100 flex items-center justify-center shrink-0">
                        <Settings className="size-4 text-cp-slate-500" />
                      </div>
                      <span className="text-cp-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-cp-slate-600 bg-cp-slate-50 p-4 rounded-lg border border-cp-slate-200">
                  Amazon Connect infrastructure supports building from scratch. If that&apos;s your model and you have the resources, build. ConnectPath exists for organizations that want to run a contact center, not build one.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Line CTA */}
        <section className="py-16 lg:py-20 bg-gradient-to-br from-cp-navy-900 via-cp-navy-800 to-cp-navy-900 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              The Bottom Line
            </h2>
            <p className="text-lg text-cp-slate-300 leading-relaxed mb-4">
              Amazon Connect is the right infrastructure. Proven at Amazon&apos;s own scale, powered by AWS, with native AI and global reach that no legacy platform can match.
            </p>
            <p className="text-lg text-cp-slate-300 leading-relaxed mb-8">
              But infrastructure is step one. Step two is the contact center your team actually operates.
            </p>
            <p className="text-xl font-semibold text-cp-teal-400 mb-10">
              Amazon Connect powers it. ConnectPath runs it.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold"
              >
                <Link href="/get-started">
                  Start 14-Day Free Trial
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                className="border border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                <Link href={CONTACT_URL} target="_blank" rel="noopener noreferrer">
                  Request a Demo
                </Link>
              </Button>
            </div>
            <p className="mt-8 text-sm text-cp-slate-400">
              ConnectPath is built by CloudHesive, an AWS Premier Consulting Partner with Amazon Connect Service Ready specialization.
            </p>
          </div>
        </section>
    </PageLayout>
  )
}
