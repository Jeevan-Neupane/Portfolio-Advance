import { useState, useEffect } from "react";
import BlogPost from "./Article";
import {
  ArticlesContainer,
  Grid,
  Heading,
  LoadingOuterDiv,
  TotalArticleNumber,
} from "./style";

// Utility function to extract the first image URL from HTML content
const extractImageUrl = (content: string): string | null => {
  const regex = /<img[^>]+src="([^">]+)"/;
  const match = regex.exec(content);
  return match ? match[1] : null;
};

const MediumArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jeevan.neupane003"
    )
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.items);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <LoadingOuterDiv>
        <div className='loader'></div>
      </LoadingOuterDiv>
    );
  }

  if (articles.length === 0) {
    return <Heading>Articles Are Not Found Due To Error</Heading>;
  }

  console.log(articles);

  return (
    <ArticlesContainer>
      <Heading>Medium Articles</Heading>
      <TotalArticleNumber>Total Articles: {articles.length}</TotalArticleNumber>
      <Grid>
        {articles?.map((post: any) => {
          const imageUrl = post.thumbnail || extractImageUrl(post.content);

          return (
            <BlogPost
              key={post.guid}
              title={post.title}
              date={post.pubDate}
              link={post.link}
              author={post.author}
              imageUrl={imageUrl}
              categories={post.categories}
            />
          );
        })}
      </Grid>
    </ArticlesContainer>
  );
};

export default MediumArticles;
