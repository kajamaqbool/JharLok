import { useState } from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Textarea } from './ui/textarea'
import { Slider } from './ui/slider'
import { Checkbox } from './ui/checkbox'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { Calendar, MapPin, Users, DollarSign, Clock, Star, Camera, Mountain, TreePine, Waves } from 'lucide-react'

interface ItineraryPlannerProps {
  onBookGuide?: (guide?: any, language?: string) => void
}

export function ItineraryPlanner({ onBookGuide }: ItineraryPlannerProps = {}) {
  const [formData, setFormData] = useState({
    duration: 3,
    budget: [10000],
    groupSize: 2,
    interests: [] as string[],
    startDate: '',
    preferences: ''
  })
  const [generatedItinerary, setGeneratedItinerary] = useState<any>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const interestOptions = [
    { id: 'nature', label: 'Nature & Wildlife', icon: TreePine },
    { id: 'culture', label: 'Tribal Culture', icon: Users },
    { id: 'adventure', label: 'Adventure Sports', icon: Mountain },
    { id: 'waterfalls', label: 'Waterfalls', icon: Waves },
    { id: 'photography', label: 'Photography', icon: Camera },
    { id: 'spirituality', label: 'Spiritual Sites', icon: Star }
  ]

  const sampleItinerary = {
    title: "3-Day Jharkhand Cultural & Nature Experience",
    totalCost: 8500,
    days: [
      {
        day: 1,
        title: "Ranchi Heritage & Culture",
        locations: ["Rock Garden", "Jagannath Temple", "Tribal Museum"],
        activities: [
          { time: "09:00", activity: "Visit Rock Garden", duration: "2 hours", cost: 500 },
          { time: "12:00", activity: "Lunch at local restaurant", duration: "1 hour", cost: 800 },
          { time: "14:00", activity: "Jagannath Temple visit", duration: "1.5 hours", cost: 0 },
          { time: "16:30", activity: "Tribal Museum exploration", duration: "2 hours", cost: 300 },
          { time: "19:00", activity: "Dinner & cultural performance", duration: "2 hours", cost: 1200 }
        ],
        accommodation: "Hotel Radisson Blu",
        transport: "Private car rental",
        dailyCost: 2800
      },
      {
        day: 2,
        title: "Betla National Park Safari",
        locations: ["Betla National Park", "Palamau Fort"],
        activities: [
          { time: "05:00", activity: "Early morning safari", duration: "4 hours", cost: 1500 },
          { time: "10:00", activity: "Breakfast at forest lodge", duration: "1 hour", cost: 600 },
          { time: "12:00", activity: "Visit Palamau Fort", duration: "2 hours", cost: 200 },
          { time: "15:00", activity: "Nature walk & bird watching", duration: "2 hours", cost: 0 },
          { time: "18:00", activity: "Tribal village visit", duration: "2 hours", cost: 500 }
        ],
        accommodation: "Betla Forest Lodge",
        transport: "Jeep safari included",
        dailyCost: 2800
      },
      {
        day: 3,
        title: "Dassam Falls & Local Crafts",
        locations: ["Dassam Falls", "Local Market", "Artisan Village"],
        activities: [
          { time: "08:00", activity: "Drive to Dassam Falls", duration: "1.5 hours", cost: 800 },
          { time: "10:00", activity: "Waterfall exploration & photography", duration: "3 hours", cost: 0 },
          { time: "14:00", activity: "Lunch with local family", duration: "1.5 hours", cost: 700 },
          { time: "16:00", activity: "Handicraft shopping", duration: "2 hours", cost: 1000 },
          { time: "18:30", activity: "Return to Ranchi", duration: "1.5 hours", cost: 400 }
        ],
        accommodation: "Day trip",
        transport: "Private car",
        dailyCost: 2900
      }
    ]
  }

  const handleInterestChange = (interestId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, interestId]
        : prev.interests.filter(i => i !== interestId)
    }))
  }

  const generateItinerary = () => {
    setIsGenerating(true)
    setTimeout(() => {
      setGeneratedItinerary(sampleItinerary)
      setIsGenerating(false)
    }, 2000)
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl mb-4">AI-Powered Itinerary Planner</h1>
        <p className="text-muted-foreground text-lg">
          Get personalized travel plans based on your preferences and budget
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Planning Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>Plan Your Trip</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Duration (days)</Label>
                <Select value={formData.duration.toString()} onValueChange={(value) => setFormData(prev => ({ ...prev, duration: parseInt(value) }))}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[1,2,3,4,5,6,7].map(day => (
                      <SelectItem key={day} value={day.toString()}>{day} day{day > 1 ? 's' : ''}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Group Size</Label>
                <Input 
                  type="number" 
                  value={formData.groupSize}
                  onChange={(e) => setFormData(prev => ({ ...prev, groupSize: parseInt(e.target.value) }))}
                  min="1"
                  max="20"
                />
              </div>
            </div>

            <div>
              <Label>Start Date</Label>
              <Input 
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData(prev => ({ ...prev, startDate: e.target.value }))}
              />
            </div>

            <div>
              <Label>Budget per person: ₹{formData.budget[0].toLocaleString()}</Label>
              <Slider
                value={formData.budget}
                onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}
                max={50000}
                min={5000}
                step={1000}
                className="mt-2"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>₹5,000</span>
                <span>₹50,000</span>
              </div>
            </div>

            <div>
              <Label className="mb-3 block">Interests</Label>
              <div className="grid grid-cols-2 gap-3">
                {interestOptions.map((interest) => {
                  const Icon = interest.icon
                  return (
                    <div key={interest.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={interest.id}
                        checked={formData.interests.includes(interest.id)}
                        onCheckedChange={(checked) => handleInterestChange(interest.id, checked as boolean)}
                      />
                      <label htmlFor={interest.id} className="flex items-center space-x-2 text-sm cursor-pointer">
                        <Icon className="h-4 w-4" />
                        <span>{interest.label}</span>
                      </label>
                    </div>
                  )
                })}
              </div>
            </div>

            <div>
              <Label>Special Preferences</Label>
              <Textarea
                placeholder="Any specific requirements, dietary restrictions, accessibility needs, etc."
                value={formData.preferences}
                onChange={(e) => setFormData(prev => ({ ...prev, preferences: e.target.value }))}
              />
            </div>

            <Button 
              className="w-full" 
              onClick={generateItinerary}
              disabled={isGenerating}
            >
              {isGenerating ? 'Generating AI Itinerary...' : 'Generate Itinerary'}
            </Button>
          </CardContent>
        </Card>

        {/* Generated Itinerary */}
        <div className="space-y-6">
          {isGenerating && (
            <Card>
              <CardContent className="p-8 text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                <p>AI is analyzing your preferences and creating a personalized itinerary...</p>
              </CardContent>
            </Card>
          )}

          {generatedItinerary && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{generatedItinerary.title}</span>
                  <Badge variant="secondary" className="text-lg px-3 py-1">
                    <DollarSign className="h-4 w-4 mr-1" />
                    ₹{generatedItinerary.totalCost.toLocaleString()}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {generatedItinerary.days.map((day: any, index: number) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg">Day {day.day}: {day.title}</h3>
                      <Badge>₹{day.dailyCost.toLocaleString()}</Badge>
                    </div>
                    
                    <div className="space-y-3">
                      {day.activities.map((activity: any, actIndex: number) => (
                        <div key={actIndex} className="flex items-center justify-between p-3 bg-muted/50 rounded">
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              <span>{activity.time}</span>
                            </div>
                            <span>{activity.activity}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <span>{activity.duration}</span>
                            {activity.cost > 0 && (
                              <Badge variant="outline">₹{activity.cost}</Badge>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-3 pt-3 border-t flex justify-between text-sm text-muted-foreground">
                      <span>🏨 {day.accommodation}</span>
                      <span>🚗 {day.transport}</span>
                    </div>
                  </div>
                ))}

                <div className="flex space-x-3">
                  <Button className="flex-1">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book This Itinerary
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Users className="h-4 w-4 mr-2" />
                    Share with Friends
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Popular Templates */}
          <Card>
            <CardHeader>
              <CardTitle>Popular Itinerary Templates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: "Wildlife & Nature", duration: "4 days", price: "₹12,000", image: "https://images.unsplash.com/photo-1648975482235-b6e58254a773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqaGFya2hhbmQlMjB0b3VyaXNtJTIwbW91bnRhaW5zJTIwZm9yZXN0fGVufDF8fHx8MTc1ODA5ODQ1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
                { name: "Cultural Heritage", duration: "3 days", price: "₹8,500", image: "https://images.unsplash.com/photo-1746080730571-172cf48cc80e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3VyaXNtJTIwZ3VpZGUlMjBsb2NhbCUyMGNvbW11bml0eXxlbnwxfHx8fDE3NTgwOTg0NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
                { name: "Adventure Sports", duration: "5 days", price: "₹18,000", image: "https://images.unsplash.com/photo-1648975482235-b6e58254a773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqaGFya2hhbmQlMjB0b3VyaXNtJTIwbW91bnRhaW5zJTIwZm9yZXN0fGVufDF8fHx8MTc1ODA5ODQ1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" }
              ].map((template, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 border rounded-lg hover:bg-muted/50 cursor-pointer">
                  <ImageWithFallback
                    src={template.image}
                    alt={template.name}
                    className="w-16 h-16 rounded object-cover"
                  />
                  <div className="flex-1">
                    <h4>{template.name}</h4>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <span>{template.duration}</span>
                      <span>•</span>
                      <span>{template.price}</span>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">Use Template</Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}