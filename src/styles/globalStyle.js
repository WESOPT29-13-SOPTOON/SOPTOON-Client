import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    html, body, #root {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        font-size: 62.5%;
        font-family: 'Noto Sans KR', sans-serif;
    }

    :root {
        --screen-width: 80rem;
    }

    /* @media screen {
        :root {
            --screen-width: 100%;
        }
    } */

    * {
        box-sizing: border-box;
    }

    :root {
        --screen-width: 896px;
    }

    @media screen and (min-width: 704px) and (max-width: 895px) {
        :root {
            --screen-width: 704px;
        }
        
    }

    @media screen and (max-width: 703px) {
        :root {
            --screen-width: 312px;
        }
    }

    button:hover {
        cursor: pointer;
    }
`;

export default GlobalStyle;
