
import styled from "styled-components";

const SectionContainer = styled.section`
  width: 100%;
  padding: 0 100px;
  box-sizing: border-box;
  margin-top: 30px;
  margin-bottom: 20px;

  .sectionHeader {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }

  .sectionContent {
    width: 100%;
  }

  @media (max-width: 1024px) {
    padding: 0 40px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
  }

  @media (max-width: 480px) {
    padding: 0 16px;
  }
`;

const Section = ({ children }) => {
  return (
    <SectionContainer>
      {children}
    </SectionContainer>
  );
};

export default Section;
