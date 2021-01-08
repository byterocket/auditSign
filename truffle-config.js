const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  networks: {
    development: {
     host: "127.0.0.1",
     port: 8545,
     network_id: "*",
    },
    rinkeby: {
      provider: () => new HDWalletProvider(process.env.PRIVATE_KEY, "https://rinkeby.infura.io/v3/" + process.env.INFURA_KEY),
      gasPrice: 1*1000000000,
      network_id: 4,
      skipDryRun: true,
    },
    sokol: {
      provider: () => new HDWalletProvider(process.env.PRIVATE_KEY, "https://sokol.poa.network"),
      gasPrice: 1*1000000000,
      network_id: 77,
      skipDryRun: true,
    },
    xdai: {
      provider: () => new HDWalletProvider(process.env.PRIVATE_KEY, "https://rpc.xdaichain.com/"),
      gasPrice: 1*1000000000,
      network_id: 100,
    },
    matic: {
      provider: () => new HDWalletProvider(process.env.PRIVATE_KEY, "https://rpc-mainnet.matic.network"),
      gasPrice: 1*1000000000,
      network_id: 137,
    },
    mainnet: {
      provider: () => new HDWalletProvider(process.env.PRIVATE_KEY, "https://infura.io/v3/" + process.env.INFURA_KEY),
      gasPrice: 1*1000000000,
      network_id: 4,
    },
  },

  compilers: {
    solc: {
      version: "0.6.12",
      settings: {
        optimizer: {
          enabled: false,
          runs: 200
        },
      }
    },
  },

  plugins: [
    'truffle-source-verify'
  ],
  
  api_keys: {
    etherscan: process.env.ETHERSCAN_KEY
  }
};
