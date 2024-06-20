import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    :root {

    //Colours:
    --navy-blue: #25274d;
    --grey-blue: #464866;
    --grey: #aaabb8;
    --light-blue: #2E9cca;
    --teal: #29648a;

    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Ubuntu', 'sans-serif';
        background-color: var(--navy-blue);
    }

`;


export default GlobalStyles;