import Project from "../../reusable_components/project/Project";
import Title from "../../reusable_components/title/Title";
import { ProjectSection } from "./style";

const Projectpage = () => {
  return (
    <ProjectSection>
      <Title
        title='My'
        hilightTitle='Portfolio'
        widget='Works'
      />

      <Project
        description='This is a project description. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac purus nec diam laoreet sollicitudin. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac purus nec diam laoreet sollicitudin.'
        github='https://github.com'
        image='https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800'
        name='Project Name'
        technologies={["React", "Typescript", "Styled-components", "React-icons"]}
        type='Personal'
      />
    </ProjectSection>
  );
};

export default Projectpage;
