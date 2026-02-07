import React from 'react'

const AcceptTask = ({ data }) => {
  return (
    <div className="taskCard">
      <div className="taskHeader">
        <h2>{data.category}</h2>
        <h3>{data.date}</h3>
      </div>

      <h2 className="taskText">{data.title}</h2>
      <p className="taskText">{data.description}</p>

      <div className="taskBtnGroup">
        <button className="taskBtn">Mark as Completed</button>
        <button className="taskBtn">Mark as Failed</button>
      </div>
    </div>
  )
}

export default AcceptTask
