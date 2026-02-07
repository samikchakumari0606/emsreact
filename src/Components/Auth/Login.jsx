import React,{useState} from 'react'
import "./Login.css"

const Login = ({handleLogin}) => {

  // console.log(handleLogin)

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const submitHandler=(e)=>{
        e.preventDefault()
        
        // console.log("email is",email)
        // console.log("password is",password)


        handleLogin(email,password)
        setEmail("")
        setPassword("")

    }

  return (
    <div className="LoginBody">
    
      <div className="LoginParent">
        <form className='loginForm' onSubmit={(e)=>submitHandler(e)}>
            <input className='loginInput' value={email} onChange={(e)=>setEmail(e.target.value)} type="email" required placeholder='Enter your email' />
             <br />
            <input className='loginInput' value={password} onChange={(e)=>setPassword(e.target.value)} type="password" required placeholder='Enter password' />
             <br />
            <button className='loginButton'>Log In</button>
        </form>
      </div>
    </div>
  )
}

export default Login
