require("dotenv").config()

const HDWalletProvider = require("@truffle/hdwallet-provider")

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*',
      gas: 6700000
    },
    kovan: {
      host: 'localhost',
      port: 8545,
      network_id: '*',
      gas: 6700000
    },
    rinkeby: {
      host: 'localhost',
      from: '0xb483a98e72a583cc9b45b70cee07ac628d633d69',
      port: 8545,
      network_id: '*',
      gas: 6700000,
      gasPrice: 21000000000
    },
    coverage: {
      host: 'localhost',
      network_id: '*',
      port: 8545,
      gas: 0xfffffffffff,
      gasPrice: 0x01
    },
    main: {
      host: 'localhost',
      port: 8547,
      from: '0x0084a81668B9A978416aBEB88bC1572816cc7cAC',
      network_id: 1,
      gas: 6700000,
      gasPrice: 6110000000
    },
    telkom: {
      provider: () => new HDWalletProvider({
        privateKeys: [process.env.PRIVATE_KEY],
        providerOrUrl: 'https://rpc.telkombc.id/',
      }),
      network_id: 2021,
      gas: 0,
      gasPrice: 0x0
    },
    polygon_mumbai: {
      provider: () => new HDWalletProvider({
        privateKeys: [process.env.PRIVATE_KEY],
        providerOrUrl: 'https://speedy-nodes-nyc.moralis.io/3006aa01728823dbd0ed3134/polygon/mumbai',
      }),
      network_id: 80001,
      gas: 0,
      gasPrice: 0x0
    },
    polygon_mainnet: {
      provider: () => new HDWalletProvider({
        privateKeys: [process.env.PRIVATE_KEY],
        providerOrUrl: 'https://speedy-nodes-nyc.moralis.io/3006aa01728823dbd0ed3134/polygon/mainnet',
      }),
      network_id: 137,
      gas: 0,
      gasPrice: 0x0
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}
