import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "span";
  className?: string;
  revealClassName?: string;
  eyebrow?: string;
  size?: "default" | "compact" | "large";
};

const sizeClass = {
  default: "section-heading-text",
  compact: "section-heading-text section-heading-text--compact",
  large: "section-heading-text section-heading-text--large",
};

const SectionHeading = ({
  children,
  as: Tag = "h2",
  className = "",
  revealClassName = "",
  eyebrow,
  size = "default",
}: SectionHeadingProps) => {
  return (
    <Tag className={`section-heading ${className}`}>
      <span className={`section-heading-reveal overflow-hidden block ${revealClassName}`}>
        <span className="block">
          {eyebrow && <span className="section-heading-eyebrow">{eyebrow}</span>}
          <span className={sizeClass[size]}>{children}</span>
          <span className="section-heading-underline" aria-hidden="true" />
        </span>
      </span>
    </Tag>
  );
};

export default SectionHeading;
