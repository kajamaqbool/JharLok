import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { TrendingUp, TrendingDown, Users, MapPin, DollarSign, Star, Calendar, Eye } from 'lucide-react'

export function Analytics() {
  const visitorData = [
    { month: 'Jan', domestic: 4000, international: 800, total: 4800 },
    { month: 'Feb', domestic: 5200, international: 1200, total: 6400 },
    { month: 'Mar', domestic: 6800, international: 1600, total: 8400 },
    { month: 'Apr', domestic: 8900, international: 2100, total: 11000 },
    { month: 'May', domestic: 7600, international: 1800, total: 9400 },
    { month: 'Jun', domestic: 9200, international: 2400, total: 11600 }
  ]

  const revenueData = [
    { month: 'Jan', accommodation: 120000, guides: 45000, marketplace: 35000, total: 200000 },
    { month: 'Feb', accommodation: 158000, guides: 62000, marketplace: 48000, total: 268000 },
    { month: 'Mar', accommodation: 195000, guides: 78000, marketplace: 65000, total: 338000 },
    { month: 'Apr', accommodation: 245000, guides: 98000, marketplace: 87000, total: 430000 },
    { month: 'May', accommodation: 210000, guides: 85000, marketplace: 75000, total: 370000 },
    { month: 'Jun', accommodation: 285000, guides: 115000, marketplace: 95000, total: 495000 }
  ]

  const destinationData = [
    { name: 'Ranchi', visitors: 35, color: '#0088FE' },
    { name: 'Betla National Park', visitors: 25, color: '#00C49F' },
    { name: 'Dassam Falls', visitors: 15, color: '#FFBB28' },
    { name: 'Netarhat', visitors: 12, color: '#FF8042' },
    { name: 'Khunti', visitors: 8, color: '#8884d8' },
    { name: 'Others', visitors: 5, color: '#82ca9d' }
  ]

  const feedbackData = [
    { category: 'Excellent', count: 1250, color: '#22c55e' },
    { category: 'Good', count: 890, color: '#3b82f6' },
    { category: 'Average', count: 340, color: '#f59e0b' },
    { category: 'Poor', count: 120, color: '#ef4444' }
  ]

  const guidePerformance = [
    { name: 'Ravi Kumar', rating: 4.9, tours: 156, revenue: 312000, growth: 15 },
    { name: 'Priya Sharma', rating: 4.8, tours: 142, revenue: 355000, growth: 22 },
    { name: 'Amit Mahto', rating: 4.7, tours: 203, revenue: 609000, growth: -5 },
    { name: 'Sunita Devi', rating: 4.9, tours: 98, revenue: 176400, growth: 35 }
  ]

  const marketplaceMetrics = [
    { category: 'Handicrafts', sales: 245, revenue: 586000, avgPrice: 2392 },
    { category: 'Homestays', bookings: 89, revenue: 267000, avgPrice: 3000 },
    { category: 'Events', registrations: 156, revenue: 124800, avgPrice: 800 },
    { category: 'Tours', bookings: 203, revenue: 609000, avgPrice: 3000 }
  ]

  const StatCard = ({ title, value, change, icon: Icon, trend }: any) => (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">{title}</p>
            <h3 className="text-2xl mt-1">{value}</h3>
            <div className="flex items-center space-x-1 mt-2">
              {trend === 'up' ? (
                <TrendingUp className="h-4 w-4 text-green-500" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-500" />
              )}
              <span className={`text-sm ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                {change}%
              </span>
              <span className="text-sm text-muted-foreground">vs last month</span>
            </div>
          </div>
          <div className="p-3 bg-primary/10 rounded-full">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>
      </CardContent>
    </Card>
  )

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d']

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl mb-2">Tourism Analytics Dashboard</h1>
          <p className="text-muted-foreground">
            Monitor tourism trends, revenue, and community impact across Jharkhand
          </p>
        </div>
        <div className="flex space-x-2">
          <Select defaultValue="6months">
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1month">1 Month</SelectItem>
              <SelectItem value="3months">3 Months</SelectItem>
              <SelectItem value="6months">6 Months</SelectItem>
              <SelectItem value="1year">1 Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard
          title="Total Visitors"
          value="62,400"
          change={18}
          trend="up"
          icon={Users}
        />
        <StatCard
          title="Revenue Generated"
          value="₹49.5L"
          change={24}
          trend="up"
          icon={DollarSign}
        />
        <StatCard
          title="Active Guides"
          value="1,247"
          change={8}
          trend="up"
          icon={MapPin}
        />
        <StatCard
          title="Avg Rating"
          value="4.8"
          change={-2}
          trend="down"
          icon={Star}
        />
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="visitors">Visitors</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="guides">Guides</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Visitor Trends (6 Months)</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={visitorData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="domestic" stroke="#0088FE" strokeWidth={2} />
                    <Line type="monotone" dataKey="international" stroke="#00C49F" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Popular Destinations</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={destinationData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="visitors"
                    >
                      {destinationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Marketplace Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                {marketplaceMetrics.map((metric, index) => (
                  <div key={index} className="text-center p-4 border rounded-lg">
                    <h4 className="mb-2">{metric.category}</h4>
                    <div className="space-y-1">
                      <p className="text-2xl text-primary">
                        {metric.category === 'Handicrafts' ? metric.sales :
                         metric.category === 'Homestays' ? metric.bookings :
                         metric.category === 'Events' ? metric.registrations :
                         metric.bookings}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {metric.category === 'Handicrafts' ? 'Sales' :
                         metric.category === 'Homestays' ? 'Bookings' :
                         metric.category === 'Events' ? 'Registrations' :
                         'Bookings'}
                      </p>
                      <p className="text-lg">₹{(metric.revenue / 1000).toFixed(0)}K</p>
                      <Badge variant="outline" className="text-xs">
                        Avg: ₹{metric.avgPrice.toLocaleString()}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="visitors" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Visitor Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={visitorData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="domestic" stackId="a" fill="#0088FE" />
                    <Bar dataKey="international" stackId="a" fill="#00C49F" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Visitor Demographics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <h3 className="text-2xl text-blue-600">89%</h3>
                    <p className="text-sm text-muted-foreground">Domestic Visitors</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <h3 className="text-2xl text-green-600">11%</h3>
                    <p className="text-sm text-muted-foreground">International Visitors</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4>Age Groups</h4>
                  {[
                    { group: '18-25', percentage: 35 },
                    { group: '26-35', percentage: 28 },
                    { group: '36-50', percentage: 22 },
                    { group: '50+', percentage: 15 }
                  ].map((age, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm">{age.group} years</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary" 
                            style={{ width: `${age.percentage}%` }}
                          ></div>
                        </div>
                        <span className="text-sm w-8">{age.percentage}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="revenue" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Revenue Breakdown by Source</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => `₹${(value as number / 1000).toFixed(0)}K`} />
                  <Legend />
                  <Bar dataKey="accommodation" stackId="a" fill="#0088FE" />
                  <Bar dataKey="guides" stackId="a" fill="#00C49F" />
                  <Bar dataKey="marketplace" stackId="a" fill="#FFBB28" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <h3 className="text-lg mb-2">Total Revenue</h3>
                <p className="text-3xl text-primary">₹20.9L</p>
                <Badge className="mt-2">+24% growth</Badge>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <h3 className="text-lg mb-2">Community Impact</h3>
                <p className="text-3xl text-green-600">₹8.5L</p>
                <p className="text-sm text-muted-foreground mt-1">Directly to locals</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <h3 className="text-lg mb-2">Platform Fee</h3>
                <p className="text-3xl text-orange-600">₹2.1L</p>
                <p className="text-sm text-muted-foreground mt-1">10% platform fee</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="guides" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Guides</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {guidePerformance.map((guide, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <span>{guide.name.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                      <div>
                        <h4>{guide.name}</h4>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span>{guide.rating}</span>
                          </div>
                          <span>{guide.tours} tours</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg">₹{(guide.revenue / 1000).toFixed(0)}K</p>
                      <div className="flex items-center space-x-1">
                        {guide.growth > 0 ? (
                          <TrendingUp className="h-3 w-3 text-green-500" />
                        ) : (
                          <TrendingDown className="h-3 w-3 text-red-500" />
                        )}
                        <span className={`text-xs ${guide.growth > 0 ? 'text-green-500' : 'text-red-500'}`}>
                          {guide.growth > 0 ? '+' : ''}{guide.growth}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="feedback" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Customer Satisfaction</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={feedbackData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="count"
                    >
                      {feedbackData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Feedback Highlights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { rating: 5, text: "Amazing cultural experience! The AR tour was incredible.", author: "Sarah M." },
                  { rating: 5, text: "Local guide was very knowledgeable and friendly.", author: "Raj P." },
                  { rating: 4, text: "Beautiful destinations, would recommend to others.", author: "Mike L." },
                  { rating: 5, text: "Handicrafts marketplace has authentic products.", author: "Priya S." }
                ].map((feedback, index) => (
                  <div key={index} className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-3 w-3 ${i < feedback.rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">{feedback.author}</span>
                    </div>
                    <p className="text-sm">{feedback.text}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Sentiment Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-green-50 border-green-200 border rounded-lg">
                  <h3 className="text-2xl text-green-600">78%</h3>
                  <p className="text-sm text-muted-foreground">Positive</p>
                </div>
                <div className="text-center p-4 bg-blue-50 border-blue-200 border rounded-lg">
                  <h3 className="text-2xl text-blue-600">18%</h3>
                  <p className="text-sm text-muted-foreground">Neutral</p>
                </div>
                <div className="text-center p-4 bg-orange-50 border-orange-200 border rounded-lg">
                  <h3 className="text-2xl text-orange-600">3%</h3>
                  <p className="text-sm text-muted-foreground">Negative</p>
                </div>
                <div className="text-center p-4 bg-purple-50 border-purple-200 border rounded-lg">
                  <h3 className="text-2xl text-purple-600">1%</h3>
                  <p className="text-sm text-muted-foreground">Critical</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* AI Insights */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Eye className="h-5 w-5" />
            <span>AI-Powered Insights</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="mb-3">Key Trends</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Wildlife tourism increased by 35% this quarter</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>AR/VR tours showing 45% higher engagement</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Peak season predicted for next month</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3">Recommendations</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Increase guide capacity for upcoming festivals</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Focus marketing on 25-35 age demographic</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span>Expand handicraft marketplace inventory</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}