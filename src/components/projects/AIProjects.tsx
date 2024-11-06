import { AIMLProjects } from "../../data/Projects";
import Project from "../../reusable_components/project/Project";
import ProjectTitle from "./ProjectTitle";
import { ProjectContainer, ProjectsWrapper } from "./style";

function AIProjects() {
  return (
    <ProjectContainer>
      <ProjectTitle
        title='AI/ML'
        hilightTitle='Projects'
      />

      <ProjectsWrapper>
        {
         
         AIMLProjects.map((project) => {
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

export default AIProjects;
