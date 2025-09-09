
import React from 'react'
import {Shield, Award, Users, Lock, Globe, CreditCard} from 'lucide-react'
import { motion } from 'framer-motion'

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: 'IATA Certified',
      description: 'International Air Transport Association Member',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Award,
      title: 'ASTA Member',
      description: 'American Society of Travel Advisors',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Lock,
      title: 'SSL Secured',
      description: '256-bit encryption for all transactions',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: CreditCard,
      title: 'PCI Compliant',
      description: 'Secure payment processing standards',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Users,
      title: '50K+ Customers',
      description: 'Trusted by travelers worldwide',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Globe,
      title: '24/7 Support',
      description: 'Round-the-clock customer assistance',
      color: 'from-teal-500 to-teal-600'
    }
  ]

  const partnerships = [
    { name: 'Amadeus', logo: 'https://via.placeholder.com/120x40/4F46E5/FFFFFF?text=Amadeus' },
    { name: 'Booking.com', logo: 'https://via.placeholder.com/120x40/003580/FFFFFF?text=Booking.com' },
    { name: 'Stripe', logo: 'https://via.placeholder.com/120x40/635BFF/FFFFFF?text=Stripe' },
    { name: 'PayPal', logo: 'https://via.placeholder.com/120x40/0070BA/FFFFFF?text=PayPal' },
  ]

  return (
    <div className="space-y-12">
      {/* Trust Badges */}
      <div>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-center text-gray-900 mb-8"
        >
          Trusted & Certified
        </motion.h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${badge.color} rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                <badge.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 text-sm mb-1">
                {badge.title}
              </h4>
              <p className="text-xs text-gray-600 leading-tight">
                {badge.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Partner Logos */}
      <div>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-center text-gray-900 mb-8"
        >
          Trusted Partners
        </motion.h3>
        
        <div className="flex flex-wrap justify-center items-center gap-8">
          {partnerships.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-10 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Security Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gradient-to-r from-primary-50 to-tropical-50 rounded-2xl p-8 text-center"
      >
        <Lock className="w-12 h-12 text-primary-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Your Security is Our Priority
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We use industry-leading security measures to protect your personal information 
          and payment details. Your trust is our most valuable asset.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full">
            <Shield className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium text-gray-700">SSL Encrypted</span>
          </div>
          <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full">
            <Lock className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium text-gray-700">PCI Compliant</span>
          </div>
          <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full">
            <Users className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium text-gray-700">Privacy Protected</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default TrustBadges
