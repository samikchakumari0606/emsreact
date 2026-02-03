import React from 'react'
import Header from '../Other/Header'
import AllTask from '../Other/AllTask'
import CreateTask from '../Other/CreateTask'

const AdminDashboard = () => {
    return (
        <div>
            Admin Dashboard Page
            <Header />
            <CreateTask />
            <AllTask />


        </div>
    )
}

export default AdminDashboard
