require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/FDFb29yEdWRIyNaCmYt8dMy60guSr7-x',
      accounts: [ '7bbe5d3a3932fcd580f2a8ab29972bb9c597feadb0cef840602a3cc6a4c19900' ]
    }
  }
}

