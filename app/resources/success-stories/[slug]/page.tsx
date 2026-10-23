import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { caseStudies, getCaseStudy } from "@/lib/case-studies"
import { CONTACT_URL } from "@/lib/docs"

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) return {}
  return {
    title: `${study.company} Success Story`,
    description: study.summary,
  }
}

export default async function SuccessStoryPage({ params }: PageProps) {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) notFound()

  const sections = [
    { label: "The Customer", paragraphs: study.customer },
    { label: "Challenge", paragraphs: study.challenge },
    { label: "Solution", paragraphs: study.solution },
    { label: study.resultsLabel, paragraphs: study.results },
  ]

  const index = caseStudies.findIndex((s) => s.slug === study.slug)
  const next = caseStudies[(index + 1) % caseStudies.length]

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cp-navy-900 via-cp-navy-800 to-cp-navy-900" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <Link
              href="/resources/success-stories"
              className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-fast mb-8"
            >
              <ArrowLeft className="size-4" />
              All success stories
            </Link>
            <p className="cp-eyebrow !text-cp-teal-400 mb-4">{study.industry}</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
              {study.title}
            </h1>
            <p className="text-lg text-white/80">{study.company}</p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 space-y-12">
          {sections.map((section) => (
            <div key={section.label}>
              <h2 className="text-2xl font-semibold text-cp-navy-900 mb-4">{section.label}</h2>
              <div className="space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-lg text-cp-slate-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {study.technologies.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold text-cp-navy-900 mb-4">Technologies Leveraged</h2>
              <ul className="flex flex-wrap gap-3">
                {study.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="inline-flex items-center gap-2 rounded-full bg-cp-teal-50 px-4 py-1.5 text-sm font-medium text-cp-teal-700"
                  >
                    <Check className="size-3.5" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cp-navy-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">See what ConnectPath can do for you</h2>
            <p className="text-white/80 mb-8">
              Talk to our team about your contact center, or read how {next.company} uses ConnectPath.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold">
                <Link href={CONTACT_URL} target="_blank" rel="noopener noreferrer">
                  Contact Us
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <Link href={`/resources/success-stories/${next.slug}`}>Next: {next.company}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
