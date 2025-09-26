import { useState } from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Input } from './ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { Search, Star, Shield, MapPin, Calendar, Users, Phone, Mail, CheckCircle, Languages } from 'lucide-react'

interface GuideVerificationProps {
  onBookGuide?: (guide?: any, language?: string) => void
}

export function GuideVerification({ onBookGuide }: GuideVerificationProps = {}) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSpecialty, setSelectedSpecialty] = useState('all')
  const [selectedLocation, setSelectedLocation] = useState('all')

  const guides = [
    {
      id: 1,
      name: "Ravi Kumar Singh",
      photo: "https://images.unsplash.com/photo-1746080730571-172cf48cc80e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3VyaXNtJTIwZ3VpZGUlMjBsb2NhbCUyMGNvbW11bml0eXxlbnwxfHx8fDE3NTgwOTg0NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specialty: "Tribal Culture & History",
      location: "Ranchi",
      experience: "8 years",
      rating: 4.9,
      reviews: 247,
      languages: ["Hindi", "English", "Santhali", "Ho", "Tamil"],
      certifications: ["Government Licensed", "First Aid Certified", "Cultural Heritage Expert"],
      blockchainVerified: true,
      phone: "+91 98765 43210",
      email: "ravi.guide@jharkhand.com",
      price: 2000,
      availability: "Available",
      description: "Experienced guide specializing in tribal culture and heritage sites. Expert in local folklore and traditional practices.",
      tours: 156,
      responseTime: "< 2 hours"
    },
    {
      id: 2,
      name: "Priya Sharma",
      photo: "https://images.unsplash.com/photo-1746080730571-172cf48cc80e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3VyaXNtJTIwZ3VpZGUlMjBsb2NhbCUyMGNvbW11bml0eXxlbnwxfHx8fDE3NTgwOTg0NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specialty: "Wildlife & Nature",
      location: "Betla National Park",
      experience: "6 years",
      rating: 4.8,
      reviews: 189,
      languages: ["Hindi", "English", "Telugu", "Bhojpuri"],
      certifications: ["Wildlife Expert", "Nature Photography", "Eco-Tourism Specialist"],
      blockchainVerified: true,
      phone: "+91 98765 43211",
      email: "priya.nature@jharkhand.com",
      price: 2500,
      availability: "Available",
      description: "Wildlife enthusiast and nature guide with expertise in flora and fauna of Jharkhand. Professional photographer.",
      tours: 142,
      responseTime: "< 1 hour"
    },
    {
      id: 3,
      name: "Amit Mahto",
      photo: "https://images.unsplash.com/photo-1746080730571-172cf48cc80e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3VyaXNtJTIwZ3VpZGUlMjBsb2NhbCUyMGNvbW11bml0eXxlbnwxfHx8fDE3NTgwOTg0NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specialty: "Adventure & Trekking",
      location: "Netarhat",
      experience: "10 years",
      rating: 4.7,
      reviews: 298,
      languages: ["Hindi", "English", "Tamil", "Kurukh"],
      certifications: ["Mountain Guide", "Rock Climbing Instructor", "Emergency Response"],
      blockchainVerified: true,
      phone: "+91 98765 43212",
      email: "amit.adventure@jharkhand.com",
      price: 3000,
      availability: "Busy until Apr 25",
      description: "Adventure sports specialist with expertise in trekking, rock climbing, and outdoor activities in Jharkhand hills.",
      tours: 203,
      responseTime: "< 3 hours"
    },
    {
      id: 4,
      name: "Sunita Devi",
      photo: "https://images.unsplash.com/photo-1746080730571-172cf48cc80e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3VyaXNtJTIwZ3VpZGUlMjBsb2NhbCUyMGNvbW11bml0eXxlbnwxfHx8fDE3NTgwOTg0NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specialty: "Handicrafts & Local Arts",
      location: "Khunti",
      experience: "5 years",
      rating: 4.9,
      reviews: 156,
      languages: ["Hindi", "Telugu", "Santhali", "English"],
      certifications: ["Artisan Network Certified", "Cultural Ambassador", "Traditional Crafts Expert"],
      blockchainVerified: true,
      phone: "+91 98765 43213",
      email: "sunita.crafts@jharkhand.com",
      price: 1800,
      availability: "Available",
      description: "Local artisan and cultural guide specializing in traditional handicrafts and tribal art forms.",
      tours: 98,
      responseTime: "< 4 hours"
    }
  ]

  const specialties = [
    "Tribal Culture & History",
    "Wildlife & Nature", 
    "Adventure & Trekking",
    "Handicrafts & Local Arts",
    "Spiritual & Religious Sites"
  ]

  const locations = [
    "Ranchi",
    "Betla National Park",
    "Netarhat", 
    "Khunti",
    "Jamshedpur",
    "Dhanbad"
  ]

  const filteredGuides = guides.filter(guide => {
    const matchesSearch = guide.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         guide.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         guide.location.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesSpecialty = selectedSpecialty === 'all' || guide.specialty === selectedSpecialty
    const matchesLocation = selectedLocation === 'all' || guide.location === selectedLocation
    return matchesSearch && matchesSpecialty && matchesLocation
  })

  const GuideCard = ({ guide }: { guide: any }) => (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="relative">
            <Avatar className="h-20 w-20">
              <AvatarImage src={guide.photo} alt={guide.name} />
              <AvatarFallback>{guide.name.split(' ').map((n: string) => n[0]).join('')}</AvatarFallback>
            </Avatar>
            {guide.blockchainVerified && (
              <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                <CheckCircle className="h-4 w-4 text-white" />
              </div>
            )}
          </div>
          
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl mb-1">{guide.name}</h3>
                <p className="text-muted-foreground mb-2">{guide.specialty}</p>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-3 w-3" />
                    <span>{guide.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{guide.experience}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-3 w-3" />
                    <span>{guide.tours} tours</span>
                  </div>
                </div>
              </div>
              <Badge variant={guide.availability === 'Available' ? 'default' : 'secondary'}>
                {guide.availability}
              </Badge>
            </div>

            <p className="text-sm text-muted-foreground mb-4">{guide.description}</p>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm">{guide.rating}</span>
                  <span className="text-xs text-muted-foreground">({guide.reviews} reviews)</span>
                </div>
                <div className="text-right">
                  <div className="text-lg">₹{guide.price.toLocaleString()}/day</div>
                  <div className="text-xs text-muted-foreground">Response: {guide.responseTime}</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-1">
                {guide.languages.slice(0, 3).map((lang: string, index: number) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {lang}
                  </Badge>
                ))}
                {guide.languages.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{guide.languages.length - 3} more
                  </Badge>
                )}
              </div>

              <div className="flex flex-wrap gap-1">
                {guide.certifications.slice(0, 2).map((cert: string, index: number) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    <Shield className="h-2 w-2 mr-1" />
                    {cert}
                  </Badge>
                ))}
                {guide.certifications.length > 2 && (
                  <Badge variant="secondary" className="text-xs">
                    +{guide.certifications.length - 2} more
                  </Badge>
                )}
              </div>

              <div className="flex space-x-2 pt-2">
                <Button 
                  className="flex-1" 
                  disabled={guide.availability !== 'Available'}
                  onClick={() => onBookGuide?.(guide)}
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Guide
                </Button>
                <Button variant="outline" size="icon">
                  <Phone className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl mb-4">Verified Local Guides</h1>
        <p className="text-muted-foreground text-lg">
          Connect with blockchain-verified, experienced guides for authentic Jharkhand experiences
        </p>
      </div>

      {/* Search and Filters */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="relative md:col-span-2">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search guides by name, specialty, or location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
          <SelectTrigger>
            <SelectValue placeholder="Specialty" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Specialties</SelectItem>
            {specialties.map((specialty) => (
              <SelectItem key={specialty} value={specialty}>{specialty}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={selectedLocation} onValueChange={setSelectedLocation}>
          <SelectTrigger>
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Locations</SelectItem>
            {locations.map((location) => (
              <SelectItem key={location} value={location}>{location}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl mb-1 text-primary">1,247</div>
            <p className="text-sm text-muted-foreground">Verified Guides</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl mb-1 text-primary">4.8★</div>
            <p className="text-sm text-muted-foreground">Average Rating</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl mb-1 text-primary">11+</div>
<p className="text-sm text-muted-foreground">Languages</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl mb-1 text-primary">50+</div>
            <p className="text-sm text-muted-foreground">Destinations</p>
          </CardContent>
        </Card>
      </div>

      {/* Guides List */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl">Available Guides ({filteredGuides.length})</h2>
          <Select defaultValue="rating">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="experience">Most Experienced</SelectItem>
              <SelectItem value="reviews">Most Reviewed</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {filteredGuides.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No guides found matching your criteria.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredGuides.map((guide) => (
              <GuideCard key={guide.id} guide={guide} />
            ))}
          </div>
        )}
      </div>

      {/* Blockchain Verification Info */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg mb-2">JharLok Blockchain-Verified Guide Network</h3>
              <p className="text-muted-foreground mb-4">
                All guides on JharLok undergo rigorous verification through blockchain technology, ensuring:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Identity verification & background checks</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Professional certifications & training</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Real-time location tracking during tours</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Transparent pricing & secure payments</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Community feedback & rating system</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Emergency support & insurance coverage</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}