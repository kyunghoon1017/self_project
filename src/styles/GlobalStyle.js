import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

    *, html { 
      box-sizing: border-box;
      text-decoration: none;
      background : #ffffff;
    }

`;

export default GlobalStyle;
