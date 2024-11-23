import styled from "styled-components";

const CallToActionContainer = styled.div`
  margin: 2rem 0;
  text-align: center;
`;

const ActionButton = styled.a`
  display: inline-block;
  margin: 1rem 0;
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

interface CallToActionProps {
  liveLink: string;
  repoLink: string;
}

export const CallToAction: React.FC<CallToActionProps> = ({
  liveLink,
  repoLink,
}) => (
  <CallToActionContainer>
    <ActionButton
      href={liveLink}
      target='_blank'
      rel='noopener noreferrer'
    >
      View Live Project
    </ActionButton>
    <ActionButton
      href={repoLink}
      target='_blank'
      rel='noopener noreferrer'
    >
      View GitHub Repo
    </ActionButton>
  </CallToActionContainer>
);
