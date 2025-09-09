
import React from 'react'
import { motion } from 'framer-motion'
import {CheckCircle, Download, Calendar, MapPin, Users, Phone, Mail, Plane, Hotel, Car} from 'lucide-react'
import { Link } from 'react-router-dom'

const BookingConfirmation = () => {
  // Mock booking data - in real app, this would come from URL params or API
  const bookingData = {
    confirmationNumber: 'VTW-2024-001234',
    bookingDate: '2024-01-15',
    totalAmount: 1493.85,
    status: 'Confirmed',
    traveler: {
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '+1 (555) 123-4567'
    },
    trip: {
      destination: 'Bali, Indonesia',
      package: 'Bali Romance Retreat',
      checkIn: '2024-03-15',
      checkOut: '2024-03-21',
      duration: '6 days, 5 nights',
      travelers: 2,
      roomType: 'Beachfront Suite'
    },
    services: [
      { type: 'accommodation', name: 'Luxury Beach Resort', icon: Hotel },
      { type: 'flights', name: 'Round-trip Flights', icon: Plane },
      { type: 'transfers', name: 'Airport Transfers', icon: Car }
    ],
    nextSteps: [
      {
        title: 'Check Passport Validity',
        description: 'Ensure your passport is valid for at least 6 months from travel date',
        deadline: '2024-02-15'
      },
      {
        title: 'Complete Travel Insurance',
        description: 'Purchase recommended travel insurance for your protection',
        deadline: '2024-02-20'
      },
      {
        title: 'Receive Final Documents',
        description: 'We\'ll send your complete travel documents 7 days before departure',
        deadline: '2024-03-08'
      }
    ]
  }

  const handleDownload = (documentType: string) => {
    // In a real app, this would download actual documents
    console.log(`Downloading ${documentType}`)
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Success Header */}
      <section className="bg-gradient-to-r from-green-500 to-emerald-500 py-16 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <CheckCircle className="w-24 h-24 mx-auto text-white" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Booking Confirmed!
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl mb-6"
          >
            Your dream trip to {bookingData.trip.destination} is all set!
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white/20 backdrop-blur-md rounded-lg p-4 inline-block"
          >
            <div className="text-sm text-white/90">Confirmation Number</div>
            <div className="text-2xl font-bold">{bookingData.confirmationNumber}</div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Trip Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Trip Details</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="font-medium text-gray-900">Destination</div>
                      <div className="text-gray-600">{bookingData.trip.destination}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="font-medium text-gray-900">Travel Dates</div>
                      <div className="text-gray-600">
                        {new Date(bookingData.trip.checkIn).toLocaleDateString()} - {new Date(bookingData.trip.checkOut).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="font-medium text-gray-900">Travelers</div>
                      <div className="text-gray-600">{bookingData.trip.travelers} guests</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="font-medium text-gray-900 mb-1">Package</div>
                    <div className="text-gray-600">{bookingData.trip.package}</div>
                  </div>
                  
                  <div>
                    <div className="font-medium text-gray-900 mb-1">Duration</div>
                    <div className="text-gray-600">{bookingData.trip.duration}</div>
                  </div>
                  
                  <div>
                    <div className="font-medium text-gray-900 mb-1">Accommodation</div>
                    <div className="text-gray-600">{bookingData.trip.roomType}</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Included Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Included Services</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {bookingData.services.map((service, index) => {
                  const IconComponent = service.icon
                  return (
                    <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                      <IconComponent className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                      <div className="font-medium text-gray-900">{service.name}</div>
                    </div>
                  )
                })}
              </div>
            </motion.div>

            {/* Next Steps */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Next Steps</h2>
              
              <div className="space-y-4">
                {bookingData.nextSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg">
                    <div className="bg-primary-100 text-primary-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                      <p className="text-gray-600 mb-2">{step.description}</p>
                      <div className="text-sm text-primary-600">
                        Complete by: {new Date(step.deadline).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Booking Summary */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Booking Summary</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Booking Date</span>
                  <span className="font-medium">{new Date(bookingData.bookingDate).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                    {bookingData.status}
                  </span>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Paid</span>
                    <span>${bookingData.totalAmount.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => handleDownload('itinerary')}
                  className="w-full bg-primary-500 text-white py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Itinerary</span>
                </button>
                
                <button
                  onClick={() => handleDownload('receipt')}
                  className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Receipt</span>
                </button>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Your Travel Expert</h3>
              
              <div className="text-center mb-4">
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
                  alt="Travel Expert"
                  className="w-16 h-16 rounded-full mx-auto mb-3"
                />
                <div className="font-semibold text-gray-900">Emily Rodriguez</div>
                <div className="text-sm text-gray-600">Senior Travel Consultant</div>
              </div>
              
              <div className="space-y-3">
                <a
                  href="tel:+17164305246"
                  className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Direct</span>
                </a>
                
                <a
                  href="mailto:visiontothew@gmail.com"
                  className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Email</span>
                </a>
              </div>
            </motion.div>

            {/* Emergency Support */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-red-50 rounded-2xl p-6 border border-red-200"
            >
              <h3 className="text-lg font-bold text-red-900 mb-3">24/7 Emergency Support</h3>
              <p className="text-red-700 text-sm mb-4">
                Need help while traveling? Our emergency line is always available.
              </p>
              <a
                href="tel:+17164305246"
                className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Emergency Hotline</span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Additional Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Next?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/packages"
              className="bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors duration-200"
            >
              Plan Another Trip
            </Link>
            <Link
              to="/blog"
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
            >
              Travel Inspiration
            </Link>
            <button className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200">
              Share Your Trip
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default BookingConfirmation
