import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body:{
   background: ${(props) => props.theme.primary}
  }
`;

export default GlobalStyle;
