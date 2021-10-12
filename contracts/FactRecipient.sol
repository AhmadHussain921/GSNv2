/**
 * SPDX-License-Identifier:MIT
 */
pragma solidity ^0.8.6;

import "@opengsn/contracts/src/BaseRelayRecipient.sol";

contract FactRecipient is BaseRelayRecipient {
    
    uint public myVar;
    string public override versionRecipient = "2.2.0";

    address public user = address(0);
     
    event valueUpdated(address _user); 
    
    constructor(address forwarder) {
      trustedForwarder = forwarder;
    }

    function setter(uint _myVar) public {
        myVar= _myVar;
        user = _msgSender();
        emit valueUpdated(user);
    } 

}

