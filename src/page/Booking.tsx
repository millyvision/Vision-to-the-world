
import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import {Calendar, Users, MapPin, CreditCard, Shield, Clock} from 'lucide-react'
import { motion } from 'framer-motion'
import SearchWidget from '../components/SearchWidget'
import toast from 'react-hot-toast'

const Booking = () => {
  const [searchParams] = useSearchParams()
  const [bookingStep, setBookingStep] = useState(1)
  const [selectedCurrency, setSelectedCurrency] = useState('USD')
  const [bookingData, setBookingData] = useState({
    type: searchParams.get('type') || 'flights',
    destination: searchParams.get('destination') || '',
    checkIn: searchParams.get('checkin') || '',
    checkOut: searchParams.get('checkout') || '',
    travelers: parseInt(searchParams.get('travelers') || '1'),
    package: searchParams.get('package') || ''
  })

  const currencies = [
    { code: 'USD', symbol: '$', name: 'US Dollar' },
    { code: 'EUR', symbol: '€', name: 'Euro' },
    { code: 'GBP', symbol: '£', name: 'British Pound' },
    { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar' },
    { code: 'AUD', symbol: 'A$', name: 'Australian Dollar' },
  ]

  const paymentMethods = [
    {
      id: 'stripe',
      name: 'Credit/Debit Card',
      description: 'Visa, Mastercard, American Express',
      icon: CreditCard,
      fee: '2.9% + $0.30'
    },
    {
      id: 'paypal',
      name: 'PayPal',
      description: 'Pay with your PayPal account',
      icon: Shield,
      fee: '3.5%'
    },
    {
      id: 'cashapp',
      name: 'Cash App',
      description: 'Pay with Cash App',
      icon: Clock,
      fee: '2.5%'
    }
  ]

  const mockSearchResults = {
    flights: [
      {
        id: 'FL001',
        airline: 'American Airlines',
        departure: '08:30 AM',
        arrival: '02:45 PM',
        duration: '6h 15m',
        stops: 'Direct',
        price: 459,
        class: 'Economy'
      },
      {
        id: 'FL002',
        airline: 'Delta Airlines',
        departure: '11:20 AM',
        arrival: '06:10 PM',
        duration: '6h 50m',
        stops: '1 Stop',
        price: 389,
        class: 'Economy'
      },
      {
        id: 'FL003',
        airline: 'United Airlines',
        departure: '03:15 PM',
        arrival: '10:30 PM',
        duration: '7h 15m',
        stops: 'Direct',
        price: 529,
        class: 'Business'
      }
    ],
    hotels: [
      {
        id: 'HT001',
        name: 'Luxury Beach Resort',
        rating: 4.8,
        location: 'Beachfront',
        amenities: ['Pool', 'Spa', 'WiFi', 'Restaurant'],
        price: 299,
        originalPrice: 399,
        image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        id: 'HT002',
        name: 'City Center Hotel',
        rating: 4.5,
        location: 'Downtown',
        amenities: ['WiFi', 'Gym', 'Restaurant', 'Bar'],
        price: 189,
        originalPrice: 249,
        image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        id: 'HT003',
        name: 'Boutique Mountain Lodge',
        rating: 4.9,
        location: 'Mountain View',
        amenities: ['Spa', 'WiFi', 'Restaurant', 'Hiking'],
        price: 349,
        originalPrice: 449,
        image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ]
  }

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      // Simulate payment processing
      toast.loading('Processing your booking...')
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would integrate with real payment APIs
      // Stripe, PayPal, etc.
      
      toast.dismiss()
      toast.success('Booking confirmed! Check your email for details.')
      
      // Redirect to confirmation page
      setTimeout(() => {
        window.location.href = '/booking-confirmation'
      }, 2000)
      
    } catch (error) {
      toast.dismiss()
      toast.error('Booking failed. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-tropical-600 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Book Your Dream Trip
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Real-time booking with instant confirmation and 24/7 support
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Booking Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Search Widget */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <SearchWidget />
            </motion.div>

            {/* Search Results */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {bookingData.type === 'flights' ? 'Available Flights' : 'Available Hotels'}
                </h2>
                
                {/* Currency Selector */}
                <select
                  value={selectedCurrency}
                  onChange={(e) => setSelectedCurrency(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {currencies.map(currency => (
                    <option key={currency.code} value={currency.code}>
                      {currency.symbol} {currency.code}
                    </option>
                  ))}
                </select>
              </div>

              {/* Results List */}
              <div className="space-y-4">
                {(bookingData.type === 'flights' ? mockSearchResults.flights : mockSearchResults.hotels).map((item) => (
                  <div key={item.id} className="border border-gray-200 rounded-xl p-6 hover:border-primary-300 transition-colors duration-200">
                    {bookingData.type === 'flights' ? (
                      /* Flight Result */
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-4 mb-2">
                            <h3 className="font-semibold text-gray-900">{(item as any).airline}</h3>
                            <span className="text-sm text-gray-500">{(item as any).class}</span>
                          </div>
                          <div className="flex items-center space-x-6 text-sm text-gray-600">
                            <span>{(item as any).departure} - {(item as any).arrival}</span>
                            <span>{(item as any).duration}</span>
                            <span>{(item as any).stops}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-900">
                            {currencies.find(c => c.code === selectedCurrency)?.symbol}{(item as any).price}
                          </div>
                          <button className="mt-2 bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors duration-200">
                            Select
                          </button>
                        </div>
                      </div>
                    ) : (
                      /* Hotel Result */
                      <div className="flex space-x-4">
                        <img
                          src={(item as any).image}
                          alt={(item as any).name}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-gray-900">{(item as any).name}</h3>
                            <div className="text-right">
                              {(item as any).originalPrice && (
                                <div className="text-sm text-gray-500 line-through">
                                  {currencies.find(c => c.code === selectedCurrency)?.symbol}{(item as any).originalPrice}
                                </div>
                              )}
                              <div className="text-xl font-bold text-gray-900">
                                {currencies.find(c => c.code === selectedCurrency)?.symbol}{(item as any).price}
                              </div>
                              <div className="text-sm text-gray-500">per night</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4 mb-2">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <span key={i} className={`text-sm ${i < Math.floor((item as any).rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                                  ★
                                </span>
                              ))}
                              <span className="ml-1 text-sm text-gray-600">{(item as any).rating}</span>
                            </div>
                            <span className="text-sm text-gray-500">{(item as any).location}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-2">
                              {(item as any).amenities.slice(0, 3).map((amenity: string) => (
                                <span key={amenity} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                  {amenity}
                                </span>
                              ))}
                            </div>
                            <button className="bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors duration-200">
                              Select
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Booking Summary Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-lg sticky top-24"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Booking Summary</h3>
              
              {/* Trip Details */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="font-medium text-gray-900">Destination</div>
                    <div className="text-sm text-gray-600">{bookingData.destination || 'Not selected'}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="font-medium text-gray-900">Dates</div>
                    <div className="text-sm text-gray-600">
                      {bookingData.checkIn && bookingData.checkOut 
                        ? `${bookingData.checkIn} - ${bookingData.checkOut}`
                        : 'Not selected'
                      }
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="font-medium text-gray-900">Travelers</div>
                    <div className="text-sm text-gray-600">{bookingData.travelers} {bookingData.travelers === 1 ? 'person' : 'people'}</div>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="border-t border-gray-200 pt-6 mb-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">$1,299.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Taxes & Fees</span>
                    <span className="font-medium">$129.90</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Service Fee (5%)</span>
                    <span className="font-medium">$64.95</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>$1,493.85</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Payment Method</h4>
                <div className="space-y-2">
                  {paymentMethods.map((method) => (
                    <label key={method.id} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:border-primary-300 cursor-pointer">
                      <input type="radio" name="payment" value={method.id} className="text-primary-500" />
                      <method.icon className="w-5 h-5 text-gray-400" />
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">{method.name}</div>
                        <div className="text-xs text-gray-500">{method.description}</div>
                      </div>
                      <div className="text-xs text-gray-500">{method.fee}</div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Book Button */}
              <button
                onClick={handleBookingSubmit}
                className="w-full bg-gradient-to-r from-primary-500 to-tropical-500 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300"
              >
                Complete Booking
              </button>

              {/* Security Notice */}
              <div className="mt-4 flex items-center space-x-2 text-sm text-gray-600">
                <Shield className="w-4 h-4" />
                <span>Secure 256-bit SSL encryption</span>
              </div>

              {/* Support */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-2">Need Help?</h5>
                <p className="text-sm text-gray-600 mb-3">
                  Our travel experts are available 24/7 to assist you.
                </p>
                <div className="space-y-2">
                  <a href="tel:+17164305246" className="block text-sm text-primary-600 hover:text-primary-700">
                    📞 +1 716-430-5246
                  </a>
                  <a href="https://wa.me/17164305246" className="block text-sm text-primary-600 hover:text-primary-700">
                    💬 WhatsApp Support
                  </a>
                  <a href="mailto:visiontothew@gmail.com" className="block text-sm text-primary-600 hover:text-primary-700">
                    ✉️ visiontothew@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking
