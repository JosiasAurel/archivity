
module.exports = {
    swcMinify: true,
    webpack: (config) => {
        config.experiments.topLevelAwait = true;
        return config;
    }
}