
import React, { useState } from 'react'
import {Search, Filter, MapPin, Star, ArrowRight, Globe} from 'lucide-react'
import { motion } from 'framer-motion'
import DestinationCard from '../components/DestinationCard'

const Destinations = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedRegion, setSelectedRegion] = useState('all')
  const [priceRange, setPriceRange] = useState('all')

  const categories = [
    { id: 'all', name: 'All Destinations' },
    { id: 'luxury', name: 'Luxury' },
    { id: 'budget', name: 'Budget Friendly' },
    { id: 'adventure', name: 'Adventure' },
    { id: 'cultural', name: 'Cultural' },
    { id: 'beach', name: 'Beach' },
    { id: 'mountain', name: 'Mountain' },
    { id: 'city', name: 'City Break' }
  ]

  const regions = [
    { id: 'all', name: 'All Regions' },
    { id: 'europe', name: 'Europe' },
    { id: 'asia', name: 'Asia' },
    { id: 'africa', name: 'Africa' },
    { id: 'americas', name: 'Americas' },
    { id: 'oceania', name: 'Oceania' },
    { id: 'middle-east', name: 'Middle East' }
  ]

  const priceRanges = [
    { id: 'all', name: 'All Prices' },
    { id: 'budget', name: 'Under $1,000' },
    { id: 'mid', name: '$1,000 - $3,000' },
    { id: 'luxury', name: '$3,000 - $5,000' },
    { id: 'premium', name: '$5,000+' }
  ]

  const destinations = [
    {
      id: 1,
      name: 'Bali, Indonesia',
      image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 1299,
      duration: '7 days',
      rating: 4.8,
      category: 'beach',
      region: 'asia',
      description: 'Tropical paradise with stunning beaches and rich culture'
    },
    {
      id: 2,
      name: 'Paris, France',
      image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 2199,
      duration: '5 days',
      rating: 4.9,
      category: 'cultural',
      region: 'europe',
      description: 'City of lights with world-class museums and cuisine'
    },
    {
      id: 3,
      name: 'Machu Picchu, Peru',
      image: 'https://images.pexels.com/photos/259967/pexels-photo-259967.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 1899,
      duration: '6 days',
      rating: 4.7,
      category: 'adventure',
      region: 'americas',
      description: 'Ancient Incan citadel high in the Andes Mountains'
    },
    {
      id: 4,
      name: 'Tokyo, Japan',
      image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 2799,
      duration: '8 days',
      rating: 4.8,
      category: 'city',
      region: 'asia',
      description: 'Modern metropolis blending tradition and innovation'
    },
    {
      id: 5,
      name: 'Santorini, Greece',
      image: 'https://images.pexels.com/photos/161901/santorini-travel-greece-island-161901.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 2499,
      duration: '6 days',
      rating: 4.9,
      category: 'luxury',
      region: 'europe',
      description: 'Iconic white-washed buildings overlooking the Aegean Sea'
    },
    {
      id: 6,
      name: 'Safari Kenya',
      image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 3299,
      duration: '10 days',
      rating: 4.8,
      category: 'adventure',
      region: 'africa',
      description: 'Wildlife adventure in the heart of Africa'
    },
    {
      id: 7,
      name: 'Iceland Northern Lights',
      image: 'https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 2899,
      duration: '7 days',
      rating: 4.9,
      category: 'adventure',
      region: 'europe',
      description: 'Experience the magical Aurora Borealis in pristine wilderness'
    },
    {
      id: 8,
      name: 'Maldives Resort',
      image: 'https://images.pexels.com/photos/1680247/pexels-photo-1680247.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 4999,
      duration: '9 days',
      rating: 5.0,
      category: 'luxury',
      region: 'asia',
      description: 'Ultimate luxury overwater bungalows in crystal clear lagoons'
    },
    {
      id: 9,
      name: 'New York City',
      image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 1799,
      duration: '5 days',
      rating: 4.6,
      category: 'city',
      region: 'americas',
      description: 'The city that never sleeps with iconic landmarks and Broadway shows'
    }
  ]

  const filteredDestinations = destinations.filter(dest => {
    const matchesSearch = dest.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || dest.category === selectedCategory
    const matchesRegion = selectedRegion === 'all' || dest.region === selectedRegion
    
    let matchesPrice = true
    if (priceRange !== 'all') {
      switch (priceRange) {
        case 'budget':
          matchesPrice = dest.price < 1000
          break
        case 'mid':
          matchesPrice = dest.price >= 1000 && dest.price <= 3000
          break
        case 'luxury':
          matchesPrice = dest.price > 3000 && dest.price <= 5000
          break
        case 'premium':
          matchesPrice = dest.price > 5000
          break
      }
    }
    
    return matchesSearch && matchesCategory && matchesRegion && matchesPrice
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-teal-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-5xl font-bold mb-4">Explore the World</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Discover amazing destinations and create unforgettable memories with our curated travel experiences
            </p>
            <div className="flex items-center justify-center gap-2 text-lg">
              <Globe className="w-6 h-6" />
              <span>{destinations.length} Destinations Available</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>

            {/* Region Filter */}
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {regions.map(region => (
                <option key={region.id} value={region.id}>{region.name}</option>
              ))}
            </select>

            {/* Price Filter */}
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {priceRanges.map(range => (
                <option key={range.id} value={range.id}>{range.name}</option>
              ))}
            </select>

            {/* Clear Filters */}
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('all')
                setSelectedRegion('all')
                setPriceRange('all')
              }}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Filter className="w-4 h-4" />
              Clear Filters
            </button>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredDestinations.length} Destinations Found
            </h2>
            <div className="text-gray-600">
              Showing results for your search criteria
            </div>
          </div>

          {filteredDestinations.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <MapPin className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No destinations found</h3>
              <p className="text-gray-500">Try adjusting your search criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDestinations.map((destination, index) => (
                <motion.div
                  key={destination.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <DestinationCard
                    id={destination.id}
                    name={destination.name}
                    image={destination.image}
                    price={destination.price}
                    duration={destination.duration}
                    rating={destination.rating}
                    category={destination.category}
                    region={destination.region}
                    description={destination.description}
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let our travel experts help you plan the perfect trip tailored to your preferences and budget
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                Start Planning
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Speak to an Expert
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Destinations
