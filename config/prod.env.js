'use strict'
const config = require('../.env.json')
module.exports = {
  NODE_ENV: '"production"',
  API_HOST: '"'+config.default.apiHost+'"',
	PROTOCOL: config.default.https ? '"https"': '"http"',
	HOST: '"'+config.connect.host+'"',
	PORT: '"'+config.connect.port+'"'
}
