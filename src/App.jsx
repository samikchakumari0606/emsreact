import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './Components/Auth/Login'
import './App.css'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { useEffect } from 'react'
import { setLocalStorage } from './Utils/LocalStorage'
import { getLocalStorage } from './Utils/LocalStorage'
import { AuthContext } from './Context/AuthProvider'

function App() {

  // useEffect(()=>{
  //   //  setLocalStorage()
  //   getLocalStorage()
  // },)

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  const [userData,setUserData] = useContext(AuthContext)
  // console.log("from auth context ==>", authData)

//   useEffect(() => {

//     if (authData) {

//       const loggedInUser = localStorage.getItem("loggedInUser")
//       if (loggedInUser) {

//       const userData = JSON.parse(loggedInUser)   // 👈 important
//       setUser(userData.role)
//       setLoggedInUserData(userData.data) // for employee

//       }

//     }

// }, [authData])

useEffect(() => {

  const loggedInUser = localStorage.getItem("loggedInUser")

  if (loggedInUser) {
    const userData = JSON.parse(loggedInUser)
    setUser(userData.role)
    setLoggedInUserData(userData.data || null)
  }

}, [])





  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin")
      console.log(user)
      localStorage.setItem('loggedInUser', JSON.stringify({ role: "admin" }))
    }
    else if (userData) {

      const employee = userData.find((e) => email == e.email && e.password == password)
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: "employee", data: employee }))
      }

    }
    else {
      alert("Invalid Credentails")
    }
  }



  return (
    <>

      {!user ? <Login handleLogin={handleLogin} /> : ""}


      {user === "admin" && <AdminDashboard changeUser={setUser} />}

      {user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null}



    </>
  )
}

export default App
