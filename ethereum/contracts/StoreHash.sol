
//0xb84b12e953f5bcf01b05f926728e855f2d4a67a9  contract address on rinkeby
pragma solidity >=0.4.22 <0.6.0;

contract StoreHash {
  string internal ipfsHash;
 
  function sendHash(string memory _hashFile) public {
    ipfsHash = _hashFile;
  }

  function getHash() public view returns (string memory) {
    return ipfsHash;
  }
}