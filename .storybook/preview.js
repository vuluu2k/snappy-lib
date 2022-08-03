export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Home', ['Installation', 'GitHub', 'Upgrading', 'Themes'], '*']
    }
  },
  viewMode: 'docs',
}