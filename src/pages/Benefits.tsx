import { Store, TrendingUp, Shield, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { SectionHeading } from "@/components/SectionHeading";
import { BenefitCard } from "@/components/BenefitCard";
import { StatCard } from "@/components/StatCard";

const Benefits = () => {
  const benefits = [
    {
      icon: Store,
      title: "Direct Market Access",
      description: "Connect directly with large buyers and retailers, eliminating middlemen.",
    },
    {
      icon: TrendingUp,
      title: "Better Prices",
      description: "Competitive bidding ensures you get the best market price for your produce.",
    },
    {
      icon: Shield,
      title: "Verified Buyers",
      description: "Trade with confidence knowing all buyers are KYC verified and trustworthy.",
    },
    {
      icon: FileCheck,
      title: "Full Traceability",
      description: "Complete transparency from farm to buyer with digital records.",
    },
  ];

  const stats = [
    { value: "15%", label: "Average Price Increase" },
    { value: "24 hrs", label: "Bid Response Time" },
    { value: "100+", label: "Verified Buyers" },
    { value: "98%", label: "Successful Transaction Rate" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-primary-dark text-primary-foreground shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <NavLink to="/" className="text-2xl font-bold">
            KrishiLink
          </NavLink>
          <div className="hidden md:flex space-x-6">
            <NavLink to="/how-it-works" className="hover:text-secondary-yellow transition-colors" activeClassName="text-secondary-yellow">
              How It Works
            </NavLink>
            <NavLink to="/benefits" className="hover:text-secondary-yellow transition-colors" activeClassName="text-secondary-yellow">
              Benefits
            </NavLink>
          </div>
          <div className="flex space-x-4">
            <NavLink to="/login">
              <Button variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary-dark">
                Login
              </Button>
            </NavLink>
            <NavLink to="/register">
              <Button className="bg-secondary-yellow text-neutral-black hover:bg-secondary-yellow/90">
                Register
              </Button>
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <SectionHeading 
          title="Why Choose KrishiLink?" 
          subtitle="Empowering farmers with technology and transparency."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.title} {...benefit} />
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12 mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-neutral-black mb-8">
            Our Impact
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-neutral-black mb-4">
            Start Earning Better Today
          </h3>
          <p className="text-neutral-dark mb-8 max-w-2xl mx-auto">
            Join the digital marketplace that puts farmers first.
          </p>
          <NavLink to="/register">
            <Button size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground min-h-[44px]">
              Get Started Now
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
