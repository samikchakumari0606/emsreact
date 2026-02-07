import React from 'react'
import Header from '../Other/Header'
import TaskListNumbers from '../Other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {

  // console.log("employee dashboard", data)
  return (
    <div>
      {/* Employe page */}
      {/* <h1>{data.id}</h1> */}
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskListNumbers data={props.data} />
      <TaskList data={props.data} />
    </div>
  )
}

export default EmployeeDashboard
