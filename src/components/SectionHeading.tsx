import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  dark?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
}: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <p
        className={`text-sm font-semibold uppercase tracking-widest ${
          dark ? "text-fuchsia-400" : "text-fuchsia-600"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-pretty text-base leading-relaxed sm:text-lg ${
            dark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
