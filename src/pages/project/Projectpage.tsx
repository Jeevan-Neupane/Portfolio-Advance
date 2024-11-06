import { Outlet } from "react-router-dom";
import Title from "../../reusable_components/title/Title";
import { AllProjectsContainer, ProjectSection } from "./style";

const Projectpage = () => {
  return (
    <ProjectSection>
      <Title
        title='My'
        hilightTitle='Portfolio'
        widget='Works'
      />

      <AllProjectsContainer>
        
        <Outlet />
      </AllProjectsContainer>
    </ProjectSection>
  );
};

export default Projectpage;
