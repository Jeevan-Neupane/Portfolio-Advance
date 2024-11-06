import { useState, useEffect } from "react";
import BlogPost from "./Article";
const MediumArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@neupane.ashok.9696"
    )
      .then((res) => res.json())
      .then((data) => setArticles(data.items));
  }, []);

  console.log(articles);

  return (
    <div>
     <h1>Medium Articles</h1>

     {articles.map((post: any) => {
        return (
          <BlogPost
            title={post.title}
            date={post.pubDate}
            link={post.link}
            author={post.author}
            imageUrl={post.thumbnail}
            
            description={post.description}
          />
        );
      })}
    </div>
  );
};

export default MediumArticles;
