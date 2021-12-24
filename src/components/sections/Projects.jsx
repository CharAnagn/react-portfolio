import {
  ProjectsContent,
  StyledProjectSection,
  TypewriterText,
} from "../styles/sections/Projects.styled";
import TypeWriter from "typewriter-effect";
import { SectionHeading } from "../styles/sections/SectionHeading.styled";

export const Projects = () => {
  return (
    <>
      <StyledProjectSection id="projects">
        <SectionHeading>
          <h1>Projects</h1>
        </SectionHeading>
        <ProjectsContent>
          <TypewriterText>
            <p>
              <span style={{ color: "green" }}>babis@LAPTOP</span>
              <span style={{ color: "purple" }}> MINGW4</span>
              <span style={{ color: "orange" }}> ~/desktop/ReactProjects</span>
            </p>
            <TypeWriter
              onInit={(typewriter) =>
                typewriter
                  .pauseFor(10000)
                  .typeString(
                    "$ npm init react-app<br><br>Creating a new React app<br><br>Installing packages.<br> This might take a couple of minutes.<br><br><br>WORK IN PROGRESS..."
                  )
                  .start()
              }
            />
          </TypewriterText>
        </ProjectsContent>
      </StyledProjectSection>

      <hr />
    </>
  );
};
