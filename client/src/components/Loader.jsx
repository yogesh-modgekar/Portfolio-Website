
import React from 'react'

function Loader() {
  return (
    <div className='flex items-center justify-center fixed inset-0 bg-primary z-[100]'>
        <div className='flex gap-5 text-5xl font-semibold'>
             <h1 className="text-secondary y">Y</h1>
             <h1 className="text-white s">S</h1>
             <h1 className=" text-tertiory m">M</h1>
             
        </div>
    </div>
  )
}

export default Loader