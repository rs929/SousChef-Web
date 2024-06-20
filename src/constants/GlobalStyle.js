import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
:root {
    --background: #FFFFFF;
}

html {
    font-size: 16px;
    font-family: Georgia;
    text-align: left;
}

ul, li {
    list-style: none;
}

a {
    text-decoration: none;
}
`;

export default GlobalStyle;