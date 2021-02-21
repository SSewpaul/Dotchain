pragma solidity >0.5.99 <0.8.0;

contract Dotcoin {
    
    address payable public minter;
    mapping (address => uint) public balances;

    // Events publicize transactions
    event Sent(address from, address to, uint amount);

    // Constructor
    constructor() {
        minter = msg.sender;
    }

    // creates coins, sends to address
    function mint(address receiver, uint amount) public {
        require(msg.sender == minter);
        require(amount < 1e60);
        balances[receiver] += amount;
    }

    //sends coins to specified address
    function send(address receiver, uint amount) public {
        require(amount <= balances[msg.sender], "Insufficient balance.");
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
        emit Sent(msg.sender, receiver, amount);
    }
    
    //ends contract, only executable by owner
    function endTrial() public {
        require(msg.sender == minter);
        selfdestruct(minter);
    }
}