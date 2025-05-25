import { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

function App() {

  const [user, setUser] = useState(null);

  const authData = useContext(AuthContext)
 
  
  useEffect(()=>{
    if(authData){
      setUser(loggedInUser.role)
    }
  },[])

  const handleLogin = (email,password)=>{
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }else if(authData && authData.employees.find((e)=>email == e.email && password == e.password)){
        setUser('employee')
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
    }
    else{
      alert("invalid credencial")
    }
  }


  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/>: ''}
      {user === 'admin' && <AdminDashboard />}
      {user === 'employee' && <EmployeeDashboard />}
    </>
  )
}

export default App
