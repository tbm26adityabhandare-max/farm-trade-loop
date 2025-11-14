import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sprout, Users, TrendingUp, Shield, Link as LinkIcon, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  const features = [
    {
      icon: Sprout,
      title: "Direct Market Access",
      description: "Connect directly with large buyers without middlemen. List your produce and get real-time bids.",
    },
    {
      icon: TrendingUp,
      title: "Better Prices",
      description: "Transparent bidding system ensures fair pricing. Sell collectively through FPOs for higher bargaining power.",
    },
    {
      icon: Shield,
      title: "Verified Buyers",
      description: "Trade with confidence. All buyers are KYC-verified including Reliance Fresh, BigBasket, ITC, and more.",
    },
    {
      icon: LinkIcon,
      title: "Full Traceability",
      description: "Complete transparency from farm to buyer. Track every step of your produce journey.",
    },
  ];

  const benefits = [
    "List produce with quality grading",
    "Receive competitive bids in real-time",
    "Negotiate better prices collectively",
    "Schedule convenient pickups",
    "Get paid securely and on time",
    "Access market price insights",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Sprout className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-primary">KrishiLink</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link to="#features" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Features
              </Link>
              <Link to="#how-it-works" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                How It Works
              </Link>
              <Link to="#benefits" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Benefits
              </Link>
            </nav>
            <div className="flex items-center gap-3">
              <Link to="/login">
                <Button variant="ghost" size="sm">Login</Button>
              </Link>
              <Link to="/register">
                <Button size="sm">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-light/20 via-background to-background py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                  India's Trusted Farm-to-Business Platform
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Connect Farmers with <span className="text-primary">Real Buyers</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                KrishiLink empowers farmers and FPOs to secure better prices through transparent bidding and direct access to verified buyers across India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register">
                  <Button size="lg" className="w-full sm:w-auto">
                    <Users className="mr-2 h-5 w-5" />
                    Register as Farmer/FPO
                  </Button>
                </Link>
                <Link to="/register?type=buyer">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Register as Buyer
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <p className="text-2xl font-bold text-primary">5,000+</p>
                  <p className="text-sm text-muted-foreground">Active Farmers</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">500+</p>
                  <p className="text-sm text-muted-foreground">FPOs Registered</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">₹50Cr+</p>
                  <p className="text-sm text-muted-foreground">Traded Volume</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl"></div>
                <Card className="shadow-xl">
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <div className="h-48 bg-primary-light/30 rounded-lg flex items-center justify-center">
                        <Sprout className="h-24 w-24 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-muted-foreground">Current Bid</span>
                          <span className="text-2xl font-bold text-primary">₹2,850/qt</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full w-3/4 bg-primary rounded-full"></div>
                        </div>
                        <p className="text-xs text-muted-foreground">12 active bids • Ends in 2 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose KrishiLink?
            </h2>
            <p className="text-lg text-muted-foreground">
              Transparent, efficient, and farmer-first marketplace that bridges the gap between producers and buyers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple steps to start selling your produce at better prices
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold">Register & List</h3>
              <p className="text-muted-foreground">
                Create your account, complete KYC, and list your produce with quality grading and images.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold">Receive Bids</h3>
              <p className="text-muted-foreground">
                Verified buyers place competitive bids. View all offers in real-time and choose the best one.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold">Deliver & Get Paid</h3>
              <p className="text-muted-foreground">
                Schedule pickup, deliver to buyer, and receive secure payment directly to your account.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Everything You Need to Sell Better
              </h2>
              <p className="text-lg text-muted-foreground">
                KrishiLink provides all the tools and support for farmers to maximize their income and reduce dependency on intermediaries.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              <Link to="/register">
                <Button size="lg" className="mt-4">
                  Start Selling Today
                </Button>
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary">15%</CardTitle>
                  <CardDescription className="text-base">
                    Average price increase for farmers
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-gradient-to-br from-success/10 to-success/5">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-success">24hrs</CardTitle>
                  <CardDescription className="text-base">
                    Average bid response time
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-gradient-to-br from-info/10 to-info/5">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-info">100+</CardTitle>
                  <CardDescription className="text-base">
                    Verified buyers on platform
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-gradient-to-br from-warning/10 to-warning/5">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-warning">98%</CardTitle>
                  <CardDescription className="text-base">
                    Successful transaction rate
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Ready to Get Better Prices for Your Produce?
            </h2>
            <p className="text-lg text-primary-foreground/90">
              Join thousands of farmers already earning more through KrishiLink
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/register">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-0">
                  <Users className="mr-2 h-5 w-5" />
                  Register Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Sprout className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-primary">KrishiLink</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Connecting farmers with verified buyers for transparent, fair trade.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/register" className="hover:text-primary transition-colors">Register</Link></li>
                <li><Link to="/login" className="hover:text-primary transition-colors">Login</Link></li>
                <li><Link to="#features" className="hover:text-primary transition-colors">Features</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 KrishiLink. All rights reserved. Empowering farmers across India.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
