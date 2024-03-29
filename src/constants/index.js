import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  graphql,
  komikult,
  python,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  friendzone,
  campground
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id:'skills',
    title:'skills'
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
    letter:'F'
  },
  {
    title: 'Backend Developer',
    icon: backend,
    letter:'L'
  },
  {
    title: 'Software Developer',
    icon: ux,
    letter:'I'
  },
  {
    title: 'Cloud Management',
    icon: prototyping,
    letter:'P'
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'C++',
    icon: python,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Full Stack developer',
    company_name: 'Velocity Club',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'April 2022 - Decemeber 2022',
  },
  {
    title: 'Personality Prediction',
    company_name: 'Machine Learning',
    icon: microverse,
    iconBg: '#333333',
    date: 'Jan 2023 - April 2023',
  },
  {
    title: 'Competetive Coding',
    company_name: 'Cpp',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Jan 2022 - May 2023',
  },
  {
    title: 'React Developer',
    company_name: 'Invisor Technologies',
    icon: dcc,
    iconBg: '#333333',
    date: 'June 2023 - August 2023',
  },
  {
    title: 'Microsoft Azure Certified',
    company_name: 'Azure Fundamentals',
    icon: dcc,
    iconBg: '#333333',
    date: 'January 2024 ',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'FriendZone',
    description: 'A Social Media app with real-time chat application.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: friendzone,
    repo: 'https://github.com/Jayprakash0802/FriendZone',
    demo: 'https://friend-zone-seven.vercel.app/',
  },
  {
    id: 'project-2',
    name: 'Blue Bird',
    description:
      'A movie-fetching app that retrieves all the latest and trending movies.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/Jayprakash0802/Blue-Bird',
    demo: 'https://bluebirdmovies.netlify.app/',
  },
  {
    id: 'project-3',
    name: 'YelpCamp',
    description: 'Navigate camping areas with review system',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: campground,
    repo: 'https://github.com/Jayprakash0802/Campground',
    demo: 'https://campground-i4zi.onrender.com/',
  },
  {
    id: 'project-4',
    name: 'Movie Metro',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/Jayprakash0802/Movie-Metro',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Weather For You',
    description:
      'Simple Weather Fetching Website',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/Jayprakash0802/Weather-For-You.git',
    demo: 'https://weather-for-you-aw6r.vercel.app/',
  },
];
const skills = [
  {
    id: 'html',
    title: 'HTML',
    icon: html,
    description:
      'I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.',
  },
  {
    id: 'css',
    title: 'CSS',
    icon: css,
    description:
    'I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.',
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    icon: javascript,
    description:
    'I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.',
  },
  {
    id: 'react',
    title: 'React',
    icon: reactjs,
    description:
      'I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.',
  },


  {
    id: 'aws',
    title: 'AWS',
    icon: figma,
    description:
    'In my Figma skills, I unleash creativity, designing captivating user interfaces and collaborating seamlessly with designers and developers.',
  },
  {
    id: 'git',
    title: 'Git',
    icon: git,
    description:
    'I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.',
  },
  // {
  //   id: 'github',
  //   title: 'GitHub',
  //   icon: githubIcon,
  //   description:
  //     'I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.',
  // },
  {
    id: 'psql',
    title: 'Postgresql',
    icon: postgresql,
    description:
      'I have a strong command of PostgreSQL, encompassing a wide range of skills such as database normalization, triggers, front-end connectivity, and data analysis using software like Power BI.',
  },
  // {
  //   id: 'vite',
  //   title: 'Vite',
  //   icon: viteIcon,
  //   description:
  //     'I have gained considerable experience working with Vite for approximately six months, leveraging its capabilities to build React websites and seamlessly deploy them on platforms like Netlify.',
  // },
  {
    id: 'py',
    title: 'Python',
    icon: python,
    description:
      'With 2 years of Python experience, I am adept at coding functions and creating graphic interfaces using Tkinter.',
  },
  {
    id: 'node',
    title: 'Node',
    icon: nodejs,
    description:
      'When it comes to building web applications, I prefer using Node as my runtime environment over Yarn. I have expertise in leveraging Node.js to develop powerful and scalable web applications.',
  }
];

export { services, technologies, experiences, projects, skills };
