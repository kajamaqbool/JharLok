import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { MapPin, Users, Star, Zap, Shield, Globe } from 'lucide-react'

interface HomePageProps {
  setActiveSection: (section: string) => void
  onBookGuide?: (guide?: any, language?: string) => void
}

export function HomePage({ setActiveSection, onBookGuide }: HomePageProps) {
  const features = [
    {
      icon: Zap,
      title: 'AI-Powered Planning',
      description: 'Get personalized itineraries and smart recommendations based on your preferences.',
      action: () => setActiveSection('itinerary')
    },
    {
      icon: Globe,
      title: 'Multilingual Support',
      description: 'Chat in Hindi, Tamil, Telugu, English and regional languages of Jharkhand.',
      action: () => setActiveSection('chatbot')
    },
    {
      icon: Shield,
      title: 'Blockchain Security',
      description: 'Secure transactions and verified guides through blockchain technology.',
      action: () => setActiveSection('guides')
    },
    {
      icon: MapPin,
      title: 'Interactive Maps',
      description: 'Explore destinations with real-time location data and AR previews.',
      action: () => setActiveSection('ar-vr')
    },
    {
      icon: Users,
      title: 'Local Marketplace',
      description: 'Support local artisans and communities through our integrated marketplace.',
      action: () => setActiveSection('marketplace')
    },
    {
      icon: Star,
      title: 'AR/VR Tours',
      description: 'Preview destinations and cultural sites through immersive virtual experiences.',
      action: () => setActiveSection('ar-vr')
    }
  ]

  const destinations = [
    {
      name: 'Ranchi Hills',
      image: 'https://images.unsplash.com/photo-1648975482235-b6e58254a773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqaGFya2hhbmQlMjB0b3VyaXNtJTIwbW91bnRhaW5zJTIwZm9yZXN0fGVufDF8fHx8MTc1ODA5ODQ1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4.8,
      activities: ['Trekking', 'Photography', 'Nature Walks']
    },
    {
      name: 'Betla National Park',
      image: 'https://images.unsplash.com/photo-1648975482235-b6e58254a773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqaGFya2hhbmQlMjB0b3VyaXNtJTIwbW91bnRhaW5zJTIwZm9yZXN0fGVufDF8fHx8MTc1ODA5ODQ1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4.7,
      activities: ['Wildlife Safari', 'Bird Watching', 'Jungle Walks']
    },
    {
      name: 'Dassam Falls',
      image: 'https://images.unsplash.com/photo-1648975482235-b6e58254a773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqaGFya2hhbmQlMjB0b3VyaXNtJTIwbW91bnRhaW5zJTIwZm9yZXN0fGVufDF8fHx8MTc1ODA5ODQ1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4.6,
      activities: ['Waterfall Trek', 'Swimming', 'Picnicking']
    }
  ]

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 rounded-lg overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1648975482235-b6e58254a773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqaGFya2hhbmQlMjB0b3VyaXNtJTIwbW91bnRhaW5zJTIwZm9yZXN0fGVufDF8fHx8MTc1ODA5ODQ1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Jharkhand Tourism"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Welcome to JharLok
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Experience the beauty of tribal culture, pristine forests, and rich heritage with AI-powered multilingual travel assistance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="px-8 py-3"
              onClick={() => onBookGuide?.()}
            >
              Book a Guide Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-3"
              onClick={() => setActiveSection('itinerary')}
            >
              Plan Your Journey
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-3"
              onClick={() => setActiveSection('chatbot')}
            >
              Ask AI Assistant
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl mb-4">Platform Features</h2>
          <p className="text-muted-foreground text-lg">
            Everything you need for an authentic Jharkhand experience
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={feature.action}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl mb-4">Popular Destinations</h2>
          <p className="text-muted-foreground text-lg">
            Explore the most loved places in Jharkhand
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl">{destination.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">{destination.rating}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {destination.activities.map((activity, actIndex) => (
                    <Badge key={actIndex} variant="secondary" className="text-xs">
                      {activity}
                    </Badge>
                  ))}
                </div>
                <Button 
                  className="w-full" 
                  size="sm"
                  onClick={() => onBookGuide?.()}
                >
                  Book Guide for {destination.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-primary/5 rounded-lg p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-3xl mb-2 text-primary">50+</h3>
            <p className="text-muted-foreground">Tourist Destinations</p>
          </div>
          <div>
            <h3 className="text-3xl mb-2 text-primary">1000+</h3>
            <p className="text-muted-foreground">Verified Guides</p>
          </div>
          <div>
            <h3 className="text-3xl mb-2 text-primary">500+</h3>
            <p className="text-muted-foreground">Local Artisans</p>
          </div>
          <div>
            <h3 className="text-3xl mb-2 text-primary">11+</h3>
            <p className="text-muted-foreground">Languages Supported</p>
          </div>
        </div>
      </section>
    </div>
  )
}