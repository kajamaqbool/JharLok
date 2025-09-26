import { useState } from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Separator } from './ui/separator'
import { Badge } from './ui/badge'
import { Checkbox } from './ui/checkbox'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Progress } from './ui/progress'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { 
  ArrowLeft, 
  ArrowRight, 
  CreditCard, 
  Smartphone, 
  Building, 
  Shield, 
  CheckCircle, 
  Calendar,
  MapPin,
  Users,
  Star,
  Download,
  Share2,
  Wallet,
  QrCode
} from 'lucide-react'

interface PaymentFlowProps {
  bookingData: any
  onComplete: () => void
  onCancel: () => void
}

export function PaymentFlow({ bookingData, onComplete, onCancel }: PaymentFlowProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [paymentData, setPaymentData] = useState({
    method: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: '',
    upiId: '',
    billingAddress: {
      address: '',
      city: '',
      state: '',
      pincode: '',
      country: 'India'
    },
    agreedToTerms: false,
    promoCode: '',
    discount: 0
  })

  const steps = [
    { id: 1, title: 'Review Booking', icon: CheckCircle },
    { id: 2, title: 'Payment Method', icon: CreditCard },
    { id: 3, title: 'Billing Details', icon: Building },
    { id: 4, title: 'Confirmation', icon: Shield },
    { id: 5, title: 'Success', icon: CheckCircle }
  ]

  const paymentMethods = [
    { id: 'card', name: 'Credit/Debit Card', icon: CreditCard, description: 'Visa, Mastercard, RuPay' },
    { id: 'upi', name: 'UPI Payment', icon: Smartphone, description: 'GPay, PhonePe, Paytm' },
    { id: 'netbanking', name: 'Net Banking', icon: Building, description: 'All major banks' },
    { id: 'wallet', name: 'Digital Wallet', icon: Wallet, description: 'Paytm, Mobikwik' }
  ]

  const calculateTotal = () => {
    const baseAmount = bookingData?.price || 5000
    const taxes = baseAmount * 0.18 // 18% GST
    const discount = paymentData.discount
    return {
      baseAmount,
      taxes,
      discount,
      total: baseAmount + taxes - discount
    }
  }

  const handleApplyPromo = () => {
    const promoCodes = {
      'FIRST50': 500,
      'JHARLOK20': bookingData?.price * 0.2 || 1000,
      'TRIBAL10': bookingData?.price * 0.1 || 500
    }
    
    const discount = promoCodes[paymentData.promoCode as keyof typeof promoCodes] || 0
    setPaymentData({...paymentData, discount})
  }

  const processPayment = () => {
    // Simulate payment processing
    setCurrentStep(5)
    setTimeout(() => {
      onComplete()
    }, 3000)
  }

  const StepIndicator = () => (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        {steps.map((step, index) => {
          const Icon = step.icon
          const isActive = currentStep === step.id
          const isCompleted = currentStep > step.id
          
          return (
            <div key={step.id} className="flex items-center">
              <div className={`
                flex items-center justify-center w-10 h-10 rounded-full border-2
                ${isActive ? 'border-primary bg-primary text-white' : 
                  isCompleted ? 'border-green-500 bg-green-500 text-white' : 
                  'border-muted bg-background text-muted-foreground'}
              `}>
                <Icon className="h-5 w-5" />
              </div>
              {index < steps.length - 1 && (
                <div className={`
                  w-16 h-1 mx-2
                  ${isCompleted ? 'bg-green-500' : 'bg-muted'}
                `} />
              )}
            </div>
          )
        })}
      </div>
      <div className="text-center">
        <h2 className="text-2xl mb-2">{steps[currentStep - 1]?.title}</h2>
        <Progress value={(currentStep / steps.length) * 100} className="w-full max-w-md mx-auto" />
      </div>
    </div>
  )

  const ReviewBooking = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Booking Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start space-x-4">
            <ImageWithFallback
              src={bookingData?.image || "https://images.unsplash.com/photo-1648975482235-b6e58254a773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqaGFya2hhbmQlMjB0b3VyaXNtJTIwbW91bnRhaW5zJTIwZm9yZXN0fGVufDF8fHx8MTc1ODA5ODQ1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"}
              alt={bookingData?.title || "Tour Package"}
              className="w-24 h-24 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="text-lg mb-2">{bookingData?.title || "Jharkhand Cultural Tour"}</h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{bookingData?.date || "Apr 15-20, 2024"}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>{bookingData?.guests || "2 Adults"}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>{bookingData?.location || "Ranchi, Jharkhand"}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{bookingData?.rating || "4.8"} Rating</span>
                </div>
              </div>
            </div>
          </div>
          
          <Separator />
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Package Price</span>
              <span>₹{calculateTotal().baseAmount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Taxes & Fees</span>
              <span>₹{calculateTotal().taxes.toLocaleString()}</span>
            </div>
            {paymentData.discount > 0 && (
              <div className="flex justify-between text-green-600">
                <span>Discount Applied</span>
                <span>-₹{calculateTotal().discount.toLocaleString()}</span>
              </div>
            )}
            <Separator />
            <div className="flex justify-between text-lg">
              <span>Total Amount</span>
              <span>₹{calculateTotal().total.toLocaleString()}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Promo Code */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex space-x-2">
            <Input
              placeholder="Enter promo code"
              value={paymentData.promoCode}
              onChange={(e) => setPaymentData({...paymentData, promoCode: e.target.value})}
            />
            <Button variant="outline" onClick={handleApplyPromo}>
              Apply
            </Button>
          </div>
          {paymentData.discount > 0 && (
            <p className="text-sm text-green-600 mt-2">
              Promo code applied! You saved ₹{paymentData.discount}
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  )

  const PaymentMethod = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Choose Payment Method</CardTitle>
          <CardDescription>Select your preferred payment option</CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup value={paymentData.method} onValueChange={(value) => setPaymentData({...paymentData, method: value})}>
            {paymentMethods.map((method) => {
              const Icon = method.icon
              return (
                <div key={method.id} className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50">
                  <RadioGroupItem value={method.id} id={method.id} />
                  <Icon className="h-5 w-5 text-muted-foreground" />
                  <div className="flex-1">
                    <Label htmlFor={method.id} className="text-base cursor-pointer">
                      {method.name}
                    </Label>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                  </div>
                </div>
              )
            })}
          </RadioGroup>
        </CardContent>
      </Card>

      {paymentData.method === 'card' && (
        <Card>
          <CardHeader>
            <CardTitle>Card Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input
                id="cardNumber"
                placeholder="1234 5678 9012 3456"
                value={paymentData.cardNumber}
                onChange={(e) => setPaymentData({...paymentData, cardNumber: e.target.value})}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiryDate">Expiry Date</Label>
                <Input
                  id="expiryDate"
                  placeholder="MM/YY"
                  value={paymentData.expiryDate}
                  onChange={(e) => setPaymentData({...paymentData, expiryDate: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvv">CVV</Label>
                <Input
                  id="cvv"
                  placeholder="123"
                  value={paymentData.cvv}
                  onChange={(e) => setPaymentData({...paymentData, cvv: e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="nameOnCard">Name on Card</Label>
              <Input
                id="nameOnCard"
                placeholder="Full name as on card"
                value={paymentData.nameOnCard}
                onChange={(e) => setPaymentData({...paymentData, nameOnCard: e.target.value})}
              />
            </div>
          </CardContent>
        </Card>
      )}

      {paymentData.method === 'upi' && (
        <Card>
          <CardHeader>
            <CardTitle>UPI Payment</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="upiId">UPI ID</Label>
              <Input
                id="upiId"
                placeholder="yourname@paytm"
                value={paymentData.upiId}
                onChange={(e) => setPaymentData({...paymentData, upiId: e.target.value})}
              />
            </div>
            <div className="text-center p-6 border-2 border-dashed border-muted-foreground/20 rounded-lg">
              <QrCode className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                Or scan QR code with your UPI app
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )

  const BillingDetails = () => (
    <Card>
      <CardHeader>
        <CardTitle>Billing Address</CardTitle>
        <CardDescription>Enter your billing information</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            placeholder="Enter full address"
            value={paymentData.billingAddress.address}
            onChange={(e) => setPaymentData({
              ...paymentData, 
              billingAddress: {...paymentData.billingAddress, address: e.target.value}
            })}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              placeholder="City name"
              value={paymentData.billingAddress.city}
              onChange={(e) => setPaymentData({
                ...paymentData, 
                billingAddress: {...paymentData.billingAddress, city: e.target.value}
              })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="state">State</Label>
            <Select
              value={paymentData.billingAddress.state}
              onValueChange={(value) => setPaymentData({
                ...paymentData, 
                billingAddress: {...paymentData.billingAddress, state: value}
              })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select state" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="jharkhand">Jharkhand</SelectItem>
                <SelectItem value="bihar">Bihar</SelectItem>
                <SelectItem value="west-bengal">West Bengal</SelectItem>
                <SelectItem value="odisha">Odisha</SelectItem>
                <SelectItem value="chhattisgarh">Chhattisgarh</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="pincode">PIN Code</Label>
            <Input
              id="pincode"
              placeholder="000000"
              value={paymentData.billingAddress.pincode}
              onChange={(e) => setPaymentData({
                ...paymentData, 
                billingAddress: {...paymentData.billingAddress, pincode: e.target.value}
              })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Input
              id="country"
              value="India"
              disabled
            />
          </div>
        </div>

        <Separator />

        <div className="flex items-center space-x-2">
          <Checkbox
            id="terms"
            checked={paymentData.agreedToTerms}
            onCheckedChange={(checked) => setPaymentData({...paymentData, agreedToTerms: checked as boolean})}
          />
          <Label htmlFor="terms" className="text-sm">
            I agree to the{' '}
            <Button variant="link" className="p-0 h-auto text-sm">
              Terms & Conditions
            </Button>
            {' '}and{' '}
            <Button variant="link" className="p-0 h-auto text-sm">
              Privacy Policy
            </Button>
          </Label>
        </div>
      </CardContent>
    </Card>
  )

  const Confirmation = () => (
    <Card>
      <CardHeader>
        <CardTitle>Confirm Payment</CardTitle>
        <CardDescription>Review your payment details before proceeding</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-start space-x-3">
            <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="text-sm mb-1">Secure Payment</h4>
              <p className="text-xs text-muted-foreground">
                Your payment is protected by 256-bit SSL encryption and blockchain verification
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between">
            <span>Payment Method</span>
            <span className="capitalize">{paymentMethods.find(m => m.id === paymentData.method)?.name}</span>
          </div>
          <div className="flex justify-between">
            <span>Total Amount</span>
            <span className="text-lg">₹{calculateTotal().total.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span>Booking Reference</span>
            <span className="text-muted-foreground">JL{Date.now().toString().slice(-6)}</span>
          </div>
        </div>

        <Button className="w-full" size="lg" onClick={processPayment}>
          <Shield className="h-4 w-4 mr-2" />
          Confirm & Pay ₹{calculateTotal().total.toLocaleString()}
        </Button>
      </CardContent>
    </Card>
  )

  const Success = () => (
    <div className="text-center space-y-6">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
        <CheckCircle className="h-12 w-12 text-green-600" />
      </div>
      
      <div>
        <h2 className="text-2xl mb-2 text-green-600">Payment Successful!</h2>
        <p className="text-muted-foreground">
          Your booking has been confirmed. You will receive confirmation details shortly.
        </p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Booking ID</span>
              <span>JL{Date.now().toString().slice(-6)}</span>
            </div>
            <div className="flex justify-between">
              <span>Amount Paid</span>
              <span>₹{calculateTotal().total.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Payment Method</span>
              <span className="capitalize">{paymentMethods.find(m => m.id === paymentData.method)?.name}</span>
            </div>
            <div className="flex justify-between">
              <span>Transaction ID</span>
              <span>TXN{Date.now().toString().slice(-8)}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex space-x-3">
        <Button className="flex-1">
          <Download className="h-4 w-4 mr-2" />
          Download Receipt
        </Button>
        <Button variant="outline" className="flex-1">
          <Share2 className="h-4 w-4 mr-2" />
          Share
        </Button>
      </div>
    </div>
  )

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1: return <ReviewBooking />
      case 2: return <PaymentMethod />
      case 3: return <BillingDetails />
      case 4: return <Confirmation />
      case 5: return <Success />
      default: return <ReviewBooking />
    }
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1: return true
      case 2: return paymentData.method !== ''
      case 3: return (
        paymentData.billingAddress.address && 
        paymentData.billingAddress.city && 
        paymentData.billingAddress.state && 
        paymentData.billingAddress.pincode &&
        paymentData.agreedToTerms
      )
      case 4: return true
      default: return false
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <StepIndicator />
      
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {renderCurrentStep()}
        </div>
        
        {currentStep < 5 && (
          <div className="space-y-6">
            {/* Price Summary */}
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Payment Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Package Price</span>
                    <span>₹{calculateTotal().baseAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxes & Fees</span>
                    <span>₹{calculateTotal().taxes.toLocaleString()}</span>
                  </div>
                  {paymentData.discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount</span>
                      <span>-₹{calculateTotal().discount.toLocaleString()}</span>
                    </div>
                  )}
                  <Separator />
                  <div className="flex justify-between text-lg">
                    <span>Total</span>
                    <span>₹{calculateTotal().total.toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security Features */}
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <Shield className="h-4 w-4 text-green-600" />
                    <span>SSL Encrypted</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Blockchain Verified</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Shield className="h-4 w-4 text-green-600" />
                    <span>PCI DSS Compliant</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {currentStep < 5 && (
        <div className="flex justify-between">
          <Button 
            variant="outline" 
            onClick={currentStep === 1 ? onCancel : () => setCurrentStep(currentStep - 1)}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {currentStep === 1 ? 'Cancel' : 'Back'}
          </Button>
          
          <Button 
            onClick={() => setCurrentStep(currentStep + 1)}
            disabled={!canProceed()}
          >
            {currentStep === 4 ? 'Process Payment' : 'Continue'}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      )}
    </div>
  )
}