// migrations/NN_deploy_upgradeable_box.js
const { deployProxy, admin } = require('@openzeppelin/truffle-upgrades');
const auditSign = artifacts.require('auditSign');
const auditSignMirror = artifacts.require('auditSignMirror');

// The current address of byterocket.eth (used for signing)
const byterocketeth = "0xee680e5c2C5251261061F12BA3a5c470D2B6AE83";
// The current address of safe.byterocket.eth (cold wallet, used for admin/upgradability rights)
const safebyterocketeth = "0xb9Edd24591De55dB94A0e7fB2939D8F2eF49bf3E";
// Mainnet address of the auditSign contract (as soon as it is deployed)
// Can also be found via audits.byterocket.eth
const mainnetAddress = "0x0000000000000000000000000000000000000000";

const ifpsBase = "https://gateway.pinata.cloud/ipfs/";

module.exports = async function (deployer) {
  if(deployer.network_id == 1) {
    await deployProxy(auditSign, [ifpsBase, safebyterocketeth, byterocketeth], { deployer, unsafeAllowCustomTypes: true });
  } else {
    await deployProxy(auditSignMirror, [ifpsBase, safebyterocketeth, byterocketeth, mainnetAddress], { deployer, unsafeAllowCustomTypes: true });
  }
  await admin.transferProxyAdminOwnership(safebyterocketeth);
};