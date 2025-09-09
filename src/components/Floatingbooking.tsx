
import React, { useState, useEffect } from 'react'
import {Calendar, X} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const FloatingBooking = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        className="fixed bottom-6 right-6 z-50"
      >
        {!isExpanded ? (
          /* Collapsed Button */
          <motion.button
            onClick={() => setIsExpanded(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary-500 to-tropical-500 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:shadow-3xl transition-all duration-300"
          >
            <Calendar className="w-7 h-7" />
          </motion.button>
        ) : (
          /* Expanded Widget */
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl shadow-2xl p-6 w-80 border border-gray-100"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Quick Booking</h3>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <Link
                to="/booking?type=flights"
                className="block w-full bg-primary-500 text-white py-3 rounded-lg text-center font-medium hover:bg-primary-600 transition-colors duration-200"
              >
                Book Flights
              </Link>
              
              <Link
                to="/booking?type=hotels"
                className="block w-full bg-tropical-500 text-white py-3 rounded-lg text-center font-medium hover:bg-tropical-600 transition-colors duration-200"
              >
                Book Hotels
              </Link>
              
              <Link
                to="/booking?type=packages"
                className="block w-full bg-sunset-500 text-white py-3 rounded-lg text-center font-medium hover:bg-sunset-600 transition-colors duration-200"
              >
                View Packages
              </Link>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600 text-center">
                Need help? Call us at{' '}
                <a href="tel:+17164305246" className="text-primary-600 font-medium">
                  +1 716-430-5246
                </a>
              </p>
            </div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}

export default FloatingBooking
