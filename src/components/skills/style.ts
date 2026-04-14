import styled from "styled-components"
import { WrapperContainer } from "../../styles/Container"
import { mobileScreen } from "../../styles/responsive"

export const SkillsSection = styled.section``

export const SkillsContainer = styled(WrapperContainer)`
max-width:1120px;

`

export const SkillsSetContainer = styled.div`
margin-top: 3rem;
display: grid;
grid-template-columns: repeat(2, minmax(0, 1fr));
gap: 1.4rem;

${mobileScreen(`
	grid-template-columns: 1fr;
`)}
`


export const SkillGroupCard = styled.div`
	padding: 0.6rem 0;
`


export const SkillGroupTitle = styled.h3`
	font-size: 1.5rem;
	margin-bottom: 1rem;
	text-transform: uppercase;
	color: ${(props) => props.theme.specialColor};
`

export const SkillChipContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.8rem;
`;

export const SkillChip = styled.span`
	font-size: 1.3rem;
	color: ${(props) => props.theme.lighttextColor};
	background: transparent;
	border-radius: 999px;
	padding: 0.3rem 0.7rem;
`;