import React from "react";
import styled from "styled-components";

interface BlogPostProps {
  title: string;
  author: string;
  date: string;
  imageUrl: string;
  link: string;
}

const BlogPostContainer = styled.article`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.blogPage.cardBackground};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

 
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Content = styled.div`
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.textColor};
  margin: 0 0 1rem;
`;

const MetaInfo = styled.div`
  font-size: 1.2rem;
  color: ${(props) => props.theme.lighttextColor};
  margin-bottom: 16px;
`;

const ReadMoreButton = styled.a`
  margin-top: 1rem;
  display: inline-block;
  padding: 1rem 1.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  color: ${(props) => props.theme.lighttextColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
  transition: background-color 0.3s ease;
  align-self: flex-start;

  &:hover {
    background-color: ${(props) => props.theme.specialColor};
    color: ${(props) => props.theme.whiteTextColor};
  }
`;

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  author,
  date,
  imageUrl,
  link,
}) => {
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
