/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    // SwarmControl is released; the "coming soon" and waitlist pages now live here.
    return [
      // Contact and privacy are handled by CloudHesive.
      { source: '/company/contact', destination: 'https://www.cloudhesive.com/contact-us/', permanent: true },
      { source: '/demo', destination: 'https://www.cloudhesive.com/connectpath-powered-by-aws/#talk-to-an-expert', permanent: true },
      { source: '/privacy', destination: 'https://www.cloudhesive.com/privacy-policy/', permanent: true },
      {
        source: '/platform/whats-coming/ai-oversight',
        destination: '/platform/supervisors/swarmcontrol',
        permanent: true,
      },
      {
        source: '/ai-oversight-waitlist',
        destination: '/platform/supervisors/swarmcontrol',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
