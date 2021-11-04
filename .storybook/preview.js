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

addDecorator(withContexts(contexts));
addDecorator(withKnobs);
addDecorator(withA11y);

addParameters({
    docs: {
        container: DocsContainer,
        page: DocsPage,
    },
});


// import React from 'react';
// import { addDecorator, configure } from '@storybook/react';
// import { ThemeProvider } from 'styled-components';
// import GlobalStyles from '../components/particles/globalStyles';
// import themeDefault from '../components/particles/themeDefault';

// // automatically import all files ending in *.stories.js
// configure(require.context('../components', true, /\.stories\.js$/), module);

// const GlobalWrapper = (storyFn) => (
//     <ThemeProvider theme={themeDefault}>
//         <GlobalStyles />
//         {storyFn()}
//     </ThemeProvider>
// );

// addDecorator(GlobalWrapper);
