import { HeaderTitle, SectionHeader, StyledSection } from "./styles";

const Section = ({ rounded, subtitle, children, title }) => {
  return (
    <StyledSection rounded={rounded}>
      <SectionHeader>
        <HeaderTitle>
          {title} <span className="subtitle">{subtitle}</span>
        </HeaderTitle>
      </SectionHeader>
      {children}
    </StyledSection>
  );
};

export default Section;
