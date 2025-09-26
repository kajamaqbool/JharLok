import { useState } from 'react'
import { Header } from './components/Header'
import { HomePage } from './components/HomePage'
import { ChatBot } from './components/ChatBot'
import { ItineraryPlanner } from './components/ItineraryPlanner'
import { Marketplace } from './components/Marketplace'
import { GuideVerification } from './components/GuideVerification'
import { ARVRTours } from './components/ARVRTours'
import { Analytics } from './components/Analytics'
import { BookingFlow } from './components/BookingFlow'
import { Login } from './components/Login'

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState(null)
  const [activeSection, setActiveSection] = useState('home')
  const [showBookingFlow, setShowBookingFlow] = useState(false)
  const [selectedGuide, setSelectedGuide] = useState(null)
  const [userLanguage, setUserLanguage] = useState('en')

  const handleLogin = (loginUserData: any) => {
    setUserData(loginUserData)
    setUserLanguage(loginUserData.language)
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUserData(null)
    setActiveSection('home')
    setShowBookingFlow(false)
    setSelectedGuide(null)
  }

  const handleBookGuide = (guide?: any, language: string = 'en') => {
    setSelectedGuide(guide)
    setUserLanguage(language)
    setShowBookingFlow(true)
  }

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomePage setActiveSection={setActiveSection} onBookGuide={handleBookGuide} userData={userData} />
      case 'chatbot':
        return <ChatBot onBookGuide={handleBookGuide} userData={userData} />
      case 'itinerary':
        return <ItineraryPlanner onBookGuide={handleBookGuide} userData={userData} />
      case 'marketplace':
        return <Marketplace onBookGuide={handleBookGuide} userData={userData} />
      case 'guides':
        return <GuideVerification onBookGuide={handleBookGuide} userData={userData} />
      case 'ar-vr':
        return <ARVRTours onBookGuide={handleBookGuide} userData={userData} />
      case 'analytics':
        return <Analytics userData={userData} />
      default:
        return <HomePage setActiveSection={setActiveSection} onBookGuide={handleBookGuide} userData={userData} />
    }
  }

  // Show login page if not logged in
  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />
  }

  return (
    <div className="min-h-screen bg-background">
      <Header 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        userData={userData}
        onLogout={handleLogout}
      />
      <main className="container mx-auto px-4 py-8">
        {renderActiveSection()}
      </main>
      
      {showBookingFlow && (
        <BookingFlow
          selectedGuide={selectedGuide}
          userLanguage={userLanguage}
          userData={userData}
          onClose={() => {
            setShowBookingFlow(false)
            setSelectedGuide(null)
          }}
        />
      )}
    </div>
  )
}