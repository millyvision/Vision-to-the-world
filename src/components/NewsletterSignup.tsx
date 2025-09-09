
import React, { useState } from 'react'
import {Mail, Gift, ArrowRight} from 'lucide-react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

const NewsletterSignup = () => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      toast.error('Please enter your email address')
      return
    }

    setIsLoading(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Here you would integrate with your email marketing service
      // Example: Mailchimp, ConvertKit, etc.
      
      toast.success('Welcome! Check your email for exclusive travel deals!')
      setEmail('')
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center text-white"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Gift className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Get Exclusive Travel Deals
          </h2>
          
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join 25,000+ travelers and receive insider access to flash sales, 
            early bird discounts, and destination guides delivered to your inbox.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Weekly Deals</h3>
            <p className="text-white/80 text-sm">
              Curated travel deals and destination spotlights every Tuesday
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Exclusive Discounts</h3>
            <p className="text-white/80 text-sm">
              Subscriber-only promotions up to 40% off regular prices
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Early Access</h3>
            <p className="text-white/80 text-sm">
              Be first to book limited-time offers and new destinations
            </p>
          </div>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-200"
                disabled={isLoading}
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-primary-600 border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>

        {/* Disclaimer */}
        <p className="text-sm text-white/70 mt-6 max-w-2xl mx-auto">
          By subscribing, you agree to receive marketing emails from Vision to the World. 
          You can unsubscribe at any time. We respect your privacy and never share your information.
        </p>

        {/* Social Proof */}
        <div className="mt-8 flex items-center justify-center space-x-8 text-white/80">
          <div className="text-center">
            <div className="text-2xl font-bold">25K+</div>
            <div className="text-sm">Subscribers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">4.9★</div>
            <div className="text-sm">Newsletter Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">40%</div>
            <div className="text-sm">Avg. Savings</div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default NewsletterSignup
