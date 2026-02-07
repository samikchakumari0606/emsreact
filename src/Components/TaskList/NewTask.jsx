import React from 'react'

const NewTask = ({ data }) => {
  return (
    <div className="taskCard">
      <div className="taskHeader">
        <h2>{data.category}</h2>
        <h3>{data.date}</h3>
      </div>

      <h2 className="taskText">{data.title}</h2>
      <p className="taskText">{data.description}</p>

      <button className="taskBtn">Accept Task</button>
    </div>
  )
}

export default NewTask
