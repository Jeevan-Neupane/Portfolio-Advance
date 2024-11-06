import { CollegeRelatedProjects } from "../../data/Projects";
import Project from "../../reusable_components/project/Project";
import ProjectTitle from "./ProjectTitle";
import { ProjectContainer, ProjectsWrapper } from "./style";

function CollegeProjects() {
  return (
    <ProjectContainer>
      <ProjectTitle
        title='College'
        hilightTitle='Projects'
      />

      <ProjectsWrapper>
        {CollegeRelatedProjects.map((project) => {
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
        })}
      </ProjectsWrapper>
    </ProjectContainer>
  );
}

export default CollegeProjects;
