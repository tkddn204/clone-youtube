module.exports = {
  stories: ['../src/**/stories.tsx'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [{
        loader: require.resolve('ts-loader'),
        options: {
          configFile: './tsconfig.json'
        }
      },
        // {
        //   loader: require.resolve('react-docgen-typescript-loader'),
        // },
      ]
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    '@storybook/addon-storysource'
  ]
};