const { merge } = require('@neutrinojs/compile-loader');

module.exports = {
  use: [
    '@neutrinojs/airbnb',
    '@neutrinojs/react-components',
    neutrino => {
        neutrino.config.module
          .rule('compile')
            .use('babel')
              .tap(options => merge(options, {
                presets: [
                  ['babel-preset-env', {
                    targets: {
                      ie: 9
                    },
                    useBuiltIns: false,
                    modules: false
                  }]
                ]
              }));
    }
  ]
};
