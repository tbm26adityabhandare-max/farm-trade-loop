interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeading = ({ title, subtitle, centered = true }: SectionHeadingProps) => {
  return (
    <div className={centered ? "text-center mb-12" : "mb-12"}>
      <h2 className="text-3xl md:text-4xl font-bold text-neutral-black mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-neutral-dark max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
