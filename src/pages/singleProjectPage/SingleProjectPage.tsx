import { useParams } from "react-router-dom";
import { projectData } from "../../data/ProjectsDetail";
import { Introduction } from "../../components/singleProjectPage/ProjectDescrition";
import { Features } from "../../components/singleProjectPage/ProjectFeatures";
import { Tools } from "../../components/singleProjectPage/ProjectTechs";
import { CallToAction } from "../../components/singleProjectPage/ProjectLink";
import { LaptopWithScreen } from "../../components/singleProjectPage/LaptopFrame";
import {
  ProjectDescriptionContainer,
  ProjectImageAndDescriptionContainer,
  ProjectImageContainer,
  SingleProjectPageWrapper,
} from "./style";
import SingleProjectTitle from "../../components/singleProjectPage/ProjectTitle";

function SingleProjectPage() {
  const { projectType, projectName } = useParams();

  console.log("Project Type:", projectType);
  console.log("Project Name:", projectName);

  return (
    <SingleProjectPageWrapper>
      <SingleProjectTitle
        title={projectData.title}
        tagline={projectData.tagline}
      />

      <ProjectImageContainer>
        <LaptopWithScreen
          altText='project image'
          laptopImage='https://res.cloudinary.com/chatappjeevanneupane/image/upload/v1732365160/sgcb4zieux1okdbsafhj.webp'
          projectImage='https://res.cloudinary.com/chatappjeevanneupane/image/upload/v1732363581/mreoovk0yos2fsmvaqzx.png'
        />
      </ProjectImageContainer>

      <ProjectDescriptionContainer>
        <Introduction description={projectData.description} />
      </ProjectDescriptionContainer>

      <Features features={projectData.features} />
      <Tools tools={projectData.tools} />
      <CallToAction
        liveLink={projectData.liveLink}
        repoLink={projectData.repoLink}
      />
    </SingleProjectPageWrapper>
  );
}

export default SingleProjectPage;
