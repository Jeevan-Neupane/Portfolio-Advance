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
    </BlogpageSection>
  );
};

export default Blogpage;
