import { useState, useEffect } from "react";
import styled from "styled-components";
import BlogPost from "./Article";

const ArticlesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: ${(props) => props.theme.singleProjectPage.headingColor};
`;

// Utility function to extract the first image URL from HTML content
const extractImageUrl = (content: string): string | null => {
  const regex = /<img[^>]+src="([^">]+)"/;
  const match = regex.exec(content);
  return match ? match[1] : null;
};

const MediumArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jeevan.neupane003"
    )
      .then((res) => res.json())
      .then((data) => setArticles(data.items));
  }, []);

  if (articles.length === 0) {
    return <h1>Loading...</h1>;
  }

  console.log(articles);

  return (
    <ArticlesContainer>
      <Heading>Medium Articles</Heading>
      <Grid>
        {articles?.map((post: any) => {
          // Check if there's a thumbnail, if not, extract from the content
          const imageUrl = post.thumbnail || extractImageUrl(post.content);

          return (
            <BlogPost
              key={post.guid}
              title={post.title}
              date={post.pubDate}
              link={post.link}
              author={post.author}
              imageUrl={imageUrl}
            />
          );
        })}
      </Grid>
    </ArticlesContainer>
  );
};

export default MediumArticles;
