const nextTranspileModules = require("next-transpile-modules");
const dotenv = require("dotenv");
dotenv.config();

const withFix = (nextConfig = {}) => {
    return Object.assign({}, nextConfig, {
        webpack(config, options) {
            config.resolve.symlinks = false;
            return config;
        }
    });
};

module.exports = nextTranspileModules([
    "@pure-website/effects",
    "@pure-website/ui-components",
    "@pure-website/io"
])(
    withFix({
        publicRuntimeConfig: {
            firebaseConfig: JSON.parse(process.env.FIREBASE_CONFIG)
        }
    })
);
