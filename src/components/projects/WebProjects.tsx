import { useState, useEffect } from "react";
import { WebDevProjects as initialProjects } from "../../data/Projects";
import Project from "../../reusable_components/project/Project";
import ProjectTitle from "./ProjectTitle";
import { ProjectContainer, ProjectsWrapper } from "./style";
import { webfilterProjectsLists } from "../../data/filter_projects";
import MultiSelectFilter from "../filter_project/FilterProjects";
import No_projects_div from "./No_projects_div";

function WebProjects() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>(["All"]);
  const [filteredProjects, setFilteredProjects] = useState(initialProjects);

  // Function to handle filter changes
  const handleFilterChange = (filters: string[]) => {
    setSelectedFilters(filters);
  };

  // Effect to filter projects whenever selectedFilters changes
  useEffect(() => {
    console.log("Selected Filters:", selectedFilters);
    if (selectedFilters.includes("All")) {
      console.log(selectedFilters.includes("All"));
      setFilteredProjects(initialProjects);
    } else {
      setFilteredProjects(
        initialProjects.filter((project) =>
          selectedFilters.some((filter) =>
            project.technologies.some((tech) =>
              tech.toLowerCase().includes(filter.toLowerCase())
            )
          )
        )
      );
    }
  }, [selectedFilters]);

  return (
    <ProjectContainer>
      <ProjectTitle
        title='Web Development'
        hilightTitle='Projects'
      />

      <MultiSelectFilter
        filterOptions={webfilterProjectsLists}
        onFilterChange={handleFilterChange}
      />

      <ProjectsWrapper>
        {filteredProjects.length > 0 &&
          filteredProjects.map((project) => (
            <Project
              key={project.name}
              image={project.image}
              name={project.name}
              description={project.description}
              github={project.github}
              technologies={project.technologies}
              type={project.type}
            />
          ))}
      </ProjectsWrapper>
      {filteredProjects.length === 0 && <No_projects_div />}
    </ProjectContainer>
  );
}

export default WebProjects;
