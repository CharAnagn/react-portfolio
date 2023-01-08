import { FaGithub, FaLink } from "react-icons/fa";
import {
  ProjectDescription,
  ProjectImageContainer,
  SingleProject,
  SlantedCard,
  StyledProjectsSection,
  Tags,
} from "../styles/sections/ProjectsSection.styled";
import { SectionHeading } from "../styles/sections/SectionHeading.styled";
import { Projects } from "./Projects";

export const ProjectSection = () => {
  return (
    <>
      <StyledProjectsSection id="projects">
        <SectionHeading>
          <h1>Projects</h1>
        </SectionHeading>
        <div>
          {Projects &&
            Projects.map((project, index) => (
              <SingleProject key={index}>
                <ProjectImageContainer
                  href={project.projectlink}
                  target="_blank"
                >
                  <img src={project.thumbnail} alt={project.title} />
                  <SlantedCard/>
                </ProjectImageContainer>
                <ProjectDescription>
                  <h1>{project.title}</h1>
                  <Tags>
                    {project.tags &&
                      project.tags.map((tag, tagindex) => (
                        <span key={tagindex}>{tag}</span>
                      ))}
                  </Tags>
                  <p>{project.paragraph[0]}</p>
                  <p>{project.paragraph[1]}</p>
                  <div>
                    <a href={project.codelink} target="_blank" rel="noreferrer">
                      <FaGithub />
                      <span>View Code</span>
                    </a>
                    <a href={project.projectlink} target="_blank" rel="noreferrer">
                      <FaLink />
                      <span>{project.projectlinkText}</span>
                    </a>
                  </div>
                </ProjectDescription>
              </SingleProject>
            ))}
        </div>
      </StyledProjectsSection>
      <hr />
    </>
  );
};
