import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f8f2f5; 
        --rede: #e52e4d;

        --blue: #5429CC;        
        --blue-light: #6933ff;

        --text-title: #363F5F;
        --text-body: #969cb3;

        --shape: #ffffff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1000px) {
            font-size: 93.75%; 
        }
        @media (max-width: 720px) {
            font-size: 87.5%; 
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

`