/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require("path")

module.exports = {
  resolver: {
    extraNodeModules: {
      "assets": path.resolve(__dirname, 'app/assets'),
      "components": path.resolve(__dirname, 'app/components'),
      "containers": path.resolve(__dirname, 'app/containers'),
      "configs": path.resolve(__dirname, 'app/configs'),
      "hooks": path.resolve(__dirname, 'app/hooks'),
      "navigation": path.resolve(__dirname, 'app/navigation'),
      "screens": path.resolve(__dirname, 'app/screens'),
      "services": path.resolve(__dirname, 'app/services'),
      "store": path.resolve(__dirname, 'app/store'),
      "theme": path.resolve(__dirname, 'app/theme'),
      "translations": path.resolve(__dirname, 'app/translations'),
      "types": path.resolve(__dirname, 'app/types'),
      "mocks": path.resolve(__dirname, '__mocks__'),
    }
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
