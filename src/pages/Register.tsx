import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Sprout, User, Users, Building2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Register = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<"farmer" | "fpo" | "buyer">("farmer");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    organizationName: "",
    gst: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.password) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Mock registration - in real app, this would call backend API
    toast.success("Registration successful! Redirecting to dashboard...");
    
    // Redirect based on user type
    setTimeout(() => {
      if (userType === "buyer") {
        navigate("/buyer/dashboard");
      } else {
        navigate("/farmer/dashboard");
      }
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light/10 via-background to-background flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <Sprout className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">KrishiLink</span>
          </Link>
          <h1 className="text-3xl font-bold text-foreground mb-2">Create Your Account</h1>
          <p className="text-muted-foreground">Join India's trusted farm-to-business marketplace</p>
        </div>

        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>Choose your account type and fill in your details</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* User Type Selection */}
              <div className="space-y-3">
                <Label className="text-base font-semibold">I am a:</Label>
                <RadioGroup value={userType} onValueChange={(value) => setUserType(value as any)} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <RadioGroupItem value="farmer" id="farmer" className="peer sr-only" />
                    <Label
                      htmlFor="farmer"
                      className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-card p-4 hover:bg-accent hover:border-accent cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 transition-all"
                    >
                      <User className="h-8 w-8 mb-2 text-primary" />
                      <span className="font-medium">Farmer</span>
                      <span className="text-xs text-muted-foreground text-center mt-1">Individual farmer</span>
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="fpo" id="fpo" className="peer sr-only" />
                    <Label
                      htmlFor="fpo"
                      className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-card p-4 hover:bg-accent hover:border-accent cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 transition-all"
                    >
                      <Users className="h-8 w-8 mb-2 text-primary" />
                      <span className="font-medium">FPO</span>
                      <span className="text-xs text-muted-foreground text-center mt-1">Farmer organization</span>
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="buyer" id="buyer" className="peer sr-only" />
                    <Label
                      htmlFor="buyer"
                      className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-card p-4 hover:bg-accent hover:border-accent cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 transition-all"
                    >
                      <Building2 className="h-8 w-8 mb-2 text-primary" />
                      <span className="font-medium">Buyer</span>
                      <span className="text-xs text-muted-foreground text-center mt-1">Business buyer</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Form Fields */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    {userType === "buyer" ? "Contact Person Name" : "Full Name"} <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">
                    Phone Number <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {(userType === "fpo" || userType === "buyer") && (
                <div className="space-y-2">
                  <Label htmlFor="organizationName">
                    {userType === "fpo" ? "FPO Name" : "Company Name"} <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="organizationName"
                    name="organizationName"
                    placeholder={userType === "fpo" ? "Enter FPO name" : "Enter company name"}
                    value={formData.organizationName}
                    onChange={handleInputChange}
                  />
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email (Optional)</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">
                    Password <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {userType === "buyer" && (
                <div className="space-y-2">
                  <Label htmlFor="gst">GST Number (Optional)</Label>
                  <Input
                    id="gst"
                    name="gst"
                    placeholder="Enter GST number"
                    value={formData.gst}
                    onChange={handleInputChange}
                  />
                </div>
              )}

              <Button type="submit" className="w-full" size="lg">
                Create Account
              </Button>
            </form>

            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">Already have an account? </span>
              <Link to="/login" className="text-primary font-medium hover:underline">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-xs text-muted-foreground mt-6">
          By registering, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Register;
