import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
	html {
    font-size: 10px;
    scroll-behavior: smooth;
  }

  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background: #fff;
    color: #000;
  }

  code {
    font-family: var(--base-font-family-code, monospace);
  }
`
