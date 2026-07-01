import { cn } from "@/lib/utils";

function TextField({
  id,
  label,
  required = false,
  error,
  className,
  ...inputProps
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-destructive"> *</span>}
      </label>
      <input
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "h-10 w-full rounded-lg border bg-background px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-violet-500/30",
          error
            ? "border-destructive focus-visible:border-destructive"
            : "border-input focus-visible:border-violet-500",
        )}
        {...inputProps}
      />
      {error && (
        <p id={`${id}-error`} className="text-sm text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export { TextField };
