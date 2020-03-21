module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.js'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs/register',
    '@storybook/addon-storysource',
  ],
}
