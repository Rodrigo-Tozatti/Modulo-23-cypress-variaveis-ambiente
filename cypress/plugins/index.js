
/*require('dotenv').config()
module.exports = (on, config) => {
    config.env.HOST = process.env.CYPRESS_HOST
    return config
}*/

/*const dotenvPlugin = require('cypress-dotenv');
module.exports = (on, config) => {
  config = dotenvPlugin(config)
  return config
}*/

require('dotenv').config({path: `${process.cwd()}/cypress/support/config/local.env`})
module.exports = (on, config) => {
    config = dotenvPlugin(config)
    return config
  }

