'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const config = require('../.env.json')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
	API_HOST: '"'+config.default.apiHost+'"',
	PROTOCOL: config.default.https ? '"https"': '"http"',
	HOST: '"'+config.connect.host+'"',
	PORT: '"'+config.connect.port+'"'
})
