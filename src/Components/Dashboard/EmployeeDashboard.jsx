import React from 'react'
import Header from '../Other/Header'
import TaskListNumbers from '../Other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({data}) => {

  console.log("ed", data)
  return (
    <div>
      Employe page
      <h1>{data.id}</h1>
      <Header data={data} />
      <TaskListNumbers data={data} />
      <TaskList data={data} />
    </div>
  )
}

export default EmployeeDashboard
