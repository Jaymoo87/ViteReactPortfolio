import ReactLogo from './assets/ReactLogo.png';
import TypeScriptLogo from './assets/TypeScriptLogo.png';
import NodeLogo from './assets/NodeLogo.png';
import MySqlLogo from './assets/MySqlLogo.png';
import PostGresLogo from './assets/PostGresLogo.png';
import TailwindLogo from './assets/TailwindLogo.png';
import BootstrapLogo from './assets/BootstrapLogo.png';
import ChakraLogo from './assets/ChakraLogo.png';
import ViteLogo from './assets/ViteLogo.png';
import NextjsLogo from './assets/NextjsLogo.png';
import ToolsAndLibraries from './assets/toolsandlibraries.jpg';

import blogPicture from './assets/blogPicture.jpg';
import DNDnotes from './assets/DNDnotes.jpg';
import WhatsForDinner from './assets/WhatsForDinner.jpg';
import CurrencyConverter from './assets/currencyconverter.jpg';

import Testimonial1 from './assets/testimonial1.jpg';
import Testimonial2 from './assets/testimonial2.jpg';
import Testimonial3 from './assets/testimonial3.jpg';
import Testimonial4 from './assets/testimonial4.jpg';
import Testimonial5 from './assets/testimonial5.jpg';

export const links = [
  {
    name: 'Home',
    path: 'home',
  },
  // {
  //   name: "Services",
  //   path: "services",
  // },
  {
    name: 'Skills',
    path: 'skills',
  },
  {
    name: 'Portfolio',
    path: 'work',
  },
  {
    name: 'Resume',
    path: 'resume',
  },
  // {
  //   name: "Testimonials",
  //   path: "testimonial",
  // },
  // {
  //   name: "Pricing",
  //   path: "pricing",
  // },
  // {
  //   name: "Blog",
  //   path: "blog",
  // },
  {
    name: 'Contact',
    path: 'contact',
  },
];

export const services = [
  {
    id: 1,
    type: 'Web Development',
    title: 'Web Design & Logo',
    description:
      'Web designers craft the overall vision & plan for a website layout. Professional logo development: Business, Company, or Personal.',
  },
  {
    id: 2,
    type: ' Apps Development ',
    title: ' iOS & Android ',
    description:
      'Design Software applications to run on mobile devices. Modern and mobile-ready application that will help you reach all of your marketing.',
  },
  {
    id: 3,
    type: ' Game Development ',
    title: ' Unity & Unreal Engine ',
    description:
      ' Creating games & describes the design, development and release of a game. Developing unique mobile android and ios games. ',
  },
  {
    id: 4,
    type: ' Advertising ',
    title: ' Google Ads ',
    description:
      ' Advertising services include: Google search result pages, gmails, YouTube and other websites participated in Google Ads program. ',
  },
  {
    id: 5,
    type: ' Music Writing ',
    title: ' Sound Track ',
    description: 'Music copying, writing, creating, transcription and composition services.',
  },
];

export const skills = [
  {
    id: 1,
    name: 'React',
    percentage: 90,
    description:
      'While I primarily use the React library for my projects, I acknowledge the significance of other component libraries and structures. As a result, I am eager to expand my knowledge and explore a variety of different libraries.',
  },
  {
    id: 2,
    name: 'JavaScript',
    percentage: 95,
    description:
      'JavaScript is my primary programming language. Through my studies, I have developed a strong foundation in programming language structures, starting with DOM manipulation. Since then, I have honed my skills in writing test scripts and am well-versed in modern ES6 shorthand techniques.',
  },

  {
    id: 3,
    name: 'Database Management',
    percentage: 70,
    description:
      "My primary experience is working with relational databases, including MySQL, Postgres, and CockroachDB. I have transferred data between these databases using manual techniques and ORM's. I also have experience with database normalization. Additionally, I have some experience working with non-relational databases, such as MongoDB and DynamoDB.",
  },
  {
    id: 4,
    name: 'Styling',
    percentage: 80,
    description:
      "I specialize in utilizing the Bootstrap and TailwindCSS libraries, but I also possess proficiency in other libraries and CSS3 syntax. For a more fine-grained approach, I am also experienced in HTML inline styling. My goal is to provide tailored solutions to meet each client's unique needs, while maintaining a strong focus on usability, accessibility, and responsiveness. With a keen eye for detail and a passion for innovation, I strive to deliver web development solutions that exceed expectations.",
  },

  {
    id: 5,
    name: 'Results-Driven Professional',
    percentage: 100,
    description:
      'Throughout my professional career, I have helped define standards and business practices that result in growth and high-quality products. I have led the development of new business structures to increase successful outcomes and ensure the success of projects and initiatives.',
  },

  {
    id: 6,
    name: " 'A Synchronous' Mentality",
    percentage: 100,
    description:
      'Web development requires a balance of both synchronous and asynchronous tasks, and my work ethic mirrors this approach. I prioritize creativity, innovation, and attention to detail, while also meeting deadlines and benchmarks with efficiency and reliability.',
  },
];

export const projects = [
  {
    id: 1,
    img: blogPicture,
    icon1: ReactLogo,
    icon2: TypeScriptLogo,
    icon3: NodeLogo,
    icon4: MySqlLogo,
    icon5: BootstrapLogo,
    category: 'Full-Stack',
    title: 'Blog Website',
    description:
      'Full-Stack Blog with JWT authentication and mailgun support. Built with ReactJs, Node.js, ExpressJs and MySQL. Includes Stripe configuration for donations.',
    link: 'https://jaymooblog.fly.dev/',
  },
  {
    id: 2,
    img: DNDnotes,
    icon1: ReactLogo,
    icon2: TypeScriptLogo,
    icon3: NodeLogo,
    icon4: PostGresLogo,
    icon5: TailwindLogo,
    category: 'Full-Stack',
    title: 'Note Taking',
    description:
      "A Simple note taking app with database and JWT authentication. Designed for the client's specific campaign of Dungeons and Dragons, primarily for phone use.",
    link: 'https://dndnotes.fly.dev/',
  },
  {
    id: 3,
    img: WhatsForDinner,
    icon1: ReactLogo,
    icon2: TypeScriptLogo,
    icon3: NodeLogo,
    icon4: BootstrapLogo,
    icon5: ViteLogo,
    category: 'Development',
    title: "What's for Dinner?",
    description:
      "Get a random selection of What's For Dinner. A simple app with some motion frames, dynamically weighted random choices, and persisted styles without re-rendering. ",
    link: 'https://restaurant-picker-eta.vercel.app/',
  },
  {
    id: 4,
    img: CurrencyConverter,
    icon1: ReactLogo,
    icon2: TypeScriptLogo,
    icon3: NodeLogo,
    icon4: ChakraLogo,
    icon5: ViteLogo,
    category: 'UI',
    title: 'Currency Converter',
    description:
      'This currency converter app provides fast and easy currency conversion using real-time exchange rates from API calls. It has user-friendly interface that enable quick currency conversions. ',
    link: 'https://currency-converter-jaymoo87.vercel.app/',
  },
  {
    id: 5,
    icon1: ReactLogo,
    icon2: NodeLogo,
    icon3: TailwindLogo,
    icon4: NextjsLogo,
    img: ToolsAndLibraries,
    category: 'UI',
    title: 'Tools and Libraries',
    description: 'A simple site showing some of my favirite libraries using tailwind and next.js.',
    link: 'https://toolsandlibraries.vercel.app/',
  },
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
    title: 'Covalence.io',
    subtitle: 'Full-Stack Web Development Bootcamp',
    date: '2022 - 2023',
    description:
      ' A comprehensive Full Stack Development course with a strong focus on SQL databases, the Express.js framework, the React library, and Node.js. Through this course, I gained a deep understanding of these technologies, as well as their practical applications in developing robust and scalable web applications. ',
    category: 'education',
  },

  {
    id: 2,
    title: 'University of North Alabama',
    subtitle: 'Computer Science and GIS',
    date: '2005 - 2008',
    description:
      'My studies provided me with a broad range of technical skills, as well as a deep understanding of how technology can be applied to solve complex problems in a variety of industries. I developed strong analytical and problem-solving skills, which I applied to a variety of projects and assignments, including the design and development of web and mobile applications',
    category: 'education',
  },

  // {
  //   id: 3,
  //   title: "IT Future",
  //   subtitle: "High School",
  //   date: "2010 - 2012",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //   category: "education",
  // },

  {
    id: 4,
    title: 'Business and Team Development Consultant',
    subtitle: "Rick's Farmer's Market",
    date: '2020 - 2022',
    description:
      'As a key member of the management team, I spearheaded the development of a new branch of our small business. In this role, I conducted extensive research to identify areas for improvement and developed and implemented new processes to optimize our services and increase customer satisfaction. To support these efforts, I designed and created complex databases to track inventory levels, deliveries, and perishables, providing critical insights to inform decision-making and enhance operational efficiency. As a mentor to both new and established employees, I provided guidance and support to help team members develop their skills and achieve their goals, contributing to a positive and productive work environment.',
    category: 'experience',
  },

  {
    id: 5,
    title: 'Executive Chef',
    subtitle: 'Red Clay Table',
    date: '2018 - 2020',
    description:
      "As a seasoned manager with a proven track record of success, I built and led a highly effective team that excelled in a fast-paced, high-intensity environment. Through strategic hiring and effective training, I developed a team of motivated and skilled professionals who consistently delivered exceptional results.To support our team's success, I developed and implemented best practices and procedures that optimized our operations and enhanced the customer experience. These efforts resulted in improved customer satisfaction, increased repeat business, and a positive reputation in the community. Overall, my experience building and leading high-performing teams, combined with my expertise in process improvement and customer service, make me a valuable asset to any organization seeking to drive growth and achieve operational excellence.",
    category: 'experience',
  },
];

export const testimonials = [
  {
    id: 1,
    img: Testimonial1,
    name: 'Barbara Wilson',
    author: 'CEO Company',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    img: Testimonial2,
    name: 'Charlie Smith',
    author: 'Designer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    img: Testimonial3,
    name: 'Roy Wang',
    author: 'Manager GYM',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 4,
    img: Testimonial4,
    name: 'Jennifer Smith',
    author: 'CEO & Founder',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 5,
    img: Testimonial5,
    name: 'Paul Freeman',
    author: 'Photographer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];
