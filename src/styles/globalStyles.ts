import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
}

body {
    font-size: 1.6rem;
}

body,
button,
input,
textarea,
select {
  font-family: "Plus Jakarta Sans", sans-serif;
}

:root {
    --color-purple: #635FC7;
    --color-purple-200: rgba(99, 95, 199, 0.25);
    --color-black: #000112;
    --color-black-400: #20212c;
    --color-back-200: rgba(0, 1, 18, 0.25);
    --color-white: #fff;
    --color-red: #ea5555;
    --color-grey: #828fa3;
    --color-grey-200: #bfbfc3;
    --color-grey-300: #7a7c88;
    --color-border: rgba(130, 143, 163, 0.25);
    --hover-red: #ff9898;
    --hover-purple: #a6a6ff;
    --fz-xxs: 1.2rem;
    --fz-md: 1.3rem;
    --fz-lg: 1.5rem;
    --fz-xl: 1.8rem;
    --fz-xxl: 2.4rem;
    --font-medium: 500;
    --font-bold: 700;
    --borderR-lg: 4px;
    --borderR: 6px;
    --borderR-md: 8px;
    --border-xl: 0px 10rem 10rem 0px;
    --header-h: 97px;
    --shadow-md: 0 0 2px 0 rgba(10, 10, 10, 0.29);
}
`;
