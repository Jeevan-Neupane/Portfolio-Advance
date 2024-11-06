import React from 'react';
import styled from 'styled-components';

interface BlogPostProps {
  title: string;
  author: string;
  date: string;
  description: string;
  imageUrl: string;
  link: string; // This should be the URL to the Medium post
}

const BlogPostContainer = styled.article`
  max-width: 700px;
  margin: 40px auto;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  font-family: 'Georgia', serif;
  line-height: 1.6;
`;

const Title = styled.h2`
  font-size: 2.5em;
  color: #333;
  font-weight: bold;
  margin-bottom: 16px;
`;

const MetaInfo = styled.div`
  font-size: 0.95em;
  color: #888;
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
`;

const Description = styled.div`
  font-size: 1.1em;
  line-height: 1.8;
  color: #444;
  margin-bottom: 24px;
  max-height: 80px; /* Limit the height for the initial view */
  overflow: hidden;
`;

const ImageContainer = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
`;

const ReadMoreLink = styled.a`
  font-size: 1em;
  color: #1a73e8;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none; /* Remove underline for link */
  &:hover {
    text-decoration: underline;
  }
`;

const BlogPost: React.FC<BlogPostProps> = ({ title, author, date, description, imageUrl, link }) => {
  return (
    <BlogPostContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={title} />
      </ImageContainer>
      <Title>{title}</Title>
      <MetaInfo>
        <span>By {author}</span>
        <span>{date}</span>
      </MetaInfo>
      <Description dangerouslySetInnerHTML={{ __html: description }} />
      <ReadMoreLink href={link} target="_blank" rel="noopener noreferrer">Read More</ReadMoreLink>
    </BlogPostContainer>
  );
};

export default BlogPost;
