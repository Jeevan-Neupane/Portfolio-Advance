import styled from "styled-components";
import { extraLargeScreen, largeScreen } from "../../styles/responsive";

type MediaIconsContainerProps = {
	$floating?: boolean;
};

export const MediaIconsContainer = styled.div<MediaIconsContainerProps>`
display: flex;
gap:1rem;
margin-top:${(props) => (props.$floating ? "0" : "2rem")};

${(props) =>
	props.$floating &&
	`
	position: fixed;
	left: 3rem;
	top: 50%;
	transform: translateY(-50%);
	flex-direction: column;
	z-index: 3;

	${extraLargeScreen(`
		display: flex;
	`)}

	${largeScreen(`
		display: none;
	`)}
	`}

`