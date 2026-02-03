import React from 'react'

const CreateTask = () => {
  return (
    <div>
       <div>
            <form >
                <h3>Task Title</h3>
                <input type="text" placeholder='Make a UI design' />
                <br/>
                <h3>Description</h3>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                 <h3>Date</h3>
                 <input type="date" />
                 <br />
                 <input type="text" placeholder='enter employe name' />
                 <h3>Category</h3>
                 <input type="text" placeholder='design,dev, etc' />
                 <br />
                 <button>Create Task</button>
            </form>
          </div>
    </div>
  )
}

export default CreateTask
