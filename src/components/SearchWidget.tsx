
import React, { useState } from 'react'
import {Search, MapPin, Calendar, Users, ArrowRight} from 'lucide-react'
import { motion } from 'framer-motion'

const SearchWidget = () => {
  const [searchType, setSearchType] = useState('flights')
  const [destination, setDestination] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [travelers, setTravelers] = useState(1)

  const handleSearch = () => {
    // Navigate to booking page with search parameters
    window.location.href = `/booking?type=${searchType}&destination=${destination}&checkin=${checkIn}&checkout=${checkOut}&travelers=${travelers}`
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white/95 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-2xl max-w-5xl mx-auto"
    >
      {/* Search Type Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {['flights', 'hotels', 'packages'].map((type) => (
          <button
            key={type}
            onClick={() => setSearchType(type)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              searchType === type
                ? 'bg-gradient-to-r from-primary-500 to-tropical-500 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Search Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Destination */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Destination
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Where to?"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>

        {/* Check-in Date */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {searchType === 'flights' ? 'Departure' : 'Check-in'}
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>

        {/* Check-out Date */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {searchType === 'flights' ? 'Return' : 'Check-out'}
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>

        {/* Travelers */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Travelers
          </label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              value={travelers}
              onChange={(e) => setTravelers(parseInt(e.target.value))}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'Traveler' : 'Travelers'}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="w-full bg-gradient-to-r from-primary-500 to-tropical-500 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2"
      >
        <Search className="w-5 h-5" />
        <span>Search {searchType.charAt(0).toUpperCase() + searchType.slice(1)}</span>
        <ArrowRight className="w-5 h-5" />
      </button>

      {/* Quick Links */}
      <div className="mt-6 flex flex-wrap gap-2 justify-center">
        {['Bali', 'Paris', 'Tokyo', 'New York', 'London', 'Dubai'].map((city) => (
          <button
            key={city}
            onClick={() => setDestination(city)}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-primary-100 hover:text-primary-700 transition-colors duration-200"
          >
            {city}
          </button>
        ))}
      </div>
    </motion.div>
  )
}

export default SearchWidget
