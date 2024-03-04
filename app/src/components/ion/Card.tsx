// ion/Card: Generated with Ion on 2/25/2024, 10:30:24 AM
import * as React from "react";

import clsx from "clsx";

const BaseCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx(
      "flex h-full w-fit flex-col gap-2 rounded-radius-md text-foreground overflow-hidden",
      className
    )}
    {...props}
  />
));
BaseCard.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx("flex items-center gap-5 pb-1", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={clsx("text-xl font-semibold text-foreground", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={clsx("text-sm text-sub-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={clsx("pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx("mt-auto flex items-center space-x-2 pt-3", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

interface CardProps {
  title?: React.ReactNode | React.ReactNode[];
  subtitle?: React.ReactNode | React.ReactNode[];
  icon?: React.ReactNode;
  children?: React.ReactNode | React.ReactNode[];
  footer?: React.ReactNode | React.ReactNode[];
  type?: "elevated" | "outline" | "filled";
  className?: string;
}

export default function Card({
  title,
  subtitle,
  children,
  icon,
  footer,
  className,
  type = "outline",
}: CardProps) {
  return (
    <BaseCard
      className={clsx(className, {
        "border border-sub-stroke": type === "outline",
        "bg-weak": type === "filled",
        "shadow-low": type === "elevated",
      })}
    >
      {(title || subtitle) && (
        <CardHeader>
          {icon}
          <div className="space-y-1">
            <CardTitle>{title}</CardTitle>
            {subtitle && <CardDescription>{subtitle}</CardDescription>}
          </div>
        </CardHeader>
      )}

      <CardContent>{children}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </BaseCard>
  );
}
