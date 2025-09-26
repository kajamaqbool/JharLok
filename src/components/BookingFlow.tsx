import { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Calendar } from './ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { Separator } from './ui/separator'
import { Login } from './Login'
import { PaymentFlow } from './PaymentFlow'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { 
  ArrowLeft, 
  ArrowRight, 
  Calendar as CalendarIcon, 
  Users, 
  MapPin, 
  Star, 
  Shield, 
  Globe,
  Clock,
  CheckCircle,
  Phone,
  Mail,
  MessageCircle
} from 'lucide-react'
import { format } from 'date-fns'

interface BookingFlowProps {
  selectedGuide?: any
  onClose: () => void
  userLanguage?: string
}

export function BookingFlow({ selectedGuide, onClose, userLanguage = 'en' }: BookingFlowProps) {
  const [currentStep, setCurrentStep] = useState(selectedGuide ? 'details' : 'guide-selection')
  const [user, setUser] = useState(null)
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [bookingData, setBookingData] = useState({
    guide: selectedGuide || null,
    date: null,
    duration: '1',
    guests: '2',
    language: userLanguage,
    specialRequests: '',
    totalPrice: 0,
    packageType: 'standard'
  })

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'हिंदी (Hindi)', flag: '🇮🇳' },
    { code: 'ta', name: 'தமிழ் (Tamil)', flag: '🇮🇳' },
    { code: 'te', name: 'తెలుగు (Telugu)', flag: '🇮🇳' },
    { code: 'sa', name: 'ᱥᱟᱱᱛᱟᱲᱤ (Santhali)', flag: '🇮🇳' },
    { code: 'ho', name: 'Ho', flag: '🇮🇳' },
    { code: 'mu', name: 'Mundari', flag: '🇮🇳' },
    { code: 'ku', name: 'Kurukh', flag: '🇮🇳' },
    { code: 'bho', name: 'भोजपुरी (Bhojpuri)', flag: '🇮🇳' },
    { code: 'np', name: 'नागपुरी (Nagpuri)', flag: '🇮🇳' }
  ]

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
      price: 2500,
      availability: "Available",
      description: "Wildlife enthusiast and nature guide with expertise in flora and fauna of Jharkhand.",
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
      price: 3000,
      availability: "Available",
      description: "Adventure sports specialist with expertise in trekking, rock climbing, and outdoor activities.",
      tours: 203,
      responseTime: "< 3 hours"
    }
  ]

  const packageTypes = [
    {
      id: 'standard',
      name: 'Standard Package',
      description: 'Basic guide service with local transportation',
      multiplier: 1
    },
    {
      id: 'premium',
      name: 'Premium Package',
      description: 'Enhanced experience with meals and cultural activities',
      multiplier: 1.5
    },
    {
      id: 'luxury',
      name: 'Luxury Package',
      description: 'Complete VIP experience with accommodation and premium services',
      multiplier: 2.2
    }
  ]

  useEffect(() => {
    if (bookingData.guide && selectedDate && bookingData.duration) {
      const basePrice = bookingData.guide.price * parseInt(bookingData.duration)
      const packageMultiplier = packageTypes.find(p => p.id === bookingData.packageType)?.multiplier || 1
      const guestMultiplier = Math.max(1, parseInt(bookingData.guests) / 2)
      const totalPrice = basePrice * packageMultiplier * guestMultiplier
      
      setBookingData(prev => ({
        ...prev,
        date: selectedDate,
        totalPrice: Math.round(totalPrice)
      }))
    }
  }, [bookingData.guide, selectedDate, bookingData.duration, bookingData.guests, bookingData.packageType])

  const handleLogin = (userData: any) => {
    setUser(userData)
    setBookingData(prev => ({ ...prev, language: userData.language || userLanguage }))
    setCurrentStep('details')
  }

  const handleGuideSelect = (guide: any) => {
    setBookingData(prev => ({ ...prev, guide }))
    if (!user) {
      setCurrentStep('login')
    } else {
      setCurrentStep('details')
    }
  }

  const handlePaymentComplete = () => {
    setCurrentStep('success')
    setTimeout(() => {
      onClose()
    }, 5000)
  }

  const GuideSelection = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl mb-2">Choose Your Guide</h2>
        <p className="text-muted-foreground">
          Select from our verified guides who speak your preferred language
        </p>
      </div>

      <div className="space-y-4">
        {guides.filter(guide => 
          guide.languages.some(lang => 
            languages.find(l => l.code === bookingData.language)?.name.includes(lang) ||
            lang.toLowerCase().includes('english') ||
            lang.toLowerCase().includes('hindi')
          )
        ).map((guide) => (
          <Card key={guide.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => handleGuideSelect(guide)}>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={guide.photo} alt={guide.name} />
                  <AvatarFallback>{guide.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg mb-1">{guide.name}</h3>
                      <p className="text-muted-foreground mb-2">{guide.specialty}</p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-3 w-3" />
                          <span>{guide.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span>{guide.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{guide.responseTime}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg">₹{guide.price.toLocaleString()}/day</div>
                      <Badge variant="default">Available</Badge>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {guide.languages.slice(0, 4).map((lang, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {lang}
                      </Badge>
                    ))}
                  </div>

                  <p className="text-sm text-muted-foreground">{guide.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const BookingDetails = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl mb-2">Booking Details</h2>
        <p className="text-muted-foreground">
          Customize your experience with {bookingData.guide?.name}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          {/* Guide Info */}
          <Card>
            <CardHeader>
              <CardTitle>Your Selected Guide</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={bookingData.guide?.photo} alt={bookingData.guide?.name} />
                  <AvatarFallback>{bookingData.guide?.name?.split(' ').map((n: string) => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="text-lg mb-1">{bookingData.guide?.name}</h3>
                  <p className="text-muted-foreground mb-2">{bookingData.guide?.specialty}</p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-3 w-3" />
                      <span>{bookingData.guide?.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span>{bookingData.guide?.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Language Preference */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="h-5 w-5" />
                <span>Tour Language</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Select value={bookingData.language} onValueChange={(value) => setBookingData(prev => ({ ...prev, language: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose tour language" />
                </SelectTrigger>
                <SelectContent>
                  {languages.filter(lang => 
                    bookingData.guide?.languages.some((guideLang: string) => 
                      guideLang.toLowerCase().includes(lang.name.toLowerCase().split(' ')[0]) ||
                      lang.name.toLowerCase().includes(guideLang.toLowerCase())
                    )
                  ).map((lang) => (
                    <SelectItem key={lang.code} value={lang.code}>
                      <span className="flex items-center space-x-2">
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          {/* Package Selection */}
          <Card>
            <CardHeader>
              <CardTitle>Package Type</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {packageTypes.map((pkg) => (
                <div key={pkg.id} 
                     className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                       bookingData.packageType === pkg.id ? 'border-primary bg-primary/5' : 'hover:bg-muted/50'
                     }`}
                     onClick={() => setBookingData(prev => ({ ...prev, packageType: pkg.id }))}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-base mb-1">{pkg.name}</h4>
                      <p className="text-sm text-muted-foreground">{pkg.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">
                        {pkg.multiplier > 1 ? `+${Math.round((pkg.multiplier - 1) * 100)}%` : 'Base price'}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          {/* Date & Duration */}
          <Card>
            <CardHeader>
              <CardTitle>When & How Long</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Select Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left">
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label>Duration (Days)</Label>
                <Select value={bookingData.duration} onValueChange={(value) => setBookingData(prev => ({ ...prev, duration: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Day</SelectItem>
                    <SelectItem value="2">2 Days</SelectItem>
                    <SelectItem value="3">3 Days</SelectItem>
                    <SelectItem value="4">4 Days</SelectItem>
                    <SelectItem value="5">5 Days</SelectItem>
                    <SelectItem value="7">1 Week</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Number of Guests</Label>
                <Select value={bookingData.guests} onValueChange={(value) => setBookingData(prev => ({ ...prev, guests: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select guests" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Guest</SelectItem>
                    <SelectItem value="2">2 Guests</SelectItem>
                    <SelectItem value="3">3 Guests</SelectItem>
                    <SelectItem value="4">4 Guests</SelectItem>
                    <SelectItem value="5">5 Guests</SelectItem>
                    <SelectItem value="6">6+ Guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Special Requests */}
          <Card>
            <CardHeader>
              <CardTitle>Special Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Any special requirements, dietary restrictions, accessibility needs, or preferences..."
                value={bookingData.specialRequests}
                onChange={(e) => setBookingData(prev => ({ ...prev, specialRequests: e.target.value }))}
                rows={4}
              />
            </CardContent>
          </Card>

          {/* Price Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Price Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Base Price ({bookingData.duration} days)</span>
                <span>₹{((bookingData.guide?.price || 0) * parseInt(bookingData.duration)).toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Package ({packageTypes.find(p => p.id === bookingData.packageType)?.name})</span>
                <span>+{Math.round(((packageTypes.find(p => p.id === bookingData.packageType)?.multiplier || 1) - 1) * 100)}%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Guests ({bookingData.guests})</span>
                <span>×{Math.max(1, parseInt(bookingData.guests) / 2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between text-lg">
                <span>Total Amount</span>
                <span>₹{bookingData.totalPrice.toLocaleString()}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )

  const SuccessScreen = () => (
    <div className="text-center space-y-6">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
        <CheckCircle className="h-12 w-12 text-green-600" />
      </div>
      
      <div>
        <h2 className="text-2xl mb-2 text-green-600">Booking Confirmed!</h2>
        <p className="text-muted-foreground">
          Your guide has been notified and will contact you shortly
        </p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={bookingData.guide?.photo} alt={bookingData.guide?.name} />
                <AvatarFallback>{bookingData.guide?.name?.split(' ').map((n: string) => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div className="flex-1 text-left">
                <h3 className="text-lg mb-1">{bookingData.guide?.name}</h3>
                <p className="text-muted-foreground mb-2">{bookingData.guide?.specialty}</p>
                <div className="flex space-x-4">
                  <Button size="sm" variant="outline">
                    <Phone className="h-4 w-4 mr-2" />
                    Call
                  </Button>
                  <Button size="sm" variant="outline">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Chat
                  </Button>
                </div>
              </div>
            </div>
            
            <Separator />
            
            <div className="text-sm space-y-2">
              <div className="flex justify-between">
                <span>Tour Date</span>
                <span>{selectedDate ? format(selectedDate, "PPP") : "TBD"}</span>
              </div>
              <div className="flex justify-between">
                <span>Duration</span>
                <span>{bookingData.duration} days</span>
              </div>
              <div className="flex justify-between">
                <span>Language</span>
                <span>{languages.find(l => l.code === bookingData.language)?.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Paid</span>
                <span>₹{bookingData.totalPrice.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <p className="text-sm text-muted-foreground">
        Confirmation details have been sent to your email and phone
      </p>
    </div>
  )

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'guide-selection':
        return <GuideSelection />
      case 'login':
        return <Login onLogin={handleLogin} />
      case 'details':
        return <BookingDetails />
      case 'payment':
        return (
          <PaymentFlow
            bookingData={{
              ...bookingData,
              title: `${bookingData.guide?.specialty} Tour with ${bookingData.guide?.name}`,
              image: bookingData.guide?.photo,
              date: selectedDate ? format(selectedDate, "MMM dd-dd, yyyy") : "TBD",
              guests: `${bookingData.guests} ${parseInt(bookingData.guests) === 1 ? 'Guest' : 'Guests'}`,
              location: bookingData.guide?.location,
              rating: bookingData.guide?.rating,
              price: bookingData.totalPrice
            }}
            onComplete={handlePaymentComplete}
            onCancel={() => setCurrentStep('details')}
          />
        )
      case 'success':
        return <SuccessScreen />
      default:
        return <GuideSelection />
    }
  }

  const canProceed = () => {
    switch (currentStep) {
      case 'guide-selection':
        return !!bookingData.guide
      case 'details':
        return !!(selectedDate && bookingData.duration && bookingData.guests && bookingData.language)
      default:
        return false
    }
  }

  const getNextStep = () => {
    switch (currentStep) {
      case 'guide-selection':
        return user ? 'details' : 'login'
      case 'details':
        return 'payment'
      default:
        return currentStep
    }
  }

  const getPreviousStep = () => {
    switch (currentStep) {
      case 'login':
        return 'guide-selection'
      case 'details':
        return user ? 'guide-selection' : 'login'
      case 'payment':
        return 'details'
      default:
        return currentStep
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-background rounded-lg w-full max-w-6xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-background border-b p-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl">Book Your Guide</h1>
            <p className="text-muted-foreground">
              Complete your booking in {languages.find(l => l.code === bookingData.language)?.name}
            </p>
          </div>
          <Button variant="outline" onClick={onClose}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Close
          </Button>
        </div>

        <div className="p-6">
          {renderCurrentStep()}
        </div>

        {currentStep !== 'login' && currentStep !== 'payment' && currentStep !== 'success' && (
          <div className="sticky bottom-0 bg-background border-t p-6 flex justify-between">
            <Button 
              variant="outline" 
              onClick={() => setCurrentStep(getPreviousStep())}
              disabled={currentStep === 'guide-selection'}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            
            <Button 
              onClick={() => setCurrentStep(getNextStep())}
              disabled={!canProceed()}
            >
              Continue
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}