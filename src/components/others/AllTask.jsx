import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const [userData,setUserData] = useContext(AuthContext)
    

  return (
    <div className='bg-dark-300 p-5 rounded mt-5'>
        <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='w-1/5'>Employe Name</h2>
            <h3 className='w-1/5'>New Task</h3>
            <h5 className='w-1/5'>Active Task</h5>
            <h5 className='w-1/5'>Completed</h5>
            <h5 className='w-1/5'>Failed</h5>
        </div>
        <div className='h-[80%] overflow-auto'>
        {userData.map(function(elem,idx){
            return  <div 
            key={idx}
            className='border-2 border-green-500 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='w-1/5 text-white-600 font-bold'>{elem.firstName}</h2>
            <h3 className='w-1/5 text-blue-600 font-bold'>{elem.taskStats.newTask}</h3>
            <h5 className='w-1/5 text-yellow-400 font-bold'>{elem.taskStats.active}</h5>
            <h5 className='w-1/5 text-white-600 font-bold'>{elem.taskStats.completed}</h5>
            <h5 className='w-1/5 text-purple-600 font-bold'>{elem.taskStats.failed}</h5>
        </div>
        })}
        </div>
        
        
    </div>
  )
}

export default AllTask
