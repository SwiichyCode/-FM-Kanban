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

body,
button,
input,
textarea,
select {
  font-family: "Plus Jakarta Sans", sans-serif;
}




:root {
    --color-purple: rgba(99, 95, 199, 0.25);
    --color-purple-200: #6e6ed9;
    --color-black: #000112;
    --color-black-400: #20212c;
    --color-back-200: #2b2c37;
    --color-white: #fff;
    --color-red: #ea5555;
    --color-grey: #828fa3;
    --color-grey-200: rgba(99, 95, 199, 0.1);

    --hover-red: #ff9898;
    --hover-purple: #a6a6ff;

    --fz-xxs: 1.2rem;
    --fz-md: 1.3rem;
    --fz-lg: 1.5rem;
    --fz-xl: 1.8rem;
    --fz-xxl: 2.4rem;

    --header-h: 97px;
}
`;
