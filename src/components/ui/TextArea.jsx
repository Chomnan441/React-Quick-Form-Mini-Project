import { cn } from "@/lib/utils";

function TextArea({
  id,
  label,
  required = false,
  error,
  className,
  ...textareaProps
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-destructive"> *</span>}
      </label>
      <textarea
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "min-h-24 w-full resize-y rounded-lg border bg-background px-3 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-violet-500/30",
          error
            ? "border-destructive focus-visible:border-destructive"
            : "border-input focus-visible:border-violet-500",
        )}
        {...textareaProps}
      />
      {error && (
        <p id={`${id}-error`} className="text-sm text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export { TextArea };
