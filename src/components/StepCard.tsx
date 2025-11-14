import { LucideIcon } from "lucide-react";

interface StepCardProps {
  icon: LucideIcon;
  step: number;
  title: string;
  description: string;
}

export const StepCard = ({ icon: Icon, step, title, description }: StepCardProps) => {
  return (
    <div className="flex flex-col items-center text-center p-6 animate-fade-in">
      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-primary-foreground" />
      </div>
      <div className="w-8 h-8 rounded-full bg-secondary-yellow flex items-center justify-center mb-4 text-sm font-bold">
        {step}
      </div>
      <h3 className="text-xl font-semibold text-neutral-black mb-2">{title}</h3>
      <p className="text-neutral-dark">{description}</p>
    </div>
  );
};
