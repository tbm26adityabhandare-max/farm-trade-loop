import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sprout, Plus, Package, TrendingUp, IndianRupee, Eye } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const FarmerDashboard = () => {
  const navigate = useNavigate();

  // Mock data
  const listings = [
    {
      id: 1,
      cropName: "Wheat",
      quantity: 50,
      quality: "A",
      expectedPrice: 2500,
      status: "bidding",
      bidsCount: 5,
      highestBid: 2850,
      image: "🌾",
    },
    {
      id: 2,
      cropName: "Rice (Basmati)",
      quantity: 30,
      quality: "A",
      expectedPrice: 4500,
      status: "sold",
      soldPrice: 4750,
      image: "🌾",
    },
    {
      id: 3,
      cropName: "Tomatoes",
      quantity: 20,
      quality: "B",
      expectedPrice: 1200,
      status: "listed",
      image: "🍅",
    },
  ];

  const stats = [
    { label: "Active Listings", value: "2", icon: Package, color: "text-primary" },
    { label: "Total Bids", value: "5", icon: TrendingUp, color: "text-success" },
    { label: "Earnings This Month", value: "₹1.2L", icon: IndianRupee, color: "text-warning" },
  ];

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "listed":
        return "listed";
      case "bidding":
        return "bidding";
      case "sold":
        return "sold";
      default:
        return "default";
    }
  };

  const getQualityBadgeVariant = (quality: string) => {
    switch (quality) {
      case "A":
        return "qualityA";
      case "B":
        return "qualityB";
      case "C":
        return "qualityC";
      default:
        return "default";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Sprout className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-primary">KrishiLink</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/farmer/dashboard" className="text-sm font-medium text-primary border-b-2 border-primary pb-1">
                Dashboard
              </Link>
              <Link to="/farmer/listings" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                My Listings
              </Link>
              <Link to="/farmer/orders" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Orders
              </Link>
            </nav>
            <Button variant="ghost" size="sm">
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, Ramesh Kumar!</h1>
          <p className="text-muted-foreground">Manage your listings and track your sales</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                    <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <Button size="lg" onClick={() => navigate("/farmer/create-listing")} className="w-full sm:w-auto">
            <Plus className="mr-2 h-5 w-5" />
            Create New Listing
          </Button>
        </div>

        {/* My Listings */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">My Listings</h2>
            <Link to="/farmer/listings">
              <Button variant="outline" size="sm">
                View All
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((listing) => (
              <Card key={listing.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="text-4xl mb-2">{listing.image}</div>
                    <Badge variant={getStatusBadgeVariant(listing.status)}>
                      {listing.status === "bidding" ? "Active Bids" : listing.status === "sold" ? "Sold" : "Listed"}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{listing.cropName}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-sm">Quality:</span>
                      <Badge variant={getQualityBadgeVariant(listing.quality)} className="text-xs">
                        Grade {listing.quality}
                      </Badge>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Quantity:</span>
                      <span className="font-medium">{listing.quantity} quintals</span>
                    </div>
                    {listing.status === "bidding" && (
                      <>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-muted-foreground">Bids Received:</span>
                          <span className="font-medium text-primary">{listing.bidsCount} bids</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Highest Bid:</span>
                          <span className="text-lg font-bold text-primary">₹{listing.highestBid}/qt</span>
                        </div>
                        <Button className="w-full mt-2" onClick={() => navigate(`/farmer/bids/${listing.id}`)}>
                          <Eye className="mr-2 h-4 w-4" />
                          View Bids
                        </Button>
                      </>
                    )}
                    {listing.status === "sold" && (
                      <div className="flex justify-between items-center pt-2 border-t">
                        <span className="text-sm text-muted-foreground">Sold at:</span>
                        <span className="text-lg font-bold text-success">₹{listing.soldPrice}/qt</span>
                      </div>
                    )}
                    {listing.status === "listed" && (
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Expected Price:</span>
                        <span className="text-lg font-bold">₹{listing.expectedPrice}/qt</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerDashboard;
