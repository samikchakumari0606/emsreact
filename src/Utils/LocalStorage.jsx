

const employees = [
  {
    id: 101,
    firstName: "Rahul",
    email: "e@e.com",
    password: "123",

    taskSummary: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design Homepage",
        description: "Create UI for homepage",
        date: "2026-02-01",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix Navbar Bug",
        description: "Resolve responsive issue",
        date: "2026-01-28",
        category: "Bug Fix"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "API Integration",
        description: "Connect frontend with backend",
        date: "2026-01-25",
        category: "Backend"
      }
    ]
  },

  {
    id: 102,
    firstName: "Priya",
    email: "employee2@company.com",
    password: "123",

    taskSummary: {
      active: 0,
      newTask: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Create Login Page",
        description: "Build login form with validation",
        date: "2026-02-02",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Setup Git Repo",
        description: "Initialize project repository",
        date: "2026-01-20",
        category: "DevOps"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Deploy App",
        description: "Deploy on server",
        date: "2026-01-22",
        category: "Deployment"
      }
    ]
  },

  {
    id: 103,
    firstName: "Amit",
    email: "employee3@company.com",
    password: "123",

    taskSummary: {
      active: 1,
      newTask: 2,
      completed: 0,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Build Dashboard",
        description: "Create admin dashboard layout",
        date: "2026-02-03",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "User Authentication",
        description: "Implement login system",
        date: "2026-01-30",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Payment Gateway",
        description: "Integrate payment API",
        date: "2026-01-27",
        category: "Integration"
      }
    ]
  },

  {
    id: 104,
    firstName: "Neha",
    email: "employee4@company.com",
    password: "123",

    taskSummary: {
      active: 0,
      newTask: 1,
      completed: 1,
      failed: 2
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Write Unit Tests",
        description: "Add test cases for components",
        date: "2026-02-04",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Optimize Images",
        description: "Compress and improve loading",
        date: "2026-01-26",
        category: "Performance"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "SEO Setup",
        description: "Configure SEO settings",
        date: "2026-01-24",
        category: "Marketing"
      }
    ]
  },

  {
    id: 105,
    firstName: "Suresh",
    email: "employee5@company.com",
    password: "123",

    taskSummary: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Create Profile Page",
        description: "User profile UI with edit feature",
        date: "2026-02-05",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Database Setup",
        description: "Configure MongoDB collections",
        date: "2026-01-29",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Server Security",
        description: "Add authentication middleware",
        date: "2026-01-23",
        category: "Security"
      }
    ]
  }
];


const admin = [
  {
    id: 1,
    email: "admin@company.com",
    password: "123"
  }
];



export const setLocalStorage=()=>{
        localStorage.setItem("employees",JSON.stringify(employees))
        localStorage.setItem("admin", JSON.stringify(admin))
}

export const getLocalStorage=()=>{

    const employees=JSON.parse(localStorage.getItem("employees"))
    const admin=JSON.parse(localStorage.getItem("admin"))
    // console.log("get employee data",employees)
    //  console.log("get admin data",admin)

   return {employees,admin}  
}