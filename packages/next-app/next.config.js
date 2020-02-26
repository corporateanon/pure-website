const nextTranspileModules = require('next-transpile-modules');

const withFix = (nextConfig = {}) => {
    return Object.assign({}, nextConfig, {
        webpack(config, options) {
            config.resolve.symlinks = false;
            return config;
        }
    });
};

module.exports = nextTranspileModules([
    '@pure-website/effects',
    '@pure-website/ui-components',
    '@pure-website/io'
])(withFix({}));
