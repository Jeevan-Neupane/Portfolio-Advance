import { WebDevProjects } from "../../data/Projects";
import Project from "../../reusable_components/project/Project";
import ProjectTitle from "./ProjectTitle";
import { ProjectContainer, ProjectsWrapper } from "./style";

function WebProjects() {
  return (
    <ProjectContainer>
      <ProjectTitle
        title='Web Development'
        hilightTitle='Projects'
      />

      <ProjectsWrapper>
        {
          // Web Development Projects
          WebDevProjects.map((project) => {
            return (
              <Project
                key={project.name}
                image={project.image}
                name={project.name}
                description={project.description}
                github={project.github}
                technologies={project.technologies}
                type={project.type}
              />
            );
          })
        }
      </ProjectsWrapper>
    </ProjectContainer>
  );
}

export default WebProjects;
