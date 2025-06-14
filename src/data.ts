import bookStorePj from '../public/assets/bookStoreNextJsPj.png';
import kanbanPjImg from '../public/assets/kanban-board.png';
import weatherWidgetPjImg from '../public/assets/weatherReactPj.png';
import todoListImg from '../public/assets/todoReactPj.png';
import diplomaPjImg from '../public/assets/diploma-pj-screenshot.png';

export const SKILLS = ['HTML/CSS', 'SASS/SCSS', 'Typescript', 'JavaScript', 'Webstorm', 'React', 'NextJS', 'NodeJS', 'Redux', 'GitHub', 'Webpack', 'Express', 'jQuery', 'Cypress', 'Linux', 'Bash', 'SQL', 'npm', 'git', 'ssh', 'jest'];

export const pjItemsData = [
  {
    id: 0,
    src: todoListImg,
    title: 'Todo list',
    description: 'My first React project. A quite simple todo list has been a challenge in the beginning. ' +
      'But it also has been a great opportunity to get to know React',
    url: 'https://react-todo-list-ten-cyan.vercel.app/',
    githubUrl: 'https://github.com/pizarrosch/react-todo-list'
  },
  {
    id: 1,
    src: weatherWidgetPjImg,
    title: 'Weather Widget',
    description: `The weather app, where you can check the actual weather all over the world as well as the weather for the next 5 days.
                  Written in React as well, it was my first project where I worked with API (openweather.com)`,
    url: 'https://weather-widget-sf.vercel.app/',
    githubUrl: 'https://github.com/pizarrosch/weather-widget-sf'
  },
  {
    id: 2,
    src: bookStorePj,
    title: 'Book Store',
    description: `Book store page was my first connection to NextJS. In order to add books to the cart you must log in. 
                  Just use 'shomakhov@skillfactory.ru' as login and 'Zaurskillfactory' as password`,
    url: 'https://book-store-nextjs-sf.vercel.app/',
    githubUrl: 'https://github.com/pizarrosch/book-store-nextjs-sf'
  },
  {
    id: 3,
    src: kanbanPjImg,
    title: 'Kanban Board',
    description: 'The popular kanban board, where different tasks can be managed',
    url: 'https://kanban-board-sf.vercel.app/dashboard',
    githubUrl: 'https://github.com/pizarrosch/kanban-board-sf'
  },
  {
    id: 4,
    src: diplomaPjImg,
    title: 'Company Search Portal by TIN',
    description: `The final project of my 14 month long 'Frontend developer PRO' course. In this peoject the information 
                  about companies can be found by using the Taxpayer Identification Number (TIN). As the course was provided by Russian 
                  Institution, only the companies on the territory of Russian Federation can be looked for, e.g. Lukoil, Sberbank, etc.
                  Nevertheless, I think this project can also shed some light on my actual developer skills.
                  Login data are required on this page. Login: sf_student8, password: 5QB0KM/`,
    url: 'https://diploma-project-skillfactory-react.vercel.app/dashboard',
    githubUrl: 'https://github.com/pizarrosch/diploma-project-skillfactory-react'
  }
]