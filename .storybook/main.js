// main.js
// it concerns itself with the location of your story files,
// management of presets (which configure Webpack and Babel to allow different file types),
// generalized webpack configuration.
// You can also do basic addon registration in here

module.exports = {
  // tell Storybook where your story-files are located
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/preset-create-react-app',
        '@storybook/addon-essentials',
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/addon-contexts/register',
        '@storybook/addon-backgrounds/register',
        '@storybook/addon-knobs',
        '@storybook/addon-a11y/register',
        {
            name: '@storybook/addon-docs',
            options: {
                configureJSX: true,
            },
        },
    ],
};
