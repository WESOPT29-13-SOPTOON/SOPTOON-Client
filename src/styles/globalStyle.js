import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    html, body, #root {
        padding: 0;
        margin: 0;
        font-size: 62.5%;
        font-family: 'Noto Sans KR', sans-serif;
    }

    * {
        box-sizing: border-box;
    }

    button:hover {
        cursor: pointer;
    }
`;

export default GlobalStyle;
