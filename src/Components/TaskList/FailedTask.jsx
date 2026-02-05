import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div>
     Failed Task Page 
     
      <div style={{ backgroundColor: "blue", height: "auto",border:"2px solid red" }}>
                3
                 <div>
                    <h2>{data.category}</h2>
                    <h3>{data.date}</h3>
                </div>
                <h2>{data.title}</h2>
                 <p>{data.description}</p>
        <div>
            <button>Failed</button>
        </div>
      </div> 
    </div>
  )
}

export default FailedTask
