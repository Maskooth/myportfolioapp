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
    "A passionate Full Stack Software Developer 🚀 with hands-on experience in designing, developing, and deploying high-performance Web and Mobile applications. Skilled in JavaScript, TypeScript, Angular, React.js, Node.js, and modern frameworks, with a strong focus on clean architecture, performance optimization, and responsive UI. Enthusiastic about building scalable applications, integrating RESTful APIs, and implementing state management (NgRx / Redux)."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Maskooth",
  linkedin: "https://www.linkedin.com/in/maskooth-farook-770576200/",
  gmail: "maskoothfarook123gmail.com",
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
    "FULL STACK DEVELOPER 🚀 | PASSIONATE ABOUT BUILDING SCALABLE, MODERN WEB APPS",
  skills: [
    emoji(
      "⚡ Develop highly interactive and responsive Frontend UIs using React, Angular, and Tailwind CSS"
    ),
    emoji(
      "⚡ Build Progressive Web Apps (PWA) and Single Page Applications (SPA) for seamless user experience"
    ),
    emoji(
      "⚡ Develop RESTful APIs and backend systems with Node.js and Express"
    ),
    emoji("⚡ Optimize performance for better SEO and fast loading times"),
    emoji(
      "⚡ Work with modern tools like Git, Docker, and CI/CD pipelines for smooth deployment"
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
      schoolName: "EGS Pillay Engineering College ( Anna University )",
      logo: require("./assets/images/Egs.jpg"),
      subHeader: "Master of Computer Applications",
      duration: "June 2020 - April 2022",
      desc: "Specialized in advanced software development and enterprise applications. Completed projects focused on web technologies, cloud computing, and database management.",
      descBullets: [
        "Developed a mini-project on Angular and Node.js with REST APIs",
        "Worked on a final-year project involving full-stack web application development",
        "Participated in coding challenges within the college"
      ]
    },
    {
      schoolName:
        "EGS Pillay Arts and Science College ( Bharathidasan University )",
      logo: require("./assets/images/Egs.jpg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "July 2017 - June 2020",
      desc: "Built a strong foundation in programming, algorithms, and data structures. Learned core concepts of computer science including OS, DBMS, and networking.",
      descBullets: [
        "Created a basic website using HTML, CSS, and JavaScript as part of academic projects",
        "Presented seminars on emerging technologies like Cloud Computing and IoT",
        "Actively participated in college-level technical events and coding contests"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / UI Design / Mobile Responsive Design", //Insert stack or technology you have experience in
      progressPercentage: "99%" //Insert relative proficiency in percentage,
    },
    {
      Stack: "Css / Scss / Tailwind / Metronic / Bootstrap / Material UI ",
      progressPercentage: "99%"
    },
    {
      Stack: "Javascript / TypeScript / Angular / React / NodeJS",
      progressPercentage: "95%"
    },
    {
      Stack: "NgRx / Redux / RxJS / Socket.IO ",
      progressPercentage: "95%"
    },
    {
      Stack: "Backend / APIs",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
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
      company: "Orange Office Technologies",
      companylogo: require("./assets/images/orange.png"),
      date: "April 2025 – Present",
      desc: "Shipsoft is a comprehensive shipping and logistics management application designed to streamline end-to-end operations for businesses in the supply chain sector. The platform enables companies to efficiently manage shipments, track consignments in real-time, automate documentation, and optimize delivery routes.",
      descBullets: [
        "📦 Shipment Management – Create, schedule, and track shipments seamlessly.",
        "🚚 Real-time Tracking – GPS-enabled tracking for end-to-end visibility."
      ]
    },
    {
      role: "Junior Software Developer",
      company: "L&T Edutech",
      companylogo: require("./assets/images/Edutech.jpeg"),
      date: "Aug 2022 – April 2025",
      desc: "L&T EduTech is the learning and skilling arm of Larsen & Toubro (L&T), focused on bridging the gap between academic learning and industry requirements by offering application-based, practical learning interventions powered by L&T’s deep domain expertise",
      descBullets: [
        "Assessment & Certification: Includes assessments like the National Engineering Competency Test (NECT), aimed at evaluating pre-final and final-year students for entry-level hiring",
        "Professional & Vocational Skilling: Upskilling and certification programs."
      ]
    },
    {
      role: "Software Developer Intern",
      company: "L&T Edutech",
      companylogo: require("./assets/images/Edutech.jpeg"),
      date: "June 2022 – Aug 2022",
      desc: "L&T EduTech is the learning and skilling arm of Larsen & Toubro (L&T), focused on bridging the gap between academic learning and industry requirements by offering application-based, practical learning interventions powered by L&T’s deep domain expertise",
      descBullets: [
        "CollegeConnect: Industry-aligned courses embedded into academic curricula across engineering disciplines",
        "AICTE MoU: Industry-oriented courses are accessible via the AICTE platform, accessible nationwide"
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
  title: "Big Projects",
  subtitle: "SOME KEY WORK PROJECTS THAT I CONTRIBUTED TO",
  projects: [
    {
      image: require("./assets/images/Edutech.jpeg"),
      projectName: "Recruitment Platform",
      projectDesc:
        "L&T’s Campus Recruitment teams visit India’s leading colleges, offering opportunities to bright graduates and post-graduates from various specialisations across engineering and management. The selection process is rigorous, and we look for candidates who match L&T’s value system, have a strong knowledge base, and the skill to apply concepts.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://campus-dev.lntedutech.com/l#/login"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/wap.png"),
      projectName: "Identify technologies on websites",
      projectDesc:
        "Find out the technology stack of any website. Create lists of websites that use certain technologies, with company and contact details. Use our tools for lead generation, market analysis and competitor research.Empower your sales and marketing teams. Instantly reveal the technology stack of any website, such as CMS, ecommerce platform.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.wappalyzer.com/"
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
        {name: "Self-Study"}
      ]
    },

    {
      title: "AI-based prediction of driver drowsiness",
      subtitle:
        "International Conference on Advances in Science, Engineering and Management (ICASEM - 2022)",
      image: require("./assets/images/ai-generative-banner-concept-digital-style_208588-3832.avif"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ai},
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
  number: "+91-888320****",
  email_address: "maskoothfarook123@gmail.com"
};

// Twitter Section

// const twitterDetails = {
//   userName: "twitter", //Replace "twitter" with your twitter username without @
//   display: true // Set true to display this section, defaults to false
// };

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
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  isHireable,
  resumeSection
};
