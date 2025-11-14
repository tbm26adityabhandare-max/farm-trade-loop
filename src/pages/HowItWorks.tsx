import { ClipboardList, Gavel, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { SectionHeading } from "@/components/SectionHeading";
import { StepCard } from "@/components/StepCard";

const HowItWorks = () => {
  const steps = [
    {
      icon: ClipboardList,
      step: 1,
      title: "Register & List",
      description: "Create your account, complete KYC, and list your produce with images and grading.",
    },
    {
      icon: Gavel,
      step: 2,
      title: "Receive Bids",
      description: "Verified buyers place competitive bids in real-time.",
    },
    {
      icon: Truck,
      step: 3,
      title: "Deliver & Get Paid",
      description: "Schedule pickup, deliver to buyer, and receive secure payment.",
    },
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
          title="How It Works" 
          subtitle="Simple steps to sell your produce at better prices."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {steps.map((step) => (
            <StepCard key={step.step} {...step} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-neutral-black mb-4">
            Ready to get started?
          </h3>
          <p className="text-neutral-dark mb-8 max-w-2xl mx-auto">
            Join thousands of farmers who are getting better prices for their produce.
          </p>
          <NavLink to="/register">
            <Button size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground min-h-[44px]">
              Create Free Account
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
