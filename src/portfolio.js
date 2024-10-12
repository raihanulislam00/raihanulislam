import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 
};

const illustration = {
  animated: true 
};

const greeting = {
  username: "Raihanul Islam",
  title: "Hi, I'm Raihanul Islam a.k.a. Nahid",
  subTitle:
    "Junior Software Engineer | Problem Slover At Codeforces,CodeChef, Atcoder .",
 // resumeLink: "https://github.com/RaihanulIslamNahid/raihanulislam/blob/main/src/assets/images/cv.pdf", // Set to empty to hide the button
  displayGreeting: true 
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/raihanulislam00",
  linkedin: "https://www.linkedin.com/in/raihanulislamnahid/",
  gmail: "raihanulislamnahid22@gmail.com",
  facebook: "https://www.facebook.com/raihanulislamnahid44",
  instagram: "https://www.instagram.com/raihanulislam00/",
  discord: "https://discord.com/users/1151562888931192832",
  twitter: "https://twitter.com/raihanulislam00",
  spotify:
    "https://open.spotify.com/user/31um5chgzfovahugm5vfqsbfjvri",
  blog: "https://raihanulislam00.github.io/home",
  
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "",
  skills: [
    "Proficient in:",
    "⚡ C++",
    "⚡ Python",
    "⚡ Java",
    "⚡ C#",
    "⚡ Algorithmic Problem Solving (solved 3000+ problems on various online platforms)",
    "⚡ Data Structures and Algorithms",
    "⚡ Competitive Programming",
    "⚡ Graphic Design",
    "⚡ Data Science"
  ],
  languages: ["C++", "Python", "JavaScript", "Typescript", "Solidity"],
  frontEnd: ["HTML", "CSS", "React", "Next.js", "Chakra UI"],
  backEnd: [
    "FastAPI",
    "Express.js",
    "Node.js",
    "PostgreSQL",
    "Firebase",
    "NoSQL"
  ],
  blockChain: [
    "Solidity",
    "Javascript",
    "Typescript",
    "Web3.js",
    "Web3.py",
    "Foundry",
    "Remix",
    "Hardhat",
    "Ethers",
    "Mocha",
    "ChainLink",
    "Alchemy",
    "Infura",
    "Ganache"
  ],
  devOps: [
    "Git",
    "Docker",
    "Kubernetes",
    "Github CI/CD",
    "Linux",
    "ArgoCD",
    "Datadog",
    "Sentry"
  ],
  qa: ["Pytest", "Jest", "Mocha", "Chai", "Load Testing", "K6"],
  dataScience: ["Pandas", "Numpy", "Matplotlib", "Jupyter Notebooks", "SQL"],
  Others: ["Latex", "Markdown", "Vercel", "Web Scraping"],


  softwareSkills: [
   
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "American International University-Bangladesh",
      logo: require("./assets/images/aiub.png"),
      subHeader: "Bachelor of Science in Computer science and engineering",
      duration: "January 2022 - Present",
      desc: "Dhaka, Bangladesh"
    },
    {
      schoolName: "Dewanhat City Corporation College Chittagong",
      logo: require("./assets/images/D.png"),
      subHeader: "HSC in Science",
      duration: "Jun 2018 - April 2020",
      desc: "Chattogram , Bangladesh",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Science & Analytics Intern",
      company: "Zidio Development",
      companylogo: require("./assets/images/zidio.jpg"),
      date: "August 2024 – Present",
      desc: ""
    },
    {
      role: "Student Ambassadors",
      company: "Microsoft",
      companylogo: require("./assets/images/mlsa.png"),
      date: "October 2023 – Present",
      desc: ""
    },
    {
      role: "Campus Expert",
      company: "Github",
      companylogo: require("./assets/images/Git.png"),
      date: "January 2024 – Present",
      desc: ""
    },
    {
      role: "Campus Ambassador",
      company: "Hackules Inc.",
      companylogo: require("./assets/images/Hack.png"),
      date: "Jan 2024 – Present",
      desc: ""
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Research",
  subtitle: "The little research that I have done",
  projects: [
    {
      //image: require("./assets/images/research.jpg"),
      projectName: "Undergrad Thesis",
      projectDesc:
        "A Novel Algorithm to Maximize Core Resilience of Networks under Random Edge and Node Deletions.",
      footerLink: [
        {
          name: "Thesis",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};
//Problem Solving
const problemSolving = {
  title: "Problem Solving Activities",
  subtitle: "My Competitive Programming Journey",
  projects: [
    {
      image: require("./assets/images/cf.png"),
      projectName: "Green/Pupil",
      projectDesc:
        "Highest Rating: 1319,  Top 33.0 percent among 600,000+ users",
      footerLink: [
        {
          name: "Roll_Num_44",
          url: "https://codeforces.com/profile/Roll_Num_44"
        }
      ]
    },
    {
      image: require("./assets/images/codechef.png"),
      projectName: "5* / yellow",
      projectDesc:
        "Highest Rating: 2053,  Top 15.0 percent among 600,000+ users",
      footerLink: [
        {
          name: "pi_3_14159265",
          url: "https://www.codechef.com/users/pi_3_14159265"
        }
      ]
    },
    {
      image: require("./assets/images/at.jpg"),
      projectName: "Green",
      projectDesc:
        "Highest Rating: 815,  Top 45.0 percent among 600,000+ users",
      footerLink: [
        {
          name: "Roll_Num_44",
          url: "https://atcoder.jp/users/Roll_Num_44"
        }
      ]
    },
    {
      image: require("./assets/images/cppp.png"),
      projectName: "Problems Solved",
      projectDesc:
        "Competitive Programming Problems(Algorithmic, Data Structure Based and Others)",
      footerLink: [
        {
          name: "link",
          url: "https://github.com/raihanulislam00/ProblemSolvingStats"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};
// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements 🏆 "),
  
  achievementsCards: [
    {
      title: "Top 0.9 percent in Google Code Jam",
      subtitle:
        "International Rank of 920th in Google Code Jam, 2022 among 93,000+ registrants",
      image: require("./assets/images/codejam.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/18iKJXFr-qhySIlcql1UCNrjVseJveZYy/view?usp=sharing"
        }
      ]
    },
    {
      title: "Top 2 percent in Meta Hacker Cup",
      subtitle:
        "International Rank of 1170th in Facebook Hacker Cup, 2024 among 35,000+ registrants",
      image: require("./assets/images/meta.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1jSL4C_lSecpiTV10RMOqX31nYSBrN-_f/view?usp=sharing"
        }
      ]
    },
    {
      title: "Problem Solving (HackerRank)",
      subtitle:
        "It covers topics of Data Structures (such as HashMaps, Stacks and Queues) and Algorithms (such as Optimal Solutions).",
      image: require("./assets/images/hack1.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.hackerrank.com/certificates/a158f7cd12a9"
        }
      ]
    },
    {
      title: "Beta Microsoft Student Learn Ambassador",
      subtitle: "Selected as a Beta Microsoft Student Ambassador, fostering tech skills and leadership.",
      image: require("./assets/images/mlsa.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", 
        url: "https://drive.google.com/file/d/1bGpuzP0Bv8oPyYsqmHx0f2stMtTiP-6L/view?usp=sharing"
        }     
      ]
    },
    {
      title: "Microsoft Cloud Skills Challenge Host ",
      subtitle: "The badge honors Student Ambassadors who host Microsoft Learn events, fostering skill-building and community growth.",
      image: require("./assets/images/MCCC.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", 
        url: "https://drive.google.com/file/d/1_vQ0jISYivvPcT2D0lwPwmZEgDEfRwc2/view?usp=sharing"
        }     
      ]
    }
    
  ],
  display: true // Set false to hide this section, defaults to true
};



// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "I create blogs just to share the little things that I know",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://raihanulislamnahid.github.io/competitive-programming-Beginner-Topics/",
      title: "Competitive Programming Beginner Topics Part 1",
      description:
        "Greed is good,sort of"
    },
    {
      url: "https://raihanulislamnahid.github.io/Competitive-Programming-Beginner-Topics-Part-2/",
      title: "Competitive Programming Beginner Topics Part 2",
      description:
        "Primal proficiency"
    },
    {
      url: "https://raihanulislamnahid.github.io/Competitive-Programming-Beginner-Topics-Part-3/",
      title: "Competitive Programming Beginner Topics Part 3",
      description:
        "2P or not to 2P, No wait isn't this just bs"
    },
    {
      url: "https://raihanulislamnahid.github.io/Competitive-Programming-Beginner-Topics-Part-4/",
      title: "Competitive Programming Beginner Topics Part 4",
      description:
        "Boohoo ~ It's dp time"
    },
    {
      url: "https://raihanulislamnahid.github.io/Competitive-Programming-Beginner-Topics-Part-5/",
      title: "Competitive Programming Beginner Topics Part 5",
      description:
        "Do you understand the graphity of this situation"
    },
    {
      url: "https://raihanulislamnahid.github.io/Elementary-Number-Theory/",
      title: "Elementary Number Theory",
      description:
        "Prime Factorization A number a is called a divisor or a factor of a number b if b is divisible by a, which means that there exists some integer"
    },
    {
      url: "https://raihanulislamnahid.github.io/Additional-Silver-Topics/",
      title: "Additional Silver Topics",
      description:
        "Two Pointers The two pointers method iterates two pointers across an array, to track the start and end of an interval, or two values in a sorted array that we...."
    },
    {
      url: "https://raihanulislamnahid.github.io/Placing-Bishops-on-a-Chessboard/",
      title: "Placing Bishops on a Chessboard",
      description:
        "Find the number of ways to place K bishops on an N×N chessboard so that no two bishops attack each other."
    },
    {
      url: "https://raihanulislamnahid.github.io/The-Big-(O)-Notation/",
      title: "The big (o) notation",
      description:
        "In computer science, algorithms play an important role in solving problem and optimizing processes. A key factor in evaluating the efficiency of these algorithms is the concept of time complexity. In this article we will try and make sense of time complexity, notations and their real world implications."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const realBigProjects = {
  title: "Big Projects",
  subtitle: "Some of the monstrous projects that I have done",
  projects: [
    {
      image: require("./assets/images/code_library.png"),
      projectName: "Normal CSE Toolbox",
      projectDesc: "The 'Normal CSE Toolbox' offers tools for Compiler, Encoding, Cheat Sheet, and Random Number, aiding CSE students' learning.",
      footerLink: [
        {
          name: "Wabsite Version",
          url: "https://raihanulislam00.github.io/NormalCSEToolbox/"
        },
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/code_library.png"),
      projectName: "Sailor",
      projectDesc:
        "'Sailor' is a creative website offering interactive games, virtual explorations, and engaging activities designed for entertainment and imaginative experiences.",
      footerLink: [
        {
          name: "Wabsite Version",
          url: "https://sailor1.vercel.app/"
        },
        {
          name: "APK Version",
          url: "https://drive.google.com/file/d/1hVlK-DM7u_LZvSZzIkRU-cTzPoAqS8FA/view?usp=drive_link"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/code_library.png"),
      projectName: "Xs_And_Os",
      projectDesc:
        "In this project, we implemented a Game using Swift [ios applications]. The aim of this project was to use Design Patterns in our implementation.",
      footerLink: [
        {
          name: "GitHub Link",
          url: "https://github.com/RaihanulIslamNahid/Xs_And_Os/tree/main/Xs%20And%20Os"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Talks and Features",
  subtitle:
    "The interviews and seminars that I have attended and the features that I have got.",
  talks: [
    {
      title: "Microsoft",
      subtitle:
        "Administer infrastructure resources in Azure",
      slides_url: "https://learn.microsoft.com/en-gb", // host name
      event_url:
        "https://mvp.microsoft.com/en-US/events/22783"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Contact Me",
  subtitle:
    "If you want to hire me or have other queries, then knock me anytime. I try to reply within 24 hours.",
  // number: "+92-3243454077",
  email_address: "raihanulislamnahid22@gmail.com"
};



const gitHubProfileData = {
  data: {
    user: {
      name: "RaihanulIslamNahid",
      bio: "",
      isHireable: false,
      avatarUrl:
        "https://avatars.githubusercontent.com/u/97145938?v=4",
      location: "Dhaka, Bangladesh",
      pinnedItems: {
        totalCount: 6,
        edges: [
          {
            node: {
              name: "Codeforces",
              description:
                "Codeforces Contest Editorial",
              forkCount: 0,
              stargazers: {totalCount: 0},
              url: "https://github.com/RaihanulIslamNahid/Codeforces",
              id: "MDEwOlJlcG9zaXRvcnkxNTgwNjUxOTM=",
              diskUsage: 3,
              primaryLanguage: {name: "C++", color: "#f34b7d"}
            }
          },
          {
            node: {
              name: "Chess-RI Game",
              description: null,
              forkCount: 0,
              stargazers: {totalCount: 0},
              url: "https://github.com/RaihanulIslamNahid/Chess-RI",
              id: "MDEwOlJlcG9zaXRvcnkyODg5NTM0MTQ=",
              diskUsage: 3,
              primaryLanguage: {name: "Javascript", color: "#F1E05A"}
            }
          },
          {
            node: {
              name: "Ninja Game",
              description: null,
              forkCount: 0,
              stargazers: {totalCount: 10},
              url: "https://github.com/RaihanulIslamNahid/Ninja-game",
              id: "MDEwOlJlcG9zaXRvcnkzMjMxNjgyNzA=",
              diskUsage: 952,
              primaryLanguage: {name: "Javascript", color: "#F1E05A"}
            }
          },
          {
            node: {
              name: "Xs_And_Os",
              description: null,
              forkCount: 0,
              stargazers: {totalCount: 1},
              url: "https://github.com/RaihanulIslamNahid/Xs_And_Os",
              id: "MDEwOlJlcG9zaXRvcnkzMjMxNjgyNzA=",
              diskUsage: 356,
              primaryLanguage: {name: "Swift", color: "#f34b7d"}
            }
          },
          {
            node: {
              name: "Sharkie",
              description: null,
              forkCount: 0,
              stargazers: {totalCount: 1},
              url: "https://github.com/RaihanulIslamNahid/Sharkie",
              id: "MDEwOlJlcG9zaXRvcnkzMjMxNjgyNzA=",
              diskUsage: 193,
              primaryLanguage: {name: "Javascript", color: "#F1E05A"}
            }
          },
          {
            node: {
              name: "World Cup 2018",
              description: null,
              forkCount: 3,
              stargazers: {totalCount: 17},
              url: "https://github.com/RaihanulIslamNahid/World-Cup-2018",
              id: "MDEwOlJlcG9zaXRvcnkzMjMxNjgyNzA=",
              diskUsage: 16,
              primaryLanguage: {name: "Javascript", color: "#F1E05A"}
            }
          },
          {
            node: {
              name: "Wordle",
              description: null,
              forkCount: 0,
              stargazers: {totalCount: 3},
              url: "https://github.com/RaihanulIslamNahid/Wordle",
              id: "MDEwOlJlcG9zaXRvcnkzMzU1NTI4OTI=",
              diskUsage: 3,
              primaryLanguage: {name: "HTML", color: "#f34b7d"}
            }
          }
        ]
      }
    }
  }
};

const socialMediaConnections = {
  title: "Social Media Connections",
  subtitle:
    "I love to connect with people with similar interests. Let's connect if you want.",
  projects: [
    {
      image: require("./assets/images/linek.png"),
      projectName: "500+ Connections on LinkedIn",
      footerLink: [
        {
          name: "Let's Connect",
          url: "https://www.linkedin.com/in/raihanulislamnahid/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/faceb.png"),
      projectName: "2000+ Connections on Facebook",
      footerLink: [
        {
          name: "Profile",
          url: "https://www.facebook.com/raihanulislamnahid44"
        },
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/blog.png"),
      projectName: "",
      footerLink: [
        {
          name: "Blog Link",
          url: "https://raihanulislamnahid.github.io/home"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/github.png"),
      projectName: " GitHub",
      footerLink: [
        {
          name: "Follow Me",
          url: "https://github.com/RaihanulIslamNahid"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Twitter Section

const twitterDetails = {
  userName: "raihanulislam00", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  problemSolving,
  bigProjects,
  achievementSection,
  gitHubProfileData,
  socialMediaConnections,
  blogSection,
  talkSection,
  realBigProjects,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
