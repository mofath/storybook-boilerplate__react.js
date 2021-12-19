import { addParameters, addDecorator } from '@storybook/react';
import { withContexts } from '@storybook/addon-contexts/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { contexts } from './contexts';

addDecorator(withContexts(contexts));
addDecorator(withKnobs);
addDecorator(withA11y);

// import GlobalStyles from '../components/particles/globalStyles';
// import themeDefault from '../components/particles/themeDefault';

// automatically import all files ending in *.stories.js
// configure(require.context('../components', true, /\.stories\.js$/), module);

// const GlobalWrapper = (storyFn) => (
//     <ThemeProvider theme={themeDefault}>
//         <GlobalStyles />
//         {storyFn()}
//     </ThemeProvider>
// );

// addDecorator(GlobalWrapper);