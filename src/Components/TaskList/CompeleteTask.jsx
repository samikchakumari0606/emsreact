import React from 'react'

const CompeleteTask = ({data}) => {
  return (
    <div>
      Completed Task Page

      <div style={{ backgroundColor: "green", height: "auto",border:"2px solid red" }}>
                3
                 <div>
                    <h2>{data.category}</h2>
                    <h3>{data.date}</h3>
                </div>
                <h2>{data.title}</h2>
                 <p>{data.description}</p>
        <div>
            <button>Complete</button>
        </div>
      </div>
    </div>
  )
}

export default CompeleteTask
