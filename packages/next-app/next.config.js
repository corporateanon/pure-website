// next.config.js
const nextTranspileModules = require('next-transpile-modules');

module.exports = nextTranspileModules([
    '@pure-website/ui-components',
    '@pure-website/io'
])({});
