import { createGlobalStyle } from 'styled-components'

export const colors = {
  whiteColor: '#EEEEEE',
  BlackColor: '#111111',
  GreyColor: '#333333',
  GreenColor: '#10AC84',
  GrayTextColor: '#A3A3A3'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
    text-decoration: none;
  }

  body {
    background-color: ${colors.BlackColor};
    color: ${colors.whiteColor};
    padding-top: 40px;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }
`

export default GlobalStyle
