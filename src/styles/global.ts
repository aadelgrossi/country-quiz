import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
    outline: 0;
    font-family: 'Poppins', sans-serif;
  }

  body {
    color: #F2F2F2;
    overflow-x: hidden;
  }

  #root {
    font-size: 18px;
    -webkit-font-smoothing: antialised;
  }

  h1, h2, h3, h4, h5, h6  {
    font-weight: bold;
  }

  h1 {
    font-size: 1.6em;
  }

  button {
    cursor: pointer;
    border: none;
    background: transparent;
  }

  ul {
    list-style: none;
  }
`
