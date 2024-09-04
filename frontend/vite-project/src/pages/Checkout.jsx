import React, { useState } from 'react'
function Checkout() {
    const [items,setitems]=useState(0);
    const [totalprice,settotalprice]=useState(0);
    const [totalitems,settotalitems]=useState({});
    // for deteing from the cart
    const handleDelete=async ()=>{
        console.log("done with the delete");
    }
    // for proceeding in the cart 
    const handleProceed=async()=>{
        console.log("Done with the cart Proceed");
    }
  return (
    <div className='h-screen w-screen flex flex-row bg-white '>
        <div className='h-full w-1/2 pr-1  sm:w-2/3 '>
            <div className='h-1/6 w-full '><img className='h-full w-full object-cover p-1 m-1 mb-6' src="https://img.freepik.com/free-vector/black-friday-sale-shopping-cart-banner-with-text-space_1017-28049.jpg?size=626&ext=jpg&ga=GA1.1.1926287739.1724777115&semt=ais_hybrid" alt="" /></div>
            <div className='h-14  w-full text-xl font-bold sm:text-3xl ml-1 pl-1 pt-1 border-b-2   border-gray-400 pb-2 '>Your Shopping Basket</div>
            <div className='flex flex-col w-full  '>
                {/* {totalitems.map((items)=>( */}
                {/* niche wala ek hi ha ab main  dusra try krunga */}
                    <div className=' h-auto w-full sm:flex sm:flex-row items-center p-2   sm:h-auto  flex flex-col itmes-center border-b-2 border-gray-200 bg-gray-100' id='1'>
                        <div className='sm:w-1/3 w-28'><img  className='sm:w-full sm:h-full sm:object-contain' src="https://imgs.search.brave.com/Z7HnGmMk7pDU3NWfUeGwTvBny_HjFT57rs31dNBLluQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9nb3Zp/c3VhbGx5LmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMy8w/My9zaGFkb3dzLWFz/LXByb2R1Y3QtaW1h/Z2UtaWRlYXMucG5n" alt="" /></div>
                        <div className='font-bold w-2/3 h-full  p-1 flex flex-col items-center'>
                            <div className='font-light text-md'>ihjfdvghdbvffcdbvvcsdc shchjgdcfe  csdchjndcbd shdcsdhbc hjdchsd  gfdc sjj</div>
                            <div className='font-bold'>$Price</div>
                            <div >Stars</div>
                            <div className='h-auto w-auto bg-yellow-500 text-xs sm:text-sm pl-1 pr-1 subpixel-antialiased '><button className=' h-auto' onClick={handleDelete}>Remove the Basket</button></div>
                        </div>
                    </div>
                    {/* ye hai 2rs demo ke liye  */}
                    <div className=' h-auto w-full sm:flex sm:flex-row items-center p-2   sm:h-auto  flex flex-col itmes-center border-b-2 border-gray-400 bg-gray-100' id='1'>
                        <div className='sm:w-1/3 w-28'><img  className='sm:w-full sm:h-full sm:object-contain' src="https://imgs.search.brave.com/Z7HnGmMk7pDU3NWfUeGwTvBny_HjFT57rs31dNBLluQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9nb3Zp/c3VhbGx5LmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMy8w/My9zaGFkb3dzLWFz/LXByb2R1Y3QtaW1h/Z2UtaWRlYXMucG5n" alt="" /></div>
                        <div className='font-bold w-2/3 h-full  p-1 flex flex-col items-center'>
                            <div className='font-light'>ihjfdvghdbvffcdbvvcsdc shchjgdcfe</div>
                            <div className='font-bold'>$Price</div>
                            <div >Stars</div>
                            <div className='h-auto w-auto bg-yellow-500 text-xs sm:text-sm pl-1 pr-1 subpixel-antialiased '><button className=' h-auto' onClick={handleDelete}>Remove the Basket</button></div>
                        </div>
                    </div>
                {/* ))} */}
            </div>
            <div>
            </div>
        </div>
        <div className='h-full w-1/2 sm:w-1/3 pl-1  bg-white'>
             <div className='h-auto sm:h-auto mt-5 w-full bg-zinc-100 p-2 flex flex-col rounded-lg '>
                <p className='sm:text-3xl text-lg font-semibold mb-4'>Subtotal ({items} items ): <span className='sm:text-3xl text-lg font-bold'>${totalprice}</span> </p>
                <p className='mb-4'><input type="checkbox" name="coupan" id="coupan" /><label htmlFor="coupan">Do you have any coupan</label></p>
                <button className='bg-yellow-500 p-1 rounded-md mb-4' onClick={handleProceed}>Proceed To Checkout</button>
             </div>
        </div>

    </div>
  )
}
export default Checkout
