import React from "react";
import {
  BlogPostContainer,
  CategoriesDiv,
  Content,
  EachCategories,
  ImageContainer,
  MetaInfo,
  ReadMoreButton,
  Title,
} from "./style";

interface BlogPostProps {
  title: string;
  author: string;
  date: string;
  imageUrl: string;
  link: string;
  categories: string[];
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  author,
  date,
  imageUrl,
  link,
  categories,
}) => {
  console.log(categories);
  return (
    <BlogPostContainer>
      <ImageContainer>
        <img
          src={imageUrl}
          alt={`Cover for ${title}`}
        />
      </ImageContainer>

      <Content>
        <div>
          <Title>{title}</Title>
          <MetaInfo>
            By {author} • {new Date(date).toLocaleDateString()}
          </MetaInfo>
        </div>
        <CategoriesDiv>
          {categories.map((category) => {
            return <EachCategories key={category}>{category}</EachCategories>;
          })}
        </CategoriesDiv>
        <ReadMoreButton
          href={link}
          target='_blank'
          rel='noopener noreferrer'
        >
          Read More
        </ReadMoreButton>
      </Content>
    </BlogPostContainer>
  );
};

export default BlogPost;
