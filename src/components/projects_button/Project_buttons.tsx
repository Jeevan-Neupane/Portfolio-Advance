import { ProjectButton, ProjectButtonLink, ProjectButtonsDiv } from "./style";
import { useLocation } from "react-router-dom";

export type ProjectFilterType = "ai_ml" | "web" | "college";

type ProjectButtonsProps = {
  activeType?: ProjectFilterType;
  onProjectChange?: (type: ProjectFilterType) => void;
};

function Project_buttons({ activeType, onProjectChange }: ProjectButtonsProps) {
  const location = useLocation();
  const activeHash = location.hash || "#ai-projects";
  const isControlled = typeof onProjectChange === "function";

  const buttons = [
    {
      id: 1,
      name: "AI/ML",
      link: "/#ai-projects",
      type: "ai_ml" as ProjectFilterType,
    },
    {
      id: 2,
      name: "Web",
      link: "/#web-projects",
      type: "web" as ProjectFilterType,
    },
    {
      id: 3,
      name: "College",
      link: "/#college-projects",
      type: "college" as ProjectFilterType,
    },
  ];

  return (
    <ProjectButtonsDiv>
      {buttons.map((button) => {
        const isActive = isControlled
          ? activeType === button.type
          : activeHash === button.link.replace("/", "");
        
        if (isControlled) {
          return (
            <ProjectButton
              key={button.id}
              isActive={isActive}
              onClick={() => onProjectChange(button.type)}
              type='button'
            >
              {button.name}
            </ProjectButton>
          );
        }

        return (
          <ProjectButtonLink
            href={button.link}
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
