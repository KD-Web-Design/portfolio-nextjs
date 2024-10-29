import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export const Highlights = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        "bg-accent/80 hover:bg-accent/50 transition-colors border-accent p-1 font-bold rounded-sm m-1 py-0.5",
        className
      )}
      {...props}
    />
  );
};
