import { useState } from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { Separator } from './ui/separator'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { Eye, EyeOff, Smartphone, Mail, Globe, ArrowRight } from 'lucide-react'

interface LoginProps {
  onLogin: (userData: any) => void
}

export function Login({ onLogin }: LoginProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState('en')
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    phone: '',
    otp: ''
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

  const handleLogin = (method: 'email' | 'phone') => {
    // Mock login - in real app, this would call an API
    const userData = {
      id: '1',
      name: 'Ravi Kumar',
      email: method === 'email' ? loginData.email : `user@${loginData.phone}.com`,
      phone: loginData.phone || '+91 98765 43210',
      language: selectedLanguage,
      preferences: {
        interests: ['Culture', 'Nature', 'Adventure'],
        budget: 'Medium',
        groupSize: 'Family'
      }
    }
    onLogin(userData)
  }

  const handleGuestLogin = () => {
    const guestData = {
      id: 'guest',
      name: 'Guest User',
      email: 'guest@jharlok.com',
      phone: '+91 00000 00000',
      language: selectedLanguage,
      preferences: {
        interests: ['General'],
        budget: 'Medium',
        groupSize: 'Solo'
      }
    }
    onLogin(guestData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        
        {/* Left Side - Branding */}
        <div className="hidden lg:block space-y-8">
          <div className="text-center">
            <h1 className="text-5xl mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Welcome to JharLok
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your Gateway to Authentic Jharkhand Experiences
            </p>
          </div>
          
          <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1648975482235-b6e58254a773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqaGFya2hhbmQlMjB0b3VyaXNtJTIwbW91bnRhaW5zJTIwZm9yZXN0fGVufDF8fHx8MTc1ODA5ODQ1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Jharkhand Tourism"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-white/80 rounded-lg backdrop-blur-sm">
              <div className="text-2xl mb-1 text-primary">50+</div>
              <p className="text-sm text-muted-foreground">Destinations</p>
            </div>
            <div className="p-4 bg-white/80 rounded-lg backdrop-blur-sm">
              <div className="text-2xl mb-1 text-primary">1000+</div>
              <p className="text-sm text-muted-foreground">Verified Guides</p>
            </div>
            <div className="p-4 bg-white/80 rounded-lg backdrop-blur-sm">
              <div className="text-2xl mb-1 text-primary">11+</div>
              <p className="text-sm text-muted-foreground">Languages</p>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full max-w-md mx-auto">
          <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
            <CardHeader className="text-center pb-6">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="h-10 w-10 rounded-full bg-primary"></div>
                <span className="text-2xl">JharLok</span>
              </div>
              <CardTitle className="text-2xl">Welcome Back!</CardTitle>
              <CardDescription className="text-base">
                Sign in to continue your Jharkhand journey
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Language Selection */}
              <div className="space-y-2">
                <Label className="flex items-center space-x-2">
                  <Globe className="h-4 w-4" />
                  <span>Preferred Language</span>
                </Label>
                <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose your language" />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang.code} value={lang.code}>
                        <span className="flex items-center space-x-2">
                          <span>{lang.flag}</span>
                          <span>{lang.name}</span>
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Tabs defaultValue="email" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="email" className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>Email</span>
                  </TabsTrigger>
                  <TabsTrigger value="phone" className="flex items-center space-x-2">
                    <Smartphone className="h-4 w-4" />
                    <span>Phone</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="email" className="space-y-4 mt-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={loginData.email}
                      onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={loginData.password}
                        onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  <Button 
                    className="w-full" 
                    onClick={() => handleLogin('email')}
                    disabled={!loginData.email || !loginData.password}
                  >
                    Sign In with Email
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </TabsContent>

                <TabsContent value="phone" className="space-y-4 mt-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={loginData.phone}
                      onChange={(e) => setLoginData({...loginData, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="otp">OTP Code</Label>
                    <Input
                      id="otp"
                      type="text"
                      placeholder="Enter 6-digit OTP"
                      value={loginData.otp}
                      onChange={(e) => setLoginData({...loginData, otp: e.target.value})}
                    />
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" className="flex-1">
                      Send OTP
                    </Button>
                    <Button 
                      className="flex-1" 
                      onClick={() => handleLogin('phone')}
                      disabled={!loginData.phone || !loginData.otp}
                    >
                      Verify & Sign In
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or</span>
                </div>
              </div>

              <Button 
                variant="outline" 
                className="w-full" 
                onClick={handleGuestLogin}
              >
                Continue as Guest
              </Button>

              <div className="text-center space-y-2">
                <p className="text-sm text-muted-foreground">
                  New to JharLok?{' '}
                  <Button variant="link" className="p-0 h-auto">
                    Create Account
                  </Button>
                </p>
                <p className="text-sm text-muted-foreground">
                  <Button variant="link" className="p-0 h-auto">
                    Forgot Password?
                  </Button>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Mobile Stats */}
          <div className="lg:hidden mt-8 grid grid-cols-3 gap-4 text-center">
            <div className="p-3 bg-white/80 rounded-lg backdrop-blur-sm">
              <div className="text-xl mb-1 text-primary">50+</div>
              <p className="text-xs text-muted-foreground">Destinations</p>
            </div>
            <div className="p-3 bg-white/80 rounded-lg backdrop-blur-sm">
              <div className="text-xl mb-1 text-primary">1000+</div>
              <p className="text-xs text-muted-foreground">Guides</p>
            </div>
            <div className="p-3 bg-white/80 rounded-lg backdrop-blur-sm">
              <div className="text-xl mb-1 text-primary">11+</div>
              <p className="text-xs text-muted-foreground">Languages</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}