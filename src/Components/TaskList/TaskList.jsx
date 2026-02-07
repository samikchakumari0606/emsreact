import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompeleteTask from './CompeleteTask'
import FailedTask from './FailedTask'
import "./TaskList.css"

const TaskList = ({ data }) => {
  return (
    <div className="taskListParent">
      {data.tasks.map((elem, idx) => {
        if (elem.active) return <AcceptTask key={idx} data={elem} />
        if (elem.newTask) return <NewTask key={idx} data={elem} />
        if (elem.completed) return <CompeleteTask key={idx} data={elem} />
        if (elem.failed) return <FailedTask key={idx} data={elem} />
      })}
    </div>
  )
}

export default TaskList
