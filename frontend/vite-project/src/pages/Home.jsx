import React from 'react'

function Home() {
  return (
    <div>
      <img className='w-full h-auto -z-10 -mb-20 gradient-mask-b-[transparent,rgba(0,0,0,2.0)_0px,rgba(0,0,0,0.1)_90%] ' src="https://imgs.search.brave.com/RMEB-mtDPpKilEt8gGk90ZsGjNQw8IILzNz9EzRR7jI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9H/LzE1L2RpZ2l0YWwv/dmlkZW8vbWVyY2gv/T3RoZXIvQlJORF9N/VEgyMV9TQURMUERl/c2t0b3BfMTQ1M3gz/NjNfRmluYWxfbm9s/b2NhbGVfUFZENzQz/Nl9DYW5hZGEuanBn" alt="" />
      <div className='w-full h-screen'>
        <div className='w-full h-1/2 bg-orange-700 flex flex-row p-2 justify-around '>
             <div className='w-1/2 h-full bg-indigo-700'></div>
             <div className='w-1/4 h-full bg-indigo-700'></div>
        </div>
        <div className='w-full h-1/2 bg-orange-700  flex flex-row p-2 justify-around'>
            <div className='w-1/4 h-full bg-indigo-700'></div>
            <div className='w-1/4 h-full bg-indigo-700'></div>
            <div className='w-1/4 h-full bg-indigo-700'></div>
        </div>
        <div className='w-full h-1/2 bg-orange-700 flex flex-row p-2 justify-around '>
              <div className='w-full h-full bg-indigo-700'></div>
        </div>

      </div>
    </div>
  )
}

export default Home
