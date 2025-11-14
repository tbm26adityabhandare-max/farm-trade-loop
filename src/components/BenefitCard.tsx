import { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const BenefitCard = ({ icon: Icon, title, description }: BenefitCardProps) => {
  return (
    <div className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow animate-fade-in">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-neutral-black mb-2">{title}</h3>
      <p className="text-neutral-dark">{description}</p>
    </div>
  );
};
