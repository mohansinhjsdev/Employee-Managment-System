import React from 'react'

const NewTask = ({data}) => {
  return (
   <>
      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl">
                <div className="flex justify-between items-center">
                  <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{data.category}</h3>
                  <h4 className="text-base">{data.date}</h4>
                </div>
                <h2 className="mt-5 text-xl font-semibold">{data.title}</h2>
                <p className="text-sm mt-2 overflow-hidden">{data.description}</p>
                <div className='mt-4'>
                    <button className='w-full bg-blue-500 py-1.5 rounded rounded-sm cursor-pointer hover:bg-blue-600 transition duration-300'>Accpet Task</button>
                    
                </div>
            </div>
   </>
  )
}

export default NewTask
