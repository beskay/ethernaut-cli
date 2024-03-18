const { types } = require('hardhat/config')
const output = require('../ui/output')

module.exports = {
  name: 'int',
  parse: function (argName, argValue) {
    return argValue
  },
  validate: (argName, argValue) => {
    try {
      types.int.validate(argName, parseInt(argValue, 10))
    } catch (err) {
      output.errorBoxStr(`"${argValue}" is not an int`, `Invalid ${argName}`)

      if (typeof describe === 'function') {
        throw err
      }

      return false
    }

    return true
  },
}