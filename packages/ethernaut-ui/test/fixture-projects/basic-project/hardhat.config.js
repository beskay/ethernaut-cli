/** @type import('hardhat/config').HardhatUserConfig */
require('@nomicfoundation/hardhat-ethers');
require('../../../src/index');
require('../../../../ethernaut-toolbox/src/index');

module.exports = {
  solidity: '0.8.24',
};