import React from 'react'
import { Search,ShoppingCart } from 'lucide-react';
import { useEffect,useState } from 'react';
import { useSelector } from 'react-redux';
function Header() {
  const [items,setitems]=useState(0);
  const handleclick=()=>{
    console.log("clicked");
    setitems(items+1);
  }
  const {currentUser}=useSelector((state)=>state.User);
  return (
    <div className='p- m-0 w-screen h-16 bg-black text-white flex justify-around p-3 sticky'>
        <div className='w-1/6 '><img className='h-14 w-auto' src="https://imgs.search.brave.com/6XCNZzyY2PDmptVV3w4m_Vnboqg0A4O9TpQKwhb8Ij4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvYW1hem9uL3Nt/YWxsL2FtYXpvbl9Q/TkcyNS5wbmc" alt="" /></div>
        {/* amazon logo upar */}
        <div className='w-1/2 flex '><input type="text" name="" id="" className='w-full h-10 p-2  rounded-l-md ' placeholder='Enter here you want to search.....'/><button className='h-10 p-2 bg-yellow-600 rounded-r-md' onClick={handleclick}><Search size={20} color="black" strokeWidth={2.5} /></button></div>
        {/* search bar upar */}
        <div className='flex justify-around w-1/3'>
            <div>Hello <br /> 
            {currentUser?
            <button className='font-bold'>Name</button>
            :
            <button className='font-bold'>Sign In</button>
            }
             </div>
            <div><button>Returns</button> <br /><button className='font-bold' >&Orders</button></div>
            <div>prime</div>
            <div className='flex'><ShoppingCart size={24}/> {items}</div>
        </div>
        {/* baki 4 upar */}
      
    </div>
  )
}

export default Header