module.exports = (api) => {
    api.cache(true);

    const presets = [['@babel/env']];
    const plugins = [ ['@babel/plugin-transform-runtime', {
        "absoluteRuntime": false,
        "corejs": 2,
        proposals: false,
        "helpers": true,
        "regenerator": true,
        "useESModules": false
    }] ];

    return { presets, plugins }
}