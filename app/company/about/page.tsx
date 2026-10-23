"use client"

import { CONTACT_URL } from "@/lib/docs"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, MapPin, ExternalLink, Cloud, Shield, Cpu, Database, BarChart3, Server, Boxes, Globe, Sparkles } from "lucide-react"
import Link from "next/link"

const awsValidations = [
  { name: "Amazon Connect Service Delivery", icon: Cloud },
  { name: "Amazon Connect Service Ready", icon: Shield },
  { name: "AWS Lambda", icon: Cpu },
  { name: "AWS Control Tower", icon: Server },
  { name: "Amazon EC2", icon: Boxes },
  { name: "Amazon CloudFront", icon: Globe },
  { name: "Amazon EKS", icon: Boxes },
  { name: "Amazon RDS", icon: Database },
  { name: "Amazon QuickSight", icon: BarChart3 },
  { name: "Amazon ECS", icon: Boxes },
  { name: "AWS Generative AI Competency", icon: Sparkles },
]

const timeline = [
  { year: "2014", milestone: "Founded in Fort Lauderdale, FL" },
  { year: "2016", milestone: "Centricity platform development begins" },
  { year: "2017", milestone: "Latin America expansion—Buenos Aires office" },
  { year: "2018", milestone: "Amazon Connect Partner designation" },
  { year: "2019", milestone: "Chile office opens; INC 5000 recognition" },
  { year: "2020", milestone: "AWS SaaS Competency achieved" },
  { year: "2021", milestone: "AWS Partner of the Year—Chile" },
  { year: "2022", milestone: "AWS Public Sector Partner of the Year—Chile & Argentina" },
  { year: "2023", milestone: "AWS Public Sector Partner of the Year—LATAM; Amazon Connect Service Ready" },
  { year: "2024", milestone: "AWS Generative AI Competency achieved" },
]

const recognition = [
  "Inc. 5000 Fastest Growing Companies (multiple years)",
  "South Florida Business Journal: Best Places to Work (2018-2024)",
  "AWS Public Sector Partner of the Year—LATAM (2023)",
  "Deloitte Technology Fast 500",
  "GrowFL Top 50 Companies to Watch",
]

const offices = [
  { city: "Fort Lauderdale, FL", note: "Headquarters" },
  { city: "Denver, CO", note: "" },
  { city: "Santiago de Chile", note: "" },
  { city: "Bogotá, Colombia", note: "" },
  { city: "Buenos Aires, Argentina", note: "" },
]

export default function AboutPage() {
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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                  About CloudHesive
                </h1>
                <p className="text-xl text-cp-navy-200 mb-8">
                  AWS Premier Consulting Partner building cloud solutions since 2014.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20 bg-cp-teal-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-2xl md:text-3xl text-cp-navy-800 leading-relaxed font-serif italic mb-8">
                  &ldquo;An expert team of customer-obsessed cloud professionals providing a unique combination of services, support, and software that converge to deliver a premiere experience.&rdquo;
                </p>
                <p className="text-lg text-cp-navy-600 leading-relaxed">
                  We are passionate about reducing the challenges our customers face building and operating today&apos;s cloud-based mission critical systems. Our customers&apos; success is our own success.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-cp-navy-900 mb-8">
                  Who We Are
                </h2>
                <p className="text-lg text-cp-navy-700 leading-relaxed">
                  ConnectPath is developed by CloudHesive, a cloud software and services provider founded in 2014 by veterans in the technology arena.
                </p>
                <p className="text-lg text-cp-navy-700 leading-relaxed">
                  As AWS Premier Consulting Partners with Amazon Connect Service Ready Specialization—plus validated expertise across Lambda, EKS, RDS, QuickSight, and more—we bring deep AWS knowledge to every contact center deployment.
                </p>
                <p className="text-lg text-cp-navy-700 leading-relaxed">
                  In 2024, we achieved AWS Generative AI Competency, positioning us at the forefront of AI-powered customer experience solutions.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* AWS Service Validations */}
        <section className="py-20 bg-cp-navy-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-cp-navy-900 mb-4">
                AWS Service Validations
              </h2>
              <p className="text-lg text-cp-navy-600">
                Certified expertise across the AWS ecosystem
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {awsValidations.map((validation, index) => (
                <motion.div
                  key={validation.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="h-full hover:shadow-md transition-shadow border-cp-navy-100">
                    <CardContent className="p-4 flex flex-col items-center text-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-cp-teal-100 flex items-center justify-center">
                        <validation.icon className="w-5 h-5 text-cp-teal-700" />
                      </div>
                      <p className="text-sm font-medium text-cp-navy-800">{validation.name}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-cp-navy-900 mb-4">
                Our Journey
              </h2>
              <p className="text-lg text-cp-navy-600">
                A decade of cloud excellence
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-cp-teal-200 transform md:-translate-x-1/2" />
                
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative flex items-center mb-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} pl-8 md:pl-0`}>
                      <Card className="inline-block">
                        <CardContent className="p-4">
                          <span className="text-cp-teal-700 font-bold text-lg">{item.year}</span>
                          <p className="text-cp-navy-700 mt-1">{item.milestone}</p>
                        </CardContent>
                      </Card>
                    </div>
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-cp-teal-500 rounded-full transform md:-translate-x-1/2 -translate-x-1" />
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Recognition */}
        <section className="py-20 bg-cp-navy-900">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                Recognition & Awards
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {recognition.map((award, index) => (
                <motion.div
                  key={award}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-cp-navy-800/50 rounded-lg p-4"
                >
                  <Award className="w-5 h-5 text-cp-cyan-400 shrink-0" />
                  <span className="text-white text-sm">{award}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-cp-navy-900 mb-4">
                Office Locations
              </h2>
              <p className="text-lg text-cp-navy-600">
                Global presence, local expertise
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {offices.map((office, index) => (
                <motion.div
                  key={office.city}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-cp-teal-500" />
                      <span className="text-cp-navy-800">{office.city}</span>
                      {office.note && (
                        <span className="text-xs text-cp-teal-700 font-medium">({office.note})</span>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-cp-teal-600 to-cp-teal-700">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Learn More About CloudHesive
              </h2>
              <p className="text-xl text-cp-teal-100 mb-8">
                Visit our corporate website for more information about our services and solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-cp-teal-700 hover:bg-cp-teal-50" asChild>
                  <a href="https://cloudhesive.com" target="_blank" rel="noopener noreferrer">
                    Visit cloudhesive.com
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button size="lg" className="border border-white bg-transparent text-white hover:bg-white/10" asChild>
                  <Link href={CONTACT_URL} target="_blank" rel="noopener noreferrer">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
