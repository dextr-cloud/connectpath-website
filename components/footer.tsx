"use client"

import * as React from "react"
import Link from "next/link"
import { DOCS_BASE_URL, CONTACT_URL, PRIVACY_URL } from "@/lib/docs"
import Image from "next/image"
import { Phone, Mail, ExternalLink } from "lucide-react"

const footerLinks = {
  platform: {
    title: "Platform",
    links: [
      { label: "Overview", href: "/platform" },
      { label: "For Supervisors", href: "/platform/supervisors/real-time-monitoring" },
      { label: "SwarmControl", href: "/platform/supervisors/swarmcontrol" },
      { label: "Proactive Outreach", href: "/platform/outreach" },
      { label: "For Agents", href: "/platform/agents/desktop" },
      { label: "Reporting & Analytics", href: "/platform/reporting/dashboards" },
      { label: "Integrations", href: "/platform/integrations" },
      { label: "Roadmap", href: "/platform/whats-coming/roadmap" },
    ]
  },
  solutions: {
    title: "Solutions",
    links: [
      { label: "Contact Center Supervisors", href: "/solutions/supervisors" },
      { label: "Operations Leaders", href: "/solutions/operations" },
      { label: "IT & Administrators", href: "/solutions/it-admin" },
      { label: "Government", href: "/solutions/government" },
      { label: "Healthcare", href: "/solutions/healthcare" },
      { label: "Travel & Hospitality", href: "/solutions/travel" },
    ]
  },
  compare: {
    title: "Compare",
    links: [
      { label: "vs. Native Amazon Connect", href: "/compare/amazon-connect" },
      { label: "vs. NICE CXone", href: "/compare/nice" },
      { label: "vs. Genesys Cloud", href: "/compare/genesys" },
      { label: "vs. Five9", href: "/compare/five9" },
      { label: "vs. Talkdesk", href: "/compare/talkdesk" },
      { label: "vs. Avaya", href: "/compare/avaya" },
    ]
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Documentation", href: DOCS_BASE_URL, external: true },
      { label: "Blog", href: "https://cloudhesive.com/blog", external: true },
      { label: "Success Stories", href: "/resources/success-stories" },
      { label: "FAQ", href: "/resources/faq" },
      { label: "Support", href: "/resources/support" },
    ]
  },
  company: {
    title: "Company",
    links: [
      { label: "About CloudHesive", href: "/company/about" },
      { label: "Amazon Connect Partnership", href: "/company/amazon-connect-partnership" },
      { label: "Contact Us", href: CONTACT_URL, external: true },
    ]
  }
}

function ConnectPathLogoFooter({ className }: { className?: string }) {
  // The docs-site logo has a dark wordmark; render it as a white silhouette on the navy footer.
  return (
    <Image
      src="/logo.png"
      alt="ConnectPath"
      width={565}
      height={90}
      className={`w-auto brightness-0 invert ${className ?? ""}`}
    />
  )
}

export function Footer() {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render links until mounted to avoid router initialization issues
  if (!mounted) {
    return (
      <footer className="bg-cp-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="h-64" />
        </div>
      </footer>
    )
  }

  return (
    <footer className="bg-cp-navy-900 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Links columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    {'external' in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-cp-slate-400 hover:text-white transition-fast flex items-center gap-1"
                      >
                        {link.label}
                        <ExternalLink className="size-3" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-cp-slate-400 hover:text-white transition-fast"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Contact column */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:+18008602040" 
                  className="text-sm text-cp-slate-400 hover:text-white transition-fast flex items-center gap-2"
                >
                  <Phone className="size-4" />
                  +1 800-860-2040
                </a>
              </li>
              <li>
                <a 
                  href="mailto:sales@cloudhesive.com" 
                  className="text-sm text-cp-slate-400 hover:text-white transition-fast flex items-center gap-2"
                >
                  <Mail className="size-4" />
                  sales@cloudhesive.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Partner badges and bottom row */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Logo and tagline */}
            <div className="flex items-center gap-4">
              <ConnectPathLogoFooter className="h-10" />
              <span className="text-sm text-cp-slate-400">by CloudHesive</span>
            </div>
            
            {/* Partner badge */}
            <Image
              src="/badge-partner.svg"
              alt="AWS Partner: Amazon Connect Ready"
              width={90}
              height={90}
              className="size-20"
            />
          </div>
        </div>
      </div>
      
      {/* Legal row */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cp-slate-500">
            <p>&copy; {new Date().getFullYear()} CloudHesive Inc. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href={PRIVACY_URL} target="_blank" rel="noopener noreferrer" className="hover:text-cp-slate-300 transition-fast">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
