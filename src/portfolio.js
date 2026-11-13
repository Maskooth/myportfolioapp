/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import javaCertificate from "./assets/resume/CertificateOfCompletion_Learning Java.pdf";
import ai from "./assets/resume/Certificate_of_INTERNATIONAL CONFERENCE ON..._.pdf";
import angular from "./assets/resume/Angular.pdf";
// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Farook Dev",
  title: "Hi all, I'm Farook",
  subTitle: emoji(
    "Frontend Developer with 5 years of experience building scalable, high-performance web applications using Angular and React. Strong expertise in Micro Frontend Architecture, RxJS, NgRx, and modern UI frameworks including Angular Material, NG Zorro, Tailwind CSS, and AG Grid. Proven ability to develop reusable components, implement dynamic data grids, optimize application performance, and deliver seamless user experiences using modern modular frontend design principles."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Maskooth",
  linkedin: "https://www.linkedin.com/in/maskooth-farook-770576200/",
  gmail: "maskoothfarook123@gmail.com",
  instagram: "https://www.instagram.com/maz._.xx?igsh=NW0zZnQyemlqbDRs",
  // Teams:
  //   "https://teams.microsoft.com/l/team/19%3a1d5f1e0f5f6c4e3b9a3e1c4e4b8e7f5f%40thread.tacv2/conversations?groupId=00000000-0000-0000-0000-000000000000&tenantId=00000000-0000-0000-0000-000000000000",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",/
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "FRONTEND DEVELOPER 🚀 | PASSIONATE ABOUT BUILDING SCALABLE, MODERN WEB APPS",
  skills: [
    emoji(
      "⚡ Develop highly interactive and responsive Frontend UIs using Angular, React, and modern UI frameworks like Angular Material, NG Zorro, and Tailwind CSS."
    ),
    emoji(
      "⚡ Implement state management using RxJS and NgRx, and utilize Micro Frontend Architecture for scalable modular designs."
    ),
    emoji(
      "⚡ Integrate real-time features using Socket.IO, Chart.js, Apache ECharts, and AG Grid, alongside REST APIs for dynamic data flow."
    ),
    emoji("⚡ Optimize application performance, reducing load times up to 30%, and ensure cross-browser compatibility."),
    emoji(
      "⚡ Work with modern tools like Git, Azure Boards, CI/CD, VS Code, and Cursor for efficient development workflows."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },

    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },

    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "E.G.S Pillay Engineering College",
      logo: require("./assets/images/Egs.jpg"),
      subHeader: "Master of Computer Application (MCA)",
      duration: "06/2020 – 03/2022",
      desc: "Specialized in advanced software development and enterprise applications.",
      descBullets: [
        "Focus on core programming skills, analytical thinking, and system design."
      ]
    },
    {
      schoolName: "E.G.S Pillay Arts & Science College",
      logo: require("./assets/images/Egs.jpg"),
      subHeader: "Bachelor of Science in Computer Science (B.Sc)",
      duration: "06/2017 – 04/2020",
      desc: "Built a strong foundation in programming, algorithms, and data structures.",
      descBullets: [
        "Learned core concepts of computer science including OS, DBMS, and networking."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Micro-Frontends Architecture / Module Federation", //Insert stack or technology you have experience in
      progressPercentage: "99%" //Insert relative proficiency in percentage,
    },
    {
      Stack: "Frontend / UI Design / Mobile Responsive Design", //Insert stack or technology you have experience in
      progressPercentage: "99%" //Insert relative proficiency in percentage,
    },
    {
      Stack: "HTML / Css / Scss / Tailwind / Metronic / Bootstrap / Material UI / Nz zorro",
      progressPercentage: "99%"
    },
    {
      Stack: "Javascript / TypeScript / Angular / React / NodeJS",
      progressPercentage: "99%"
    },
    {
      Stack: "NgRx / Redux / RxJS / Socket.IO ",
      progressPercentage: "99%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Developer",
      company: "Shipsoft Solutions",
      companylogo: require("./assets/images/shipsoft.svg").default,
      date: "04/2025 – Present",
      desc: "Lead frontend development using Angular for enterprise-scale applications.",
      descBullets: [
        "Built scalable and high-performance web applications using reusable UI components.",
        "Developed dynamic forms and complex workflows for logistics and warehouse systems.",
        "Integrated REST APIs and handled asynchronous data flows using RxJS.",
        "Optimized application performance, reducing load time by up to 30%."
      ]
    },
    {
      role: "Software Developer",
      company: "L&T EduTech",
      companylogo: require("./assets/images/Edutech.jpeg"),
      date: "04/2022 – 03/2025",
      desc: "Developed responsive and scalable web applications using Angular.",
      descBullets: [
        "Implemented best practices including state management using NgRx.",
        "Built UI features such as dashboards, theming, and validation workflows.",
        "Integrated tools such as AG Grid, Chart.js, and Socket.IO for real-time features.",
        "Collaborated with cross-functional teams to gather and implement requirements"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME KEY WORK PROJECTS THAT I CONTRIBUTED TO",
  projects: [
    {
      image: require("./assets/images/shipsoft.svg")?.default || require("./assets/images/shipsoft.svg"),
      projectName: "ShipSoft",
      projectDesc:
        "Built a web-based logistics system for managing shipments, orders, and workflows. Implemented real-time tracking using Socket.IO for live updates. Created scalable dashboards and role-based access control for secure user management.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://shipsoftsolutions.com/login"
        }
      ]
    },
    {
      image: require("./assets/images/eship_logo_blue.svg")?.default || require("./assets/images/eship_logo_blue.svg"),
      projectName: "eShip 360",
      projectDesc:
        "Developed a B2B freight forwarding platform for ocean and air shipments. Implemented end-to-end workflows including quoting, booking, documentation, and tracking, integrated with APIs for pricing and live updates.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://eship360.com/"
        }
      ]
    },
    {
      image: require("./assets/images/shipsoft.svg")?.default || require("./assets/images/shipsoft.svg"),
      projectName: "WMS",
      projectDesc:
        "Developed inventory and warehouse system for stock tracking and order fulfillment. Designed dashboards to improve warehouse visibility and operations. Integrated APIs for real-time data updates. Built reusable UI components for scalable architecture.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://13.250.124.101:5006/login"
        }
      ]
    },
    {
      image: require("./assets/images/Edutech.jpeg"),
      projectName: "Unified Assessment Platform (UAP)",
      projectDesc:
        "Developed a platform for managing online assessments and exam workflows. Implemented scheduling, tracking, and integrated the TAO platform for conducting online tests to manage the complete assessment lifecycle.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://cbtadmindev.lntedutech.com/"
        }
      ]
    },
    {
      image: require("./assets/images/Edutech.jpeg"),
      projectName: "Campus Recruitment Platform (C2E)",
      projectDesc:
        "Developed an end-to-end recruitment platform for campus hiring processes. Implemented stage-wise tracking of candidate progress and built comprehensive dashboards for recruiters to monitor workflows.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://campus.lntedutech.com/l#/login"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Master Of Angular",
      subtitle:
        "Mastering Angular involves a comprehensive understanding of its core concepts and practical application in building web applications.",
      image: require("./assets/images/Angular.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: angular
        },
        {
          name: "Self-Study"
        },
        {
          name: "Freelance project"
        }
      ]
    },
    {
      title: "Learning Java",
      subtitle:
        "Learning Java involves understanding a set of core concepts that form the foundation of the language and its object-oriented paradigm.",
      image: require("./assets/images/java-logo-png_seeklogo-158094.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: javaCertificate
        },
        { name: "Self-Study" }
      ]
    },

    {
      title: "AI-based prediction of driver drowsiness",
      subtitle:
        "International Conference on Advances in Science, Engineering and Management (ICASEM - 2022)",
      image: require("./assets/images/Ai-logo.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: ai },
        {
          name: "Final Project"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With a passion for web development, Angular, React, and TypeScript to share knowledge with the developer community.",
  displayMediumBlogs: "false", // If you're not using Medium API
  blogs: [
    {
      url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript",
      title: "JavaScript Basics Every Developer Should Know",
      description:
        "A beginner-friendly guide to understanding JavaScript fundamentals, variables, functions, and the DOM."
    },
    {
      url: "https://angular.io/guide/what-is-angular",
      title: "Getting Started with Angular",
      description:
        "Learn the core concepts of Angular, including components, modules, and data binding to build scalable apps."
    },
    {
      url: "https://react.dev/learn",
      title: "React: Building Modern UI",
      description:
        "Discover the power of React for creating dynamic, component-based user interfaces with state and hooks."
    },
    {
      url: "https://www.typescriptlang.org/docs/handbook/intro.html",
      title: "TypeScript for JavaScript Developers",
      description:
        "Understand why TypeScript is becoming essential for large projects and how to add strong typing to JavaScript."
    }
  ],
  display: true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
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

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Reach Out to me!"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8883204245",
  email_address: "maskoothfarook123@gmail.com"
};

// Twitter Section

// const twitterDetails = {
//   userName: "twitter", //Replace "twitter" with your twitter username without @
//   display: true // Set true to display this section, defaults to false
// };

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  isHireable,
  resumeSection
};
