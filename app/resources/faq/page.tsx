"use client"

import { CONTACT_URL } from "@/lib/docs"
import { motion } from "framer-motion"
import Link from "next/link"
import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from "@/components/ui/accordion"

const faqCategories = [
  {
    title: "Getting Started",
    faqs: [
      {
        q: "How long does it take to deploy ConnectPath?",
        a: "ConnectPath deploys in less than 15 minutes using our CloudFormation template. Subscribe through AWS Marketplace, run the template, and your supervisors can be monitoring the floor immediately."
      },
      {
        q: "Do I need an existing Amazon Connect instance?",
        a: "Yes, ConnectPath is built to enhance your existing Amazon Connect instance. It deploys on top of Amazon Connect with zero downtime and no infrastructure changes."
      },
      {
        q: "Is there a free trial?",
        a: "Yes, we offer a 14-day free trial through AWS Marketplace. No credit card required—just subscribe and deploy."
      }
    ]
  },
  {
    title: "Technical",
    faqs: [
      {
        q: "What browsers are supported?",
        a: "ConnectPath supports all modern browsers with WebRTC capability including Chrome, Firefox, Edge, and Safari."
      },
      {
        q: "Does ConnectPath work with VDI?",
        a: "Yes, ConnectPath is VDI validated and works with virtual desktop environments. We support VB-Audio for VDI configurations."
      },
      {
        q: "Where is my data stored?",
        a: "ConnectPath can be deployed in your own AWS account for complete data sovereignty, or hosted by CloudHesive. Your data stays in the AWS region of your choice."
      },
      {
        q: "Is ConnectPath encrypted?",
        a: "Yes, all data is encrypted at rest and in transit using AWS encryption standards."
      }
    ]
  },
  {
    title: "Features",
    faqs: [
      {
        q: "Does every agent need ConnectPath?",
        a: "No, you can deploy ConnectPath for supervisors only, or for both supervisors and agents. Pricing is flexible based on your needs."
      },
      {
        q: "What's the difference between whisper in ConnectPath vs. Amazon Connect?",
        a: "Native Amazon Connect whisper refers to pre-recorded audio played before an agent answers. ConnectPath provides LIVE whisper coaching—supervisors can speak directly to agents in real-time during calls without the customer hearing."
      },
      {
        q: "Does ConnectPath have a wallboard?",
        a: "Yes, ConnectPath includes one-click wallboard mode designed for floor displays and TV monitors. No additional configuration required."
      },
      {
        q: "What email server does ConnectPath use?",
        a: "ConnectPath uses Amazon SES for email channel support, providing reliable, scalable email handling."
      }
    ]
  },
  {
    title: "Pricing",
    faqs: [
      {
        q: "How is ConnectPath priced?",
        a: "ConnectPath uses a pay-per-hour model through AWS Marketplace, in addition to your Amazon Connect usage. No seat licenses or long-term commitments."
      },
      {
        q: "Are there any setup fees?",
        a: "No, there are no setup fees. Deploy using CloudFormation and start using ConnectPath immediately."
      },
      {
        q: "Is there a reseller program?",
        a: "Yes, we offer partner and reseller programs. Contact us to learn more about partnership opportunities."
      }
    ]
  },
  {
    title: "Support",
    faqs: [
      {
        q: "How do I get support?",
        a: "Submit tickets through our ServiceNow portal or contact phone support. Support is available globally with regional phone numbers."
      },
      {
        q: "How often are updates released?",
        a: "ConnectPath releases updates approximately every 5 weeks, bringing new features and improvements continuously."
      }
    ]
  }
]

export default function FAQPage() {
  return (
    <PageLayout>
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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                  Frequently Asked Questions
                </h1>
                <p className="text-xl text-cp-slate-300 mb-8">
                  Find answers to common questions about ConnectPath.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.1 }}
                >
                  <h2 className="text-2xl font-serif font-bold text-cp-navy-900 mb-6">{category.title}</h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem 
                        key={faqIndex} 
                        value={`${category.title}-${faqIndex}`}
                        className="border rounded-lg px-6"
                      >
                        <AccordionTrigger className="text-left font-medium text-cp-navy-800 hover:text-cp-teal-700">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-cp-slate-600 leading-relaxed">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
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
                Still Have Questions?
              </h2>
              <p className="text-xl text-cp-slate-300 mb-8">
                Our team is here to help.
              </p>
              <Button size="lg" className="bg-cp-teal-400 hover:bg-cp-teal-600 text-cp-navy-950 font-semibold" asChild>
                <Link href={CONTACT_URL} target="_blank" rel="noopener noreferrer">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
    </PageLayout>
  )
}
