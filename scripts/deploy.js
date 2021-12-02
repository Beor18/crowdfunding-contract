const { ethers } = require('hardhat')

const deploy = async () => {
  const [deployer] = await ethers.getSigners()

  console.log('Deploying contract with the account: ', deployer.address)
  const CrowdFunding = await ethers.getContractFactory('CrowdFunding')
  const deployed = await CrowdFunding.deploy()

  console.log('CrowdFunding is deployed at: ', deployed.address)
}

deploy()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })
