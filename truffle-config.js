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
      provider: () => new HDWalletProvider(process.env.PRIVATE_KEY, "https://xdai-archive.blockscout.com/"),
      gasPrice: 1*1000000000,
      network_id: 100,
      skipDryRun: true,
    },
    matic: {
      provider: () => new HDWalletProvider(process.env.PRIVATE_KEY, "https://rpc-mainnet.matic.network"),
      gasPrice: 1*1000000000,
      network_id: 137,
    },
    mainnet: {
      provider: () => new HDWalletProvider(process.env.PRIVATE_KEY, "https://mainnet.infura.io/v3/" + process.env.INFURA_KEY),
      gasPrice: 51*1000000000, // 50 gwei
      network_id: 1,
      timeoutBlocks: 100,
      skipDryRun: true,
    },
  },

  compilers: {
    solc: {
      version: "0.6.12",
      settings: {
        optimizer: {
          enabled: true,
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
