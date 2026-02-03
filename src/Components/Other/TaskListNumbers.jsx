import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div>
        TaskListNumber Page
      <div style={{border:"2px solid blue"}}>
        
        <h2>{data.taskSummary.newTask}</h2>
        <h3>New Task</h3>
      </div>

      <div style={{border:"2px solid blue"}}>
        
        <h2>{data.taskSummary.completed}</h2>
        <h3>Completed Task</h3>
      </div>

      <div style={{border:"2px solid blue"}}>
        
        <h2>{data.taskSummary.active}</h2>
        <h3>Accepted Task</h3>
      </div>

      <div style={{border:"2px solid blue"}}>
        
        <h2>{data.taskSummary.failed}</h2>
        <h3>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
