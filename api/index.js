const { version } = require('./package.json')
const micro = require('micro')

module.exports = micro(() => {
  return {
    version
  }
})
