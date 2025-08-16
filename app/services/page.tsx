"use client";

const services = [
  {
    icon: Shield,
    title: "SOC 2 Compliance",
    description: "Comprehensive SOC 2 Type I and Type II readiness with automated evidence collection and continuous monitoring.",
    features: ["Automated evidence collection", "Pre-audit readiness assessment", "Ongoing monitoring", "Expert guidance"],
    timeline: "3-6 months",
    popular: true
  },
  {
    icon: Globe,
    title: "ISO 27001 Certification",
    description: "Complete ISO 27001 implementation with risk assessment, policy development, and certification support.",
    features: ["Risk assessment", "ISMS implementation", "Policy templates", "Certification support"],
    timeline: "6-12 months",
    popular: false
  },
  {
    icon: Heart,
    title: "HIPAA Compliance",
    description: "Healthcare-focused compliance with comprehensive BAA management and security controls.",
    features: ["BAA management", "Risk assessments", "Security controls", "Training programs"],
    timeline: "2-4 months",
    popular: false
  },
  {
    icon: Users,
    title: "GDPR Compliance",
    description: "European privacy regulation compliance with data mapping, consent management, and breach procedures.",
    features: ["Data mapping", "Consent management", "Breach procedures", "DPIA templates"],
    timeline: "4-8 months",
    popular: false
  },
  {
    icon: Zap,
    title: "Compliance Automation",
    description: "Automated compliance monitoring with real-time dashboards and intelligent alerting systems.",
    features: ["Real-time monitoring", "Automated reporting", "Risk scoring", "Integration APIs"],
    timeline: "1-2 months",
    popular: true
  },
  {
    icon: FileCheck,
    title: "Multi-Framework Management",
    description: "Manage multiple compliance frameworks from a single platform with shared controls and evidence.",
    features: ["Unified dashboard", "Shared evidence", "Cross-framework mapping", "Efficiency optimization"],
    timeline: "Ongoing",
    popular: false
  }
];

const processSteps = [
  {
    step: "01",
    title: "Assessment",
    description: "We evaluate your current compliance posture and identify gaps."
  },
  {
    step: "02",
    title: "Planning",
    description: "Custom roadmap with timelines, milestones, and resource requirements."
  },
  {
    step: "03",
    title: "Implementation",
    description: "Guided implementation with automated tools and expert support."
  },
  {
    step: "04",
    title: "Monitoring",
    description: "Continuous monitoring and maintenance to ensure ongoing compliance."
  }
];

const benefits = [
  {
    icon: Clock,
    title: "80% Faster",
    description: "Reduce compliance preparation time with automation"
  },
  {
    icon: Target,
    title: "99.8% Success Rate",
    description: "Industry-leading audit success rate"
  },
  {
    icon: Shield,
    title: "Expert Support",
    description: "24/7 access to compliance professionals"
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            Compliance Services & Solutions
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            From SOC 2 to ISO 27001, we provide comprehensive compliance solutions that scale with your business. 
            Automated, expert-guided, and designed for modern companies.
          </p>
          <Button size="lg" className="mr-4">
            Get Started Today
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <benefit.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
              <p className="text-slate-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Comprehensive compliance solutions tailored to your industry and business needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <Card className={`h-full ${service.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {service.popular && (
                  <Badge className="absolute -top-2 left-4 bg-blue-600 hover:bg-blue-700">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <service.icon className="w-10 h-10 text-blue-600 mb-2" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">{service.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center text-sm text-slate-500 mb-4">
                    <span>Timeline: {service.timeline}</span>
                  </div>
                  
                  <Button className="w-full" variant={service.popular ? "default" : "outline"}>
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Process</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A proven methodology that ensures successful compliance outcomes every time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center relative"
            >
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-slate-200 transform translate-x-1/2 z-0" />
              )}
              
              <div className="relative z-10 bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {step.step}
              </div>
              
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Industries We Serve</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Specialized compliance solutions for every industry.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Technology & SaaS",
            "Healthcare & Life Sciences", 
            "Financial Services",
            "E-commerce & Retail",
            "Manufacturing",
            "Professional Services",
            "Education",
            "Government & Public Sector"
          ].map((industry, index) => (
            <motion.div
              key={industry}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent>
                  <h3 className="font-semibold text-slate-900">{industry}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Compliance Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get a free consultation and custom compliance roadmap for your organization.
          </p>
          <div className="space-x-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Request Quote
            </Button>
          </div>
        </motion.div>
      </section>

      <footer className="w-full py-6 border-t mt-10 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} Trustready. All rights reserved.
      </footer>
    </main>
  );
}

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  FileCheck, 
  Users, 
  Globe, 
  Heart, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Clock,
  Target
} from "lucide-react";
import { Navbar } from "@/components/navbar.tsx";


