import React,{useState} from 'react'

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
    <div>
      Login page
      <div>
        <form onSubmit={(e)=>submitHandler(e)}>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" required placeholder='Enter your email' />
             <br />
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" required placeholder='Enter password' />
             <br />
            <button>Log In</button>
        </form>
      </div>
    </div>
  )
}

export default Login
