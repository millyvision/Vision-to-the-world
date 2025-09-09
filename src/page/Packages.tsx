
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {Search, Filter, MapPin, Clock, Users, Star, Heart, Plane, Mountain, Building, Compass} from 'lucide-react'
import PackageCard from '../components/PackageCard'
import SearchWidget from '../components/SearchWidget'

interface Package {
  id: string
  name: string
  destination: string
  image: string
  price: number
  originalPrice?: number
  duration: string
  groupSize: string
  rating: number
  reviews: number
  features: string[]
  category: 'luxury' | 'budget' | 'adventure' | 'business' | 'couples' | 'family'
  type: 'couples' | 'family' | 'adventure' | 'luxury' | 'business' | 'solo' | 'group'
}

const Packages: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [priceRange, setPriceRange] = useState<string>('all')

  const packages: Package[] = [
    // Couples Packages
    {
      id: 'couples-paris',
      name: 'Romantic Paris Getaway',
      destination: 'Paris, France',
      image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg',
      price: 2899,
      originalPrice: 3299,
      duration: '5 days, 4 nights',
      groupSize: '2 people',
      rating: 4.9,
      reviews: 156,
      features: ['Luxury hotel with Eiffel Tower view', 'Private Seine river cruise', 'Candlelit dinner at Michelin restaurant', 'Couples spa treatment', 'Professional photo session'],
      category: 'luxury',
      type: 'couples'
    },
    {
      id: 'couples-santorini',
      name: 'Santorini Honeymoon Bliss',
      destination: 'Santorini, Greece',
      image: 'https://images.pexels.com/photos/161901/santorini-greece-island-161901.jpeg',
      price: 3499,
      originalPrice: 3899,
      duration: '7 days, 6 nights',
      groupSize: '2 people',
      rating: 4.8,
      reviews: 203,
      features: ['Private villa with infinity pool', 'Sunset catamaran cruise', 'Wine tasting tour', 'Couples massage', 'Private chef dinner'],
      category: 'luxury',
      type: 'couples'
    },
    {
      id: 'couples-bali',
      name: 'Bali Romance Retreat',
      destination: 'Bali, Indonesia',
      image: 'https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg',
      price: 1899,
      originalPrice: 2199,
      duration: '6 days, 5 nights',
      groupSize: '2 people',
      rating: 4.7,
      reviews: 189,
      features: ['Beachfront resort', 'Couples yoga sessions', 'Traditional Balinese spa', 'Private beach dinner', 'Temple tour'],
      category: 'budget',
      type: 'couples'
    },

    // Family Packages
    {
      id: 'family-disney',
      name: 'Disney World Magic Adventure',
      destination: 'Orlando, Florida',
      image: 'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg',
      price: 4299,
      duration: '6 days, 5 nights',
      groupSize: '4 people (2 adults, 2 kids)',
      rating: 4.9,
      reviews: 342,
      features: ['Disney resort accommodation', 'All park tickets included', 'Character dining experiences', 'FastPass+ access', 'Airport transfers'],
      category: 'adventure',
      type: 'family'
    },
    {
      id: 'family-costa-rica',
      name: 'Costa Rica Family Adventure',
      destination: 'Costa Rica',
      image: 'https://images.pexels.com/photos/1903702/pexels-photo-1903702.jpeg',
      price: 3199,
      originalPrice: 3599,
      duration: '8 days, 7 nights',
      groupSize: '4-6 people',
      rating: 4.6,
      reviews: 128,
      features: ['Eco-lodge accommodation', 'Zip-lining adventure', 'Wildlife spotting tours', 'Beach time', 'Educational nature walks'],
      category: 'adventure',
      type: 'family'
    },
    {
      id: 'family-japan',
      name: 'Japan Cultural Family Tour',
      destination: 'Tokyo & Kyoto, Japan',
      image: 'https://images.pexels.com/photos/161401/fushimi-inari-taisha-shrine-kyoto-japan-temple-161401.jpeg',
      price: 4899,
      duration: '10 days, 9 nights',
      groupSize: '4 people',
      rating: 4.8,
      reviews: 167,
      features: ['Traditional ryokan stay', 'Bullet train experience', 'Temple visits', 'Sushi making class', 'Tokyo Disneyland tickets'],
      category: 'luxury',
      type: 'family'
    },

    // Adventure Packages
    {
      id: 'adventure-nepal',
      name: 'Everest Base Camp Trek',
      destination: 'Nepal',
      image: 'https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg',
      price: 2799,
      duration: '14 days, 13 nights',
      groupSize: '8-12 people',
      rating: 4.7,
      reviews: 89,
      features: ['Expert guide included', 'All meals during trek', 'Teahouse accommodation', 'Permits included', 'Emergency evacuation insurance'],
      category: 'adventure',
      type: 'adventure'
    },
    {
      id: 'adventure-patagonia',
      name: 'Patagonia Wilderness Explorer',
      destination: 'Chile & Argentina',
      image: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg',
      price: 3899,
      originalPrice: 4299,
      duration: '12 days, 11 nights',
      groupSize: '6-10 people',
      rating: 4.8,
      reviews: 76,
      features: ['Glacier hiking', 'Wildlife photography', 'Camping under stars', 'Expert naturalist guide', 'All equipment provided'],
      category: 'adventure',
      type: 'adventure'
    },
    {
      id: 'adventure-iceland',
      name: 'Iceland Fire & Ice Adventure',
      destination: 'Iceland',
      image: 'https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg',
      price: 2599,
      duration: '8 days, 7 nights',
      groupSize: '4-8 people',
      rating: 4.9,
      reviews: 134,
      features: ['Northern Lights tour', 'Glacier walk', 'Hot springs visit', 'Volcano exploration', '4WD vehicle included'],
      category: 'adventure',
      type: 'adventure'
    },

    // Luxury Packages
    {
      id: 'luxury-maldives',
      name: 'Maldives Overwater Paradise',
      destination: 'Maldives',
      image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg',
      price: 6999,
      originalPrice: 7999,
      duration: '7 days, 6 nights',
      groupSize: '2 people',
      rating: 4.9,
      reviews: 298,
      features: ['Overwater villa with glass floor', 'Private butler service', 'Seaplane transfers', 'Underwater restaurant', 'Dolphin watching'],
      category: 'luxury',
      type: 'luxury'
    },
    {
      id: 'luxury-dubai',
      name: 'Dubai Luxury Experience',
      destination: 'Dubai, UAE',
      image: 'https://images.pexels.com/photos/1804177/pexels-photo-1804177.jpeg',
      price: 4599,
      duration: '5 days, 4 nights',
      groupSize: '2-4 people',
      rating: 4.8,
      reviews: 167,
      features: ['7-star hotel suite', 'Private shopping tour', 'Helicopter city tour', 'Desert safari with dinner', 'Yacht charter'],
      category: 'luxury',
      type: 'luxury'
    },
    {
      id: 'luxury-safari',
      name: 'African Luxury Safari',
      destination: 'Kenya & Tanzania',
      image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg',
      price: 5899,
      duration: '9 days, 8 nights',
      groupSize: '2-6 people',
      rating: 4.9,
      reviews: 123,
      features: ['Luxury tented camps', 'Private game drives', 'Hot air balloon safari', 'Masai village visit', 'Conservation project tour'],
      category: 'luxury',
      type: 'luxury'
    },

    // Business Packages
    {
      id: 'business-singapore',
      name: 'Singapore Business Hub',
      destination: 'Singapore',
      image: 'https://images.pexels.com/photos/1044329/pexels-photo-1044329.jpeg',
      price: 1899,
      duration: '4 days, 3 nights',
      groupSize: '1-2 people',
      rating: 4.7,
      reviews: 89,
      features: ['Business hotel with meeting rooms', 'Airport fast-track service', 'City business district tour', 'Networking dinner', 'Conference facilities'],
      category: 'business',
      type: 'business'
    },
    {
      id: 'business-london',
      name: 'London Executive Package',
      destination: 'London, UK',
      image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg',
      price: 2299,
      duration: '5 days, 4 nights',
      groupSize: '1-3 people',
      rating: 4.6,
      reviews: 76,
      features: ['Executive hotel suite', 'Private car service', 'Financial district tour', 'Theatre tickets', 'Business lounge access'],
      category: 'business',
      type: 'business'
    },

    // Solo Travel Packages
    {
      id: 'solo-thailand',
      name: 'Thailand Solo Discovery',
      destination: 'Thailand',
      image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg',
      price: 1399,
      originalPrice: 1599,
      duration: '10 days, 9 nights',
      groupSize: '1 person',
      rating: 4.5,
      reviews: 234,
      features: ['Solo-friendly accommodations', 'Group activities available', 'Cultural workshops', 'Street food tours', '24/7 support'],
      category: 'budget',
      type: 'solo'
    },
    {
      id: 'solo-peru',
      name: 'Peru Inca Trail Solo Adventure',
      destination: 'Peru',
      image: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg',
      price: 1899,
      duration: '8 days, 7 nights',
      groupSize: '1 person',
      rating: 4.7,
      reviews: 156,
      features: ['Machu Picchu guided tour', 'Sacred Valley exploration', 'Local cooking class', 'Traditional markets visit', 'Photography workshop'],
      category: 'adventure',
      type: 'solo'
    },

    // Group Packages
    {
      id: 'group-europe',
      name: 'European Grand Tour',
      destination: 'Multiple European Cities',
      image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg',
      price: 2799,
      originalPrice: 3199,
      duration: '15 days, 14 nights',
      groupSize: '15-25 people',
      rating: 4.6,
      reviews: 189,
      features: ['Luxury coach transport', 'Professional tour guide', '4-star hotels', 'All major attractions', 'Group dining experiences'],
      category: 'luxury',
      type: 'group'
    }
  ]

  const categories = [
    { id: 'all', label: 'All Packages', icon: Compass },
    { id: 'couples', label: 'Couples', icon: Heart },
    { id: 'family', label: 'Family', icon: Users },
    { id: 'adventure', label: 'Adventure', icon: Mountain },
    { id: 'luxury', label: 'Luxury', icon: Star },
    { id: 'business', label: 'Business', icon: Building },
    { id: 'solo', label: 'Solo Travel', icon: Plane }
  ]

  const priceRanges = [
    { id: 'all', label: 'All Prices' },
    { id: 'budget', label: 'Under $2,000' },
    { id: 'mid', label: '$2,000 - $4,000' },
    { id: 'luxury', label: '$4,000 - $6,000' },
    { id: 'premium', label: 'Above $6,000' }
  ]

  const filteredPackages = packages.filter(pkg => {
    const matchesCategory = selectedCategory === 'all' || pkg.type === selectedCategory
    const matchesSearch = pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pkg.destination.toLowerCase().includes(searchTerm.toLowerCase())
    
    let matchesPrice = true
    if (priceRange === 'budget') matchesPrice = pkg.price < 2000
    else if (priceRange === 'mid') matchesPrice = pkg.price >= 2000 && pkg.price < 4000
    else if (priceRange === 'luxury') matchesPrice = pkg.price >= 4000 && pkg.price < 6000
    else if (priceRange === 'premium') matchesPrice = pkg.price >= 6000

    return matchesCategory && matchesSearch && matchesPrice
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-tropical-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Travel Packages for Every Journey
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            From romantic getaways to family adventures, luxury escapes to business trips - 
            find your perfect travel experience with our curated packages
          </motion.p>
          
          {/* Search Widget */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <SearchWidget />
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const IconComponent = category.icon
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-primary-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="text-sm font-medium">{category.label}</span>
                  </button>
                )
              })}
            </div>

            {/* Search and Price Filter */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search packages..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {priceRanges.map((range) => (
                  <option key={range.id} value={range.id}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {selectedCategory === 'all' 
                ? `All Travel Packages (${filteredPackages.length})` 
                : `${categories.find(c => c.id === selectedCategory)?.label} Packages (${filteredPackages.length})`
              }
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover amazing destinations with our carefully crafted travel packages, 
              each designed to create unforgettable memories and exceptional experiences.
            </p>
          </div>

          {filteredPackages.length === 0 ? (
            <div className="text-center py-16">
              <Filter className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No packages found</h3>
              <p className="text-gray-600">Try adjusting your filters or search terms</p>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPackages.map((pkg, index) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <PackageCard package={pkg} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary-500 to-tropical-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Can't Find Your Perfect Package?
          </h2>
          <p className="text-xl mb-8">
            Let our travel experts create a custom itinerary just for you. 
            Every journey should be as unique as you are.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Create Custom Package
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-200">
              Speak to Expert
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Packages
