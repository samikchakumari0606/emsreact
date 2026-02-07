import React,{useState} from 'react'
import "./CSS/Header.css"

const Header = (props) => {
// console.log("data from header",data)
// const [username,setUsername]=useState("")

// if(!data){
//   setUsername("Admin")
// }
// else{
//   setUsername(data.firstName)
// }

const logOutUser=()=>{
localStorage.setItem("loggedInUser",'')
props.changeUser()
// console.log(props.changeUser)
// window.location.reload()
}


  // console.log(data)
  return (
    <div className='headerParent' >
      <h1 className='headerUserName'>Hello <br /> username </h1>
      <button className="headerLogout" onClick={logOutUser}>LogOut</button>
    </div>
  )
}

export default Header
