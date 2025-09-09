
import React, { useState } from 'react'
import {MessageCircleDashed as MessageCircle, X} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false)

  const whatsappNumber = '+17164305246'
  const message = 'Hi! I would like to inquire about your travel packages.'

  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="mb-4 bg-white rounded-2xl shadow-2xl p-6 w-80 border border-gray-100"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Vision Travel Support</h3>
                  <p className="text-sm text-green-500">● Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <div className="bg-gray-100 rounded-lg p-3">
                <p className="text-sm text-gray-700">
                  Hi there! 👋 How can we help you plan your perfect trip today?
                </p>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-3">
                <p className="text-sm text-gray-700">
                  We're here to assist with:
                  <br />• Flight bookings
                  <br />• Hotel reservations  
                  <br />• Custom packages
                  <br />• Travel insurance
                </p>
              </div>
            </div>

            <button
              onClick={openWhatsApp}
              className="w-full mt-4 bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Start WhatsApp Chat</span>
            </button>

            <p className="text-xs text-gray-500 text-center mt-2">
              Typically replies within minutes
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="bg-green-500 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:bg-green-600 transition-all duration-300 relative"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: 180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -180, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-7 h-7" />
            </motion.div>
          ) : (
            <motion.div
              key="whatsapp"
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-7 h-7" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Notification Dot */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
        </div>
      </motion.button>
    </div>
  )
}

export default WhatsAppWidget
