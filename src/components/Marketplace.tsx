import { useState } from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Input } from './ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { Search, Filter, Star, ShoppingCart, Home, Calendar, Palette, Gift } from 'lucide-react'

export function Marketplace() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [cart, setCart] = useState<any[]>([])

  const handicrafts = [
    {
      id: 1,
      name: "Traditional Dokra Horse",
      artisan: "Ravi Kumar",
      village: "Khurda Village",
      price: 2500,
      originalPrice: 3000,
      rating: 4.8,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1723864448185-218d7b07e3d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmliYWwlMjBoYW5kaWNyYWZ0cyUyMG1hcmtldHBsYWNlfGVufDF8fHx8MTc1ODA5ODQ1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "handicrafts",
      description: "Handcrafted brass horse using traditional Dokra technique",
      verified: true,
      inStock: true
    },
    {
      id: 2,
      name: "Tribal Painting on Canvas",
      artisan: "Priya Devi",
      village: "Saraikela",
      price: 1800,
      originalPrice: 2200,
      rating: 4.9,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1723864448185-218d7b07e3d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmliYWwlMjBoYW5kaWNyYWZ0cyUyMG1hcmtldHBsYWNlfGVufDF8fHx8MTc1ODA5ODQ1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "handicrafts",
      description: "Beautiful tribal motifs depicting local folklore",
      verified: true,
      inStock: true
    },
    {
      id: 3,
      name: "Bamboo Craft Set",
      artisan: "Amit Mahto",
      village: "Ranchi Hills",
      price: 1200,
      originalPrice: 1500,
      rating: 4.7,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1723864448185-218d7b07e3d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmliYWwlMjBoYW5kaWNyYWZ0cyUyMG1hcmtldHBsYWNlfGVufDF8fHx8MTc1ODA5ODQ1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "handicrafts",
      description: "Eco-friendly bamboo home decor items",
      verified: true,
      inStock: false
    }
  ]

  const homestays = [
    {
      id: 4,
      name: "Tribal Heritage Homestay",
      host: "Suman Singh",
      village: "Khunti Village",
      price: 1500,
      rating: 4.6,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1746080730571-172cf48cc80e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3VyaXNtJTIwZ3VpZGUlMjBsb2NhbCUyMGNvbW11bml0eXxlbnwxfHx8fDE3NTgwOTg0NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "homestays",
      description: "Experience authentic tribal lifestyle",
      amenities: ["Traditional food", "Cultural programs", "Nature walks"],
      verified: true,
      available: true
    },
    {
      id: 5,
      name: "Forest Edge Eco Stay",
      host: "Ramesh Kumar",
      village: "Betla Area",
      price: 2000,
      rating: 4.8,
      reviews: 43,
      image: "https://images.unsplash.com/photo-1746080730571-172cf48cc80e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3VyaXNtJTIwZ3VpZGUlMjBsb2NhbCUyMGNvbW11bml0eXxlbnwxfHx8fDE3NTgwOTg0NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "homestays",
      description: "Stay close to nature and wildlife",
      amenities: ["Organic food", "Bird watching", "Campfire"],
      verified: true,
      available: true
    }
  ]

  const events = [
    {
      id: 6,
      name: "Sarhul Festival Celebration",
      organizer: "Local Community",
      date: "2024-04-15",
      price: 500,
      rating: 4.9,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1746080730571-172cf48cc80e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3VyaXNtJTIwZ3VpZGUlMjBsb2NhbCUyMGNvbW11bml0eXxlbnwxfHx8fDE3NTgwOTg0NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "events",
      description: "Traditional spring festival of tribal communities",
      duration: "Full day",
      verified: true,
      available: true
    },
    {
      id: 7,
      name: "Handicraft Workshop",
      organizer: "Artisan Collective",
      date: "2024-04-20",
      price: 800,
      rating: 4.7,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1723864448185-218d7b07e3d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmliYWwlMjBoYW5kaWNyYWZ0cyUyMG1hcmtldHBsYWNlfGVufDF8fHx8MTc1ODA5ODQ1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "events",
      description: "Learn traditional Dokra and pottery making",
      duration: "4 hours",
      verified: true,
      available: true
    }
  ]

  const allItems = [...handicrafts, ...homestays, ...events]

  const filteredItems = allItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (item.artisan || item.host || item.organizer || '').toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const addToCart = (item: any) => {
    setCart(prev => [...prev, item])
  }

  const ProductCard = ({ item }: { item: any }) => (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-square overflow-hidden relative">
        <ImageWithFallback
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        {item.verified && (
          <Badge className="absolute top-2 right-2 bg-green-500">
            Verified
          </Badge>
        )}
        {!item.inStock && item.category === 'handicrafts' && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Badge variant="destructive">Out of Stock</Badge>
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg mb-1 line-clamp-1">{item.name}</h3>
        <p className="text-sm text-muted-foreground mb-2">
          {item.artisan || item.host || item.organizer} • {item.village || item.duration}
        </p>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {item.description}
        </p>
        
        <div className="flex items-center space-x-1 mb-3">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm">{item.rating}</span>
          <span className="text-xs text-muted-foreground">({item.reviews})</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg">₹{item.price.toLocaleString()}</span>
            {item.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ₹{item.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          <Button
            size="sm"
            onClick={() => addToCart(item)}
            disabled={item.category === 'handicrafts' && !item.inStock}
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            {item.category === 'homestays' ? 'Book' : 
             item.category === 'events' ? 'Register' : 'Add to Cart'}
          </Button>
        </div>

        {item.amenities && (
          <div className="mt-3 pt-3 border-t">
            <div className="flex flex-wrap gap-1">
              {item.amenities.slice(0, 2).map((amenity: string, index: number) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {amenity}
                </Badge>
              ))}
              {item.amenities.length > 2 && (
                <Badge variant="outline" className="text-xs">
                  +{item.amenities.length - 2} more
                </Badge>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl mb-4">Local Marketplace</h1>
        <p className="text-muted-foreground text-lg">
          Support local artisans and communities while discovering authentic Jharkhand
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search products, artisans, or locations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full md:w-48">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="handicrafts">Handicrafts</SelectItem>
            <SelectItem value="homestays">Homestays</SelectItem>
            <SelectItem value="events">Events</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
        <Button className="relative">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Cart
          {cart.length > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
              {cart.length}
            </Badge>
          )}
        </Button>
      </div>

      {/* Category Tabs */}
      <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all" className="flex items-center space-x-2">
            <Gift className="h-4 w-4" />
            <span>All</span>
          </TabsTrigger>
          <TabsTrigger value="handicrafts" className="flex items-center space-x-2">
            <Palette className="h-4 w-4" />
            <span>Handicrafts</span>
          </TabsTrigger>
          <TabsTrigger value="homestays" className="flex items-center space-x-2">
            <Home className="h-4 w-4" />
            <span>Homestays</span>
          </TabsTrigger>
          <TabsTrigger value="events" className="flex items-center space-x-2">
            <Calendar className="h-4 w-4" />
            <span>Events</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value={selectedCategory} className="mt-6">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No items found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <ProductCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>

      {/* Featured Artisans */}
      <Card>
        <CardHeader>
          <CardTitle>Featured Artisans</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: "Ravi Kumar", specialty: "Dokra Craft", village: "Khurda", rating: 4.9, products: 15 },
              { name: "Priya Devi", specialty: "Tribal Paintings", village: "Saraikela", rating: 4.8, products: 23 },
              { name: "Amit Mahto", specialty: "Bamboo Crafts", village: "Ranchi Hills", rating: 4.7, products: 12 }
            ].map((artisan, index) => (
              <div key={index} className="border rounded-lg p-4 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <Palette className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-1">{artisan.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{artisan.specialty}</p>
                <p className="text-xs text-muted-foreground mb-2">{artisan.village}</p>
                <div className="flex items-center justify-center space-x-1 mb-2">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm">{artisan.rating}</span>
                </div>
                <Badge variant="outline" className="text-xs">
                  {artisan.products} products
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Blockchain Verification Info */}
      <Card className="bg-green-50 border-green-200">
        <CardContent className="p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              <Star className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg">Blockchain-Verified Marketplace</h3>
              <p className="text-muted-foreground">
                All artisans and products are verified through blockchain technology ensuring authenticity, 
                fair pricing, and direct community support. Your purchases are secure and traceable.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}