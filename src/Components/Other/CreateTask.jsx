import React,{useState} from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'
import "./CSS/CreateTask.css"

const CreateTask = () => {



  const [userData,setUserData]=useContext(AuthContext)
  


  const [taskTitle,setTaskTitle]=useState("")
  const [taskDescription,setTaskDescription]=useState("")
  const[taskDate,setTaskDate]=useState("")
  const[asignTo,setAsignTo]=useState("")
  const[category,setCategory]=useState("")


  const [newtask,setNewTask]=useState({})


  // const submitHandler=(e)=>{
  //     e.preventDefault()
  //     console.log("Task Created", taskTitle,taskDescription,taskDate,asignTo,category)
    
  //     setNewTask({taskTitle,taskDescription,taskDate,category,active:false,newtask:true,failed:false,completed:false})
 
  //     const data=userData
  //     data.forEach(function(elem){
  //        if(asignTo==elem.firstName){
  //         elem.tasks.push(newtask)
  //         console.log("Yahi hai wo", elem)
  //         elem.taskSummary.newTask=elem.taskSummary.newTask+1
  //        }
  //     })
  //     setUserData(data)
  //     console.log("creating task data",data)

  //     setTaskTitle("")
  //     setTaskDescription("")
  //     setTaskDate("")
  //     setAsignTo("")
  //     setCategory("")
  
  //   }


  const submitHandler = (e) => {
  e.preventDefault()

  const newTask = {
    title: taskTitle,
    description: taskDescription,
    date: taskDate,
    category: category,
    active: false,
    newTask: true,
    failed: false,
    completed: false
  }

  const updatedData = userData.map(emp => {

    if (emp.firstName === asignTo) {

      return {
        ...emp,
        tasks: [...emp.tasks, newTask],   // 👈 new array
        taskSummary: {
          ...emp.taskSummary,
          newTask: emp.taskSummary.newTask + 1
        }
      }

    }

    return emp
  })

  setUserData(updatedData)  // ✅ React will re-render

  console.log("Updated employees:", updatedData)

  // reset form
  setTaskTitle("")
  setTaskDescription("")
  setTaskDate("")
  setAsignTo("")
  setCategory("")
}


  return (
    <div className='CreateTaskParent'>
       <div className='CreateTaskDiv'>

            <form className="CreateTaskForm" onSubmit={submitHandler}>

  <div className="formRow">
    <h3 className="CreateTaskText">Task Title</h3>
    <input
      className="CreateTaskInput"
      value={taskTitle}
      onChange={(e)=>setTaskTitle(e.target.value)}
      type="text"
      placeholder="Make a UI design"
    />
  </div>

  <div className="formRow">
    <h3 className="CreateTaskText">Description</h3>
    <textarea
      className="CreateTaskDescription"
      value={taskDescription}
      onChange={(e)=>setTaskDescription(e.target.value)}
    />
  </div>

  <div className="formRow">
    <h3 className="CreateTaskText">Date</h3>
    <input
      className="CreateTaskInput"
      type="date"
      value={taskDate}
      onChange={(e)=>setTaskDate(e.target.value)}
    />
  </div>

  <div className="formRow">
    <h3 className="CreateTaskText">Assign To</h3>
    <input
      className="CreateTaskInput"
      value={asignTo}
      onChange={(e)=>setAsignTo(e.target.value)}
      placeholder="Employee name"
    />
  </div>

  <div className="formRow">
    <h3 className="CreateTaskText">Category</h3>
    <input
      className="CreateTaskInput"
      value={category}
      onChange={(e)=>setCategory(e.target.value)}
      placeholder="Design, Dev, etc"
    />
  </div>

  <button className="CreateTaskBtn">Create Task</button>
</form>

          </div>
    </div>
  )
}

export default CreateTask
