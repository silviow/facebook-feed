import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    
    html, body, #root {
        min-height: 100%;
        background: #EEEEEE;
    }

    body {
        -webkit-font-smoothing: antialiased !important;
    }

    body, input, button {
        font-family: 'Raleway', Arial, Helvetica, sans-serif;
    }

    button {
        cursor: pointer;
    }
`;