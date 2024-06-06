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
    font-size: var(--base-text-font-size, 16px);
  }

  code {
    font-family: var(--base-font-family-code, monospace);
  }
`
