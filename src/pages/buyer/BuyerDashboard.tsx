import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sprout, Search, Filter, IndianRupee, Eye } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const BuyerDashboard = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  // Mock listings data
  const listings = [
    {
      id: 1,
      cropName: "Wheat",
      farmerName: "Ramesh Kumar",
      location: "Punjab",
      quantity: 50,
      quality: "A",
      expectedPrice: 2500,
      currentBid: 2850,
      bidsCount: 5,
      image: "🌾",
      harvestDate: "15 Dec 2024",
    },
    {
      id: 2,
      cropName: "Rice (Basmati)",
      farmerName: "Singh FPO",
      location: "Haryana",
      quantity: 100,
      quality: "A",
      expectedPrice: 4500,
      currentBid: 4650,
      bidsCount: 8,
      image: "🌾",
      harvestDate: "20 Dec 2024",
    },
    {
      id: 3,
      cropName: "Tomatoes",
      farmerName: "Maharashtra Farmer Coop",
      location: "Maharashtra",
      quantity: 30,
      quality: "B",
      expectedPrice: 1200,
      currentBid: 1300,
      bidsCount: 3,
      image: "🍅",
      harvestDate: "10 Dec 2024",
    },
    {
      id: 4,
      cropName: "Onions",
      farmerName: "Rajesh Patel",
      location: "Gujarat",
      quantity: 40,
      quality: "A",
      expectedPrice: 1800,
      currentBid: null,
      bidsCount: 0,
      image: "🧅",
      harvestDate: "18 Dec 2024",
    },
  ];

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
              <Link to="/buyer/dashboard" className="text-sm font-medium text-primary border-b-2 border-primary pb-1">
                Browse Listings
              </Link>
              <Link to="/buyer/my-bids" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                My Bids
              </Link>
              <Link to="/buyer/orders" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
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
          <h1 className="text-3xl font-bold text-foreground mb-2">Available Produce</h1>
          <p className="text-muted-foreground">Browse and bid on quality produce from verified farmers</p>
        </div>

        {/* Search and Filter */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by crop name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="punjab">Punjab</SelectItem>
                  <SelectItem value="haryana">Haryana</SelectItem>
                  <SelectItem value="maharashtra">Maharashtra</SelectItem>
                  <SelectItem value="gujarat">Gujarat</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Quality Grade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Grades</SelectItem>
                  <SelectItem value="a">Grade A</SelectItem>
                  <SelectItem value="b">Grade B</SelectItem>
                  <SelectItem value="c">Grade C</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {listings.map((listing) => (
            <Card key={listing.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="text-5xl">{listing.image}</div>
                  <Badge variant={getQualityBadgeVariant(listing.quality)} className="text-xs">
                    Grade {listing.quality}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{listing.cropName}</CardTitle>
                <CardDescription className="text-xs">
                  <div className="space-y-1 mt-2">
                    <p className="font-medium text-foreground">{listing.farmerName}</p>
                    <p>{listing.location}</p>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Quantity:</span>
                    <span className="font-medium">{listing.quantity} quintals</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Harvest Date:</span>
                    <span className="font-medium">{listing.harvestDate}</span>
                  </div>
                  <div className="border-t pt-3">
                    {listing.currentBid ? (
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-muted-foreground">Current Highest:</span>
                          <span className="text-sm font-bold text-primary">₹{listing.currentBid}/qt</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{listing.bidsCount} bids placed</p>
                      </div>
                    ) : (
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">Expected Price:</span>
                        <span className="text-sm font-bold">₹{listing.expectedPrice}/qt</span>
                      </div>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <Button size="sm" variant="outline" onClick={() => navigate(`/buyer/listing/${listing.id}`)}>
                      <Eye className="mr-1 h-3 w-3" />
                      Details
                    </Button>
                    <Button size="sm" onClick={() => navigate(`/buyer/listing/${listing.id}`)}>
                      <IndianRupee className="mr-1 h-3 w-3" />
                      Bid Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-8 text-center">
          <Button variant="outline">Load More Listings</Button>
        </div>
      </div>
    </div>
  );
};

export default BuyerDashboard;
