module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: [
    "../React/Components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-actions",
    "@storybook/addon-knobs",
    "@storybook/addon-viewport"
  ],
  typescript: {
    reactDocgen: 'none',
  },
}
