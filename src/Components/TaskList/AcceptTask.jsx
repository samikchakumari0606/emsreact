import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div>
        Accept Task Page
      <div style={{ backgroundColor: "teal", height: "auto",border:"2px solid red" }}>
                1
                <div>
                    <h2>{data.category}</h2>
                    <h3>{data.date}</h3>
                </div>
                <h2>{data.title}</h2>
                 <p>{data.description}</p>
         <button>Mark as Completed</button>
         <button>Mark as Failed</button>

       </div>
    </div>
  )
}

export default AcceptTask
