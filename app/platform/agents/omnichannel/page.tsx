"use client"

import { CONTACT_URL, DEMO_URL } from "@/lib/docs"
import { motion } from "framer-motion"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Phone, 
  MessageSquare, 
  Mail, 
  Smartphone, 
  Video, 
  ClipboardList,
  Languages,
  ArrowRightLeft,
  History,
  ChevronRight
} from "lucide-react"

const channels = [
  {
    icon: Phone,
    title: "Voice",
    description: "Inbound, outbound, and callbacks with full call control"
  },
  {
    icon: MessageSquare,
    title: "Chat",
    description: "Web chat and WhatsApp with real-time translation"
  },
  {
    icon: Mail,
    title: "Email",
    description: "Threading, reply-all, attachments, and multi-domain support"
  },
  {
    icon: Smartphone,
    title: "SMS/MMS",
    description: "Via Pinpoint integration with conversation history"
  },
  {
    icon: Video,
    title: "Video",
    description: "With screen sharing capabilities"
  },
  {
    icon: ClipboardList,
    title: "Tasks",
    description: "Amazon Connect Tasks integration"
  }
]

const features = [
  {
    icon: Languages,
    title: "Real-Time Translation",
    description: "Auto-translate chat and email conversations. Enable translation at any time during the conversation, powered by AWS Translate."
  },
  {
    icon: ArrowRightLeft,
    title: "Transfer Capabilities",
    description: "Blind transfer to queue, warm transfer with conference mode, chat transfer with transcript history, and task transfer via Quick Connect."
  },
  {
    icon: History,
    title: "Omnichannel History",
    description: "View previous interactions with customer across all channels. Up to 20 conversations, paginated, based on customer attributes."
  }
]

export default function OmnichannelPage() {
  return (
    <>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cp-navy-900 via-cp-navy-800 to-cp-navy-900" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link 
                  href="/platform/agents/desktop"
                  className="inline-flex items-center gap-2 text-cp-teal-400 hover:text-cp-teal-300 mb-6"
                >
                  <ChevronRight className="w-4 h-4 rotate-180" />
                  Back to Agent Desktop
                </Link>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                  Every Channel. One Conversation.
                </h1>
                <p className="text-xl text-cp-slate-300 mb-8">
                  Handle voice, chat, email, SMS, WhatsApp, video, and tasks without losing context—complete customer journey in one view.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold" asChild>
                    <Link href="/get-started">Start Free Trial</Link>
                  </Button>
                  <Button size="lg" className="border border-white/20 bg-transparent text-white hover:bg-white/10" asChild>
                    <Link href={DEMO_URL} target="_blank" rel="noopener noreferrer">See Omnichannel in Action</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Supported Channels */}
        <section className="py-20 bg-cp-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-cp-navy-900 mb-4">
                Supported Channels
              </h2>
              <p className="text-lg text-cp-slate-600 max-w-2xl mx-auto">
                All your communication channels unified in a single agent interface.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {channels.map((channel, index) => (
                <motion.div
                  key={channel.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-cp-teal-100 flex items-center justify-center mb-4">
                        <channel.icon className="w-6 h-6 text-cp-teal-700" />
                      </div>
                      <h3 className="text-xl font-semibold text-cp-navy-900 mb-2">{channel.title}</h3>
                      <p className="text-cp-slate-600">{channel.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-2 hover:border-cp-teal-200 transition-colors">
                    <CardContent className="p-8">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cp-teal-400 to-cp-cyan-500 flex items-center justify-center mb-6">
                        <feature.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-semibold text-cp-navy-900 mb-4">{feature.title}</h3>
                      <p className="text-cp-slate-600 leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-cp-navy-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Ready for True Omnichannel?
              </h2>
              <p className="text-xl text-cp-slate-300 mb-8">
                Give your agents one interface for every customer conversation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold" asChild>
                  <Link href="/get-started">Start Free Trial</Link>
                </Button>
                <Button size="lg" className="border border-white/20 bg-transparent text-white hover:bg-white/10" asChild>
                  <Link href={CONTACT_URL} target="_blank" rel="noopener noreferrer">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
