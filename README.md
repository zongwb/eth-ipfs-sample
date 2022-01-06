# Simple DApp: Ethereum + IPFS + React.js

A simple reference DApp to upload a document to IPFS (InterPlanetary File System) and then store the IPFS hash on the Ethereum blockchain. Once the IPFS hash number is sent to the Ethereum blockchain, the user will receive a transaction receipt. 

We will use Create-React-App framework to make a front-end. This Dapp works with any user that has MetaMask installed in their browser.

You may consider to use IPFS and Ethereum for those use cases where documents need to be persisted and to ensure it is not tempered. This simple app just provides a starting point for you to explore how you can prototype your use cases using IPFS and Ethereum.

The sample dapp will run in the CDE on the ML BPaaS platform.


## Explore and run the DApp

1. Install MetaMask chrome browser extension. If do not have MetaMask installed, please go to https://metamask.io/ and follow the instructions. This DApp will assume the user has MetaMask installed.

2. Download the Ethereum and IPFS Sample App from the Application Library into My Repository which will create a repository in your under your git account. In the Solution Center->CDE open the repository created and click the deploy button. Then use the workspace created to explore and test the sample application. Refer to the platform document: https://docs.morpheuslabs.io for more information about how to download app, how to access my repository and how to deploy/create a new workspace.

3. Deploy smart contract to your local network in the terminal or a POA network on the platform (or ropsten testnet). You can issue the following command in a terminal of CDE.

Start a local network (ganache). This start the ganache on 127.0.0.1:8545
`ganache-cli -h 0.0.0.0 --chainId 1234` Please node the chainId argument is needed because the instance of ganache-cli will run inside the platform in cloud and the Metamask that runs in your local environment will need to use for eth_chainId when configure the custom RPC connection (see point 4)

Deploy the smart contracts to the local network (configure "host" and "port" in truffle-config.js using the CDE code editor tool). Open a new terminal in CDE and run the following command

`cd ethereum`

`truffle migrate`
You should get an output that looks like in the following example:

`Deploying 'StoreHash'
   ---------------------
   > transaction hash:    0xe4a7576e9ddf10352d1cbe700cf2f586acc59ac76ac58e611f72eeb549512547
   > Blocks: 0            Seconds: 0
   > contract address:    0x522Dc4749a378D6577a696bAe81f25cc58d16507
   > block number:        3
   > block timestamp:     1607461156
   > account:             0x3a917b89BBe3A29457E149a49426cc33638E6F52
   > balance:             99.99018184
   > gas used:            209966 (0x3342e)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00419932 ETH`

Get StoreHash smart **contract address** from the ouptut of the above command and paste it to the address field in `src/storehash.js` (you can do this using the IDE code editor after opening the workspace).
Example of `src/storehash.js` line to edit:
`const address = '0x522Dc4749a378D6577a696bAe81f25cc58d16507';` (please use yours from the truffle migrate)

4. Connect Metamask to local RPC network by getting internet url of the ganache from **IDE->left menu bar ->extension CDE Services->dev-machine->ganaghe** . Create a new wallet using an account's private key provided by Ganache (it is shown when you started the ganache in the output of the terminal)

5. In the terminal, run `npm install` to install node.js modules

6. In the terminal, run dev server `npm start` . You can find out the url of "node" from **IDE->left menu bar ->extension CDE Services->dev-machine->ganaghe**. By clicking the URL you will launch the sample applicaiton in browser, then can try to upload a file into IPFS and receive a IPFS hash and Ethereum transaction hash.


## Highlights

### Access IPFS

In ipfs.js in the "src" folder, the following are used to access IPFS testnet via infura

`const ipfsClient = require('ipfs-http-client');`

`const ipfs = ipfsClient('ipfs.infura.io', '5001', { protocol: 'https' })`

For more information about infura IPFS please go to https://infura.io/docs/ipfs



