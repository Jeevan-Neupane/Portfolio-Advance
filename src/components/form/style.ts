import styled from "styled-components";
import { mediumScreen } from "../../styles/responsive";


export const FormWrapper = styled.div`
`

export const FormContainer = styled.form`
padding: 2rem;
`

export const NameEmailSubjContainer = styled.div`
display: flex;
justify-content:space-between;
gap:2rem;

${mediumScreen(`
flex-direction: column;
`)}

`

export const NameInput = styled.input`
    font-weight: 400;
    border: 1px solid ${(props) => props.theme.borderColor};
    padding: 1.1rem 2.6rem;
    border-radius: 30px;
    outline: none !important;
    transition: 0.3s;
    margin: 0;
    &:focus{
        border: 1px solid ${(props) => props.theme.specialColor};
    }
    &:focus::placeholder{
        color:transparent;
    }
`

export const EmailInput = styled.input`
  font-weight: 400;
    border: 1px solid ${(props) => props.theme.borderColor};
    padding: 1.1rem 2.6rem;
    border-radius: 30px;
    outline: none !important;
    transition: 0.3s;
    margin: 0;
    &:focus{
        border: 1px solid ${(props) => props.theme.specialColor};
    }
    &:focus::placeholder{
        color:transparent;
    }
`

export const MessageInput = styled.textarea`
font-weight: 400;
    border: 1px solid ${(props) => props.theme.borderColor};
    padding: 1.1rem 2.6rem;
    outline: none !important;
    transition: 0.3s;
    margin: 0;
    width: 100%;
    height: 15rem;
    resize:none;
    border-radius: 1rem;

    &:focus{
        border: 1px solid ${(props) => props.theme.specialColor};
    }
    &:focus::placeholder{
        color:transparent;
    }
    
`

export const SubjInput = styled.input`
  font-weight: 400;
    border: 1px solid ${(props) => props.theme.borderColor};
    padding: 1.1rem 2.6rem;
    border-radius: 30px;
    outline: none !important;
    transition: 0.3s;
    margin: 0;
    &:focus{
        border: 1px solid ${(props) => props.theme.specialColor};
    }
    &:focus::placeholder{
        color:transparent;
    }
   
`

export const SubmitButton = styled.button``

export const MessageDiv = styled.div`
margin-top: 2rem;

`

export const SubmitButtonContainer = styled.div`
margin-top: 2rem;
`