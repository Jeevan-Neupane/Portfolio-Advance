import { Footer } from "../../components/footer/Footer";
import MediumArticles from "../../components/medium_post/MediumPost";
import ScrollToTop from "../../components/scollTop/ScrollTop";
import Title from "../../reusable_components/title/Title";
import { BlogpageSection } from "./style";

const Blogpage = () => {
  return (
    <>
      <BlogpageSection>
        <ScrollToTop />
        <Title
          title='My'
          hilightTitle='Blogs'
          widget='Posts'
        />

        <MediumArticles />
      </BlogpageSection>
      <Footer />
    </>
  );
};

export default Blogpage;
