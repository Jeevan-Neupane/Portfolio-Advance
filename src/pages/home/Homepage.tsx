import { useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import HomeBackgroundCanvas from "../../components/home/background/HomeBackgroundCanvas";
import EandE from "../../components/eande/EandE";
import { Footer } from "../../components/footer/Footer";
import Info from "../../components/info/Info";
import Skills from "../../components/skills/Skills";
import Project_buttons, {
  ProjectFilterType,
} from "../../components/projects_button/Project_buttons";
import WebProjects from "../../components/projects/WebProjects";
import AIProjects from "../../components/projects/AIProjects";
import CollegeProjects from "../../components/projects/CollegeProject";
import MediumArticles from "../../components/medium_post/MediumPost";
import SmallTitle from "../../reusable_components/small_title/SmallTitle";
import Title from "../../reusable_components/title/Title";
import Form from "../../components/form/Form";
import Social_Media from "../../components/social_media_icons/Social_Media";
import ContactInfo from "../../reusable_components/contact_info/ContactInfo";
import MyContactInfo from "../../data/Contact_info";
import Intro from "../../components/home/intro_home/Intro";
import MyImage from "../../components/home/my_photo/MyImage";
import {
  ColorBlock,
  HomeContactGrid,
  HomeContainerDetails,
  HomePageSection,
  HomeProjectStack,
  HomeSection,
  HomeSectionFull,
  IntroDiv,
} from "./style";

const Homepage = () => {
  const location = useLocation();
  const [activeProjectType, setActiveProjectType] =
    useState<ProjectFilterType>("ai_ml");

  useLayoutEffect(() => {
    if (location.hash) {
      return;
    }

    const savedScrollY = window.sessionStorage.getItem("homeScrollRestoreY");
    if (!savedScrollY) {
      return;
    }

    const scrollY = Number.parseInt(savedScrollY, 10);
    if (!Number.isNaN(scrollY)) {
      window.scrollTo({ top: scrollY, left: 0, behavior: "auto" });
    }
    window.sessionStorage.removeItem("homeScrollRestoreY");
  }, [location.hash]);

  useLayoutEffect(() => {
    if (!location.hash) {
      return;
    }

    const sectionId = location.hash.replace("#", "");
    const target = document.getElementById(sectionId);

    if (!target) {
      return;
    }

    target.scrollIntoView({ behavior: "auto", block: "start" });
  }, [location.hash]);

  return (
    <HomePageSection>
      <HomeContainerDetails id='home'>
        <ColorBlock />
        <HomeBackgroundCanvas />
        <MyImage />
        <IntroDiv>
          <Intro />
        </IntroDiv>
      </HomeContainerDetails>

      <HomeSection id='about'>
        <Title
          title='About'
          hilightTitle='Me'
          widget='Resume'
        />
        <Info />
        <Skills />
        <EandE />
      </HomeSection>

      <HomeSectionFull id='works'>
        <Title
          title='My'
          hilightTitle='Portfolio'
          widget='Works'
        />
        <Project_buttons
          activeType={activeProjectType}
          onProjectChange={setActiveProjectType}
        />
        <HomeProjectStack>
          {activeProjectType === "ai_ml" && (
            <section id='ai-projects'>
              <AIProjects />
            </section>
          )}
          {activeProjectType === "web" && (
            <section id='web-projects'>
              <WebProjects />
            </section>
          )}
          {activeProjectType === "college" && (
            <section id='college-projects'>
              <CollegeProjects />
            </section>
          )}
        </HomeProjectStack>
      </HomeSectionFull>

      <HomeSection id='blogs'>
        <Title
          title='My'
          hilightTitle='Blogs'
          widget='Posts'
        />
        <MediumArticles />
      </HomeSection>

      <HomeSection id='contact'>
        <Title
          title='Get In'
          hilightTitle='Touch'
          widget='Contact'
        />
        <HomeContactGrid>
          <div>
            <SmallTitle
              textAlign='left'
              title="DON'T BE SHY!"
            />

            <p style={{ fontSize: "1.4rem", textAlign: "justify", color: "#666", marginTop: "1.5rem" }}>
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions.
            </p>

            <div style={{ marginTop: "2rem" }}>
              {MyContactInfo.map((info, index) => (
                <ContactInfo
                  key={index}
                  title={info.title}
                  info={info.info}
                  icon={<info.icon />}
                />
              ))}
            </div>

            <Social_Media />
          </div>

          <div style={{ border: "1px solid #dddddd", borderRadius: "1rem" }}>
            <Form />
          </div>
        </HomeContactGrid>
      </HomeSection>

      <Footer />
    </HomePageSection>
  );
};

export default Homepage;
