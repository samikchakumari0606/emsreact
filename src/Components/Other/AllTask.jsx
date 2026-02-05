import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const AllTask = () => {

  const [userData,setUserData]=useContext(AuthContext)

  return ( 
    <div>
      All-Task-Page
      


      {
         userData.map(function(elem,idx){
          return <div key={idx} style={{border:"2px solid blue",backgroundColor:"teal"}}>
        <h2>{elem.firstName}</h2>
        <h3>{elem. taskSummary.active}</h3>
        <h5>{elem. taskSummary.completed}</h5>
        <h5>{elem.taskSummary.failed}</h5>
      </div>
        })
      }
       
    </div>
  )
}

export default AllTask
