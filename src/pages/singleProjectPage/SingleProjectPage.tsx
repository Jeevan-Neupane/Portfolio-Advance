import ScrollToTop from "../../components/scollTop/ScrollTop";
import ProjectDescription from "../../components/singleProjectPage/ProjectDescription";
import KeyFeatures from "../../components/singleProjectPage/ProjectFeature";
import ProjectLinks from "../../components/singleProjectPage/ProjectLinks";
import { ProjectSlideshow } from "../../components/singleProjectPage/ProjectSlide";
import TechStack from "../../components/singleProjectPage/ProjectTechStack";
import SingleProjectTitle from "../../components/singleProjectPage/ProjectTitle";
import { SingleProjectPageWrapper } from "./style";

function SingleProjectPage() {
  const mediaData: { type: "image" | "video"; url: string }[] = [
    {
      type: "image",
      url: "https://media.istockphoto.com/id/603164912/photo/suburb-asphalt-road-and-sun-flowers.jpg?s=612x612&w=0&k=20&c=qLoQ5QONJduHrQ0kJF3fvoofmGAFcrq6cL84HbzdLQM=",
    },
    { type: "video", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
    {
      type: "image",
      url: "https://res.cloudinary.com/chatappjeevanneupane/image/upload/v1730944042/vp9z8mt1oushfsszpdvg.jpg",
    },
  ];
  const paragraphOne =
    "This project is a portfolio website designed to showcase my work, achievements, and technical skills. It includes a responsive layout, a slideshow for projects, and a detailed description of my expertise.This project is a portfolio website designed to showcase my work, achievements, and technical skills. It includes a responsive layout, a slideshow for projects, and a detailed description of my expertise.This project is a portfolio website designed to showcase my work, achievements, and technical skills. It includes a responsive layout, a slideshow for projects, and a detailed description of my expertise.";
  const paragraphTwo =
    "The website is built using modern web technologies like React, TypeScript, and Styled Components. It is optimized for performance, usability, and accessibility, ensuring a smooth experience for users.This project is a portfolio website designed to showcase my work, achievements, and technical skills. It includes a responsive layout, a slideshow for projects, and a detailed description of my expertise.";

  const features = [
    "Responsive design for all devices",
    "Dynamic slideshow for projects",
    "Light and dark theme support",
    "Optimized for SEO and performance",
    "Built with modern web technologies",
  ];

  const technologies = [
    { name: "React", link: "https://reactjs.org" },
    { name: "TypeScript", link: "https://www.typescriptlang.org" },
    { name: "Node.js", link: "https://nodejs.org" },
    { name: "Styled Components", link: "https://styled-components.com" },
  ];
  const projectLinks = {
    github: "https://github.com/user/project-repo",
    livePreview: "https://live-preview-link.com",
    showLiveLabel: true,
  };
  return (
    <SingleProjectPageWrapper>
      <ScrollToTop />
      <SingleProjectTitle
        title='Project Title'
        tagline='Project Tagline'
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
  );
}

export default SingleProjectPage;
