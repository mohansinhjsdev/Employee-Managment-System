import React from 'react'

const CompleteTask = ({data}) => {
  console.log(data)
  return (
    <>
        <div className="flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl">
                <div className="flex justify-between items-center">
                  <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{data.category}</h3>
                  <h4 className="text-base">{data.date}</h4>
                </div>
                <h2 className="mt-5 text-xl font-semibold">{data.title}</h2>
                <p className="text-sm mt-2">{data.description}</p>
                <div className='mt-2'>
                        <button className='w-full py-1.5 rounded-sm cursor-pointer bg-green-500 '>Complete</button>
                </div>
            </div>
    </>
  )
}

export default CompleteTask
