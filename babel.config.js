/* eslint-disable comma-dangle */
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: true,
        // eslint-disable-next-line comma-dangle
        allowUndefined: true,
      },
    ],
  ],
  // eslint-disable-next-line semi
};
