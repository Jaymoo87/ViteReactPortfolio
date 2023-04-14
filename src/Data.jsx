import Project1 from "./assets/project1.jpeg";
import Project2 from "./assets/project2.jpg";
import Project3 from "./assets/project3.jpeg";
import Project4 from "./assets/project4.jpeg";
import Project5 from "./assets/project5.jpg";
import Project6 from "./assets/project6.jpg";
import blogPicture from "./assets/blogPicture.jpg";
import DNDnotes from "./assets/DNDnotes.jpg";
import WhatsForDinner from "./assets/WhatsForDinner.jpg";

import Testimonial1 from "./assets/testimonial1.jpg";
import Testimonial2 from "./assets/testimonial2.jpg";
import Testimonial3 from "./assets/testimonial3.jpg";
import Testimonial4 from "./assets/testimonial4.jpg";
import Testimonial5 from "./assets/testimonial5.jpg";

export const links = [
  {
    name: "Home",
    path: "home",
  },
  {
    name: "Services",
    path: "services",
  },
  {
    name: "Skills",
    path: "skills",
  },
  {
    name: "Works",
    path: "work",
  },
  {
    name: "Resume",
    path: "resume",
  },
  {
    name: "Testimonials",
    path: "testimonial",
  },
  {
    name: "Pricing",
    path: "pricing",
  },
  {
    name: "Blog",
    path: "blog",
  },
  {
    name: "Contact",
    path: "contact",
  },
];

export const services = [
  {
    id: 1,
    type: "Web Development",
    title: "Web Design & Logo",
    description:
      "Web designers craft the overall vision & plan for a website layout. Professional logo development: Business, Company, or Personal.",
  },
  {
    id: 2,
    type: " Apps Development ",
    title: " iOS & Android ",
    description:
      "Design Software applications to run on mobile devices. Modern and mobile-ready application that will help you reach all of your marketing.",
  },
  {
    id: 3,
    type: " Game Development ",
    title: " Unity & Unreal Engine ",
    description:
      " Creating games & describes the design, development and release of a game. Developing unique mobile android and ios games. ",
  },
  {
    id: 4,
    type: " Advertising ",
    title: " Google Ads ",
    description:
      " Advertising services include: Google search result pages, gmails, YouTube and other websites participated in Google Ads program. ",
  },
  {
    id: 5,
    type: " Music Writing ",
    title: " Sound Track ",
    description: "Music copying, writing, creating, transcription and composition services.",
  },
];

export const skills = [
  {
    id: 1,
    name: "React",
    percentage: 90,
    description:
      "While I primarily use the React library for my projects, I acknowledge the significance of other component libraries and structures. As a result, I am eager to expand my knowledge and explore a variety of different libraries.",
  },
  {
    id: 2,
    name: "JavaScript",
    percentage: 95,
    description:
      "JavaScript is my primary programming language. Through my studies, I have developed a strong foundation in programming language structures, starting with DOM manipulation. Since then, I have honed my skills in writing test scripts and am well-versed in modern ES6 shorthand techniques.",
  },

  {
    id: 3,
    name: "Database Management",
    percentage: 70,
    description:
      "My primary experience is working with relational databases, including MySQL, Postgres, and CockroachDB. I have transferred data between these databases using manual techniques and ORM's. I also have experience with database normalization. Additionally, I have some experience working with non-relational databases, such as MongoDB and DynamoDB.",
  },
  {
    id: 4,
    name: "Styling",
    percentage: 80,
    description:
      "I specialize in utilizing the Bootstrap and TailwindCSS libraries, but I also possess proficiency in other libraries and CSS3 syntax. For a more fine-grained approach, I am also experienced in HTML inline styling. My goal is to provide tailored solutions to meet each client's unique needs, while maintaining a strong focus on usability, accessibility, and responsiveness. With a keen eye for detail and a passion for innovation, I strive to deliver web development solutions that exceed expectations.",
  },

  {
    id: 5,
    name: "Results-Driven Professional",
    percentage: 100,
    description:
      "Throughout my professional career, I have helped define standards and business practices that result in growth and high-quality products. I have led the development of new business structures to increase successful outcomes and ensure the success of projects and initiatives.",
  },

  {
    id: 6,
    name: " 'A Synchronous' Mentality",
    percentage: 100,
    description:
      "Web development requires a balance of both synchronous and asynchronous tasks, and my work ethic mirrors this approach. I prioritize creativity, innovation, and attention to detail, while also meeting deadlines and benchmarks with efficiency and reliability.",
  },
];

export const projects = [
  {
    id: 1,
    img: blogPicture,
    category: "Full-Stack",
    title: "Blog Website",
    description:
      "Full-Stack Blog with JWT authentication and mailgun support. Built with ReactJs, Node.js, ExpressJs and MySQL. Includes Stripe configuration for donations.",
    link: "https://jaymooblog.fly.dev/",
  },
  {
    id: 2,
    img: DNDnotes,
    category: "Full-Stack",
    title: "Note Taking",
    description:
      "A Simple note taking app with database and JWT authentication. Designed for the client's specific campaign of Dungeons and Dragons, primarily for phone use.",
    link: "https://dndnotes.fly.dev/",
  },
  {
    id: 3,
    img: WhatsForDinner,
    category: "Development",
    title: "What's for Dinner?",
    description:
      "Get a random selection of What's For Dinner. A simple app with some motion frames, dynamically weighted random choices, and persisted styles without re-rendering. ",
    link: "https://restaurant-picker-eta.vercel.app/",
  },
  // {
  //   id: 4,
  //   img: Project4,
  //   category: "Photography",
  //   title: "Mozar",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  // },
  // {
  //   id: 5,
  //   img: Project5,
  //   category: "Development",
  //   title: "Stay Fit",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  // },
  // {
  //   id: 6,
  //   img: Project6,
  //   category: "Branding",
  //   title: "Kana",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  // },
];

export const cv = [
  {
    id: 1,
    title: "Covalence.io",
    subtitle: "Full-Stack Web Development Bootcamp",
    date: "2022 - 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "education",
  },

  {
    id: 2,
    title: "Lviv National Academy of Arts",
    subtitle: "Faculty of Design",
    date: "2012 - 2014",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "education",
  },

  {
    id: 3,
    title: "IT Future",
    subtitle: "High School",
    date: "2010 - 2012",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "education",
  },

  {
    id: 4,
    title: "UI Head & Manager",
    subtitle: "Soft Tech Inc.",
    date: "2020 - PRESENT",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "experience",
  },

  {
    id: 5,
    title: "UI / UX Specialist",
    subtitle: "Kana Design Studio",
    date: "2018 - 2020",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "experience",
  },

  {
    id: 6,
    title: "Plugins Developer",
    subtitle: "Fiverr.com",
    date: "2016 - 2018",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "experience",
  },
];

export const testimonials = [
  {
    id: 1,
    img: Testimonial1,
    name: "Barbara Wilson",
    author: "CEO Company",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Testimonial2,
    name: "Charlie Smith",
    author: "Designer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Testimonial3,
    name: "Roy Wang",
    author: "Manager GYM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    img: Testimonial4,
    name: "Jennifer Smith",
    author: "CEO & Founder",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    img: Testimonial5,
    name: "Paul Freeman",
    author: "Photographer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
