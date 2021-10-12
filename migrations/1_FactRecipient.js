const FactRecipient = artifacts.require("FactRecipient");

module.exports = function (deployer) {
  const forwarderAddress="0x08De43F6fFb107DdB4BBb43cD5A2573a9ceBFD72";
  deployer.deploy(FactRecipient, [forwarderAddress]);
};
