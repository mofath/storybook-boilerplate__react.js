import { addParameters, addDecorator } from '@storybook/react';
import { withContexts } from '@storybook/addon-contexts/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { contexts } from './contexts';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const themeDefault = {
    primary: 'rebeccapurple',
};

const GlobalStyle = createGlobalStyle`
  body:{
   background: ${(props) => props.theme.primary}
  }
`;

const GlobalWrapper = (storyFn) => {
    return (
        <ThemeProvider theme={themeDefault}>
            <GlobalStyle />
            <h2>Hello world</h2>
            {storyFn()}
        </ThemeProvider>
    );
};

addDecorator(withContexts(contexts));
addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(GlobalWrapper);
