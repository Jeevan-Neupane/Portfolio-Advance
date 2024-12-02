import { Outlet } from "react-router-dom";
import Title from "../../reusable_components/title/Title";
import { AllProjectsContainer, ProjectSection } from "./style";
import Project_buttons from "../../components/projects_button/Project_buttons";
import ScrollToTop from "../../components/scollTop/ScrollTop";

const Projectpage = () => {
  return (
    <ProjectSection>
      <ScrollToTop />
      <Title
        title='My'
        hilightTitle='Portfolio'
        widget='Works'
      />

      <AllProjectsContainer>
        <Project_buttons />
        <Outlet />
      </AllProjectsContainer>
    </ProjectSection>
  );
};

export default Projectpage;
