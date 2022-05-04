import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --background: #141414;    
    --border: #292929;
    --white: #fffffc;
    --highlight: #b8b8ff;
    --secondary: #ff5d8f;

    --font-logo: 'Josefin Sans', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;    
  }

  html, body, #__next {
    height: 100%;
    background-color: var(--background);    
  } 

  body {
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;    
  }
`

export { GlobalStyles }
