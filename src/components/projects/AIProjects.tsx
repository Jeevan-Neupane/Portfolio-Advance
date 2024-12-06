import { useState, useEffect } from "react";
import { aifixfilterProjectsLists } from "../../data/filter_projects";
import { AIMLProjects as initialProjects } from "../../data/Projects";
import Project from "../../reusable_components/project/Project";
import MultiSelectFilter from "../filter_project/FilterProjects";
import ProjectTitle from "./ProjectTitle";
import { ProjectContainer, ProjectsWrapper } from "./style";
import No_projects_div from "./No_projects_div";

function AIProjects() {
  // State to store selected filters, initially empty
  const [selectedFilters, setSelectedFilters] = useState<string[]>(["All"]);

  // State to store filtered projects
  const [filteredProjects, setFilteredProjects] = useState(initialProjects);

  // Function to handle filter changes
  const handleFilterChange = (filters: string[]) => {
    setSelectedFilters(filters);
  };

  // Effect to filter projects whenever selectedFilters changes
  useEffect(() => {
    if (selectedFilters.includes("All")) {
      // If "All" is selected, show all projects
      setFilteredProjects(initialProjects);
    } else {
      // Filter projects based on the selected filters
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
        title='AI/ML'
        hilightTitle='Projects'
      />

      {/* MultiSelectFilter component */}
      <MultiSelectFilter
        filterOptions={aifixfilterProjectsLists}
        onFilterChange={handleFilterChange}
      />

      {/* Displaying filtered projects */}
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

export default AIProjects;
