import React from 'react'
function Signup() {
    const handlesignIn=()=>{
        console.log("done with sign in");
    }
    const handlenewaccount=()=>{
        console.log("done with new account");
    }
  return (
    <div className='w-screen h-screen flex justify-center p-5'>
        <div className='flex flex-col w-96 h-auto border-gray-500'>
      <div className='flex justify-center items-center'><img src="https://logos-download.com/wp-content/uploads/2016/03/Amazon_Logo_2000.png" className='h-10' alt="" /></div>
      <div className=' w-full h-auto p-5 border-2 border-gray-200 mt-8 '>
        <div className='text-3xl font-sans'>Create account</div>
        <div className='flex flex-col pt-2 text-md'>
            <label htmlFor="name">Your Name</label>
            <input type="text" id='name'  className='h-8 rounded-sm outline-yellow-500 bordrer-2 border-gray-300 pl-1' required/> 
        </div>
        <div className='flex flex-col pt-2'>
              <div className='flex justify-between'> <button>Email</button></div>
              <input type="password" id='email' className='h-8 rounded-sm outline-yellow-500 border-2 border-gray-300 pl-1' required />
        </div>
        <div className='flex flex-col pt-2'>
              <div className='flex justify-between'><label htmlFor="phonenumber">Password</label></div>
              <input type="password" id='Password' className='h-8 rounded-sm outline-yellow-500 border-2 border-gray-300 pl-1' placeholder='At least 6 characters' required />
        </div>
        <div className='flex flex-col pt-2'>
              <div className='flex justify-between'><label htmlFor="repass">Re-enter Password</label></div>
              <input type="password" id='repass' className='h-8 rounded-sm outline-yellow-500 border-2 border-gray-300 pl-1' required />
        </div>
        <div className='w-full bg-yellow-500 text-center p-2 mt-4 rounded-md'><button onClick={handlesignIn}>Create your Account</button></div>
        <br />
        <br/>
        <div>By sigining in you are agreeing to our <span className='text-blue-500'> condition of Use and sale </span>and our <span className='text-blue-500'>Privacy Notice</span></div>
      </div>
    </div>
    </div>
  )
}

export default Signup
