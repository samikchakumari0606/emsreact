import React from 'react'
import Header from '../Other/Header'
import AllTask from '../Other/AllTask'
import CreateTask from '../Other/CreateTask'

const AdminDashboard = (props) => {
    return (
        <div>
            {/* Admin Dashboard Page */}
            <Header changeUser={props.changeUser} />
            <CreateTask />
            <AllTask />


        </div>
    )
}

export default AdminDashboard
