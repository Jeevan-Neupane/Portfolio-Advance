import { useState, useEffect } from "react";
import { CollegeRelatedProjects as initialProjects } from "../../data/Projects";
import Project from "../../reusable_components/project/Project";
import ProjectTitle from "./ProjectTitle";
import { ProjectContainer, ProjectsWrapper } from "./style";
import { collegeProjectsfilterProjectsLists } from "../../data/filter_projects";
import MultiSelectFilter from "../filter_project/FilterProjects";

function CollegeProjects() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>(["All"]);
  const [filteredProjects, setFilteredProjects] = useState(initialProjects);

  // Function to handle filter changes
  const handleFilterChange = (filters: string[]) => {
    setSelectedFilters(filters);
  };
  console.log("Selected Filters:", selectedFilters);

  // Effect to filter projects whenever selectedFilters changes
  useEffect(() => {
    // If 'All' is selected, reset the filtered projects to show all
    if (selectedFilters.includes("All")) {
      setFilteredProjects(initialProjects);
    } else {
      setFilteredProjects(
        initialProjects.filter((project) => {
          // Check if any of the selected filters match the project’s technologies or subjects
          return selectedFilters.some((filter) =>
            project.technologies.some((tech) =>
              tech.toLowerCase().includes(filter.toLowerCase())
            )
          );
        })
      );
    }
  }, [selectedFilters]);

  useEffect(() => {
    if (selectedFilters.length === 0) {
      setSelectedFilters(["All"]);
    }
  }, [selectedFilters]);

  return (
    <ProjectContainer>
      <ProjectTitle
        title='College'
        hilightTitle='Projects'
      />

      <MultiSelectFilter
        filterOptions={collegeProjectsfilterProjectsLists}
        onFilterChange={handleFilterChange}
      />

      <ProjectsWrapper>
        {filteredProjects.length > 0 ? (
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
          ))
        ) : (
          <p>No projects found for the selected filters.</p>
        )}
      </ProjectsWrapper>
    </ProjectContainer>
  );
}

export default CollegeProjects;
