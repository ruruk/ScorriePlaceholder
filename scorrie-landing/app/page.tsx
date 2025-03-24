"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight, ExternalLink, Menu, X, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

import generateStructuredData from "./structured-data"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateStructuredData()) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-[#0f0514] via-[#1a0933] to-[#0a1a4d] text-white overflow-hidden">
        {/* Header - Floating Dynamic Island */}
        <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 w-auto">
          <div
            className={`px-6 py-3 rounded-full backdrop-blur-xl ${scrollY > 50 ? "bg-black/40 shadow-lg shadow-purple-900/20" : "bg-black/20"} border border-white/10 transition-all duration-500`}
          >
            <div className="flex items-center justify-between gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center"
              >
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  SCORRIE
                </span>
              </motion.div>

              {/* Desktop Navigation */}
              <motion.nav
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="hidden md:flex space-x-8"
              >
                <NavLink href="#about">About</NavLink>
                <NavLink href="#features">Features</NavLink>
              </motion.nav>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-white">
                  {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 10 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[90vw] max-w-sm"
            >
              <div className="backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl p-4 shadow-lg shadow-purple-900/20">
                <div className="flex flex-col space-y-3">
                  <MobileNavLink href="#about" onClick={toggleMenu}>
                    About
                  </MobileNavLink>
                  <MobileNavLink href="#features" onClick={toggleMenu}>
                    Features
                  </MobileNavLink>
                </div>
              </div>
            </motion.div>
          )}
        </header>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute top-1/3 -left-40 w-96 h-96 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-6 inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
              >
                v1.0.0 Expected Q2-Q4 2026
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight tracking-tighter"
              >
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400">
                  Something Big
                </span>
                <span className="block">Is Coming</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
              >
                A revolutionary platform where trust meets transactions. Connecting people safely in a world full of
                uncertainty.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full text-lg px-8 py-6 border-white/20 backdrop-blur-md bg-white/5 hover:bg-white/10"
                >
                  <Link href="https://www.ruanklopper.com" target="_blank" rel="noopener noreferrer">
                    Creator's Website <ExternalLink className="ml-2" size={18} />
                  </Link>
                </Button>

                <Button
                  asChild
                  className="rounded-full text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg shadow-purple-900/30"
                >
                  <Link href="/join-team">
                    Join the Team <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-8 inline-flex items-center px-6 py-3 rounded-2xl border border-gradient-to-r from-purple-400 to-blue-400 bg-black/30 backdrop-blur-md"
              >
                <Star className="mr-3 text-yellow-400" size={20} />
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-purple-400 to-blue-400">
                  Powered by AI
                </span>
              </motion.div>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-32 relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  The Mystery Unveiled
                </span>
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <GlassMorphicCard
                  title="Trustworthy"
                  description="Scorrie creates a secure environment where every interaction is built on trust and transparency."
                  delay={0}
                />

                <GlassMorphicCard
                  title="Community-Focused"
                  description="Connect with real people in your community through a platform that prioritizes authentic interactions."
                  delay={0.2}
                />

                <GlassMorphicCard
                  title="Secure"
                  description="Advanced verification systems ensure you're always dealing with legitimate users, not scammers or bots."
                  delay={0.4}
                />

                <GlassMorphicCard
                  title="Simplified"
                  description="A streamlined experience that makes connecting and transacting with others effortless and worry-free."
                  delay={0.6}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 md:py-32 relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  What to Expect
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                A safer way to connect, share, and exchange with others in your community
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <NeumorphicFeatureCard
                title="Verified Profiles"
                description="Multi-layer verification ensures you're always dealing with real, trustworthy people."
                icon={<SeamlessIcon />}
                delay={0}
              />

              <NeumorphicFeatureCard
                title="Secure Transactions"
                description="Protected interaction systems that drastically reduce the risk of scams and fraud. (Coming 2027)"
                icon={<TechIcon />}
                delay={0.2}
              />

              <NeumorphicFeatureCard
                title="Local Connections"
                description="Find what you need from people in your community, building local networks of trust."
                icon={<GlobalIcon />}
                delay={0.4}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-20 text-center"
            >
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-xl max-w-2xl mx-auto">
                <div className="flex flex-col items-center">
                  <div className="mb-6 p-4 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 shadow-inner">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                        stroke="url(#paint0_linear)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z"
                        stroke="url(#paint1_linear)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="9"
                          y1="12"
                          x2="15"
                          y2="12"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#A855F7" />
                          <stop offset="1" stopColor="#3B82F6" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear"
                          x1="1"
                          y1="12"
                          x2="23"
                          y2="12"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#A855F7" />
                          <stop offset="1" stopColor="#3B82F6" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                    Something Special for Early Adopters
                  </h3>
                  <p className="text-lg text-gray-300 mb-0">
                    Our first loyal users will receive exclusive benefits and features when Scorrie launches. Be part of
                    the revolution from day one.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* AI Protection Section */}
        <section className="py-20 md:py-32 relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto text-center mb-16"
            >
              <div className="inline-flex items-center justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 blur-lg opacity-30 rounded-full"></div>
                  <Star className="w-12 h-12 text-yellow-400 relative z-10" />
                </div>
              </div>

              <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-purple-400 to-blue-400">
                  POWERED BY AI
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                Advanced artificial intelligence working around the clock to protect you and your transactions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors"
              >
                <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  Fraud Detection
                </h3>
                <p className="text-gray-300 mb-4">
                  Our AI constantly monitors for suspicious patterns and behaviors, identifying potential scams before
                  they can affect you.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 mr-2"></div>
                    <span className="text-gray-300">Real-time transaction analysis</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 mr-2"></div>
                    <span className="text-gray-300">Behavioral pattern recognition</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 mr-2"></div>
                    <span className="text-gray-300">Automated risk assessment</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors"
              >
                <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  Identity Protection
                </h3>
                <p className="text-gray-300 mb-4">
                  Advanced AI verification systems ensure you're always dealing with legitimate users while keeping your
                  personal data secure.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 mr-2"></div>
                    <span className="text-gray-300">Multi-factor authentication</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 mr-2"></div>
                    <span className="text-gray-300">Biometric verification</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 mr-2"></div>
                    <span className="text-gray-300">Privacy-preserving technology</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors"
              >
                <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  Safe Interactions
                </h3>
                <p className="text-gray-300 mb-4">
                  AI-powered systems monitor communications and transactions to ensure all interactions remain safe and
                  appropriate.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 mr-2"></div>
                    <span className="text-gray-300">Content moderation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 mr-2"></div>
                    <span className="text-gray-300">Harassment detection</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 mr-2"></div>
                    <span className="text-gray-300">Secure messaging protocols</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors"
              >
                <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  Civilian Protection
                </h3>
                <p className="text-gray-300 mb-4">
                  Our AI is designed with one primary goal: keeping everyday people safe from scams, fraud, and harmful
                  interactions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 mr-2"></div>
                    <span className="text-gray-300">Scam prevention algorithms</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 mr-2"></div>
                    <span className="text-gray-300">Vulnerable user protection</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 mr-2"></div>
                    <span className="text-gray-300">Community safety monitoring</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-white/10 backdrop-blur-md bg-black/20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  SCORRIE
                </span>
              </div>

              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                <Link
                  href="https://www.ruanklopper.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Created by Ruan Klopper
                </Link>

                <Link href="/join-team" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Join the Team
                </Link>

                <Link href="/investors" className="text-sm text-gray-400 hover:text-white transition-colors">
                  For Investors
                </Link>

                <span className="text-sm text-gray-400">Launching June 2026</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

// Navigation Components
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-gray-200 hover:text-white transition-colors relative group px-2 py-1">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
    </Link>
  )
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-gray-200 hover:text-white transition-colors py-2 px-4 block rounded-lg hover:bg-white/5"
    >
      {children}
    </Link>
  )
}

// UI Components
function ArrowDown() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 5V19M12 19L19 12M12 19L5 12"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function GlassMorphicCard({ title, description, delay = 0 }: { title: string; description: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-colors"
    >
      <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
        {title}
      </h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}

function NeumorphicFeatureCard({
  title,
  description,
  icon,
  delay = 0,
}: {
  title: string
  description: string
  icon: React.ReactNode
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="bg-[#150a20] rounded-3xl p-8 shadow-[5px_5px_15px_rgba(0,0,0,0.3),-5px_-5px_15px_rgba(255,255,255,0.05)] hover:shadow-[inset_5px_5px_15px_rgba(0,0,0,0.3),inset_-5px_-5px_15px_rgba(255,255,255,0.05)] transition-all duration-300"
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-6 p-4 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 shadow-inner">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  )
}

// Icons
function SeamlessIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 2 12C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="url(#paint0_linear)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 16V12" stroke="url(#paint1_linear)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 8H12.01" stroke="url(#paint2_linear)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="paint0_linear" x1="2" y1="12" x2="22" y2="12" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A855F7" />
          <stop offset="1" stopColor="#3B82F6" />
        </linearGradient>
        <linearGradient id="paint1_linear" x1="12" y1="14" x2="13" y2="14" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A855F7" />
          <stop offset="1" stopColor="#3B82F6" />
        </linearGradient>
        <linearGradient id="paint2_linear" x1="12" y1="8" x2="12.01" y2="8" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A855F7" />
          <stop offset="1" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function TechIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 18H12.01M7 21H17C18.1046 21 19 20.1046 19 19V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21Z"
        stroke="url(#paint0_linear)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="paint0_linear" x1="5" y1="12" x2="19" y2="12" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A855F7" />
          <stop offset="1" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function GlobalIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 2 12C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="url(#paint0_linear)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M2 12H22" stroke="url(#paint1_linear)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z"
        stroke="url(#paint2_linear)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="paint0_linear" x1="2" y1="12" x2="22" y2="12" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A855F7" />
          <stop offset="1" stopColor="#3B82F6" />
        </linearGradient>
        <linearGradient id="paint1_linear" x1="2" y1="12.5" x2="22" y2="12.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A855F7" />
          <stop offset="1" stopColor="#3B82F6" />
        </linearGradient>
        <linearGradient id="paint2_linear" x1="8" y1="12" x2="16" y2="12" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A855F7" />
          <stop offset="1" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
    </svg>
  )
}

