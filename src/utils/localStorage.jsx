const employees = [
    {
      id: 1,
      email: "employee1@example.com",
      password: "123",
      tasks: [
        {
          title: "Prepare monthly report",
          description: "Compile and submit the financial report for this month.",
          date: "2025-05-20",
          category: "Finance",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          title: "Team meeting",
          description: "Participate in the weekly project planning meeting.",
          date: "2025-05-22",
          category: "Meetings",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Update client data",
          description: "Verify and update recent client information in CRM.",
          date: "2025-05-18",
          category: "Data Entry",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        }
      ]
    },
    {
      id: 2,
      email: "employee2@example.com",
      password: "123",
      tasks: [
        {
          title: "Design mockup",
          description: "Create UI mockups for the new dashboard.",
          date: "2025-05-24",
          category: "Design",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Fix login bug",
          description: "Resolve authentication issue for returning users.",
          date: "2025-05-21",
          category: "Development",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          title: "Review pull requests",
          description: "Code review for team submissions.",
          date: "2025-05-19",
          category: "Code Review",
          active: false,
          newTask: false,
          completed: false,
          failed: true
        },
        {
          title: "Write test cases",
          description: "Add unit tests for newly implemented components.",
          date: "2025-05-23",
          category: "Testing",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        }
      ]
    },
    {
      id: 3,
      email: "employee3@example.com",
      password: "123",
      tasks: [
        {
          title: "Call vendor",
          description: "Negotiate software license renewal.",
          date: "2025-05-18",
          category: "Procurement",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          title: "Inventory check",
          description: "Audit current IT inventory.",
          date: "2025-05-20",
          category: "IT",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          title: "Draft email campaign",
          description: "Write content for next week's product email.",
          date: "2025-05-25",
          category: "Marketing",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Update website",
          description: "Add new team member bios to About page.",
          date: "2025-05-17",
          category: "Web Content",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        }
      ]
    },
    {
      id: 4,
      email: "employee4@example.com",
      password: "123",
      tasks: [
        {
          title: "Set up workspace",
          description: "Organize new employee workstation and tools.",
          date: "2025-05-19",
          category: "HR",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          title: "Onboard new hire",
          description: "Conduct onboarding for new sales executive.",
          date: "2025-05-21",
          category: "HR",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          title: "Plan training",
          description: "Outline training agenda for next quarter.",
          date: "2025-05-26",
          category: "HR",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        }
      ]
    },
    {
      id: 5,
      email: "employee5@example.com",
      password: "123",
      tasks: [
        {
          title: "Client follow-up",
          description: "Check in with high-priority clients.",
          date: "2025-05-22",
          category: "Sales",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          title: "Market research",
          description: "Research competitor pricing strategies.",
          date: "2025-05-20",
          category: "Marketing",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          title: "Demo preparation",
          description: "Prepare demo materials for new product pitch.",
          date: "2025-05-23",
          category: "Sales",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Report analysis",
          description: "Analyze last month's sales report.",
          date: "2025-05-17",
          category: "Analytics",
          active: false,
          newTask: false,
          completed: false,
          failed: true
        }
      ]
    }
  ];
  
  const admin = [
    {
      id: 1,
      email: "admin@example.com",
      password: "123"
    }
  ];

  export const setLocalStorage = ()=>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
  }

  export const getLocalStorage = ()=>{
        const employees = JSON.parse(localStorage.getItem('employees'))
        const admin = JSON.parse(localStorage.getItem('admin'))

       return {employees,admin}
  }
  