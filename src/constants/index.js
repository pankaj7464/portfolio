import {
 
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
  reactnative,
  zetomart,
  analytics,
  freelance,
  quickserve,
  blogweb,
  crm,
  ui_ux,
  mobile_app,
  web_dev,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web development",
    icon: web_dev, // Replace with the appropriate icon class
    description: "Crafting responsive websites with cutting-edge technology for a dynamic online presence and seamless user experiences."
  },
  {
    title: "Mobile App development",
    icon: mobile_app, // Replace with the appropriate icon class
    description: "Building feature-rich, user-friendly mobile apps across platforms to engage your audience and drive business growth."
  },
  {
    title: "UI/UX Design",
    icon: ui_ux, // Replace with the appropriate icon class
    description: "Creating captivating, intuitive interfaces that enhance user satisfaction, boost usability, and elevate your brand's visual identity."
  }
];


const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "React Native",
    icon: reactnative,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },

];

const experiences = [
  {
    title: "StartUp",
    company_name: "Zetomart",
    icon: zetomart,
    iconBg: "#383E56",
    date: "Aprill 2022 - April 2023",
    points: [
      "Led the development and design of a web app using React.js andNode.js at a startup e-commerce platform.",
      "Collaborated with cross-functional teams to ensure an intuitive interface and smooth user experience",
      "Created an efficient admin panel to manage orders, users, and sellers,improving overall platform functionality and efficiency",
      "Designed visually appealing interfaces using Figma, enhancing theaesthetics and usability of the web app",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Analytics Valley Pvt. Ltd",
    icon: analytics,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: ["Contributed to project tasks as a React Js Intern, gaining hands-on experience in front-end web development",
      "Collaborated with the development team to implement website features and enhance user experience.",
      "Assisted in debugging and resolving technical issues to ensuresmooth website functionality.",
    ],
  },
  {
    "title": "Freelance Developer",
    "company_name": "Self Employed",
    "icon": freelance,
    "iconBg": "#FFA500",
    "date": "March 2022 - Present",
    "points": [
      "Provided customized web and mobile solutions to diverse clients, ensuring a tailored user experience.",
      "Collaborated closely with clients to understand their needs, deliver projects on time, and exceed expectations.",
      "Utilized a wide range of technologies and tools to create efficient, user-friendly digital solutions.",
    ]
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Mobile repairing center",
    description:
      "I developed a responsive website for a mobile repairing cente offering customers a user-friendly platform to request services, inquire about repairs, and access valuable information. The website's design and functionality enhance the center's online presence and streamline customer interactions, ultimately boosting their business.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: quickserve,
    source_code_link: "https://github.com/",
  },
  {
    name: "Bloging web application",
    description:
      "I created a dynamic blog web app that empowers users to effortlessly publish, manage, and share their content. This app features a sleek and intuitive user interface, robust content management capabilities, and a seamless reading experience, catering to bloggers and readers alike.",
    tags: [
      {
        name: "react ",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
    ],
    image: blogweb,
    source_code_link: "https://github.com/",
  },
  {
    name: "Admin Panel for Mobile repairing center",
    description:
      "I designed and developed an admin panel for a mobile repairing center, providing them with an efficient tool to manage their operations, appointments, and customer data. This custom solution streamlines center management, enhancing their productivity and service quality.",
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "node js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "taiwing css",
        color: "green-text-gradient",
      },
    ],
    image: crm,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
