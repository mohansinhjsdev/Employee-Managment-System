import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = () => {

  // const [userName,setUserName] = useState('')

  // if(!data){
  //   setUserName('Admin')
  // } else{
  //   setUserName(data.firstName)
  // }

  const logoutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    window.location.reload()
  }
  
  return (
    <div className='flex items-end justify-between text-white'>
        <h1 className='text-1xl font-medium'>hello <br/> <span className='text-2xl font-semibold'>usern</span></h1> 
        <button 
        onClick={logoutUser}
        className='bg-red-600 text-medium font-medium text-white px-3 py-1.5 rounded-lg'>Log Out</button>
    </div>
  )
}

export default Header
