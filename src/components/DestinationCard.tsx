
import React from 'react'
import {Star, MapPin, ArrowRight} from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface DestinationCardProps {
  id: number
  name: string
  image: string
  price: number
  duration: string
  rating: number
  category: string
  region: string
  description: string
}

const DestinationCard: React.FC<DestinationCardProps> = ({ 
  id,
  name,
  image,
  price,
  duration,
  rating,
  category,
  region,
  description 
}) => {
  // Safety checks
  if (!name || !image) {
    return null
  }

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Rating Badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-sm font-medium text-gray-900">{rating || 0}</span>
        </div>

        {/* Price Badge */}
        <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full font-semibold">
          ${price?.toLocaleString() || 0}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center space-x-2 mb-3">
          <MapPin className="w-4 h-4 text-gray-400" />
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
            {name}
          </h3>
        </div>
        
        <p className="text-gray-600 mb-2 text-sm">
          {duration || 'Duration not specified'}
        </p>
        
        <p className="text-gray-600 mb-4 leading-relaxed">
          {description || 'No description available'}
        </p>

        <Link
          to={`/booking?destination=${encodeURIComponent(name)}`}
          className="inline-flex items-center space-x-2 text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200 group"
        >
          <span>Book Now</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </motion.div>
  )
}

export default DestinationCard
