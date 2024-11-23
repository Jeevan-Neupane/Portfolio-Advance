import styled from 'styled-components';

const ToolsContainer = styled.div`
  margin: 2rem 0;
`;

const ToolList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const ToolItem = styled.li`
  padding: 0.5rem 1rem;
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  color: #333;
`;

interface ToolsProps {
  tools: string[];
}

export const Tools: React.FC<ToolsProps> = ({ tools }) => (
  <ToolsContainer>
    <h2>Technologies Used</h2>
    <ToolList>
      {tools.map((tool, index) => (
        <ToolItem key={index}>{tool}</ToolItem>
      ))}
    </ToolList>
  </ToolsContainer>
);
