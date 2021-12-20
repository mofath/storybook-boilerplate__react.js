// preview.js
// controls the rendering of your stories
// its main purpose is to add global parameters and decorators should you need them
// Other uses are importing global CSS, adding extra polyfills if needed, and similar browser-side tweaks.

import { addParameters, addDecorator } from '@storybook/react';
import { withContexts } from '@storybook/addon-contexts/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { contexts } from './contexts';
import { ThemeProvider } from "styled-components";
import GlobalStyles from './globalStyles';
import themeDefault from './themeDefault';

const GlobalWrapper = (storyFn) => (
    <ThemeProvider theme={themeDefault}>
        <h1>Welcome to Storybook</h1>
      <GlobalStyles />
      {storyFn()}
    </ThemeProvider>
  );

addDecorator(withContexts(contexts));
addDecorator(withKnobs);
addDecorator(withA11y);

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

addDecorator(GlobalWrapper);