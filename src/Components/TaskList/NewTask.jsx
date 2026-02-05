import React from 'react'

const NewTask = ({data}) => {
  return (
    <div>
      New Task Page

      <div style={{ backgroundColor: "green", height: "auto",border:"2px solid red" }}>
                2
                 <div>
                    <h2>{data.category}</h2>
                    <h3>{data.date}</h3>
                </div>
                <h2>{data.title}</h2>
                 <p>{data.description}</p>
        <div>
            <button>Accept Task</button>
        </div>
        </div>
    </div>
  )
}

export default NewTask
