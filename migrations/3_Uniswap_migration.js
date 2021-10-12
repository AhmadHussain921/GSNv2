const { rawListeners } = require("process");

const Uniswap = artifacts.require("FactsToken");

module.exports = async function (deployer) {
    //the following values for contructor of Uniswap are just for testing purpose
    const rateMul =34;
    const rateDiv =43;
    await deployer.deploy(Uniswap,rateMul,rateDiv);
};
