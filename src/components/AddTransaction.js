import React, { useState,useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const AddTransaction = () => {
    const[text,setText]=useState('');
    const[amount,setAmount]=useState(0);

    const { addTransaction } = useContext(GlobalContext);
    const onSubmit=e=>{
      e.preventDefault();
     const newTransaction={
        id:Math.floor(Math.random()*1000000),
        text,
        amount:+amount
      }

      addTransaction(newTransaction);
      setText('');
      setAmount(0);
    } 
  
   return (
    <>
      <h3 className='center'>Add new Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
           <label htmlFor="text">Text</label>
           <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter Your Reason for Income/Expense"/>    
       </div>
       <div className='form-control'>
           <label htmlFor="amount">
            Amount<br/>
            (Note:
            - sign-expense ||
            + sign-income)
           </label>
           <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} id='amount' placeholder="Enter Your Amount for Income/Expense"/>    
       </div>
       <button className='btn'>Add Transaction</button>
      </form>
    </>
  )
}

export default AddTransaction