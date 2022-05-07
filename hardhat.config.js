// https://eth-ropsten.alchemyapi.io/v2/MtzQjEfNOX0XaYxVxmvMjauU77ibvhsu

require('@nomiclabs/hardhat-waffle')


module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/MtzQjEfNOX0XaYxVxmvMjauU77ibvhsu',
      accounts: ['df29d5a533403c3deeee463442052c3b3ea5679ef0945eaee9c0e6647ecfeed5']
    }
  }
}