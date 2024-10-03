import styled from "styled-components";


type SmallTitleWrapperProps = {
    align: string;
};


export const SmallTitleWrapper = styled.div<SmallTitleWrapperProps>`

    text-align: ${(props) => props.align};
    margin-bottom: 1rem;
    font-size: 1.5rem;
    color:${(props) => props.theme.lighttextColor};
    


`

export const SmallTitleText = styled.h2``