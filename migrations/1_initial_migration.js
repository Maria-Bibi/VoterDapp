var voters = artifacts.require("./voters.sol");

module.exports = function(deployer) {
  deployer.deploy(voters);
};
