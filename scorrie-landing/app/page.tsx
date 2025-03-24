"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Menu,
  X,
  Star,
  Sparkles,
  Rocket,
  Shield,
  Users,
  Zap,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import generateStructuredData from "./structured-data";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Hide scroll indicator after scrolling down a bit
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateStructuredData()),
        }}
      />
      <div className="min-h-screen bg-gradient-to-br from-[#0f0514] via-[#1a0933] to-[#0a1a4d] text-white overflow-hidden">
        {/* Header - Floating Dynamic Island */}
        <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 w-auto">
          <div
            className={`px-6 py-3 rounded-full backdrop-blur-xl ${
              scrollY > 50
                ? "bg-black/40 shadow-lg shadow-purple-900/20"
                : "bg-black/20"
            } border border-white/10 transition-all duration-500`}
          >
            <div className="flex items-center justify-between gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center"
              >
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-orange-300 to-blue-400">
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
                <NavLink href="#ai-protection">AI Protection</NavLink>
              </motion.nav>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleMenu}
                  className="text-white"
                >
                  {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20, height: 0 }}
                animate={{ opacity: 1, y: 10, height: "auto" }}
                exit={{ opacity: 0, y: -20, height: 0 }}
                transition={{ duration: 0.3 }}
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
                    <MobileNavLink href="#ai-protection" onClick={toggleMenu}>
                      AI Protection
                    </MobileNavLink>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center pt-20"
        >
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 30,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600 rounded-full opacity-20 blur-3xl"
            ></motion.div>
            <motion.div
              animate={{
                rotate: [0, -360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 25,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              className="absolute top-1/3 -left-40 w-96 h-96 bg-orange-500 rounded-full opacity-20 blur-3xl"
            ></motion.div>
          </div>

          <motion.div
            style={{ opacity, scale }}
            className="container mx-auto px-4 relative z-10"
          >
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-6 inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
              >
                <Rocket className="mr-2 text-orange-300" size={16} />
                <span>Expected Launch: Q2-Q4 2026</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight tracking-tighter"
              >
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-orange-300 to-blue-400 py-1 leading-[1.1]">
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
                A revolutionary platform where trust meets transactions.
                Connecting people safely in a world full of uncertainty.
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
                  className="rounded-full text-lg px-8 py-6 border-white/20 backdrop-blur-md bg-white/5 hover:bg-white/10 group"
                >
                  <Link
                    href="https://www.ruanklopper.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Creator's Website
                    <ExternalLink
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                      size={18}
                    />
                  </Link>
                </Button>

                <Button
                  asChild
                  className="rounded-full text-lg px-8 py-6 bg-gradient-to-r from-purple-600 via-orange-500 to-blue-600 hover:from-purple-700 hover:via-orange-600 hover:to-blue-700 shadow-lg shadow-purple-900/30 group"
                >
                  <Link href="/join-team">
                    Join the Team
                    <ArrowRight
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                      size={18}
                    />
                  </Link>
                </Button>
              </motion.div>

              {/* Enhanced Powered by AI Badge */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-12 w-full flex flex-col items-center"
              >
                <div className="relative mx-auto max-w-md w-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-orange-500 to-blue-600 rounded-3xl blur-md opacity-50"></div>
                  <div className="relative px-10 py-5 rounded-3xl border border-white/20 bg-black/30 backdrop-blur-md flex items-center justify-center">
                    <motion.div
                      animate={{
                        rotate: [0, 10, -10, 10, 0],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                    >
                      <Sparkles className="mr-3 text-yellow-400" size={28} />
                    </motion.div>
                    <div>
                      <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-purple-400">
                        POWERED BY AI
                      </span>
                      <p className="text-xs text-gray-300 mt-1">
                        Advanced protection for your transactions
                      </p>
                    </div>
                  </div>
                </div>

                {/* Animated particles */}
                <div className="relative h-12 w-full flex justify-center">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 rounded-full bg-orange-400"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: "10%",
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                      }}
                    />
                  ))}
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 rounded-full bg-purple-400"
                      style={{
                        left: `${50 + i * 10}%`,
                        top: "30%",
                      }}
                      animate={{
                        y: [0, -15, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        delay: i * 0.3,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <AnimatePresence>
            {showScrollIndicator && (
              <motion.div
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                exit={{ opacity: 0, y: 10 }}
                transition={{
                  y: { duration: 1.5, repeat: Number.POSITIVE_INFINITY },
                  exit: { duration: 0.3 },
                }}
                className="absolute bottom-10 left-0 right-0 mx-auto text-center w-full"
              >
                <div className="flex flex-col items-center justify-center">
                  <span className="text-sm text-gray-400 mb-2">
                    Scroll to explore
                  </span>
                  <ChevronDown className="text-gray-400 mx-auto" size={24} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-32 relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full opacity-10 blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex flex-col items-center mb-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 via-orange-400 to-blue-500 flex items-center justify-center mb-6 rotate-12"
                >
                  <Users className="text-white" size={32} />
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-orange-300 to-blue-400">
                    The Mystery Unveiled
                  </span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-400 via-orange-300 to-blue-400 rounded-full mb-6"></div>
                <p className="text-xl text-gray-300 max-w-2xl">
                  Discover what makes Scorrie different from anything you've
                  seen before
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <GlassMorphicCard
                  title="Trustworthy"
                  description="Scorrie creates a secure environment where every interaction is built on trust and transparency."
                  icon={<Shield className="text-orange-300" size={24} />}
                />

                <GlassMorphicCard
                  title="Community-Focused"
                  description="Connect with real people in your community through a platform that prioritizes authentic interactions."
                  icon={<Users className="text-purple-400" size={24} />}
                />

                <GlassMorphicCard
                  title="Secure"
                  description="Advanced verification systems ensure you're always dealing with legitimate users, not scammers or bots."
                  icon={<Shield className="text-blue-400" size={24} />}
                />

                <GlassMorphicCard
                  title="Simplified"
                  description="A streamlined experience that makes connecting and transacting with others effortless and worry-free."
                  icon={<Zap className="text-orange-300" size={24} />}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 md:py-32 relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full opacity-10 blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <div className="flex flex-col items-center mb-12">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 via-orange-400 to-blue-500 flex items-center justify-center mb-6 -rotate-12"
                >
                  <Rocket className="text-white" size={32} />
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-orange-300 to-blue-400">
                    What to Expect
                  </span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-400 via-orange-300 to-blue-400 rounded-full mb-6"></div>
                <p className="text-xl text-gray-300 max-w-2xl">
                  A safer way to connect, share, and exchange with others in
                  your community
                </p>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <NeumorphicFeatureCard
                title="Verified Profiles"
                description="Multi-layer verification ensures you're always dealing with real, trustworthy people."
                icon={<SeamlessIcon />}
              />

              <NeumorphicFeatureCard
                title="Secure Transactions"
                description="Protected interaction systems that drastically reduce the risk of scams and fraud. (Coming 2027)"
                icon={<TechIcon />}
              />

              <NeumorphicFeatureCard
                title="Local Connections"
                description="Find what you need from people in your community, building local networks of trust."
                icon={<GlobalIcon />}
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
                  <motion.div
                    className="mb-6 p-4 rounded-full bg-gradient-to-br from-purple-500/20 via-orange-400/20 to-blue-500/20 shadow-inner"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Star className="text-orange-300" size={40} />
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-orange-300 to-blue-400">
                    Something Special for Early Adopters
                  </h3>
                  <p className="text-lg text-gray-300 mb-0">
                    Our first loyal users will receive exclusive benefits and
                    features when Scorrie launches. Be part of the revolution
                    from day one.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* AI Protection Section */}
        <section id="ai-protection" className="py-20 md:py-32 relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-orange-500 rounded-full opacity-10 blur-3xl"></div>
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
                <motion.div
                  className="relative"
                  animate={{
                    rotate: [0, 5, -5, 5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-orange-500 to-blue-600 blur-lg opacity-30 rounded-full"></div>
                  <Sparkles className="w-16 h-16 text-yellow-400 relative z-10" />
                </motion.div>
              </div>

              <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-purple-400">
                  POWERED BY AI
                </span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-purple-400 rounded-full mx-auto mb-6"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                Advanced artificial intelligence working around the clock to
                protect you and your transactions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-start mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-orange-400/20 mr-4">
                    <Shield className="text-orange-300" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-orange-300 to-blue-400">
                    Fraud Detection
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Our AI constantly monitors for suspicious patterns and
                  behaviors, identifying potential scams before they can affect
                  you.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-orange-400 mt-2 mr-2"></div>
                    <span className="text-gray-300">
                      Real-time transaction analysis
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-orange-400 mt-2 mr-2"></div>
                    <span className="text-gray-300">
                      Behavioral pattern recognition
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-orange-400 mt-2 mr-2"></div>
                    <span className="text-gray-300">
                      Automated risk assessment
                    </span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-start mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-orange-400/20 mr-4">
                    <Users className="text-purple-400" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-orange-300 to-blue-400">
                    Identity Protection
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Advanced AI verification systems ensure you're always dealing
                  with legitimate users while keeping your personal data secure.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 mr-2"></div>
                    <span className="text-gray-300">
                      Multi-factor authentication
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 mr-2"></div>
                    <span className="text-gray-300">
                      Biometric verification
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 mr-2"></div>
                    <span className="text-gray-300">
                      Privacy-preserving technology
                    </span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-start mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-orange-400/20 mr-4">
                    <Zap className="text-blue-400" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-orange-300 to-blue-400">
                    Safe Interactions
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">
                  AI-powered systems monitor communications and transactions to
                  ensure all interactions remain safe and appropriate.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 mr-2"></div>
                    <span className="text-gray-300">Content moderation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 mr-2"></div>
                    <span className="text-gray-300">Harassment detection</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 mr-2"></div>
                    <span className="text-gray-300">
                      Secure messaging protocols
                    </span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-start mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-orange-400/20 mr-4">
                    <Shield className="text-orange-300" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-orange-300 to-blue-400">
                    Civilian Protection
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Our AI is designed with one primary goal: keeping everyday
                  people safe from scams, fraud, and harmful interactions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-orange-400 mt-2 mr-2"></div>
                    <span className="text-gray-300">
                      Scam prevention algorithms
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-orange-400 mt-2 mr-2"></div>
                    <span className="text-gray-300">
                      Vulnerable user protection
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-orange-400 mt-2 mr-2"></div>
                    <span className="text-gray-300">
                      Community safety monitoring
                    </span>
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
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-orange-300 to-blue-400">
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

                <Link
                  href="/join-team"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Join the Team
                </Link>

                <Link
                  href="/investors"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  For Investors
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

// Navigation Components
function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-gray-200 hover:text-white transition-colorsors relative group px-2 py-1"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 via-orange-300 to-blue-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
    </Link>
  );
}

function MobileNavLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-gray-200 hover:text-white transition-colors py-2 px-4 block rounded-lg hover:bg-white/5"
    >
      {children}
    </Link>
  );
}

// UI Components
function ArrowDown() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 5V19M12 19L19 12M12 19L5 12"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GlassMorphicCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all"
    >
      <div className="flex items-start mb-4">
        <div className="p-2 rounded-lg bg-white/10 mr-4">{icon}</div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-orange-300 to-blue-400">
          {title}
        </h3>
      </div>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
}

function NeumorphicFeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-[#150a20] rounded-3xl p-8 shadow-[5px_5px_15px_rgba(0,0,0,0.3),-5px_-5px_15px_rgba(255,255,255,0.05)] hover:shadow-[inset_5px_5px_15px_rgba(0,0,0,0.3),inset_-5px_-5px_15px_rgba(255,255,255,0.05)] transition-all duration-300"
    >
      <div className="flex flex-col items-center text-center">
        <motion.div
          className="mb-6 p-4 rounded-full bg-gradient-to-br from-purple-500/20 via-orange-400/20 to-blue-500/20 shadow-inner"
          whileHover={{ rotate: 5, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {icon}
        </motion.div>
        <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-orange-300 to-blue-400">
          {title}
        </h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
}

// Icons
function SeamlessIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="url(#paint0_linear)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 16V12"
        stroke="url(#paint1_linear)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 8H12.01"
        stroke="url(#paint2_linear)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="2"
          y1="12"
          x2="22"
          y2="12"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A855F7" />
          <stop offset="0.5" stopColor="#FB923C" />
          <stop offset="1" stopColor="#3B82F6" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="12"
          y1="14"
          x2="13"
          y2="14"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A855F7" />
          <stop offset="0.5" stopColor="#FB923C" />
          <stop offset="1" stopColor="#3B82F6" />
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="12"
          y1="8"
          x2="12.01"
          y2="8"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A855F7" />
          <stop offset="0.5" stopColor="#FB923C" />
          <stop offset="1" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function TechIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 18H12.01M7 21H17C18.1046 21 19 20.1046 19 19V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21Z"
        stroke="url(#paint0_linear)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="5"
          y1="12"
          x2="19"
          y2="12"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A855F7" />
          <stop offset="0.5" stopColor="#FB923C" />
          <stop offset="1" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function GlobalIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="url(#paint0_linear)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 12H22"
        stroke="url(#paint1_linear)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z"
        stroke="url(#paint2_linear)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="2"
          y1="12"
          x2="22"
          y2="12"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A855F7" />
          <stop offset="0.5" stopColor="#FB923C" />
          <stop offset="1" stopColor="#3B82F6" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="2"
          y1="12.5"
          x2="22"
          y2="12.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A855F7" />
          <stop offset="0.5" stopColor="#FB923C" />
          <stop offset="1" stopColor="#3B82F6" />
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="8"
          y1="12"
          x2="16"
          y2="12"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A855F7" />
          <stop offset="0.5" stopColor="#FB923C" />
          <stop offset="1" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
    </svg>
  );
}
