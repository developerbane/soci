"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  Eye,
  Brain,
  TrendingUp,
  Target,
  Globe,
  Shield,
  Users,
  BarChart3,
  Check,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"

const carouselSlides = [
  {
    title: "DECODE SOCIAL",
    subtitle: "BEHAVIOR",
    description:
      "Advanced surveillance hub that tracks social trends, audience insights, and competitor intelligence across all major platforms. Built for elite marketing agencies.",
    gradient: "from-purple-400 via-pink-400 to-orange-400",
  },
  {
    title: "PREDICT VIRAL",
    subtitle: "CONTENT",
    description:
      "AI-powered algorithms detect emerging trends 48 hours before they peak. Get unprecedented insights into what content will dominate tomorrow.",
    gradient: "from-blue-400 via-cyan-400 to-teal-400",
  },
  {
    title: "DOMINATE YOUR",
    subtitle: "MARKET",
    description:
      "Comprehensive competitor surveillance and audience psychographics give you the unfair advantage needed to outperform in any vertical.",
    gradient: "from-green-400 via-emerald-400 to-cyan-400",
  },
]

export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length)
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              SocialScope
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">
              Intelligence
            </Link>
            <Link href="#pricing" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">
              Case Studies
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:inline-flex text-gray-300 hover:text-white hover:bg-gray-800">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 font-semibold">
              Request Demo
            </Button>
          </div>
        </div>
      </header>

      <section className="relative h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
        {/* Animated gradient background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${carouselSlides[currentSlide].gradient} transition-all duration-1000 ease-in-out`}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Main content */}
        <div className="container mx-auto text-center max-w-6xl relative z-10 px-4">
          <Badge className="mb-8 bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20 text-lg px-6 py-2">
            <Brain className="w-4 h-4 mr-2" />
            AI-POWERED SOCIAL INTELLIGENCE PLATFORM
          </Badge>

          {/* Large gradient text */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none mb-4 bg-gradient-to-b from-white/90 to-white/40 bg-clip-text text-transparent tracking-tight">
              {carouselSlides[currentSlide].title}
            </h1>
            <h2 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent tracking-tight">
              {carouselSlides[currentSlide].subtitle}
            </h2>
          </div>

          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            {carouselSlides[currentSlide].description}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 text-xl px-12 py-4 font-semibold shadow-2xl"
            >
              START INTELLIGENCE GATHERING
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-xl px-12 py-4 bg-transparent border-white/30 text-white hover:bg-white/10 font-semibold backdrop-blur-sm"
            >
              VIEW LIVE DEMO
            </Button>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center space-x-3">
            {carouselSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>

          <p className="text-white/60 text-lg mt-8">
            Trusted by VaynerMedia, Neil Patel Digital, and 200+ elite agencies
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Enterprise-Grade Social Intelligence
            </h2>
            <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
              Advanced surveillance capabilities that give you unprecedented insights into social behavior and market
              trends
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">Real-Time Trend Detection</CardTitle>
                <CardDescription className="text-gray-400 text-lg">
                  AI-powered algorithms detect emerging trends across Instagram, TikTok, Twitter, and Facebook before
                  they go viral. Get 48-hour advance notice on trending topics.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">Audience Psychographics</CardTitle>
                <CardDescription className="text-gray-400 text-lg">
                  Deep behavioral analysis reveals audience motivations, pain points, and purchasing triggers. Map
                  customer journeys with 95% accuracy.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/10">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">Competitor Surveillance</CardTitle>
                <CardDescription className="text-gray-400 text-lg">
                  Monitor competitor campaigns, engagement rates, and audience overlap. Receive alerts when competitors
                  launch new initiatives or change strategies.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">Cross-Platform Analytics</CardTitle>
                <CardDescription className="text-gray-400 text-lg">
                  Unified dashboard tracking performance across all major platforms. Advanced attribution modeling shows
                  true ROI and customer lifetime value.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/10">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">Enterprise Security</CardTitle>
                <CardDescription className="text-gray-400 text-lg">
                  Military-grade encryption, SOC 2 compliance, and private cloud deployment. Your competitive
                  intelligence stays completely confidential.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">Predictive AI Models</CardTitle>
                <CardDescription className="text-gray-400 text-lg">
                  Machine learning models predict viral content, optimal posting times, and campaign performance with
                  92% accuracy. Stay ahead of the curve.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Trusted by Marketing Leaders
            </h2>
            <p className="text-2xl text-gray-400">See how elite agencies use SocialScope to dominate their markets</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-purple-500/30 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  "SocialScope gave us a 340% increase in campaign ROI. We can now predict viral content 48 hours before
                  it peaks. Game-changing intelligence."
                </p>
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    G
                  </div>
                  <div className="ml-4">
                    <p className="font-bold text-white text-lg">Gary Vaynerchuk</p>
                    <p className="text-gray-400">CEO, VaynerMedia</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-blue-500/30 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  "The competitor surveillance feature is incredible. We know exactly what our competition is planning
                  before they execute. Unfair advantage."
                </p>
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    N
                  </div>
                  <div className="ml-4">
                    <p className="font-bold text-white text-lg">Neil Patel</p>
                    <p className="text-gray-400">Founder, Neil Patel Digital</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-green-500/30 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  "SocialScope's audience psychographics helped us increase client retention by 85%. The insights are
                  surgical-level precise."
                </p>
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    E
                  </div>
                  <div className="ml-4">
                    <p className="font-bold text-white text-lg">Eric Siu</p>
                    <p className="text-gray-400">CEO, Single Grain</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Enterprise Pricing
            </h2>
            <p className="text-2xl text-gray-400">Premium intelligence for premium agencies</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl text-white mb-4">Standalone</CardTitle>
                <div className="mb-4">
                  <span className="text-6xl font-bold text-white">$2,997</span>
                  <span className="text-gray-400 text-xl">/month</span>
                </div>
                <CardDescription className="text-gray-400 text-lg">
                  Perfect for boutique agencies and consultants
                </CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-lg">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                    <span className="text-gray-300">Up to 3 team members</span>
                  </li>
                  <li className="flex items-center text-lg">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                    <span className="text-gray-300">50 competitor profiles tracked</span>
                  </li>
                  <li className="flex items-center text-lg">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                    <span className="text-gray-300">Real-time trend alerts</span>
                  </li>
                  <li className="flex items-center text-lg">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                    <span className="text-gray-300">Advanced audience analytics</span>
                  </li>
                  <li className="flex items-center text-lg">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                    <span className="text-gray-300">API access & webhooks</span>
                  </li>
                  <li className="flex items-center text-lg">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                    <span className="text-gray-300">Priority support</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-lg py-4 font-semibold">
                  Start Intelligence Gathering
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-blue-500 relative hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg px-6 py-2 font-semibold">
                  Most Popular
                </Badge>
              </div>
              <CardHeader className="text-center pb-8 pt-12">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl text-white mb-4">Teams</CardTitle>
                <div className="mb-4">
                  <span className="text-6xl font-bold text-white">$7,997</span>
                  <span className="text-gray-400 text-xl">/month</span>
                </div>
                <CardDescription className="text-gray-400 text-lg">
                  For established agencies and enterprise teams
                </CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-lg">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                    <span className="text-gray-300">Unlimited team members</span>
                  </li>
                  <li className="flex items-center text-lg">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                    <span className="text-gray-300">500 competitor profiles tracked</span>
                  </li>
                  <li className="flex items-center text-lg">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                    <span className="text-gray-300">Predictive AI models</span>
                  </li>
                  <li className="flex items-center text-lg">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                    <span className="text-gray-300">White-label reporting</span>
                  </li>
                  <li className="flex items-center text-lg">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                    <span className="text-gray-300">Custom integrations</span>
                  </li>
                  <li className="flex items-center text-lg">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                    <span className="text-gray-300">Dedicated success manager</span>
                  </li>
                  <li className="flex items-center text-lg">
                    <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                    <span className="text-gray-300">24/7 priority support</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg py-4 font-semibold">
                  Schedule Strategy Call
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-400 text-lg mb-4">Need custom enterprise solutions?</p>
            <Button
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white text-lg px-8 py-3 bg-transparent"
            >
              Contact Enterprise Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="container mx-auto text-center max-w-5xl relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent tracking-tight">
            Ready to Dominate Your Market?
          </h2>
          <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join the elite agencies using SocialScope to gain unfair competitive advantages. Start your intelligence
            gathering today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-xl px-12 py-4 font-semibold shadow-2xl shadow-purple-500/25"
            >
              Request Private Demo
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white text-xl px-12 py-4 bg-transparent font-semibold"
            >
              View Case Studies
            </Button>
          </div>
          <p className="text-gray-500 text-lg mt-8">
            Trusted by 200+ agencies • $2.3B+ in client revenue tracked • 99.9% uptime SLA
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  SocialScope
                </span>
              </div>
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                Advanced social surveillance platform for elite marketing agencies. Decode behavior, predict trends,
                dominate markets.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 cursor-pointer transition-colors">
                  <span className="text-sm font-semibold">Li</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 cursor-pointer transition-colors">
                  <span className="text-sm font-semibold">Tw</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 cursor-pointer transition-colors">
                  <span className="text-sm font-semibold">Yt</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-6 text-white text-lg">Intelligence</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors text-lg">
                    Trend Detection
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors text-lg">
                    Competitor Analysis
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors text-lg">
                    Audience Insights
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors text-lg">
                    Predictive Models
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-6 text-white text-lg">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors text-lg">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors text-lg">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors text-lg">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors text-lg">
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-6 text-white text-lg">Support</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors text-lg">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors text-lg">
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors text-lg">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors text-lg">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p className="text-lg">&copy; 2024 SocialScope. All rights reserved. Built for elite marketing agencies.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
