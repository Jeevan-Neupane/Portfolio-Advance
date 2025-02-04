import { useParams } from "react-router-dom";
import { Footer } from "../../components/footer/Footer";
import ScrollToTop from "../../components/scollTop/ScrollTop";
import ProjectDescription from "../../components/singleProjectPage/ProjectDescription";
import KeyFeatures from "../../components/singleProjectPage/ProjectFeature";
import ProjectLinks from "../../components/singleProjectPage/ProjectLinks";
import { ProjectSlideshow } from "../../components/singleProjectPage/ProjectSlide";
import TechStack from "../../components/singleProjectPage/ProjectTechStack";
import SingleProjectTitle from "../../components/singleProjectPage/ProjectTitle";
import { SingleProjectPageWrapper } from "./style";

import { AllProjects } from "../../data/AllProjects";

function SingleProjectPage() {
  const { projectName } = useParams();
  console.log(projectName);
  console.log(AllProjects);
  const project: any = AllProjects.find(
    (project: any) => project.projectTitle === projectName
  );
  console.log(project);
  const {
    projectTitle,
    projectTagline,
    mediaData,
    paragraphOne,
    paragraphTwo,
    features,
    technologies,
    projectLinks,
  } = project;

  return (
    <>
      <SingleProjectPageWrapper>
        <ScrollToTop />
        <SingleProjectTitle
          title={projectTitle}
          tagline={projectTagline}
        />
        <ProjectSlideshow media={mediaData} />
        <ProjectDescription
          paragraphOne={paragraphOne}
          paragraphTwo={paragraphTwo}
        />
        <KeyFeatures features={features} />
        <TechStack technologies={technologies} />
        <ProjectLinks links={projectLinks} />
      </SingleProjectPageWrapper>
      <Footer />
    </>
  );
}

export default SingleProjectPage;
