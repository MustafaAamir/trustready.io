// app/about/page.tsx
"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Shield, Target, Award } from "lucide-react";
import { Navbar } from "@/components/navbar.tsx";

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "CEO & Founder",
    background: "Former CISO at Fortune 500 companies",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Michael Rodriguez",
    role: "CTO",
    background: "15+ years in cybersecurity and compliance",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Emily Johnson",
    role: "Head of Compliance",
    background: "Former Big 4 audit partner, compliance specialist",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
  }
];

const values = [
  {
    icon: Shield,
    title: "Security First",
    description: "We prioritize the security of your data and systems above all else."
  },
  {
    icon: Users,
    title: "Customer Success",
    description: "Your compliance success is our success. We're with you every step."
  },
  {
    icon: Target,
    title: "Precision",
    description: "Accurate, thorough, and reliable compliance solutions."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in everything we do."
  }
];

export default function AboutPage() {
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
            About Trustready
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
		  we help fast-growing companies achieve compliance without the hassle. From
          audit preparation to ongoing monitoring, our platform ensures you stay
          compliant while focusing on growth. Built for startups and enterprises
          alike, we make trust your competitive advantage.
          </p>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-slate-600">
              <p>
                Founded in 2022, Trustready emerged from a simple observation: compliance shouldn't be a barrier to growth. 
                Our founder, having spent decades in cybersecurity and audit roles, witnessed countless companies struggle 
                with manual, time-consuming compliance processes.
              </p>
              <p>
                We built Trustready to change that narrative. By combining deep compliance expertise with cutting-edge 
                automation technology, we've created a platform that makes achieving and maintaining compliance as 
                straightforward as possible.
              </p>
              <p>
                Today, we help hundreds of companies across industries navigate complex regulatory landscapes, 
                from startups seeking their first SOC 2 to enterprises managing multiple frameworks simultaneously.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-slate-600">Companies Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">99.8%</div>
                <div className="text-slate-600">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">50+</div>
                <div className="text-slate-600">Frameworks Supported</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600">24/7</div>
                <div className="text-slate-600">Expert Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Values</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            These principles guide everything we do and every decision we make.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full text-center p-6">
                <CardContent className="pt-6">
                  <value.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Meet Our Leadership</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our team brings decades of combined experience in cybersecurity, compliance, and technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="text-center">
                <CardContent className="pt-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-slate-900 mb-1">{member.name}</h3>
                  <Badge variant="secondary" className="mb-3">{member.role}</Badge>
                  <p className="text-slate-600 text-sm">{member.background}</p>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of companies who trust Trustready with their compliance needs.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Request Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Contact Us
            </button>
          </div>
        </motion.div>
      </section>

      <footer className="w-full py-6 border-t mt-10 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} Trustready. All rights reserved.
      </footer>
    </main>
  );
}
