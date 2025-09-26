import { useState, useRef, useEffect } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Avatar, AvatarFallback } from './ui/avatar'
import { Send, Bot, User, Mic, Languages, MapPin, Calendar } from 'lucide-react'

interface ChatBotProps {
  onBookGuide?: (guide?: any, language?: string) => void
  userData?: any
}

export function ChatBot({ onBookGuide, userData }: ChatBotProps = {}) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: `Namaste${userData ? ` ${userData.name}` : ''}! Welcome to JharLok! I am your AI tourism assistant for Jharkhand. I can help you with travel planning, local information, tribal culture, and recommendations in multiple languages including Hindi, Tamil, Telugu, and regional languages. How can I assist you today?`,
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState('en')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी (Hindi)' },
    { code: 'ta', name: 'தமிழ் (Tamil)' },
    { code: 'te', name: 'తెలుగు (Telugu)' },
    { code: 'sa', name: 'ᱥᱟᱱᱛᱟᱲᱤ (Santhali)' },
    { code: 'ho', name: 'Ho' },
    { code: 'mu', name: 'Mundari' },
    { code: 'ku', name: 'Kurukh' },
    { code: 'bho', name: 'भोजपुरी (Bhojpuri)' },
    { code: 'np', name: 'नागपुरी (Nagpuri)' },
    { code: 'kh', name: 'Kharia' }
  ]

  const quickActions = [
    { label: 'Plan 3-day trip', icon: Calendar, action: 'plan-trip' },
    { label: 'Find local guides', icon: User, action: 'find-guides' },
    { label: 'Book Guide Now', icon: User, action: 'book-guide' },
    { label: 'Popular destinations', icon: MapPin, action: 'destinations' },
    { label: 'Local handicrafts', icon: MapPin, action: 'handicrafts' }
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const simulateAIResponse = (userMessage: string) => {
    setIsTyping(true)
    
    setTimeout(() => {
      let response = ''
      const lowerMessage = userMessage.toLowerCase()

      if (lowerMessage.includes('plan') || lowerMessage.includes('trip') || lowerMessage.includes('itinerary')) {
        response = `I'd be happy to help you plan a trip to Jharkhand! Here's a suggested 3-day itinerary:

**Day 1: Ranchi Exploration**
- Morning: Visit Rock Garden and Kanke Dam
- Afternoon: Explore Jagannath Temple
- Evening: Shopping at Main Road market

**Day 2: Nature & Wildlife**
- Early morning: Drive to Betla National Park (2 hours)
- Safari experience and wildlife spotting
- Overnight stay at eco-resort

**Day 3: Waterfalls & Culture**
- Morning: Visit Dassam Falls
- Afternoon: Local tribal village experience
- Evening: Return to Ranchi

Would you like me to customize this based on your interests or budget?`
        
        // Add action buttons for detailed planning
        setTimeout(() => {
          setMessages(prev => [...prev, {
            id: Date.now() + 1,
            type: 'bot',
            content: '',
            timestamp: new Date(),
            actions: [
              { type: 'book-guide', label: 'Book a Guide for This Trip', language: selectedLanguage },
              { type: 'custom-plan', label: 'Customize My Itinerary', language: selectedLanguage },
              { type: 'destinations', label: 'See More Destinations', language: selectedLanguage }
            ]
          }])
        }, 100)
      } else if (lowerMessage.includes('guide') || lowerMessage.includes('local')) {
        response = `I can help you find verified local guides! Here are some options:

🌟 **Premium Guides**
- Ravi Kumar (4.9★) - Specializes in tribal culture & history
- Priya Singh (4.8★) - Nature & wildlife expert
- Amit Mahto (4.7★) - Adventure & trekking guide

All guides are blockchain-verified and background-checked. They speak multiple local languages and have certifications in first-aid and cultural sensitivity.

Would you like me to help you book a guide now?`
        
        // Add a quick action button for booking
        setTimeout(() => {
          setMessages(prev => [...prev, {
            id: Date.now() + 1,
            type: 'bot',
            content: '',
            timestamp: new Date(),
            action: {
              type: 'book-guide',
              label: 'Book a Guide Now',
              language: selectedLanguage
            }
          }])
        }, 100)
      } else if (lowerMessage.includes('destination') || lowerMessage.includes('place') || lowerMessage.includes('visit')) {
        response = `Here are the top destinations in Jharkhand:

🏔️ **Natural Attractions**
- Dassam Falls - 44m waterfall, perfect for picnics
- Betla National Park - Tigers, elephants, bird watching
- Netarhat - "Queen of Chotanagpur", sunrise point

🏛️ **Cultural Sites**
- Jagannath Temple, Ranchi - Historic Hindu temple
- Tribal museums showcasing local art & culture
- Traditional villages with authentic experiences

🏨 **Accommodations**
- Eco-resorts in forest areas
- Tribal homestays for cultural immersion
- Modern hotels in Ranchi city

Which type of experience interests you most?`
        
        // Add action buttons for destinations
        setTimeout(() => {
          setMessages(prev => [...prev, {
            id: Date.now() + 1,
            type: 'bot',
            content: '',
            timestamp: new Date(),
            actions: [
              { type: 'book-guide', label: 'Book Guide for Destinations', language: selectedLanguage },
              { type: 'ar-vr', label: 'View AR/VR Tours', language: selectedLanguage },
              { type: 'plan-trip', label: 'Plan Trip to These Places', language: selectedLanguage }
            ]
          }])
        }, 100)
      } else if (lowerMessage.includes('handicraft') || lowerMessage.includes('shopping') || lowerMessage.includes('art')) {
        response = `Jharkhand has amazing tribal handicrafts! Here's what you can find:

🎨 **Traditional Crafts**
- Dokra metal casting - Unique brass artifacts
- Tribal paintings - Contemporary & traditional art
- Bamboo crafts - Eco-friendly home decor
- Handwoven textiles - Saris and shawls

🛒 **Where to Buy**
- Local markets in Ranchi and Jamshedpur
- Directly from artisan villages
- Our verified online marketplace

💰 **Price Range**
- Small items: ₹200-₹1000
- Medium artifacts: ₹1000-₹5000
- Large pieces: ₹5000-₹20000

All purchases support local communities directly. Would you like specific recommendations?`
        
        // Add action buttons for handicrafts
        setTimeout(() => {
          setMessages(prev => [...prev, {
            id: Date.now() + 1,
            type: 'bot',
            content: '',
            timestamp: new Date(),
            actions: [
              { type: 'marketplace', label: 'Browse Handicrafts Marketplace', language: selectedLanguage },
              { type: 'book-guide', label: 'Book Guide for Artisan Villages', language: selectedLanguage },
              { type: 'artisan-visit', label: 'Visit Artisan Workshops', language: selectedLanguage }
            ]
          }])
        }, 100)
      } else {
        response = `Namaste! Thank you for your question! I can help you with:

✈️ **Travel Planning**
- Custom itineraries based on your interests
- Best times to visit different locations
- Transportation and accommodation booking

🗺️ **Local Information**
- Real-time weather and road conditions
- Cultural events and festivals
- Local customs and tribal traditions

🛍️ **Marketplace**
- Authentic tribal handicrafts
- Local food and produce
- Homestay bookings with tribal families

🌍 **Multi-Language Support**
- Available in Hindi, Tamil, Telugu, English
- Regional languages: Santhali, Ho, Mundari, Kurukh, Nagpuri, Bhojpuri

Please let me know what specific information you'd like, and I'll provide detailed assistance in your preferred language!`
      }

      setIsTyping(false)
      setMessages(prev => [...prev, {
        id: Date.now(),
        type: 'bot',
        content: response,
        timestamp: new Date()
      }])
    }, 1500)
  }

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    const newMessage = {
      id: Date.now(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, newMessage])
    simulateAIResponse(inputMessage)
    setInputMessage('')
  }

  const handleQuickAction = (action: string) => {
    const actionMessages = {
      'plan-trip': 'Can you help me plan a 3-day trip to Jharkhand?',
      'find-guides': 'I need a local guide for my visit. Can you help?',
      'destinations': 'What are the popular tourist destinations in Jharkhand?',
      'handicrafts': 'Tell me about local handicrafts and where to buy them.'
    }

    if (action === 'book-guide') {
      onBookGuide?.(undefined, selectedLanguage)
      return
    }

    const message = actionMessages[action as keyof typeof actionMessages]
    if (message) {
      setInputMessage(message)
    }
  }

  const handleActionClick = (action: any) => {
    if (action.type === 'book-guide') {
      onBookGuide?.(undefined, action.language || selectedLanguage)
    } else if (action.type === 'marketplace') {
      // Navigate to marketplace - you might want to add a callback for section navigation
      setInputMessage('Show me the handicrafts marketplace')
    } else if (action.type === 'ar-vr') {
      // Navigate to AR/VR tours
      setInputMessage('Show me AR/VR tours of destinations')
    } else if (action.type === 'custom-plan') {
      setInputMessage('I want to customize my itinerary based on my preferences')
    } else if (action.type === 'artisan-visit') {
      setInputMessage('How can I visit artisan workshops and meet local craftspeople?')
    } else {
      // Handle other actions by triggering the corresponding quick action
      handleQuickAction(action.type)
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <Bot className="h-6 w-6 text-primary" />
              <span>AI Tourism Assistant</span>
            </CardTitle>
            <div className="flex items-center space-x-2">
              <Languages className="h-4 w-4" />
              <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((lang) => (
                    <SelectItem key={lang.code} value={lang.code}>
                      {lang.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Quick Actions */}
          <div className="mb-6 space-y-2">
            <p className="text-sm text-muted-foreground">Quick Actions:</p>
            <div className="flex flex-wrap gap-2">
              {quickActions.map((action, index) => {
                const Icon = action.icon
                return (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="flex items-center space-x-1"
                    onClick={() => handleQuickAction(action.action)}
                  >
                    <Icon className="h-3 w-3" />
                    <span>{action.label}</span>
                  </Button>
                )
              })}
            </div>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto space-y-4 mb-4 p-4 bg-muted/50 rounded-lg">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-3 ${
                  message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}
              >
                <Avatar className="h-8 w-8">
                  <AvatarFallback>
                    {message.type === 'bot' ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                  </AvatarFallback>
                </Avatar>
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-primary text-primary-foreground ml-auto'
                      : 'bg-background border'
                  }`}
                >
                  {message.content && (
                    <p className="whitespace-pre-wrap">{message.content}</p>
                  )}
                  
                  {/* Action buttons */}
                  {(message as any).actions && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {(message as any).actions.map((action: any, index: number) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          onClick={() => handleActionClick(action)}
                          className="text-xs"
                        >
                          {action.label}
                        </Button>
                      ))}
                    </div>
                  )}
                  
                  {/* Legacy single action support */}
                  {(message as any).action && (
                    <div className="mt-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleActionClick((message as any).action)}
                      >
                        {(message as any).action.label}
                      </Button>
                    </div>
                  )}
                  
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-start space-x-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>
                    <Bot className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <div className="bg-background border p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex space-x-2">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask about destinations, guides, culture, or anything else..."
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1"
            />
            <Button variant="outline" size="icon">
              <Mic className="h-4 w-4" />
            </Button>
            <Button onClick={handleSendMessage}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Languages className="h-8 w-8 mx-auto mb-2 text-primary" />
            <h3 className="mb-1">Multilingual Support</h3>
            <p className="text-sm text-muted-foreground">Chat in 11+ languages including Jharkhand regional languages</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <MapPin className="h-8 w-8 mx-auto mb-2 text-primary" />
            <h3 className="mb-1">Location-Aware</h3>
            <p className="text-sm text-muted-foreground">Real-time recommendations based on your location</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Calendar className="h-8 w-8 mx-auto mb-2 text-primary" />
            <h3 className="mb-1">Smart Planning</h3>
            <p className="text-sm text-muted-foreground">AI-powered itineraries based on your preferences</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}