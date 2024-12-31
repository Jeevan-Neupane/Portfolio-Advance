import styled from "styled-components";
export const ArticlesContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, max-content)); 
  gap: 2rem;
  justify-content: center; /* Centers the grid items when there's only one */
`;


export const Heading = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: ${(props) => props.theme.singleProjectPage.headingColor};
`;


export const BlogPostContainer = styled.article`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.blogPage.cardBackground};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

 
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.textColor};
  margin: 0 0 1rem;
`;

export const MetaInfo = styled.div`
  font-size: 1.2rem;
  color: ${(props) => props.theme.blogPage.lighttextColor};
  margin-bottom: 16px;
`;

export const ReadMoreButton = styled.a`
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

//Loading Div

export const LoadingOuterDiv = styled.div`
display: flex;
justify-content:center;
align-items:center;
height:40rem;

/* HTML: <div class="loader"></div> */
.loader {
  width: 5rem;
  height: 3rem;
  --c:no-repeat radial-gradient(farthest-side,#000 93%,#0000);
  background:
    var(--c) 0    0,
    var(--c) 50%  0,
    var(--c) 100% 0;
  background-size: 8px 8px;
  position: relative;
  animation: l4-0 1s linear infinite alternate;
}
.loader:before {
  content: "";
  position: absolute;
  width: 8px;
  height: 12px;
  background: #000;
  left: 0;
  top: 0;
  animation: 
    l4-1 1s  linear infinite alternate,
    l4-2 0.5s cubic-bezier(0,200,.8,200) infinite;
}
@keyframes l4-0 {
  0%      {background-position: 0  100%,50% 0   ,100% 0}
  8%,42%  {background-position: 0  0   ,50% 0   ,100% 0}
  50%     {background-position: 0  0   ,50% 100%,100% 0}
  58%,92% {background-position: 0  0   ,50% 0   ,100% 0}
  100%    {background-position: 0  0   ,50% 0   ,100% 100%}
}
@keyframes l4-1 {
  100% {left:calc(100% - 8px)}
}
@keyframes l4-2 {
  100% {top:-0.1px}
}
`


export const CategoriesDiv = styled.div`
display: flex;
gap: 1rem;
flex-wrap: wrap;

`

export const EachCategories = styled.p`
font-size: 1.2rem;
border: 1px solid ${(props) => props.theme.borderColor};
padding: 0.5rem 1rem;
`

export const TotalArticleNumber = styled.p`
margin: 1rem 0;
font-size: 1.5rem;
font-weight: bold;

`