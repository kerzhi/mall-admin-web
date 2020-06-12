'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://120.27.63.9:8080"',
  APP_TITLE: '"可知科技在线商城开发环境"'
})
