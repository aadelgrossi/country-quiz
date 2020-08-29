import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
    outline: 0;
  }

  body {
    color: #F2F2F2;
  }

  #root {
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialised;
  }

  h1, h2, h3, h4, h5, h6  {
    font-weight: bold;
  }

  button {
    cursor: pointer;
    border: none;
  }

  ul {
    list-style: none;
  }
`
