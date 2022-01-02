import styled from "styled-components";

export const StyledProjectSection = styled.section`
  min-height: 90vh;
  padding: 5rem 0 5rem 0;
  width: 100%;
`;

export const ProjectsContent = styled.div`
  width: 90%;
  height: 50vh;
  background: url("./images/projects1.svg") center no-repeat;
  background-size: contain;
  position: relative;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 20%;
  }
`;

export const TypewriterText = styled.div`
  color: black;
  letter-spacing: 0.2rem;
  font-weight: 600;
  font-size: 1.2rem;
  margin: auto;
  text-align: left;
  padding: 0 0 8rem 16rem;

  p {
    font-weight: 700;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 0.8rem;
    padding: 0 0 0 2rem;
  }
`;
