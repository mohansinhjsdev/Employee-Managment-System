import React, { useState } from 'react'

const CreateTask = () => {

  const [taskTitle,setTaskTitle]=useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [category, setCategory] = useState('')


  const submitHandler = (e)=>{
    e.preventDefault()
    console.log(taskTitle,taskDescription,taskDate,asignTo,category)
  }
  return (
    <div className="p-5 bg-blue-300 mt-7 rounded">
          <form 
          
          onSubmit={(e)=>{  
            submitHandler(e)
          }}
          className="flex flex-wrap w-full items-start justify-between">
            <div className="w-1/2">
              <div>
                <h3 className="text-sm text-black mb-0.5">Task Title</h3>
                <input 
                value={taskTitle}
                onChange={(e)=>{
                  setTaskTitle(e.target.value)
                }}
                className="text-black text-sm py-1 px-2 w-4/5 rounded outline-none bg-tranparent border-[1px] bg-white" type="text" placeholder="Enter Task" />
              </div>
              <div>
                <h3 className="text-sm text-black mb-0.5">Date</h3>
                <input 
                value={taskDate}
                onChange={(e)=>{
                  setTaskDate(e.target.value)
                }}
                type="date"
                className="text-black text-sm py-1 px-2 w-4/5 rounded outline-none bg-tranparent border-[1px] bg-white" />
              </div>
              <div>
                <h3 className="text-sm text-black mb-0.5">Asign to</h3>
                <input
                value={asignTo}
                onChange={(e)=>{
                  setAsignTo(e.target.value)
                }}
                className="text-black text-sm py-1 px-2 w-4/5 rounded outline-none bg-tranparent border-[1px] bg-white"
                 type="text" placeholder="employe Name" />
              </div>
              <div>
                <h3 className="text-sm text-black mb-0.5">Category</h3>
                <input 
                value={category}
                onChange={(e)=>{
                  setCategory(e.target.value)
                }}
                className="text-black text-sm py-1 px-2 w-4/5 rounded outline-none bg-tranparent border-[1px] bg-white"
                type="text" placeholder="design,dev,etc" />
              </div>
            </div>

            <div className="w-2/5 flex flex-col items-start">
              <h3 className="text-sm text-black mb-0.5">Description</h3>
              <textarea
              value={taskDescription}
              onChange={(e)=>{
                setTaskDescription(e.target.value)
              }}
                name=""
                id=""
                cols={30}
                rows={10}
                placeholder="Description"
                className="text-black bg-white w-full h-44 text-sm py-2 py-4 rounded outline bg-transparent border border-[1px] border-gray-400" 
  
              ></textarea>
              <button className="bg-green-500 py-3 hover:bg-green-600 px-5 rounded text-sm mt-4 w-full">Create Task</button>
            </div>

            
          </form>
        </div>
  )
}

export default CreateTask;
