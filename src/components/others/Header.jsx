import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between text-white'>
        <h1 className='text-1xl font-medium'>hello <br/> <span className='text-2xl font-semibold'>Mohan 👋</span></h1> 
        <button className='bg-red-600 text-medium font-medium text-white px-3 py-1.5 rounded-lg'>Log Out</button>
    </div>
  )
}

export default Header
