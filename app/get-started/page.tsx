import { CONTACT_URL, MARKETPLACE_URL } from "@/lib/docs"
import { Metadata } from "next"
import Link from "next/link"
import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, 
  Cloud,
  FileCode,
  LogIn,
  Clock,
  Shield,
  Server,
  CheckCircle,
  ExternalLink
} from "lucide-react"

export const metadata: Metadata = {
  title: "Get Started",
  description: "Deploy ConnectPath in less than 15 minutes. 14-day free trial via AWS Marketplace.",
}

const steps = [
  {
    number: "1",
    icon: Cloud,
    title: "Subscribe via AWS Marketplace",
    description: "14-day free trial. Pay-as-you-go after that. No seat minimums, no annual commitments.",
    details: [
      "No credit card required for trial",
      "Pay-as-you-go pricing after trial",
      "Cancel anytime"
    ]
  },
  {
    number: "2",
    icon: FileCode,
    title: "Deploy the CloudFormation Template",
    description: "One template, 15 minutes, done. Creates all necessary resources in your AWS account.",
    details: [
      "Single CloudFormation template",
      "Deploys in your AWS account",
      "Takes approximately 10-15 minutes"
    ]
  },
  {
    number: "3",
    icon: LogIn,
    title: "Your Contact Center is Live",
    description: "Log in and start supervising. Full access from day one.",
    details: [
      "Instant access after deployment",
      "No additional configuration required",
      "Full feature access from day one"
    ]
  },
]

const benefits = [
  {
    icon: Clock,
    title: "Deploy in 15 Minutes",
    description: "Serverless architecture means no infrastructure to manage"
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description: "Data stays in your AWS account with encryption at rest and in transit"
  },
  {
    icon: Server,
    title: "No Infrastructure Required",
    description: "Runs on AWS Lambda, DynamoDB, and API Gateway"
  },
]

export default function GetStartedPage() {
  return (
    <PageLayout>
        {/* Hero */}
        <section className="bg-gradient-hero py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cp-teal-50 text-cp-teal-700 text-sm font-medium mb-6">
              <Clock className="size-4" />
              15 minutes to deploy
            </div>
            <h1 className="heading-display text-4xl md:text-5xl text-cp-navy-900 leading-[1.1] mb-6">
              Start Your Free Trial
            </h1>
            <p className="text-lg text-cp-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              Deploy ConnectPath in less than 15 minutes. 14-day free trial via AWS Marketplace. No credit card required.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold"
            >
              <a href={MARKETPLACE_URL} target="_blank" rel="noopener noreferrer">
                Subscribe on AWS Marketplace
                <ExternalLink className="ml-2 size-4" />
              </a>
            </Button>
          </div>
        </section>

        {/* Steps */}
        <section className="py-20 lg:py-28 bg-card">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-semibold text-cp-navy-900 mb-4">
                Three Steps to Supervision
              </h2>
              <p className="text-cp-slate-600 max-w-2xl mx-auto">
                ConnectPath is serverless and runs entirely on AWS. Subscribe, deploy, and start supervising in minutes.
              </p>
            </div>
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div 
                  key={step.number}
                  className="relative"
                >
                  {index < steps.length - 1 && (
                    <div className="absolute left-8 top-20 bottom-0 w-px bg-cp-slate-200 hidden md:block" />
                  )}
                  <div className="bg-cp-slate-50 rounded-2xl border border-cp-slate-100 p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="size-16 rounded-2xl bg-cp-teal-100 flex items-center justify-center shrink-0">
                        <span className="text-2xl font-bold text-cp-teal-700">{step.number}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <step.icon className="size-5 text-cp-teal-500" />
                          <h3 className="text-xl font-semibold text-cp-navy-900">{step.title}</h3>
                        </div>
                        <p className="text-cp-slate-600 mb-4">{step.description}</p>
                        <ul className="space-y-2">
                          {step.details.map((detail) => (
                            <li key={detail} className="flex items-center gap-2 text-sm text-cp-slate-600">
                              <CheckCircle className="size-4 text-cp-teal-500 shrink-0" />
                              {detail}
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

        {/* Benefits */}
        <section className="py-16 lg:py-20 bg-cp-slate-50">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="bg-card rounded-xl border border-border p-6 text-center">
                  <div className="size-12 rounded-xl bg-cp-teal-50 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="size-6 text-cp-teal-500" />
                  </div>
                  <h3 className="font-semibold text-cp-navy-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-cp-slate-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AWS Marketplace CTA */}
        <section className="py-16 lg:py-20 bg-card">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Primary CTA */}
              <div className="bg-cp-teal-50 rounded-2xl border border-cp-teal-100 p-8">
                <div className="size-12 rounded-xl bg-cp-teal-100 flex items-center justify-center mb-6">
                  <Cloud className="size-6 text-cp-teal-700" />
                </div>
                <h3 className="text-xl font-semibold text-cp-navy-900 mb-3">
                  Start Your Free Trial
                </h3>
                <p className="text-cp-slate-600 mb-6">
                  Subscribe through AWS Marketplace and get 14 days free. No credit card required.
                </p>
                <Button 
                  asChild 
                  size="lg" 
                  className="w-full bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold"
                >
                  <a href={MARKETPLACE_URL} target="_blank" rel="noopener noreferrer">
                    Get Started on AWS Marketplace
                    <ExternalLink className="ml-2 size-4" />
                  </a>
                </Button>
              </div>

              {/* Secondary CTA */}
              <div className="bg-cp-slate-50 rounded-2xl border border-cp-slate-100 p-8">
                <div className="size-12 rounded-xl bg-cp-slate-100 flex items-center justify-center mb-6">
                  <LogIn className="size-6 text-cp-navy-600" />
                </div>
                <h3 className="text-xl font-semibold text-cp-navy-900 mb-3">
                  Talk to Our Team
                </h3>
                <p className="text-cp-slate-600 mb-6">
                  Have questions? Want a personalized demo? Need help getting started? We&apos;re here to help.
                </p>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="w-full"
                >
                  <Link href={CONTACT_URL} target="_blank" rel="noopener noreferrer">
                    Contact Us
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-16 lg:py-20 bg-cp-slate-50">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-xl font-semibold text-cp-navy-900 mb-6 text-center">
              What You Need to Get Started
            </h2>
            <div className="bg-card rounded-xl border border-border p-6">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="size-5 text-cp-teal-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-cp-navy-900">An existing Amazon Connect instance</span>
                    <p className="text-sm text-cp-slate-500 mt-0.5">ConnectPath deploys on top of your existing Amazon Connect setup</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="size-5 text-cp-teal-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-cp-navy-900">AWS account with CloudFormation access</span>
                    <p className="text-sm text-cp-slate-500 mt-0.5">Our deployment template creates all necessary resources</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="size-5 text-cp-teal-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-cp-navy-900">Chrome, Edge, or Firefox browser</span>
                    <p className="text-sm text-cp-slate-500 mt-0.5">WebRTC support required for voice functionality</p>
                  </div>
                </li>
              </ul>
            </div>
            <p className="text-sm text-cp-slate-500 text-center mt-6">
              Don&apos;t have Amazon Connect yet?{" "}
              <a href="https://aws.amazon.com/connect/" target="_blank" rel="noopener noreferrer" className="text-cp-teal-700 hover:underline">
                Learn more about Amazon Connect
              </a>
            </p>
          </div>
        </section>
    </PageLayout>
  )
}
