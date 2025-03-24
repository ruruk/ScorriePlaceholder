"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Menu, X, Lock, Eye, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function Investors() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle the form submission here
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0514] via-[#1a0933] to-[#0a1a4d] text-white">
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
              <Link href="/">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-orange-300 to-blue-400">
                  SCORRIE
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:flex space-x-8"
            >
              <NavLink href="/">Home</NavLink>
              <NavLink href="/join-team">Join the Team</NavLink>
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
                  <MobileNavLink href="/" onClick={toggleMenu}>
                    Home
                  </MobileNavLink>
                  <MobileNavLink href="/join-team" onClick={toggleMenu}>
                    Join the Team
                  </MobileNavLink>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <div className="container mx-auto px-4 pt-32 pb-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="mb-6 inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <Lock className="mr-2 text-orange-300" size={16} />
            <span>Exclusive Investment Opportunity</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tighter">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-orange-300 to-blue-400 py-1 leading-[1.1]">
              A Vision Worth Investing In
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Scorrie represents a revolutionary approach to a market plagued with
            trust issues. We're building something that will transform how
            people connect and transact online.
          </p>
        </motion.div>

        {/* Mysterious Content */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-20"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <MysteryCard
              icon={<Lock className="w-8 h-8" />}
              title="Confidential"
              description="The details of our revolutionary approach are shared exclusively in person with serious investors."
            />
            <MysteryCard
              icon={<Eye className="w-8 h-8" />}
              title="Visionary"
              description="We're targeting a massive market opportunity with a unique solution that addresses critical pain points."
            />
            <MysteryCard
              icon={<Shield className="w-8 h-8" />}
              title="Transformative"
              description="Our platform will fundamentally change how people interact in online marketplaces, with trust at its core."
            />
          </div>

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 mt-12">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-orange-300 to-blue-400">
                Let's Discuss in Person
              </h3>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
                We believe that the most meaningful conversations happen
                face-to-face. If you're a serious investor interested in
                learning more about Scorrie's vision, technology, and market
                opportunity, we'd be delighted to arrange an in-person meeting.
              </p>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Complete the form below to express your interest, and our
                founder will personally reach out to arrange a confidential
                discussion.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Contact Form */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-orange-300 to-blue-400">
                Connect With Us
              </span>
            </h2>
            <p className="text-lg text-gray-300">
              Interested in learning more about investing in Scorrie? Let's
              start a conversation.
            </p>
          </div>

          {formSubmitted ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-xl text-center"
            >
              <div className="mb-6 p-4 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 shadow-inner inline-block">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 11.0799V11.9999C21.9988 14.1563 21.3005 16.2545 20.0093 17.9817C18.7182 19.7088 16.9033 20.9723 14.8354 21.5838C12.7674 22.1952 10.5573 22.1218 8.53447 21.3746C6.51168 20.6274 4.78465 19.2462 3.61096 17.4369C2.43727 15.6276 1.87979 13.4879 2.02168 11.3362C2.16356 9.18443 2.99721 7.13619 4.39828 5.49694C5.79935 3.85768 7.69279 2.71525 9.79619 2.24001C11.8996 1.76477 14.1003 1.9822 16.07 2.85986"
                    stroke="url(#paint0_linear)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 4L12 14.01L9 11.01"
                    stroke="url(#paint1_linear)"
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
                      x1="9"
                      y1="9"
                      x2="22"
                      y2="9"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#A855F7" />
                      <stop offset="0.5" stopColor="#FB923C" />
                      <stop offset="1" stopColor="#3B82F6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">
                Thank You for Your Interest!
              </h2>
              <p className="text-gray-300 mb-6">
                We've received your information and our founder will be in touch
                shortly to arrange a confidential discussion about Scorrie's
                vision and investment opportunities.
              </p>
              <Button
                asChild
                className="rounded-full px-6 py-2 bg-gradient-to-r from-purple-600 via-orange-500 to-blue-600 hover:from-purple-700 hover:via-orange-600 hover:to-blue-700 shadow-lg shadow-purple-900/30"
              >
                <Link href="/">Return to Home</Link>
              </Button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-xl"
            >
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="rounded-xl bg-white/5 border-white/10 focus:border-purple-500 h-12"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="rounded-xl bg-white/5 border-white/10 focus:border-purple-500 h-12"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium"
                  >
                    Company / Investment Firm
                  </label>
                  <Input
                    id="company"
                    placeholder="Your company or investment firm"
                    className="rounded-xl bg-white/5 border-white/10 focus:border-purple-500 h-12"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="investmentRange"
                    className="block text-sm font-medium"
                  >
                    Investment Range
                  </label>
                  <Input
                    id="investmentRange"
                    placeholder="e.g., $100K-$500K"
                    className="rounded-xl bg-white/5 border-white/10 focus:border-purple-500 h-12"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your investment interests and any questions you have..."
                    className="rounded-xl bg-white/5 border-white/10 focus:border-purple-500 min-h-[150px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-xl text-lg py-6 bg-gradient-to-r from-purple-600 via-orange-500 to-blue-600 hover:from-purple-700 hover:via-orange-600 hover:to-blue-700 shadow-lg shadow-purple-900/30"
                >
                  Request a Meeting <Send className="ml-2" size={18} />
                </Button>
              </form>
            </motion.div>
          )}
        </motion.section>

        {/* Powered by AI Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 w-full flex flex-col items-center"
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
        </motion.div>
      </div>

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
                href="/"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Back to Home
              </Link>

              <Link
                href="/join-team"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Join the Team
              </Link>

              <span className="text-sm text-gray-400">Launching June 2026</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
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
      className="text-gray-200 hover:text-white transition-colors relative group px-2 py-1"
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
function MysteryCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-colors"
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 p-4 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 shadow-inner">
          {icon}
        </div>
        <h3 className="text-2xl md:text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-orange-300 to-blue-400">
          {title}
        </h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
}
