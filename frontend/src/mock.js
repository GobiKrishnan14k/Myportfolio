// Mock data for the portfolio
export const portfolioData = {
  personal: {
    name: "Gobi Krishnan",
    title: "AIDS Engineering Student",
    email: "krishnangopi590@gmail.com",
    github: "https://github.com/GobiKrishnan14k",
    location: "Student, India",
    status: "Available for opportunities",
    bio: "Passionate about software development with expertise in Python and currently expanding skills in C programming. Focused on building robust applications and solving complex problems through code."
  },
  
  skills: [
    {
      name: "Python",
      level: "Advanced", 
      category: "Programming",
      description: "Strong foundation in OOP, data structures, and algorithms",
      yearsOfExperience: 2,
      projects: 5
    },
    {
      name: "C Programming",
      level: "Learning",
      category: "Programming", 
      description: "Currently expanding knowledge in low-level programming",
      yearsOfExperience: 0.5,
      projects: 2
    },
    {
      name: "Data Structures & Algorithms",
      level: "Intermediate",
      category: "Computer Science",
      description: "Understanding of arrays, linked lists, trees, graphs, and algorithmic complexity",
      yearsOfExperience: 1.5,
      projects: 8
    },
    {
      name: "Problem Solving",
      level: "Proficient",
      category: "Soft Skills",
      description: "Analytical thinking and systematic approach to technical challenges",
      yearsOfExperience: 2,
      projects: 10
    }
  ],
  
  projects: [
    {
      id: 1,
      title: "Python Learning Portfolio",
      description: "Collection of Python projects demonstrating core programming concepts including OOP, file handling, and data manipulation.",
      technologies: ["Python", "Object-Oriented Programming", "File I/O"],
      status: "Completed",
      type: "Academic",
      duration: "3 months",
      highlights: ["Built 8+ small applications", "Implemented various design patterns", "Practice with Python standard library"]
    },
    {
      id: 2,  
      title: "C Programming Fundamentals",
      description: "Hands-on exercises covering C language basics, memory management, pointers, and system-level programming concepts.",
      technologies: ["C", "Memory Management", "Pointers", "System Programming"],
      status: "In Progress",
      type: "Learning",
      duration: "Ongoing",
      highlights: ["Memory allocation and deallocation", "Pointer arithmetic", "File operations in C"]
    },
    {
      id: 3,
      title: "Algorithm Implementation Suite", 
      description: "Implementation of common algorithms and data structures in Python for learning and interview preparation.",
      technologies: ["Python", "Algorithms", "Data Structures", "Problem Solving"],
      status: "Ongoing",
      type: "Practice", 
      duration: "6 months",
      highlights: ["20+ algorithm implementations", "Complexity analysis", "Test case development"]
    }
  ],
  
  education: {
    degree: "AIDS Engineering",
    status: "Current Student", 
    focus: "Software Development and Programming",
    relevantCourses: [
      "Programming Fundamentals",
      "Data Structures and Algorithms", 
      "Software Engineering Principles",
      "Computer Systems Architecture"
    ]
  },
  
  goals: {
    shortTerm: [
      "Master C programming language",
      "Complete advanced Python projects",
      "Strengthen data structures knowledge",
      "Build a web application"
    ],
    longTerm: [
      "Become a proficient software developer",
      "Contribute to open-source projects", 
      "Specialize in system programming",
      "Pursue internships in tech companies"
    ]
  }
};

// Mock API functions to simulate backend calls
export const mockAPI = {
  getPortfolioData: () => {
    return Promise.resolve(portfolioData);
  },
  
  submitContactForm: (formData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: "Thank you for your message! I'll get back to you soon.",
          timestamp: new Date().toISOString()
        });
      }, 1000);
    });
  },
  
  getSkills: () => {
    return Promise.resolve(portfolioData.skills);
  },
  
  getProjects: () => {
    return Promise.resolve(portfolioData.projects);
  }
};