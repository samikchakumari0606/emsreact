import React from 'react'
import "./CSS/TaskListNumber.css"

const TaskListNumbers = ({ data }) => {
  return (
    <div className="TaskListNumberParent">

      {/* Header Row */}
      <div className="TaskListRow TaskListHeader">
        <div>New Task</div>
        <div>Completed Task</div>
        <div>Accepted Task</div>
        <div>Failed Task</div>
      </div>

      {/* Value Row */}
      <div className="TaskListRow">
        <div>{data.taskSummary.newTask}</div>
        <div>{data.taskSummary.completed}</div>
        <div>{data.taskSummary.active}</div>
        <div>{data.taskSummary.failed}</div>
      </div>

    </div>
  )
}

export default TaskListNumbers
