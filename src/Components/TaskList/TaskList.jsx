import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompeleteTask from './CompeleteTask'
import FailedTask from './FailedTask'


const TaskList = ({data}) => {
    return (
        <div style={{ backgroundColor: "red", height: "300px" }}>
            TaskList Page
           {
            data.tasks.map((elem,idx)=>{

                if(elem.active){
                    return <AcceptTask key={idx}/>
                }
                if(elem.newTask){
                    return <NewTask key={idx} />
                }
                if(elem.completed){
                    return <CompeleteTask key={idx} />
                }
                if(elem.failed){
                    return <FailedTask key={idx} />
                }

            })
           }
           
        </div>
    )
}

export default TaskList
