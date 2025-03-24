"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function JoinTeam() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle the form submission here
    setFormSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0514] via-[#1a0933] to-[#0a1a4d] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white transition-colors">
            <ArrowLeft className="mr-2" size={16} />
            Back to Home
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Join the Revolution
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-6">
              This isn't a job application. This is an invitation to be part of something extraordinary—a chance to help
              build a platform that will transform how people connect and transact online.
            </p>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We're looking for the crazy ones. The visionaries. The risk-takers who believe in changing the world. We
              don't have funding yet, but we have something more valuable: a revolutionary vision and the determination
              to make it real.
            </p>
          </div>

          {formSubmitted ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-xl text-center"
            >
              <div className="mb-6 p-4 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 shadow-inner inline-block">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    <linearGradient id="paint0_linear" x1="2" y1="12" x2="22" y2="12" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#A855F7" />
                      <stop offset="1" stopColor="#3B82F6" />
                    </linearGradient>
                    <linearGradient id="paint1_linear" x1="9" y1="9" x2="22" y2="9" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#A855F7" />
                      <stop offset="1" stopColor="#3B82F6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">Thank You for Your Interest!</h2>
              <p className="text-gray-300 mb-6">
                We've received your information and will be in touch soon. We're excited about the possibility of having
                you join our mission to revolutionize online marketplaces.
              </p>
              <Button
                asChild
                className="rounded-full px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
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
                    <label htmlFor="email" className="block text-sm font-medium">
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
                  <label htmlFor="skills" className="block text-sm font-medium">
                    Your Skills & Expertise
                  </label>
                  <Input
                    id="skills"
                    placeholder="e.g., Development, Design, Marketing, Business"
                    className="rounded-xl bg-white/5 border-white/10 focus:border-purple-500 h-12"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Why do you want to join this revolution?
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your passion, vision, and why you're crazy enough to join us in changing the world..."
                    className="rounded-xl bg-white/5 border-white/10 focus:border-purple-500 min-h-[150px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-xl text-lg py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg shadow-purple-900/30"
                >
                  Join the Revolution <Send className="ml-2" size={18} />
                </Button>
              </form>
            </motion.div>
          )}
        </motion.div>
      </div>

      <footer className="py-8 border-t border-white/10 backdrop-blur-md bg-black/20 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                SCORRIE
              </span>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
                Back to Home
              </Link>

              <span className="text-sm text-gray-400">Launching June 2026</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

