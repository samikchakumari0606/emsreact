import React,{useState} from 'react'

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
    <div style={{border:"2px solid red"}}>
      <h1>Hello <br /> username </h1>
      <button onClick={logOutUser}>logOut</button>
    </div>
  )
}

export default Header
