"use client";

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "CEO & Founder",
    background: "Former CISO at Fortune 500 companies",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Michael Rodriguez",
    role: "CTO",
    background: "15+ years in cybersecurity and compliance",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Emily Johnson",
    role: "Head of Compliance",
    background: "Former Big 4 audit partner, compliance specialist",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  },
];

const values = [
  {
    icon: Shield,
    title: "Security First",
    description:
      "We prioritize the security of your data and systems above all else.",
  },
  {
    icon: Users,
    title: "Customer Success",
    description:
      "Your compliance success is our success. We're with you every step.",
  },
  {
    icon: Target,
    title: "Precision",
    description: "Accurate, thorough, and reliable compliance solutions.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in everything we do.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-6">
            About<b> Trustready </b>
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            we help fast-growing companies achieve compliance without the
            hassle. From audit preparation to ongoing monitoring, our platform
            ensures you stay compliant while focusing on growth. Built for
            startups and enterprises alike, we make trust your competitive
            advantage.
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
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4">
              <p>
                Founded in 2024, Trustready emerged from a simple observation:
                compliance shouldn't be a barrier to growth. Our founder, having
                spent decades in cybersecurity and audit roles, witnessed
                countless companies struggle with manual, time-consuming
                compliance processes.
              </p>
              <p>
                We built Trustready to change that narrative. By combining deep
                compliance expertise with cutting-edge automation technology,
                we've created a platform that makes achieving and maintaining
                compliance as straightforward as possible.
              </p>
              <p>
                Today, we help hundreds of companies across industries navigate
                complex regulatory landscapes, from startups seeking their first
                SOC 2 to enterprises managing multiple frameworks
                simultaneously.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-0"
          >
            <Card>
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold">100+</div>
                  <div>Companies Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">99.8%</div>
                  <div>Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">4+</div>
                  <div>Frameworks Supported</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">24/7</div>
                  <div>Expert Support</div>
                </div>
              </div>
            </Card>
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
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p className="max-w-2xl mx-auto">
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
                  <value.icon className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
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
          className="rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of companies who trust us with their compliance needs.
          </p>
          <div className="space-x-4">
            <Button asChild>
              <Link href="/">Contact Us</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}

import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Shield, Target, Award } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
