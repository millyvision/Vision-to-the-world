
import React from 'react'
import {Clock, Users, Star, MapPin, ArrowRight} from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

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
  category: 'luxury' | 'budget' | 'adventure' | 'business'
}

interface PackageCardProps {
  package: Package
}

const PackageCard: React.FC<PackageCardProps> = ({ package: pkg }) => {
  const categoryColors = {
    luxury: 'from-purple-500 to-pink-500',
    budget: 'from-green-500 to-emerald-500',
    adventure: 'from-orange-500 to-red-500',
    business: 'from-blue-500 to-indigo-500'
  }

  const categoryLabels = {
    luxury: 'Luxury',
    budget: 'Budget Friendly',
    adventure: 'Adventure',
    business: 'Business'
  }

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Category Badge */}
        <div className={`absolute top-4 left-4 bg-gradient-to-r ${categoryColors[pkg.category]} text-white px-3 py-1 rounded-full text-sm font-medium`}>
          {categoryLabels[pkg.category]}
        </div>

        {/* Discount Badge */}
        {pkg.originalPrice && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            SAVE ${pkg.originalPrice - pkg.price}
          </div>
        )}

        {/* Quick Info */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center justify-between text-white text-sm">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{pkg.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>{pkg.groupSize}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Destination */}
        <div className="flex items-center space-x-2 mb-2">
          <MapPin className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-600">{pkg.destination}</span>
        </div>

        {/* Package Name */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
          {pkg.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center space-x-2 mb-4">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(pkg.rating) 
                    ? 'text-yellow-400 fill-current' 
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm font-medium text-gray-900">{pkg.rating}</span>
          <span className="text-sm text-gray-500">({pkg.reviews} reviews)</span>
        </div>

        {/* Features */}
        <div className="space-y-2 mb-6">
          {pkg.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary-500 rounded-full" />
              <span className="text-sm text-gray-600">{feature}</span>
            </div>
          ))}
          {pkg.features.length > 3 && (
            <div className="text-sm text-primary-600 font-medium">
              +{pkg.features.length - 3} more features
            </div>
          )}
        </div>

        {/* Pricing */}
        <div className="flex items-center justify-between mb-6">
          <div>
            {pkg.originalPrice && (
              <span className="text-sm text-gray-500 line-through mr-2">
                ${pkg.originalPrice.toLocaleString()}
              </span>
            )}
            <span className="text-2xl font-bold text-gray-900">
              ${pkg.price.toLocaleString()}
            </span>
            <span className="text-sm text-gray-600 ml-1">per person</span>
          </div>
        </div>

        {/* Book Button */}
        <Link
          to={`/booking?package=${pkg.id}`}
          className="w-full bg-gradient-to-r from-primary-500 to-tropical-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2"
        >
          <span>Book Now</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  )
}

export default PackageCard
