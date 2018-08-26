import { resolve } from 'path';
const APP_DIR = resolve(__dirname, 'ClientApp');
const PUBLIC_DIR = resolve(__dirname, 'public');

import merge from 'webpack-merge';
import baseConfig from './webpack.base.js';

const config = {
    entry: APP_DIR + '/Client.js',

    devServer: {
        contentBase: PUBLIC_DIR,
        port: 9000,
        open: true
    },

    output: {
        path: PUBLIC_DIR,
        filename: 'clientbundle.js'
    },

    //devtool: 'source-map',

};

//module.exports = config;

export default merge(baseConfig, config);