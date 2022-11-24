import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    // Reset    
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: 0;
    }

    ul {
        list-style-type: none;
    }

    // Typography
    body,button,input,textarea,select {
        font-family: 'Plus Jakarta Sans', sans-serif;
    }

    h1 {
        font-weight: 700;
        font-size: 18px;
        line-height: 23px;
        color: var(--black);
        
        @media screen and (min-width: 750px) {
            font-size: 20px;
            line-height: 25px;
        }
    }

    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
    }

    // Colors
    :root {
        --main-purple: #635FC7;
        --black: #000112;
        --white: #fff;
        --very-dark-grey: #20212C;
        --dark-grey: #2B2C37;
        --medium-grey: #828FA3;
        --white: #FFFFFF;
        --red: #EA5555;

        // Colors theme
        --line-dark: #3E3F4E;
        --line-light: #E4EBFA;
        --light-grey-light: #F4F7FD;

        // Hover colors
        --red-hover: #FF9898;
        --main-purple-hover: #A8A4FF;
    }

`;
