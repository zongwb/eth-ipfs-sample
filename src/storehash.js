import web3 from './web3';
//access our local copy to contract deployed on rinkeby testnet
//use your own contract address
const address = '0x71c87f952c7462eccb009556567db12adf6bf03e';

//use the ABI from your contract
const abi = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "_hashFile",
        "type": "string"
      }
    ],
    "name": "sendHash",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getHash",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];

export default new web3.eth.Contract(abi, address);