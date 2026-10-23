// Legacy URLs from the retired WordPress site (connectpath.cx) -> pages on this site.
// Single source of truth, consumed by scripts/write-redirects.mjs, which writes an
// HTML redirect stub into out/ for each entry after the static export (GitHub Pages
// can't do server redirects, and next.config redirects() is unsupported with export).
//
// Spanish pages (/es/...) were not migrated; they point at the English equivalent.

const MARKETPLACE = "https://aws.amazon.com/marketplace/pp/prodview-zdjgbrn7qdlg4?applicationId=AWSMPContessa&ref_=ucaf&sr=0-0"
const CONTACT = "https://www.cloudhesive.com/contact-us/"
const DEMO = "https://www.cloudhesive.com/connectpath-powered-by-aws/#talk-to-an-expert"
const PRIVACY = "https://www.cloudhesive.com/privacy-policy/"
const DOCS = "https://docs.connectpath.cx"

/** old path (no trailing slash) -> destination */
const pages = {
  // Home and unpublished WordPress test/staging copies
  "/test-home": "/",
  "/home-new": "/",
  "/es": "/",
  "/es/home": "/",
  "/es/test-home": "/",

  // Marketing pages
  "/buy-with-aws": MARKETPLACE,
  "/features": "/platform",
  "/features-amazon-connect": "/platform",
  "/features-new": "/platform",
  "/features-new-es": "/platform",
  "/es/caracteristicas": "/platform",
  "/pricing": "/get-started",
  "/pricing-new": "/get-started",
  "/pricing-new-es": "/get-started",
  "/es/precios": "/get-started",
  "/amazon-connect": "/company/amazon-connect-partnership",
  "/amazon-connect-new": "/company/amazon-connect-partnership",
  "/connect-new-es": "/company/amazon-connect-partnership",
  "/es/amazon-connect-made-easy": "/company/amazon-connect-partnership",
  "/about-connectpath-amazon-connect": "/company/about",
  "/about-new": "/company/about",
  "/about-new-es": "/company/about",
  "/es/acerca-de-nosotros": "/company/about",

  // Resources
  "/support": "/resources/support",
  "/support-new": "/resources/support",
  "/es/soporte": "/resources/support",
  "/onboarding": `${DOCS}/onboarding/`,
  "/onboarding-new": `${DOCS}/onboarding/`,
  "/onboarding-new-es": `${DOCS}/onboarding/`,
  "/es/induccion": `${DOCS}/onboarding/`,
  "/our-customers": "/resources/success-stories",
  "/our-customers/success-stories": "/resources/success-stories",
  "/our-customers/success-stories-new": "/resources/success-stories",
  "/es/casos-de-exito": "/resources/success-stories",

  // Blog (not migrated): how-to content lives in the docs
  "/blog": "/resources/documentation",
  "/blog-new": "/resources/documentation",
  "/es/blog": "/resources/documentation",
  ...Object.fromEntries(
    Array.from({ length: 9 }, (_, i) => [`/blog/page/${i + 2}`, "/resources/documentation"]),
  ),

  // Contact / demo form
  "/contact": CONTACT,
  "/es/contacto": CONTACT,
  "/es/contact-new-es": CONTACT,
  "/contact-amazon-connect": DEMO,
  "/contact-amazon-connect-new": DEMO,

  // Routes that existed in earlier drafts of this site
  "/company/contact": CONTACT,
  "/demo": DEMO,
  "/privacy": PRIVACY,
  "/platform/whats-coming/ai-oversight": "/platform/supervisors/swarmcontrol",
  "/ai-oversight-waitlist": "/platform/supervisors/swarmcontrol",
}

/** Old blog post slug -> migrated success story slug */
const storyPosts = {
  "an-holistic-contact-center-viewwith-connecpath-cx": "peace-hills-general-insurance",
  "connecpath-enhance-customer-agent-andsupervisor-experience": "district-of-columbia-government",
  "connectpath-empowers-intelligent-remoteagents-at-morris-global-group": "morris-global-group",
  "connectpath-enhances-perceptas-amazonconnect-with-agility-and-scalability": "percepta",
  "enhancing-customer-experience-ace-rent-acars-transformation-with-connectpathcx": "ace-rent-a-car",
  "large-municipality-deploys-connectpath-cx-on-amazon-connect": "city-of-atlanta-atl311",
  "onesky": "onesky-flight",
  "prince-william-county-deploys-amazon-connect-and-connectpath-cx": "prince-william-county",
}

/** Remaining blog posts (not migrated) */
const otherPosts = [
  "a-connectpath-feature-tour-within-the-context-of-our-thinking-on-aws-services",
  "a-picture-is-worth-a-thousand-words",
  "agentstatechange",
  "agentstatechange-2",
  "amazon-connect-agent-monitor-coach-chat-and-voice-call",
  "amazon-connect-call-center-basic-planning-guide",
  "amazon-connect-connecpath-now-support-chat",
  "amazon-connect-connectpath-work-to-apply-state-law-to-voice-recordings",
  "amazon-connect-moving-agents-between-queues",
  "arrange-a-call-back-from-queue",
  "aws-connect-configuration-best-practices-part-1-main-greeting-options",
  "aws-connect-configuration-best-practices-part-2-customer-queue-flow",
  "aws-connect-configuration-best-practices-part-3-after-hours-call-flow",
  "aws-connect-connecpath-quick-start-contact-flows",
  "aws-connect-forced-release-behavior-option",
  "aws-connect-setting-holiday-schedules-and-ad-hoc-closings",
  "aws-connect-voice-prompts-with-polly-text-to-speech",
  "can-you-roll-your-own-amazon-connect-call-center",
  "cloudhesive-achieves-amazon-connect-service-ready-specialization",
  "cloudhesive-an-amazon-web-services-aws-premier-partner-acquires-eplexity",
  "configuring-sms-in-connectpath-for-amazon-connect",
  "connecpath-activity-screen-cdrs-disposition-codes-and-recordings",
  "connecpath-adds-email-routing-for-amazon-connect",
  "connecpath-click-to-call-for-amazon-connect",
  "connecpath-cloud-cell-phone-and-forced-release-solution-for-mobility",
  "connecpath-dashboard-agent-audio-output-options",
  "connecpath-dashboard-free-form-disposition-codes",
  "connecpath-global-quick-connect-and-directory-entries",
  "connecpath-is-now-globalized-for-amazon-connect-regions",
  "connecpath-onboarding-notes-user-guide-do-it-yourself",
  "connecpath-queue-based-voice-mail-for-amazon-connect",
  "connecpath-team-status-collaboration-screen-overview",
  "connectpath-crm-options-for-amazon-connect",
  "connectpath-decline-button-for-incoming-call",
  "connectpath-enables-keyword-search-on-amazon-connect-lens-integration",
  "connectpath-enables-voice-analytics-with-lens-integration",
  "connectpath-enhance-customer-agent-andsupervisor-experience",
  "connectpath-flex-adds-new-real-time-metric-options",
  "connectpath-flex-migration-configuration-steps",
  "connectpath-flex-omni-channel-contact-center-powered-by-amazon-connect-feature-tour",
  "connectpath-has-a-new-agent-performance-widget",
  "connectpath-post-on-boarding-must-do-configurations",
  "connectpath-provides-simultaneous-voice-and-tasks-for-amazon-connect",
  "connectpath-real-time-metric-options",
  "connectpath-super-admin-allows-monitoring-of-all-queues",
  "connectpath-supports-amazon-connect-lens",
  "connectpathbyoc",
  "connectpathcountsconnect",
  "connectpathhistory",
  "direct-extension-dialing-with-voice-mail-for-amazon-connect",
  "disposition-codes-for-amazon-connect-call-center",
  "exactly-what-is-a-contact-trace-record",
  "how-to-decide-avaya-amazon-connect-edition",
  "let-your-customers-text-a-request-for-call-back",
  "lex-a-conversational-voice-interface-for-aws-connect-call-trees",
  "live-look-for-aws-connect-using-connecpath-cloud",
  "new-permissions-for-activity-search-in-connectpath-dashboard",
  "set-per-call-outbound-caller-id-for-amazon-connect-2",
  "setting-permissions-in-connectpath-for-historical-reporting-access",
  "the-roi-of-the-connecpath-dashboard-for-amazon-connect-call-centers",
  "understanding-the-true-cost-of-an-amazon-connect-call-centers",
  "welcome-to-connecpath-cloud",
  "what-happens-after-my-free-trial-connecpath-pricing-options",
  "what-makes-up-a-basic-amazon-connect-instance",
  "who-is-the-instance-admin-hint-not-a-user-in-your-call-center-with-admin-role",
]

for (const [slug, story] of Object.entries(storyPosts)) {
  const dest = `/resources/success-stories/${story}`
  pages[`/${slug}`] = dest
  pages[`/es/${slug}`] = dest
}
for (const slug of otherPosts) {
  pages[`/${slug}`] = "/resources/documentation"
  pages[`/es/${slug}`] = "/resources/documentation"
}

export const legacyRedirects = Object.entries(pages).map(([source, destination]) => ({ source, destination }))
