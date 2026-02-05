import React,{useState} from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

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
    <div>
       <div>
            <form onSubmit={(e)=>submitHandler(e)}>
                <h3>Task Title</h3>
                <input value={taskTitle}  onChange={(e)=>setTaskTitle(e.target.value)} type="text" placeholder='Make a UI design' />
                <br/>
                <h3>Description</h3>
                <textarea value={taskDescription}  onChange={(e)=>setTaskDescription(e.target.value)} name="" id="" cols="30" rows="10"></textarea>
                 <h3>Date</h3>
                 <input type="date" value={taskDate}  onChange={(e)=>setTaskDate(e.target.value)} />
                 <br />
                 <input type="text" value={asignTo}  onChange={(e)=>setAsignTo(e.target.value)} placeholder='enter employe name' />
                 <h3>Category</h3>
                 <input type="text" value={category}  onChange={(e)=>setCategory(e.target.value)} placeholder='design,dev, etc' />
                 <br />
                 <button>Create Task</button>
            </form>
          </div>
    </div>
  )
}

export default CreateTask
