import {createGlobalStyle} from 'styled-components';
import squareRegular from '../assets/fonts/TTSquare/Squares Regular.otf'
import squareItalic from '../assets/fonts/TTSquare/Squares Italic.otf'
import squareBold from '../assets/fonts/TTSquare/Squares Bold.otf'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'TT Square';
    src: url('${squareRegular}') ;
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'TT Square';
    src: url('${squareItalic}') ;
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: 'TT Square';
    src: url('${squareBold}');
    font-weight: bold;
    font-style: normal;
  }

  *:focus {
    outline: none
  }
  
  body {
    font-family: TT Square;
    font-size: 18px;
  }

  img {
    height: 100%;
  }
`