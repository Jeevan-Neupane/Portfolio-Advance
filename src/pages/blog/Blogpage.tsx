import MediumArticles from "../../components/medium_post/MediumPost";
import Title from "../../reusable_components/title/Title";
import { BlogpageSection } from "./style";

const Blogpage = () => {
  return (
    <BlogpageSection>
      <Title
        title='My'
        hilightTitle='Blogs'
        widget='Posts'
      />

      <MediumArticles />
    </BlogpageSection>
  );
};

export default Blogpage;
