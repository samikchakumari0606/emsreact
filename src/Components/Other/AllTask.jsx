import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'
import "./CSS/AllTask.css"

const AllTask = () => {

  const [userData, setUserData] = useContext(AuthContext)

  return (
    <div>
      {/* All-Task-Page
       */}

      <div className='AllTaskParent'>
        {/* Header Row */}
      <div className="AllTaskRow AllTaskHeader">
        <div>Employee Name</div>
        <div>Active Task</div>
        <div>Completed Task</div>
        <div>Failed Task</div>
      </div>

      {/* Data Rows */}
      {
        userData.map((elem, idx) => (
          <div className="AllTaskRow" key={idx}>
            <div>{elem.firstName}</div>
            <div>{elem.taskSummary.active}</div>
            <div>{elem.taskSummary.completed}</div>
            <div>{elem.taskSummary.failed}</div>
          </div>
        ))
      }

      </div>


    </div>
  )
}

export default AllTask
