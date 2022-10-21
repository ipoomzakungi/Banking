import {css} from "styled-components"

export const mobile = (props) =>{
    return css`
        @media only screen and (max-width: 600px) {
            ${props}
            
        }
    `;
};

export const tablet = (props) =>{
    return css`
        @media only screen and (max-width: 1050px) {
            ${props}
            
        }
    `;
};

export const tablet_s = (props) =>{
    return css`
        @media only screen and (max-width: 950px) {
            ${props}
            
        }
    `;
};