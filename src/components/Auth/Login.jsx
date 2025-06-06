import React, { useState } from "react";


const Login = ({handleLogin}) => {


  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault()
    handleLogin(email,password)
    setEmail('')
    setPassword('')
  }

  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="border-2 rounded-xl border-green-600 p-20">
          <form 
          onSubmit={(e)=>{
            submitHandler(e)
          }}
          className="max-w-sm mx-auto">
            <div className="mb-5">
              <label

                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-white"
              >
                Your email
              </label>
              <input
              value={email}
              onChange={(e)=>{
                setEmail(e.target.value)
              }}
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div className="mb-5">
              <label
                
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Your password
              </label>
              <input
                value={password}
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                placeholder="Enter Password"
              />
            </div>
    
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
