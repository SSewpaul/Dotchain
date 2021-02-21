// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.0 <0.8.0;

contract miniexchange {
    
        struct Member{
            string name;
            address payable pubKey; //transfer(), send()
            //memvars: balance, transfer
            
        
        
    event doneTransaction(Member.name sender, Member.name recipient, uint amount);
    
    event requestTransaction(Member.name sender, Member.name requester, uint amount);
    
    
    function askFoCash(uint amount, Member benefactor) public pure returns uint{
        
        emit requestTransaction(benefactor.name, name, amount);
        return amount;
    
    }
    
    function sendcash(uint amount, Member reciever) public payable{
        
        reciever.transfer(amount);
        emit doneTransaction(name, reciever.name, amount);
    }
    
    }
    
}

