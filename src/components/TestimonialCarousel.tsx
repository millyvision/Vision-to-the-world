
import React, { useState, useEffect } from 'react'
import {Star, Quote, ChevronLeft, ChevronRight} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'New York, NY',
    rating: 5,
    text: 'Vision to the World made our honeymoon in Bali absolutely perfect! From the moment we booked to our return home, everything was seamless. The attention to detail and personalized service exceeded our expectations.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    trip: 'Bali Honeymoon Package'
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Los Angeles, CA',
    rating: 5,
    text: 'As a frequent business traveler, I appreciate efficiency and reliability. Vision to the World consistently delivers both. Their 24/7 support has saved me multiple times during unexpected travel changes.',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    trip: 'Business Travel Services'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    location: 'Miami, FL',
    rating: 5,
    text: 'Our family trip to Japan was incredible! The cultural experiences they arranged for us were authentic and memorable. My kids are still talking about the traditional tea ceremony and ninja training!',
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
    trip: 'Japan Family Adventure'
  },
  {
    id: 4,
    name: 'David Thompson',
    location: 'Chicago, IL',
    rating: 5,
    text: 'The European adventure tour was beyond my wildest dreams. Every city, every experience was perfectly curated. The local guides were knowledgeable and the accommodations were luxurious.',
    image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150',
    trip: 'European Grand Tour'
  },
  {
    id: 5,
    name: 'Lisa Park',
    location: 'Seattle, WA',
    rating: 5,
    text: 'Solo travel can be intimidating, but Vision to the World made me feel safe and supported throughout my African safari. The experience was transformative and I made lifelong memories.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    trip: 'Kenya Safari Experience'
  }
]

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Main Testimonial */}
      <div className="relative bg-white rounded-2xl shadow-lg p-8 md:p-12 min-h-[400px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              {/* Customer Image */}
              <div className="flex-shrink-0">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-primary-100"
                />
              </div>

              {/* Testimonial Content */}
              <div className="flex-1 text-center md:text-left">
                <Quote className="w-8 h-8 text-primary-500 mb-4 mx-auto md:mx-0" />
                
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Rating */}
                <div className="flex items-center justify-center md:justify-start space-x-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Customer Info */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[currentIndex].location}
                  </p>
                  <p className="text-primary-600 font-medium mt-1">
                    {testimonials[currentIndex].trip}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-primary-50 transition-colors duration-200"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-primary-50 transition-colors duration-200"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex items-center justify-center space-x-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex 
                ? 'bg-primary-500 w-8' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Customer Count */}
      <div className="text-center mt-8">
        <p className="text-gray-600">
          Join <span className="font-bold text-primary-600">50,000+</span> satisfied travelers
        </p>
      </div>
    </div>
  )
}

export default TestimonialCarousel
