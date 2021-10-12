
const FactsToken = artifacts.require("FactsToken");
const TokenPaymaster = artifacts.require("TokenPaymaster");


module.exports = async function (deployer) {
    await deployer.deploy(FactsToken);
    const a = await FactsToken.deployed();

    //deploying paymaster with factsToken, so that 
    //tokenpaymaster pay the gas fee in fact token

    const addressFactToken= a.address;
    await deployer.deploy(TokenPaymaster,addressFactToken);

};
