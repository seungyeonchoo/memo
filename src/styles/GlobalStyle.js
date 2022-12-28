import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
${reset}
* {
    box-sizing: border-box;

}
body {
    color: #424242;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    min-width: 100vw;
    /* justify-content: space-between;
    align-items: stretch; */
}
`;

export default GlobalStyles;
