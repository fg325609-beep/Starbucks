import AnimatedText from "./AnimatedText";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subcopy?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subcopy,
  align = "left",
  light = false,
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-4 ${alignClass} ${className}`}>
      {eyebrow && (
        <span
          data-aos="fade-up"
          className={`text-xs font-semibold uppercase tracking-[0.25em] ${
            light ? "text-gold-300" : "text-brand-600"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <AnimatedText
        as="h2"
        text={title}
        className={`font-display text-4xl leading-[1.1] md:text-5xl ${
          light ? "text-cream-50" : "text-pine-950"
        } max-w-2xl`}
      />
      {subcopy && (
        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className={`max-w-xl text-base leading-relaxed ${
            light ? "text-cream-100/80" : "text-ink-700"
          }`}
        >
          {subcopy}
        </p>
      )}
    </div>
  );
}
