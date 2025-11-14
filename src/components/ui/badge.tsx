import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        destructive: "border-transparent bg-destructive text-destructive-foreground",
        outline: "text-foreground border-border",
        success: "border-transparent bg-success text-primary-foreground",
        warning: "border-transparent bg-warning text-neutral-black",
        info: "border-transparent bg-info text-primary-foreground",
        listed: "border-transparent bg-neutral-grey text-primary-foreground",
        bidding: "border-transparent bg-warning text-neutral-black",
        sold: "border-transparent bg-success text-primary-foreground",
        qualityA: "border-transparent bg-success text-primary-foreground",
        qualityB: "border-transparent bg-warning text-neutral-black",
        qualityC: "border-transparent bg-error text-primary-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
