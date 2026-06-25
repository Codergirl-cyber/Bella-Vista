import FadeInSection from "./FadeInSection";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  titleItalic?: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  titleItalic,
  subtitle,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      <FadeInSection>
        <span className="eyebrow">{eyebrow}</span>
      </FadeInSection>
      <FadeInSection delay={0.1}>
        <div className={`flex items-center gap-4 my-4 ${centered ? "justify-center" : ""}`}>
          <span className="gold-line" />
          <span className="gold-line" />
        </div>
      </FadeInSection>
      <FadeInSection delay={0.15}>
        <h2
          className="text-[clamp(2.2rem,4vw,3.8rem)] font-light leading-tight text-cream"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          {title}
          {titleItalic && (
            <>
              {" "}
              <em className="gold-text not-italic">{titleItalic}</em>
            </>
          )}
        </h2>
      </FadeInSection>
      {subtitle && (
        <FadeInSection delay={0.2}>
          <p className="mt-4 text-cream/50 text-sm font-light max-w-xl mx-auto leading-relaxed" style={{ letterSpacing: "0.04em" }}>
            {subtitle}
          </p>
        </FadeInSection>
      )}
    </div>
  );
}
