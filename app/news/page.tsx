// app/news/page.tsx
"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Calendar, 
  User, 
  ArrowRight, 
  Search,
  TrendingUp,
  Shield,
  Globe,
  BookOpen
} from "lucide-react";
import { Navbar } from "@/components/navbar.tsx";
import { useState } from "react";

const featuredArticle = {
  title: "New AI Governance Requirements: What Companies Need to Know in 2025",
  excerpt: "As AI adoption accelerates, new regulations are emerging globally. Learn how to prepare your compliance strategy for AI governance requirements.",
  author: "Sarah Chen",
  date: "August 15, 2025",
  readTime: "8 min read",
  category: "AI Governance",
  image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
  featured: true
};

const newsArticles = [
  {
    title: "SOC 2 Type II Requirements Updated for 2025",
    excerpt: "The AICPA has released updated guidance for SOC 2 Type II audits, focusing on enhanced security controls and cloud-native architectures.",
    author: "Michael Rodriguez",
    date: "August 12, 2025",
    readTime: "5 min read",
    category: "SOC 2",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop"
  },
  {
    title: "GDPR Enforcement Trends: €2.1B in Fines This Year",
    excerpt: "European regulators continue aggressive enforcement with record-breaking fines. Here's what your organization needs to know to stay compliant.",
    author: "Emily Johnson",
    date: "August 10, 2025",
    readTime: "6 min read",
    category: "GDPR",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop"
  },
  {
    title: "ISO 27001:2022 Transition Deadline Approaches",
    excerpt: "Organizations still operating under ISO 27001:2013 have until September 2025 to complete their transition. Don't get caught unprepared.",
    author: "David Park",
    date: "August 8, 2025",
    readTime: "4 min read",
    category: "ISO 27001",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop"
  },
  {
    title: "Healthcare Data Breaches Surge 45% in Q2 2025",
    excerpt: "New HHS report shows alarming increase in healthcare data breaches. HIPAA compliance strategies need immediate attention.",
    author: "Dr. Jennifer Martinez",
    date: "August 5, 2025",
    readTime: "7 min read",
    category: "HIPAA",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop"
  },
  {
    title: "Automation in Compliance: ROI Analysis",
    excerpt: "New study reveals companies using compliance automation see 300% ROI within 18 months. Here's how to build your business case.",
    author: "Alex Thompson",
    date: "August 3, 2025",
    readTime: "9 min read",
    category: "Automation",
    image: "https://images.unsplash.com/photo-1518186233392-c232efbf2373?w=400&h=250&fit=crop"
  },
  {
    title: "Small Business Compliance: Essential Checklist for 2025",
    excerpt: "Growing companies often struggle with compliance requirements. Our comprehensive checklist helps you prioritize and plan effectively.",
    author: "Maria Gonzalez",
    date: "July 30, 2025",
    readTime: "6 min read",
    category: "Best Practices",
    image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=400&h=250&fit=crop"
  }
];

const categories = [
  { name: "All", count: 25, icon: BookOpen },
  { name: "SOC 2", count: 8, icon: Shield },
  { name: "GDPR", count: 6, icon: Globe },
  { name: "HIPAA", count: 4, icon: Shield },
  { name: "ISO 27001", count: 5, icon: Shield },
  { name: "AI Governance", count: 2, icon: TrendingUp }
];

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArticles = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
            Compliance News & insights
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest compliance news, regulatory updates, and expert insights 
            to keep your organization ahead of the curve.
          </p>
        </motion.div>
      </section>

      {/* Search and Filter */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <Input
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={selectedCategory === category.name ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.name)}
                className="flex items-center gap-2"
              >
                <category.icon className="w-4 h-4" />
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {selectedCategory === "All" && !searchQuery && (
        <section className="max-w-6xl mx-auto px-6 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <Badge className="mb-3 bg-blue-600 hover:bg-blue-700">
                    Featured
                  </Badge>
                  <Badge variant="secondary" className="ml-2 mb-3">
                    {featuredArticle.category}
                  </Badge>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-slate-500 mb-6 gap-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {featuredArticle.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredArticle.date}
                    </div>
                    <span>{featuredArticle.readTime}</span>
                  </div>
                  <Button>
                    Read Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge 
                    className="absolute top-3 left-3 bg-white/90 text-slate-700 hover:bg-white"
                  >
                    {article.category}
                  </Badge>
                </div>
                
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-slate-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-slate-500 pt-4 border-t">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {article.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {article.date}
                      </div>
                    </div>
                    <span className="text-blue-600 font-medium">{article.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-slate-500 text-lg">No articles found matching your criteria.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
            >
              Clear Filters
            </Button>
          </motion.div>
        )}
      </section>

      {/* Newsletter Signup */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 opacity-90">
            Get the latest compliance news and insights delivered to your inbox weekly.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input 
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
            />
            <Button className="bg-white text-blue-600 hover:bg-gray-100 whitespace-nowrap">
              Subscribe
            </Button>
          </div>
          <p className="text-sm opacity-75 mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </motion.div>
      </section>

      <footer className="w-full py-6 border-t mt-10 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} Trustready. All rights reserved.
      </footer>
    </main>
  );
}
