import { PageLayout } from "@/components/page-layout"
import { HeroSection } from "@/components/sections/hero"
import { ProblemSection } from "@/components/sections/problem"
import { FeaturesSection } from "@/components/sections/features"
import { AgentFeaturesSection } from "@/components/sections/agent-features"
import { ProactiveOutreachSection } from "@/components/sections/proactive-outreach"
import { AIoversightSection } from "@/components/sections/ai-oversight"
import { ComparisonSection } from "@/components/sections/comparison"
import { CaseStudiesSection } from "@/components/sections/case-studies"
import { CTASection } from "@/components/sections/cta"

export default function HomePage() {
  return (
    <PageLayout>
      {/* Hero: The Contact Center Built for Supervisors */}
      <HeroSection />
      
      {/* Section 2: Your Supervisors Deserve Better Tools */}
      <ProblemSection />
      
      {/* Section 3: Everything Supervisors Need. One Platform. */}
      <FeaturesSection />
      
      {/* Section 4: A Unified Desktop for Every Agent */}
      <AgentFeaturesSection />
      
      {/* Section 5: New - Proactive Outreach (outbound dialer) */}
      <ProactiveOutreachSection />

      {/* Section 6: New - SwarmControl (AI agent oversight, ACXD) */}
      <AIoversightSection />
      
      {/* Section 7: Enterprise Infrastructure. Zero Headaches. */}
      <ComparisonSection />
      
      {/* Section 8: Trusted By (Case Studies) */}
      <CaseStudiesSection />
      
      {/* Section 9: Get Started CTA */}
      <CTASection />
    </PageLayout>
  )
}
