import { css } from 'styled-components';






export const computer = (props:any) => {
    return css`
        @media (max-width:1440px) {
            ${props}
            
        }
        `
}

export const labtop = (props:any) => {
    return css`
        @media (max-width:1024px) {
            ${props}
            
        }
    `
}

export const tab = (props:any) => {
    return css`
        @media (max-width:768px) {
            ${props}
            
        }
    `
}

export const mobile = (props:any) => {
    return css`
         @media (max-width: 576px) {
            ${props}
            
         }
    `
}



export const smallMobile = (props:any) => {
    return css`
         @media (max-width: 440px) {
            ${props}
            
         }
    `
}
export const smallScreen = (props:any) => {
    return css`
         @media (max-height: 800px) {
            ${props}
            
         }
    `
}