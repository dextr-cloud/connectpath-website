"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight,
  LayoutDashboard,
  Users,
  Headphones,
  BarChart3,
  Plug,
  Sparkles,
  PhoneOutgoing,
  Monitor,
  MessageSquare,
  PhoneCall,
  FolderOpen,
  UserCog,
  Building2,
  Shield,
  Briefcase,
  Plane,
  Landmark,
  ArrowRightLeft,
  Plus,
  Globe,
  Scale,
  FileText,
  BookOpen,
  Award,
  HelpCircle,
  LifeBuoy,
  Info,
  Handshake,
  Mail,
  ExternalLink
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { DOCS_BASE_URL, CONTACT_URL, LOGIN_URL, DEMO_URL } from "@/lib/docs"

// Navigation data structure
interface NavItem {
  label: string
  href: string
  icon?: LucideIcon
  description?: string
  external?: boolean
}

interface NavSection {
  title: string
  items: NavItem[]
}

interface NavGroup {
  label: string
  sections: NavSection[]
}

const navigationData: Record<"platform" | "solutions" | "compare" | "resources" | "company", NavGroup> = {
  platform: {
    label: "Platform",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Platform Overview", href: "/platform", icon: LayoutDashboard, description: "Complete contact center platform with real-time control" },
          { label: "Roadmap", href: "/platform/whats-coming/roadmap", icon: ArrowRightLeft, description: "Recent releases and what's next" }
        ]
      },
      {
        title: "For Supervisors",
        items: [
          { label: "Real-Time Monitoring", href: "/platform/supervisors/real-time-monitoring", icon: Monitor, description: "Dashboards updated every 60 seconds" },
          { label: "Team Collaboration", href: "/platform/supervisors/team-collaboration", icon: Users, description: "Team status and instant communication" },
          { label: "Silent Monitor & Whisper Coach", href: "/platform/supervisors/monitoring-coaching", icon: Headphones, description: "Live coaching during calls" },
          { label: "Queue Management", href: "/platform/supervisors/queue-management", icon: FolderOpen, description: "Drag-and-drop workforce rebalancing" },
          { label: "SwarmControl", href: "/platform/supervisors/swarmcontrol", icon: Sparkles, description: "New: supervise ACXD AI agents live" }
        ]
      },
      {
        title: "For Agents",
        items: [
          { label: "Unified Agent Desktop", href: "/platform/agents/desktop", icon: LayoutDashboard, description: "Everything in one interface" },
          { label: "Omnichannel Engagement", href: "/platform/agents/omnichannel", icon: MessageSquare, description: "Voice, chat, email, SMS, and more" },
          { label: "Activity & History", href: "/platform/agents/activity", icon: FileText, description: "Find any interaction instantly" },
          { label: "Directory & Contacts", href: "/platform/agents/directory", icon: BookOpen, description: "Built-in contact management" }
        ]
      },
      {
        title: "Reporting & Analytics",
        items: [
          { label: "Dashboards & Wallboards", href: "/platform/reporting/dashboards", icon: BarChart3, description: "One-click fullscreen displays" },
          { label: "Historical Reports", href: "/platform/reporting/historical", icon: FileText, description: "Operational reports ready to run" },
          { label: "Custom Reports & Data Lake", href: "/platform/reporting/custom-reports", icon: FolderOpen, description: "Build your own reports" }
        ]
      },
      {
        title: "Integrations",
        items: [
          { label: "CRM Integrations", href: "/platform/integrations/crm", icon: Plug, description: "Salesforce, Dynamics, Zendesk" },
          { label: "Microsoft Teams", href: "/platform/integrations/teams", icon: Users, description: "Teams presence in ConnectPath" },
          { label: "Headset Support", href: "/platform/integrations/headsets", icon: Headphones, description: "Jabra headset integration" },
          { label: "Webhooks & APIs", href: "/platform/integrations/apis", icon: Plug, description: "RESTful APIs for custom connections" }
        ]
      },
      {
        title: "Outbound",
        items: [
          { label: "Proactive Outreach", href: "/platform/outreach", icon: PhoneOutgoing, description: "New: built-in outbound dialer" }
        ]
      }
    ]
  },
  solutions: {
    label: "Solutions",
    sections: [
      {
        title: "By Role",
        items: [
          { label: "Contact Center Supervisors", href: "/solutions/supervisors", icon: UserCog, description: "Built for how supervisors work" },
          { label: "Operations Leaders", href: "/solutions/operations", icon: Briefcase, description: "Operational excellence on AWS" },
          { label: "IT & Administrators", href: "/solutions/it-admin", icon: Shield, description: "Serverless, secure, simple to deploy" }
        ]
      },
      {
        title: "By Industry",
        items: [
          { label: "Government & Public Sector", href: "/solutions/government", icon: Landmark, description: "Citizen services with control" },
          { label: "Healthcare", href: "/solutions/healthcare", icon: Building2, description: "HIPAA-eligible infrastructure" },
          { label: "Travel & Hospitality", href: "/solutions/travel", icon: Plane, description: "Guest experience at scale" },
          { label: "Financial Services", href: "/solutions/financial-services", icon: Scale, description: "Compliance-ready operations" }
        ]
      },
      {
        title: "Use Cases",
        items: [
          { label: "Migrating from Legacy Systems", href: "/solutions/migration", icon: ArrowRightLeft, description: "From Avaya, Genesys, or on-prem" },
          { label: "Enhancing Amazon Connect", href: "/solutions/enhance-connect", icon: Plus, description: "Add ConnectPath to your instance" },
          { label: "Remote & Hybrid Teams", href: "/solutions/remote-teams", icon: Globe, description: "Supervise agents anywhere" }
        ]
      }
    ]
  },
  compare: {
    label: "Compare",
    sections: [
      {
        title: "Comparisons",
        items: [
          { label: "vs. Native Amazon Connect", href: "/compare/amazon-connect", description: "What ConnectPath adds on top" },
          { label: "vs. NICE CXone", href: "/compare/nice", description: "AWS-native alternative" },
          { label: "vs. Genesys Cloud", href: "/compare/genesys", description: "Modern cloud architecture" },
          { label: "vs. Five9", href: "/compare/five9", description: "AWS ecosystem benefits" },
          { label: "vs. Talkdesk", href: "/compare/talkdesk", description: "Built on Amazon Connect" },
          { label: "vs. Avaya", href: "/compare/avaya", description: "From legacy to cloud" },
          { label: "vs. Cisco Webex", href: "/compare/cisco", description: "Cloud-native approach" }
        ]
      }
    ]
  },
  resources: {
    label: "Resources",
    sections: [
      {
        title: "Learn",
        items: [
          { label: "Documentation", href: DOCS_BASE_URL, icon: FileText, description: "User guides and technical docs", external: true },
          { label: "Blog", href: "https://cloudhesive.com/blog", icon: BookOpen, description: "Latest updates and insights", external: true },
          { label: "Success Stories", href: "/resources/success-stories", icon: Award, description: "Customer case studies" },
          { label: "FAQ", href: "/resources/faq", icon: HelpCircle, description: "Common questions answered" }
        ]
      },
      {
        title: "Support",
        items: [
          { label: "Support Portal", href: "/resources/support", icon: LifeBuoy, description: "Get help when you need it" }
        ]
      }
    ]
  },
  company: {
    label: "Company",
    sections: [
      {
        title: "About",
        items: [
          { label: "About CloudHesive", href: "/company/about", icon: Info, description: "AWS Premier Partner since 2014" },
          { label: "Amazon Connect Partnership", href: "/company/amazon-connect-partnership", icon: Handshake, description: "Service Ready Specialization" },
          { label: "Contact Us", href: CONTACT_URL, icon: Mail, description: "Get in touch with our team", external: true }
        ]
      }
    ]
  }
}

// Unified dropdown for all menus
interface CompactDropdownProps {
  section: NavGroup
  isOpen: boolean
  onClose: () => void
}

function CompactDropdown({ section, isOpen, onClose }: CompactDropdownProps) {
  const sectionCount = section.sections.length
  const totalItems = section.sections.reduce((acc, s) => acc + s.items.length, 0)
  
  // Determine grid columns based on section count
  const getGridClass = () => {
    if (sectionCount >= 5) return "grid-cols-3"
    if (sectionCount >= 3) return "grid-cols-3"
    if (sectionCount === 2) return "grid-cols-2"
    return ""
  }
  
  // Determine width based on content
  const getWidthClass = () => {
    if (sectionCount >= 5) return "w-[680px]"
    if (sectionCount >= 3) return "w-[580px]"
    if (sectionCount === 2) return "w-[420px]"
    if (totalItems > 4) return "w-[280px]"
    return "w-[240px]"
  }
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50"
        >
          <div className={cn(
            "bg-card border border-border rounded-xl shadow-lg overflow-hidden max-w-[calc(100vw-2rem)]",
            getWidthClass()
          )}>
            <div className={cn(
              "p-4",
              sectionCount > 1 && `grid ${getGridClass()} gap-5`
            )}>
              {section.sections.map((group) => (
                <div key={group.title} className="space-y-2">
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2">
                    {group.title}
                  </h3>
                  <ul className="space-y-0.5">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className="group flex items-start gap-2 px-2 py-1.5 rounded-lg hover:bg-accent transition-fast"
                          {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        >
                          {item.icon && (
                            <item.icon className="size-4 text-muted-foreground group-hover:text-primary shrink-0 mt-0.5 transition-fast" />
                          )}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1">
                              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-fast">
                                {item.label}
                              </span>
                              {item.external && (
                                <ExternalLink className="size-3 text-muted-foreground" />
                              )}
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedSection, setExpandedSection] = React.useState<string | null>(null)

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 lg:hidden"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-cp-navy-950/50"
            onClick={onClose}
          />
          
          {/* Slide-out drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-card shadow-xl overflow-y-auto"
          >
            <div className="sticky top-0 flex items-center justify-between p-4 border-b border-border bg-card z-10">
              <Link href="/" onClick={onClose} className="flex items-center gap-2">
                <ConnectPathLogo className="h-10" />
              </Link>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-accent transition-fast"
                aria-label="Close menu"
              >
                <X className="size-6" />
              </button>
            </div>
            
            {/* Utility nav */}
            <div className="flex items-center gap-4 px-4 py-3 border-b border-border text-sm">
              <Link href={LOGIN_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-fast">Login</Link>
              <Link href="/resources/support" onClick={onClose} className="text-muted-foreground hover:text-foreground transition-fast">Support</Link>
            </div>
            
            {/* Navigation sections */}
            <nav className="p-4 space-y-1">
              {Object.entries(navigationData).map(([key, section]) => (
                <div key={key} className="border-b border-border last:border-0">
                  <button
                    onClick={() => setExpandedSection(expandedSection === key ? null : key)}
                    className="flex items-center justify-between w-full py-3 text-left font-medium"
                  >
                    {section.label}
                    <ChevronRight 
                      className={cn(
                        "size-5 transition-transform duration-200",
                        expandedSection === key && "rotate-90"
                      )}
                    />
                  </button>
                  
                  <AnimatePresence>
                    {expandedSection === key && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-4 space-y-4">
                          {section.sections.map((group) => (
                            <div key={group.title} className="space-y-2">
                              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2">
                                {group.title}
                              </h4>
                              <ul className="space-y-1">
                                {group.items.map((item) => (
                                  <li key={item.href}>
                                    <Link
                                      href={item.href}
                                      onClick={onClose}
                                      className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-accent transition-fast"
                                      {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                    >
                                      {item.icon && (
                                        <item.icon className="size-4 text-muted-foreground" />
                                      )}
                                      <span className="text-sm">{item.label}</span>
                                      {item.external && (
                                        <ExternalLink className="size-3 text-muted-foreground ml-auto" />
                                      )}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>
            
            {/* CTA */}
            <div className="p-4 border-t border-border">
              <Button asChild className="w-full bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold">
                <Link href="/get-started" onClick={onClose}>Get Started</Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function ConnectPathLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="ConnectPath"
      width={565}
      height={90}
      priority
      className={cn("w-auto", className)}
    />
  )
}

export function Header() {
  const [openMenu, setOpenMenu] = React.useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)

  // Ensure component is mounted before rendering navigation
  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Handle scroll state
  React.useEffect(() => {
    if (!mounted) return
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    handleScroll() // Check initial state
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [mounted])

  // Close menus on escape
  React.useEffect(() => {
    if (!mounted) return
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null)
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [mounted])

  // Don't render navigation until mounted to avoid router initialization issues
  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full bg-transparent">
        <div className="hidden lg:block border-b border-border/50 bg-cp-navy-50/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-end gap-6 h-8 text-xs" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16" />
        </div>
      </header>
    )
  }

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled 
          ? "bg-card/95 backdrop-blur-md border-b border-border shadow-sm" 
          : "bg-transparent"
      )}
    >
      {/* Optional announcement banner */}
      {/* <div className="bg-cp-navy-900 text-white text-sm text-center py-2 px-4">
        <span>NEW: SwarmControl is now available for ACXD AI agents. </span>
        <Link href="/platform/supervisors/swarmcontrol" className="underline hover:no-underline">Learn more →</Link>
      </div> */}
      
      {/* Utility nav - desktop only */}
      <div className="hidden lg:block border-b border-border/50 bg-cp-navy-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-end gap-6 h-8 text-xs">
            <Link href={LOGIN_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-fast">Login</Link>
            <Link href="/resources/support" className="text-muted-foreground hover:text-foreground transition-fast">Support</Link>
          </div>
        </div>
      </div>
      
      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <ConnectPathLogo className="h-10" />
          </Link>
          
          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {Object.entries(navigationData).map(([key, section]) => (
              <div 
                key={key}
                className="relative"
                onMouseEnter={() => setOpenMenu(key)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-fast",
                    openMenu === key 
                      ? "text-foreground bg-accent" 
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  )}
                  aria-expanded={openMenu === key}
                >
                  {section.label}
                  <ChevronDown className={cn(
                    "size-4 transition-transform duration-200",
                    openMenu === key && "rotate-180"
                  )} />
                </button>
                
                <CompactDropdown 
                  section={section} 
                  isOpen={openMenu === key} 
                  onClose={() => setOpenMenu(null)} 
                />
              </div>
            ))}
          </nav>
          
          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" asChild className="text-sm font-medium">
              <Link href={DEMO_URL} target="_blank" rel="noopener noreferrer">Request a Demo</Link>
            </Button>
            <Button asChild className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold">
              <Link href="/get-started">Get Started</Link>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 rounded-lg hover:bg-accent transition-fast"
            aria-label="Open menu"
          >
            <Menu className="size-6" />
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  )
}

export default Header
