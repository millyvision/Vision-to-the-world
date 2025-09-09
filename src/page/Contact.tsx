
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {MapPin, Phone, Mail, Clock, MessageCircleDashed as MessageCircle, Send, CheckCircle, AlertCircle} from 'lucide-react'
import toast from 'react-hot-toast'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    travelType: '',
    preferredContact: 'email'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const offices = [
    {
      city: 'New York',
      address: '123 Travel Avenue, Suite 500\nNew York, NY 10001',
      phone: '+1 (212) 555-0123',
      email: 'ny@visiontotheworld.com',
      hours: 'Mon-Fri: 9AM-6PM EST\nSat: 10AM-4PM EST',
      image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg'
    },
    {
      city: 'Los Angeles',
      address: '456 Sunset Boulevard, Floor 12\nLos Angeles, CA 90028',
      phone: '+1 (323) 555-0456',
      email: 'la@visiontotheworld.com',
      hours: 'Mon-Fri: 9AM-6PM PST\nSat: 10AM-4PM PST',
      image: 'https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg'
    },
    {
      city: 'Miami',
      address: '789 Ocean Drive, Suite 200\nMiami, FL 33139',
      phone: '+1 (305) 555-0789',
      email: 'miami@visiontotheworld.com',
      hours: 'Mon-Fri: 9AM-6PM EST\nSat: 10AM-4PM EST',
      image: 'https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg'
    }
  ]

  const contactMethods = [
    {
      icon: Phone,
      title: '24/7 Phone Support',
      description: 'Speak with our travel experts anytime',
      contact: '+1 716-430-5246',
      action: 'Call Now'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Chat',
      description: 'Quick responses via WhatsApp',
      contact: '+1 716-430-5246',
      action: 'Chat Now'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Detailed inquiries and planning',
      contact: 'visiontothew@gmail.com',
      action: 'Send Email'
    },
    {
      icon: Clock,
      title: 'Emergency Support',
      description: 'Travel emergencies and urgent help',
      contact: '+1 716-430-5246',
      action: 'Emergency Line'
    }
  ]

  const faqs = [
    {
      question: 'How far in advance should I book my trip?',
      answer: 'We recommend booking 2-3 months in advance for international trips and 4-6 weeks for domestic travel. However, we can accommodate last-minute bookings based on availability.'
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'Our cancellation policy varies by package and destination. Generally, cancellations made 60+ days before departure receive full refunds, while those made closer to departure may incur fees. Travel insurance is highly recommended.'
    },
    {
      question: 'Do you offer travel insurance?',
      answer: 'Yes, we partner with leading travel insurance providers to offer comprehensive coverage including trip cancellation, medical emergencies, and lost luggage protection.'
    },
    {
      question: 'Can you help with visa requirements?',
      answer: 'Absolutely! Our team provides visa guidance and can connect you with trusted visa services. We\'ll ensure you have all necessary documentation for your destination.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, bank transfers, and offer flexible payment plans for larger bookings. All transactions are secured with 256-bit SSL encryption.'
    },
    {
      question: 'Do you offer group discounts?',
      answer: 'Yes! We offer special rates for groups of 8 or more travelers. Contact us for custom group pricing and exclusive perks for your party.'
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would integrate with your backend API
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // })

      toast.success('Message sent successfully! We\'ll get back to you within 24 hours.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        travelType: '',
        preferredContact: 'email'
      })
    } catch (error) {
      toast.error('Failed to send message. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-tropical-600 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Let's Plan Your Perfect Trip
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Our travel experts are here to help you create unforgettable experiences. 
              Reach out anytime - we're always ready to assist you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your preferred way to connect with our travel experts
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <div className="text-primary-600 font-medium mb-4">{method.contact}</div>
                  <button className="w-full bg-primary-500 text-white py-2 rounded-lg hover:bg-primary-600 transition-colors duration-200">
                    {method.action}
                  </button>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Travel Type
                  </label>
                  <select
                    name="travelType"
                    value={formData.travelType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select travel type</option>
                    <option value="couples">Couples/Romantic</option>
                    <option value="family">Family Vacation</option>
                    <option value="adventure">Adventure Travel</option>
                    <option value="luxury">Luxury Travel</option>
                    <option value="business">Business Travel</option>
                    <option value="solo">Solo Travel</option>
                    <option value="group">Group Travel</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Tell us about your dream trip, budget, preferred dates, and any special requirements..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Contact Method
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="email"
                      checked={formData.preferredContact === 'email'}
                      onChange={handleInputChange}
                      className="text-primary-500"
                    />
                    <span className="ml-2">Email</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="phone"
                      checked={formData.preferredContact === 'phone'}
                      onChange={handleInputChange}
                      className="text-primary-500"
                    />
                    <span className="ml-2">Phone</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="whatsapp"
                      checked={formData.preferredContact === 'whatsapp'}
                      onChange={handleInputChange}
                      className="text-primary-500"
                    />
                    <span className="ml-2">WhatsApp</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary-500 to-tropical-500 text-white py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-start space-x-2">
                <AlertCircle className="w-5 h-5 text-blue-500 mt-0.5" />
                <div className="text-sm text-blue-700">
                  <strong>Response Time:</strong> We typically respond within 2-4 hours during business hours, 
                  and within 24 hours on weekends and holidays.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Office Locations & FAQ */}
          <div className="space-y-8">
            {/* Office Locations */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Offices</h2>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className="flex space-x-4 p-4 border border-gray-200 rounded-lg">
                    <img
                      src={office.image}
                      alt={office.city}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{office.city} Office</h3>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex items-start space-x-2">
                          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span className="whitespace-pre-line">{office.address}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4" />
                          <span>{office.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="w-4 h-4" />
                          <span>{office.email}</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span className="whitespace-pre-line">{office.hours}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details key={index} className="group">
                    <summary className="flex justify-between items-center cursor-pointer p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                      <span className="font-medium text-gray-900">{faq.question}</span>
                      <span className="text-gray-500 group-open:rotate-180 transition-transform duration-200">▼</span>
                    </summary>
                    <div className="p-4 text-gray-600">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Emergency Support Banner */}
      <section className="bg-red-50 border-t border-red-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <AlertCircle className="w-6 h-6 text-red-500" />
              <h3 className="text-xl font-bold text-red-900">Travel Emergency Support</h3>
            </div>
            <p className="text-red-700 mb-4">
              Need immediate assistance while traveling? Our 24/7 emergency line is always available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17164305246"
                className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-200"
              >
                📞 Emergency Hotline: +1 716-430-5246
              </a>
              <a
                href="https://wa.me/17164305246"
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200"
              >
                💬 WhatsApp Emergency
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
