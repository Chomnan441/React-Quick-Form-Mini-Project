import { cn } from "@/lib/utils";

function RadioGroup({ name, label, required = false, error, children, className }) {
  return (
    <fieldset className={cn("flex flex-col gap-1.5", className)}>
      <legend className="text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-destructive"> *</span>}
      </legend>
      <div
        role="radiogroup"
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
        className={cn(
          "flex flex-col gap-2 rounded-lg border p-3",
          error ? "border-destructive" : "border-input",
        )}
      >
        {children}
      </div>
      {error && (
        <p id={`${name}-error`} className="text-sm text-destructive" role="alert">
          {error}
        </p>
      )}
    </fieldset>
  );
}

function RadioOption({ id, name, value, checked, onChange, children }) {
  return (
    <label
      htmlFor={id}
      className="flex cursor-pointer items-start gap-3 rounded-md p-2 transition-colors hover:bg-muted/50"
    >
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="mt-1 size-4 shrink-0 accent-violet-600"
      />
      <span className="text-sm leading-snug">{children}</span>
    </label>
  );
}

export { RadioGroup, RadioOption };
