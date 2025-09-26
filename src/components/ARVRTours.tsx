import { useState } from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { Play, Eye, Headphones, MapPin, Clock, Users, Star, Download, Share2, Volume2 } from 'lucide-react'

export function ARVRTours() {
  const [selectedTour, setSelectedTour] = useState<any>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const arTours = [
    {
      id: 1,
      title: "Jagannath Temple AR Experience",
      location: "Ranchi",
      duration: "15 minutes",
      type: "AR",
      rating: 4.9,
      views: 12456,
      description: "Explore the historical Jagannath Temple with augmented reality overlays showing ancient architecture and cultural significance.",
      thumbnail: "https://images.unsplash.com/photo-1600645739478-abf50f79d6b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhciUyMHZyJTIwdGVjaG5vbG9neSUyMHRvdXJpc218ZW58MXx8fHwxNzU4MDk4NDYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["3D Architecture", "Historical Timeline", "Audio Commentary", "Interactive Hotspots"],
      languages: ["Hindi", "English", "Tamil", "Santhali"],
      requirements: "Smartphone with camera",
      category: "Heritage"
    },
    {
      id: 2,
      title: "Betla Wildlife AR Safari",
      location: "Betla National Park",
      duration: "25 minutes",
      type: "AR",
      rating: 4.8,
      views: 8934,
      description: "Experience Betla National Park through AR with virtual wildlife encounters and real-time animal information.",
      thumbnail: "https://images.unsplash.com/photo-1600645739478-abf50f79d6b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhciUyMHZyJTIwdGVjaG5vbG9neSUyMHRvdXJpc218ZW58MXx8fHwxNzU4MDk4NDYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Virtual Animals", "Species Information", "Conservation Stories", "Tracking Game"],
      languages: ["Hindi", "English", "Telugu"],
      requirements: "Smartphone with GPS",
      category: "Wildlife"
    },
    {
      id: 3,
      title: "Tribal Village AR Culture Tour",
      location: "Khunti",
      duration: "30 minutes",
      type: "AR",
      rating: 4.9,
      views: 15678,
      description: "Immerse yourself in tribal culture with AR overlays showing traditional practices, dances, and daily life.",
      thumbnail: "https://images.unsplash.com/photo-1600645739478-abf50f79d6b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhciUyMHZyJTIwdGVjaG5vbG9neSUyMHRvdXJpc218ZW58MXx8fHwxNzU4MDk4NDYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Cultural Performances", "Traditional Crafts", "Historical Context", "Interactive Stories"],
      languages: ["Hindi", "English", "Santhali", "Ho"],
      requirements: "Smartphone with camera",
      category: "Culture"
    }
  ]

  const vrTours = [
    {
      id: 4,
      title: "Dassam Falls VR Adventure",
      location: "Taimara",
      duration: "20 minutes",
      type: "VR",
      rating: 4.8,
      views: 9876,
      description: "Experience the breathtaking Dassam Falls in virtual reality with stunning 360° views and nature sounds.",
      thumbnail: "https://images.unsplash.com/photo-1600645739478-abf50f79d6b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhciUyMHZyJTIwdGVjaG5vbG9neSUyMHRvdXJpc218ZW58MXx8fHwxNzU4MDk4NDYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["360° Views", "Nature Sounds", "Geology Information", "Photography Mode"],
      languages: ["Hindi", "English", "Tamil"],
      requirements: "VR Headset or Phone VR",
      category: "Nature"
    },
    {
      id: 5,
      title: "Netarhat Sunset VR Experience",
      location: "Netarhat",
      duration: "35 minutes",
      type: "VR",
      rating: 4.9,
      views: 11234,
      description: "Watch the magical sunset from Queen of Chotanagpur plateau in immersive virtual reality.",
      thumbnail: "https://images.unsplash.com/photo-1600645739478-abf50f79d6b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhciUyMHZyJTIwdGVjaG5vbG9neSUyMHRvdXJpc218ZW58MXx8fHwxNzU4MDk4NDYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Time-lapse Sunset", "360° Panorama", "Weather Information", "Local Legends"],
      languages: ["Hindi", "English", "Bhojpuri"],
      requirements: "VR Headset recommended",
      category: "Scenic"
    },
    {
      id: 6,
      title: "Underground Coal Mine VR Tour",
      location: "Dhanbad",
      duration: "40 minutes",
      type: "VR",
      rating: 4.7,
      views: 7654,
      description: "Safely explore Jharkhand's mining heritage through virtual reality without going underground.",
      thumbnail: "https://images.unsplash.com/photo-1600645739478-abf50f79d6b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhciUyMHZyJTIwdGVjaG5vbG9neSUyMHRvdXJpc218ZW58MXx8fHwxNzU4MDk4NDYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Mine Exploration", "Industrial Heritage", "Safety Education", "Historical Timeline"],
      languages: ["Hindi", "English", "Telugu"],
      requirements: "VR Headset required",
      category: "Industrial"
    }
  ]

  const allTours = [...arTours, ...vrTours]

  const TourCard = ({ tour }: { tour: any }) => (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer" onClick={() => setSelectedTour(tour)}>
      <div className="relative aspect-video">
        <ImageWithFallback
          src={tour.thumbnail}
          alt={tour.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <Button size="lg" className="rounded-full">
            <Play className="h-6 w-6 mr-2" />
            {tour.type === 'AR' ? 'Start AR' : 'Enter VR'}
          </Button>
        </div>
        <Badge className="absolute top-2 left-2" variant={tour.type === 'AR' ? 'default' : 'secondary'}>
          {tour.type}
        </Badge>
        <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center space-x-1">
          <Clock className="h-3 w-3" />
          <span>{tour.duration}</span>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg mb-2 line-clamp-1">{tour.title}</h3>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
          <div className="flex items-center space-x-1">
            <MapPin className="h-3 w-3" />
            <span>{tour.location}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Eye className="h-3 w-3" />
            <span>{tour.views.toLocaleString()}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{tour.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm">{tour.rating}</span>
          </div>
          <Badge variant="outline" className="text-xs">
            {tour.category}
          </Badge>
        </div>
      </CardContent>
    </Card>
  )

  const TourPlayer = ({ tour }: { tour: any }) => (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-2xl mb-2">{tour.title}</CardTitle>
            <div className="flex items-center space-x-4 text-muted-foreground">
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>{tour.location}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{tour.duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>{tour.views.toLocaleString()} views</span>
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Video/AR Player */}
        <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
          <ImageWithFallback
            src={tour.thumbnail}
            alt={tour.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Button
              size="lg"
              className="rounded-full w-20 h-20"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? (
                <div className="w-6 h-6 bg-white rounded"></div>
              ) : (
                <Play className="h-8 w-8" />
              )}
            </Button>
          </div>
          {tour.type === 'AR' && (
            <div className="absolute bottom-4 left-4">
              <Badge variant="secondary">
                Point camera at surroundings
              </Badge>
            </div>
          )}
          {tour.type === 'VR' && (
            <div className="absolute bottom-4 left-4">
              <Badge variant="secondary">
                <Headphones className="h-3 w-3 mr-1" />
                Use headphones for best experience
              </Badge>
            </div>
          )}
          <div className="absolute bottom-4 right-4">
            <Button variant="secondary" size="sm">
              <Volume2 className="h-4 w-4 mr-1" />
              Audio Settings
            </Button>
          </div>
        </div>

        {/* Tour Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="mb-3">Description</h4>
            <p className="text-muted-foreground">{tour.description}</p>
          </div>
          <div>
            <h4 className="mb-3">Features</h4>
            <div className="grid grid-cols-2 gap-2">
              {tour.features.map((feature: string, index: number) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <h5 className="mb-2">Languages</h5>
            <div className="flex flex-wrap gap-1">
              {tour.languages.map((lang: string, index: number) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {lang}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h5 className="mb-2">Requirements</h5>
            <p className="text-sm text-muted-foreground">{tour.requirements}</p>
          </div>
          <div>
            <h5 className="mb-2">Category</h5>
            <Badge>{tour.category}</Badge>
          </div>
        </div>

        <div className="flex space-x-3">
          <Button className="flex-1">
            {tour.type === 'AR' ? 'Launch AR Experience' : 'Enter VR World'}
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Download App
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl mb-4">AR/VR Virtual Tours</h1>
        <p className="text-muted-foreground text-lg">
          Experience Jharkhand's beauty and culture through immersive augmented and virtual reality
        </p>
      </div>

      {selectedTour ? (
        <div className="space-y-6">
          <Button variant="outline" onClick={() => setSelectedTour(null)}>
            ← Back to Tours
          </Button>
          <TourPlayer tour={selectedTour} />
        </div>
      ) : (
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">All Tours</TabsTrigger>
            <TabsTrigger value="ar">AR Experiences</TabsTrigger>
            <TabsTrigger value="vr">VR Adventures</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allTours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ar" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {arTours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="vr" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vrTours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      )}

      {/* Technology Info */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg mb-2">Augmented Reality (AR)</h3>
                <p className="text-muted-foreground text-sm">
                  Use your smartphone camera to overlay digital information onto real-world locations. 
                  Perfect for on-site exploration with interactive hotspots and historical context.
                </p>
                <div className="mt-3">
                  <Badge variant="outline" className="mr-2">iOS Compatible</Badge>
                  <Badge variant="outline">Android Compatible</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-purple-50 border-purple-200">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                <Headphones className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg mb-2">Virtual Reality (VR)</h3>
                <p className="text-muted-foreground text-sm">
                  Immerse yourself completely in Jharkhand's destinations from anywhere in the world. 
                  Experience 360° environments with spatial audio and interactive elements.
                </p>
                <div className="mt-3">
                  <Badge variant="outline" className="mr-2">VR Headset</Badge>
                  <Badge variant="outline">Mobile VR</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Popular Categories */}
      <Card>
        <CardHeader>
          <CardTitle>Explore by Category</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Heritage Sites", count: 12, icon: "🏛️" },
              { name: "Natural Wonders", count: 18, icon: "🌲" },
              { name: "Cultural Experiences", count: 15, icon: "🎭" },
              { name: "Adventure Tours", count: 9, icon: "🏔️" }
            ].map((category, index) => (
              <div key={index} className="text-center p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                <div className="text-3xl mb-2">{category.icon}</div>
                <h4 className="mb-1">{category.name}</h4>
                <p className="text-sm text-muted-foreground">{category.count} tours</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Download Apps */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <CardContent className="p-6 text-center">
          <h3 className="text-xl mb-4">Download Our Mobile Apps</h3>
          <p className="text-muted-foreground mb-6">
            Get the full AR/VR experience with our dedicated mobile applications
          </p>
          <div className="flex justify-center space-x-4">
            <Button>
              <Download className="h-4 w-4 mr-2" />
              Download AR App
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download VR App
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}