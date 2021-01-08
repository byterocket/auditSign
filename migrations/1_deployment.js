// migrations/NN_deploy_upgradeable_box.js
const { deployProxy, admin } = require('@openzeppelin/truffle-upgrades');
const auditSign = artifacts.require('auditSign');
const auditSignMirror = artifacts.require('auditSignMirror');

const byterocketeth = "0xee680e5c2C5251261061F12BA3a5c470D2B6AE83";
const safebyterocketeth = "0xee680e5c2C5251261061F12BA3a5c470D2B6AE83";
const mainnetAddress = "0x0000000000000000000000000000000000000000";
const ifpsBase = "https://gateway.pinata.cloud/ipfs/";

module.exports = async function (deployer) {
  if(deployer.network_id == 1) {
    await deployProxy(auditSign, [ifpsBase, byterocketeth, safebyterocketeth], { deployer, unsafeAllowCustomTypes: true });
  } else {
    await deployProxy(auditSignMirror, [ifpsBase, byterocketeth, safebyterocketeth, mainnetAddress], { deployer, unsafeAllowCustomTypes: true });
  }
  await admin.transferProxyAdminOwnership(byterocketeth);
};