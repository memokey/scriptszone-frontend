const withTM = require('next-transpile-modules')([
  'react-syntax-highlighter'
]); // pass the modules you would like to see transpiled

module.exports = withTM({
  // Your Next.js config is here
  webpack: (config, options) => {
    // modify the webpack config however you'd like to by adding plugins, rules etc.
    // Return your customised Webpack Config
    return config;
  },
});