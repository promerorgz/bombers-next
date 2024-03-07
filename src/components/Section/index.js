import { HeaderTitle, SectionHeader, StyledSection } from "./styles";

const Section = ({
  rounded,
  subtitle,
  children,
  title,
  padding,
  bg,
  ...props
}) => {
  return (
    <StyledSection
      as="section"
      rounded={rounded}
      padding={padding}
      bg={bg}
      {...props}
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
