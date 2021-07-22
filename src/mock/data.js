import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Cassie | Public Health Data Scientist', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my Website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is', 
  name: 'Cassie', 
  subtitle: 'I am a public health data scientist', 
  cta: 'Know more', 
};

// ABOUT DATA
export const aboutData = {
  img: 'HeadshotSq.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://zety.com/profile/cassandrag-coste', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Project1B&W.jpg',
    title: 'Vaccine Adverse Event Reporting',
    info: 'In this project I explore the United State’s Vaccine Adverse Event Reporting System and seek to discover if there are symptoms that are more common in different manufacturers of the COVID-19 vaccine.',
    info2: '',
    url: 'https://rpubs.com/cassandra-coste/771608',
    repo: 'https://github.com/cassandra-coste/CUNY607/blob/main/projects/CUNY-607-Final-Project.Rmd', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project2B&W.jpg',
    title: 'FEMA IHP Program',
    info: 'In this project I explore FEMA Individual and Households Program and investigate if there is equitable distribution of resources in line with their mission.',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cassandra-coste/CUNY607/blob/main/projects/CUNY-607-Final-Project.Rmd', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'cassandra.coste@nyu.edu',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/cassandra-coste',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/cassandra-coste/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
