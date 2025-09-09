
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {Search, Calendar, User, ArrowRight, Tag, Clock, Eye} from 'lucide-react'
import { Link } from 'react-router-dom'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  views: number
  category: string
  tags: string[]
  image: string
  featured: boolean
}

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'destinations', label: 'Destinations' },
    { id: 'tips', label: 'Travel Tips' },
    { id: 'culture', label: 'Culture' },
    { id: 'adventure', label: 'Adventure' },
    { id: 'luxury', label: 'Luxury Travel' },
    { id: 'budget', label: 'Budget Travel' }
  ]

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Ultimate Guide to Bali: Hidden Gems Beyond the Tourist Trail',
      excerpt: 'Discover the secret spots that locals love, from hidden waterfalls to authentic warungs serving the best nasi goreng you\'ll ever taste.',
      content: 'Full article content here...',
      author: 'Emily Rodriguez',
      date: '2024-01-15',
      readTime: '8 min read',
      views: 2847,
      category: 'destinations',
      tags: ['Bali', 'Indonesia', 'Hidden Gems', 'Culture'],
      image: 'https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg',
      featured: true
    },
    {
      id: '2',
      title: 'Packing Like a Pro: The Ultimate Travel Packing Checklist for 2024',
      excerpt: 'Master the art of efficient packing with our comprehensive guide. Learn what to pack, what to leave behind, and pro tips from seasoned travelers.',
      content: 'Full article content here...',
      author: 'Michael Chen',
      date: '2024-01-12',
      readTime: '6 min read',
      views: 1923,
      category: 'tips',
      tags: ['Packing', 'Travel Tips', 'Organization'],
      image: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg',
      featured: false
    },
    {
      id: '3',
      title: 'Japan\'s Cherry Blossom Season: When and Where to See Sakura',
      excerpt: 'Plan your perfect hanami experience with our detailed guide to Japan\'s cherry blossom season, including the best viewing spots and timing.',
      content: 'Full article content here...',
      author: 'Sarah Johnson',
      date: '2024-01-10',
      readTime: '10 min read',
      views: 3156,
      category: 'destinations',
      tags: ['Japan', 'Cherry Blossoms', 'Spring Travel', 'Culture'],
      image: 'https://images.pexels.com/photos/161401/fushimi-inari-taisha-shrine-kyoto-japan-temple-161401.jpeg',
      featured: true
    },
    {
      id: '4',
      title: 'Luxury Safari: The Best Time to Visit Kenya and Tanzania',
      excerpt: 'Experience the Great Migration and witness Africa\'s incredible wildlife in luxury. Our guide covers the best seasons, camps, and experiences.',
      content: 'Full article content here...',
      author: 'David Thompson',
      date: '2024-01-08',
      readTime: '12 min read',
      views: 1756,
      category: 'luxury',
      tags: ['Safari', 'Kenya', 'Tanzania', 'Wildlife', 'Luxury'],
      image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg',
      featured: false
    },
    {
      id: '5',
      title: 'Budget Backpacking Through Southeast Asia: $30 a Day Guide',
      excerpt: 'Explore Thailand, Vietnam, and Cambodia on a shoestring budget. Learn how to stretch your dollars while having amazing experiences.',
      content: 'Full article content here...',
      author: 'Emily Rodriguez',
      date: '2024-01-05',
      readTime: '9 min read',
      views: 4521,
      category: 'budget',
      tags: ['Budget Travel', 'Southeast Asia', 'Backpacking'],
      image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg',
      featured: false
    },
    {
      id: '6',
      title: 'The Art of Slow Travel: Why Taking Your Time Pays Off',
      excerpt: 'Discover the benefits of slow travel and how spending more time in fewer places can lead to deeper, more meaningful experiences.',
      content: 'Full article content here...',
      author: 'Sarah Johnson',
      date: '2024-01-03',
      readTime: '7 min read',
      views: 2134,
      category: 'tips',
      tags: ['Slow Travel', 'Mindful Travel', 'Philosophy'],
      image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg',
      featured: false
    },
    {
      id: '7',
      title: 'Iceland\'s Ring Road: A Complete 10-Day Itinerary',
      excerpt: 'Drive Iceland\'s famous Ring Road with our detailed itinerary covering waterfalls, glaciers, hot springs, and the Northern Lights.',
      content: 'Full article content here...',
      author: 'Michael Chen',
      date: '2024-01-01',
      readTime: '15 min read',
      views: 2876,
      category: 'adventure',
      tags: ['Iceland', 'Road Trip', 'Adventure', 'Northern Lights'],
      image: 'https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg',
      featured: true
    },
    {
      id: '8',
      title: 'Digital Nomad Paradise: The Best Co-working Spaces in Lisbon',
      excerpt: 'Working remotely from Lisbon? Here are the best co-working spaces, cafes, and neighborhoods for digital nomads.',
      content: 'Full article content here...',
      author: 'David Thompson',
      date: '2023-12-28',
      readTime: '5 min read',
      views: 1634,
      category: 'tips',
      tags: ['Digital Nomad', 'Lisbon', 'Portugal', 'Remote Work'],
      image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg',
      featured: false
    }
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  const featuredPosts = blogPosts.filter(post => post.featured)
  const recentPosts = blogPosts.slice(0, 5)

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
              Travel Stories & Inspiration
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Discover amazing destinations, get expert travel tips, and find inspiration 
              for your next adventure through our curated travel stories.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Filters */}
            <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Featured Posts */}
            {selectedCategory === 'all' && !searchTerm && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {featuredPosts.slice(0, 2).map((post, index) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="relative">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{post.views.toLocaleString()}</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors duration-200">
                          <Link to={`/blog/${post.id}`}>{post.title}</Link>
                        </h3>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <User className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600">{post.author}</span>
                          </div>
                          <Link
                            to={`/blog/${post.id}`}
                            className="text-primary-600 hover:text-primary-700 font-medium flex items-center space-x-1"
                          >
                            <span>Read More</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            )}

            {/* All Posts */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {selectedCategory === 'all' ? 'Latest Articles' : categories.find(c => c.id === selectedCategory)?.label}
                <span className="text-gray-500 ml-2">({filteredPosts.length})</span>
              </h2>
              
              {filteredPosts.length === 0 ? (
                <div className="text-center py-12">
                  <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
                  <p className="text-gray-600">Try adjusting your search terms or category filter</p>
                </div>
              ) : (
                <div className="space-y-8">
                  {filteredPosts.map((post, index) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-64 md:h-full object-cover"
                          />
                        </div>
                        <div className="md:w-2/3 p-6">
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(post.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{post.readTime}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Eye className="w-4 h-4" />
                              <span>{post.views.toLocaleString()}</span>
                            </div>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors duration-200">
                            <Link to={`/blog/${post.id}`}>{post.title}</Link>
                          </h3>
                          <p className="text-gray-600 mb-4">{post.excerpt}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map(tag => (
                              <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                                #{tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <User className="w-4 h-4 text-gray-400" />
                              <span className="text-sm text-gray-600">{post.author}</span>
                            </div>
                            <Link
                              to={`/blog/${post.id}`}
                              className="bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors duration-200 flex items-center space-x-2"
                            >
                              <span>Read Article</span>
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-primary-500 to-tropical-500 text-white rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3">Stay Inspired</h3>
              <p className="text-white/90 mb-4">Get weekly travel inspiration and tips delivered to your inbox.</p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
                />
                <button className="w-full bg-white text-primary-600 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Posts</h3>
              <div className="space-y-4">
                {recentPosts.map(post => (
                  <Link key={post.id} to={`/blog/${post.id}`} className="block group">
                    <div className="flex space-x-3">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors duration-200 line-clamp-2">
                          {post.title}
                        </h4>
                        <div className="text-sm text-gray-500 mt-1">
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {['Travel Tips', 'Destinations', 'Budget Travel', 'Luxury', 'Adventure', 'Culture', 'Food', 'Photography'].map(tag => (
                  <button
                    key={tag}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-primary-100 hover:text-primary-700 transition-colors duration-200"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
