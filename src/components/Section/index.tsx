import { PropsWithChildren } from "react";
import { HeaderTitle, SectionHeader, StyledSection } from "./styles";
import { SectionProps } from "./styles";
const Section = ({
  soft,
  subtitle,
  children,
  title,
  padding,
  bg,
  style,
  align,
}: PropsWithChildren<SectionProps>) => {
  return (
    <StyledSection
      as="section"
      soft={soft}
      padding={padding}
      bg={bg}
      style={style}
      alignContent={align}
    >
      <SectionHeader>
        {title || subtitle ? (
          <HeaderTitle>
            {title} <span className="subtitle">{subtitle}</span>
          </HeaderTitle>
        ) : null}
      </SectionHeader>
      {children}
    </StyledSection>
  );
};

export default Section;
