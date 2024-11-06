import { ProjectButton, ProjectButtonLink, ProjectButtonsDiv } from "./style";
import { useLocation } from "react-router-dom";

function Project_buttons() {
  const location = useLocation();
  
  const buttons = [
    {
      id: 1,
      name: "Web",
      link: "/works/web",
    },
    {
      id: 2,
      name: "AI/ML",
      link: "/works/ai_ml",
    },
    {
      id: 3,
      name: "College",
      link: "/works/college",
    },
  ];

  return (
    <ProjectButtonsDiv>
      {buttons.map((button) => {
        const isActive = location.pathname === button.link;
        
        return (
          <ProjectButtonLink
            to={button.link}
            key={button.id}
          >
            <ProjectButton isActive={isActive}>{button.name}</ProjectButton>
          </ProjectButtonLink>
        );
      })}
    </ProjectButtonsDiv>
  );
}

export default Project_buttons;
