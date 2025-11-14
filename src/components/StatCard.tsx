interface StatCardProps {
  value: string;
  label: string;
}

export const StatCard = ({ value, label }: StatCardProps) => {
  return (
    <div className="text-center p-6 animate-fade-in">
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{value}</div>
      <div className="text-neutral-dark">{label}</div>
    </div>
  );
};
