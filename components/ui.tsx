import Link from "next/link";
import type { ReactNode } from "react";

export function Eyebrow({
  index,
  children,
  tone = "light",
}: {
  index?: string;
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <p
      className={`flex items-center gap-3 font-mono text-[0.7rem] font-medium uppercase tracking-[0.22em] ${
        tone === "dark" ? "text-copper-soft" : "text-copper"
      }`}
    >
      {index && (
        <>
          <span aria-hidden>{index}</span>
          <span
            aria-hidden
            className={`h-px w-8 ${tone === "dark" ? "bg-paper/30" : "bg-ink/20"}`}
          />
        </>
      )}
      <span>{children}</span>
    </p>
  );
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  lede,
  tone = "light",
  align = "left",
}: {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
}) {
  return (
    <div
      className={`reveal max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <div className={align === "center" ? "flex justify-center" : ""}>
        <Eyebrow index={index} tone={tone}>
          {eyebrow}
        </Eyebrow>
      </div>
      <h2
        className={`mt-5 font-display text-4xl font-medium tracking-tight text-balance sm:text-5xl ${
          tone === "dark" ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            tone === "dark" ? "text-paper/75" : "text-moss"
          }`}
        >
          {lede}
        </p>
      )}
    </div>
  );
}

export function ButtonPrimary({
  href,
  children,
  tone = "light",
}: {
  href: string;
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-[0.95rem] font-semibold transition duration-200 active:scale-[0.97] ${
        tone === "dark"
          ? "bg-paper text-pine-deep hover:bg-cream"
          : "bg-pine text-paper shadow-card hover:bg-pine-deep hover:shadow-lift"
      }`}
    >
      {children}
      <span
        aria-hidden
        className="transition-transform duration-300 group-hover:translate-x-0.5"
      >
        →
      </span>
    </Link>
  );
}

export function ButtonSecondary({
  href,
  children,
  tone = "light",
}: {
  href: string;
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2.5 rounded-full border px-7 py-3.5 text-[0.95rem] font-semibold transition duration-200 active:scale-[0.97] ${
        tone === "dark"
          ? "border-paper/30 text-paper hover:border-paper/60 hover:bg-paper/5"
          : "border-ink/15 text-ink hover:border-pine/50 hover:text-pine"
      }`}
    >
      {children}
    </Link>
  );
}

export function Stamp({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={`stamp ${className}`}>{children}</span>;
}

export function Wordmark({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <span className="inline-flex items-baseline gap-1">
      <span
        className={`font-display text-2xl font-semibold tracking-tight ${
          tone === "dark" ? "text-paper" : "text-ink"
        }`}
      >
        VetFusion
      </span>
      <svg
        aria-hidden
        viewBox="0 0 12 12"
        className="size-2.5 translate-y-px text-copper"
        fill="currentColor"
      >
        <path d="M4.5 0h3v4.5H12v3H7.5V12h-3V7.5H0v-3h4.5V0z" />
      </svg>
    </span>
  );
}
