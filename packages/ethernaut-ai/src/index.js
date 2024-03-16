const { extendEnvironment, extendConfig } = require('hardhat/config')
const requireAll = require('ethernaut-common/src/io/require-all')
const spinner = require('ethernaut-common/src/ui/spinner')
const storage = require('./internal/storage')
const preParseAi = require('./internal/pre-parse-ai')
const output = require('ethernaut-common/src/ui/output')

requireAll(__dirname, 'tasks')

extendEnvironment((hre) => {
  spinner.enable(!hre.hardhatArguments.verbose)
  output.setErrorVerbose(hre.hardhatArguments.verbose)

  storage.init()

  preParseAi(hre)
})

extendConfig((config, userConfig) => {
  if (!config.ethernaut) config.ethernaut = {}

  config.ethernaut.ai = {
    model: userConfig.ethernaut?.ai?.model || 'gpt-4-1106-preview',
    interpreter: {
      additionalInstructions:
        userConfig.ethernaut?.ai?.interpreter?.additionalInstructions.concat() ||
        [],
    },
    explainer: {
      additionalInstructions:
        userConfig.ethernaut?.ai?.explainer?.additionalInstructions.concat() ||
        [],
    },
  }
})
