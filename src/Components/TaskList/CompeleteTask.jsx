import React from 'react'

const CompeleteTask = ({ data }) => {
  return (
    <div className="taskCard">
      <div className="taskHeader">
        <h2>{data.category}</h2>
        <h3>{data.date}</h3>
      </div>

      <h2 className="taskText">{data.title}</h2>
      <p className="taskText">{data.description}</p>

      <button className="taskBtn">Completed</button>
    </div>
  )
}

export default CompeleteTask
