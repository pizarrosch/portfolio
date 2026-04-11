import bookStorePj from '../public/assets/bookStoreNextJsPj.png';
import kanbanPjImg from '../public/assets/kanban-board.png';
import weatherWidgetPjImg from '../public/assets/weatherReactPj.png';
import todoListImg from '../public/assets/todoReactPj.png';
import diplomaPjImg from '../public/assets/diploma-pj-screenshot.png';

export const SKILLS = ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Angular', 'HTML/CSS', 'SASS/SCSS', 'Node.js', 'Express', 'Redux', 'MySQL', 'Docker', 'Git', 'REST APIs', 'Webpack', 'Cypress', 'Jest', 'Linux', 'Bash', 'npm'];

export const SKILL_CATEGORIES = [
  {
    category: 'Frontend',
    skills: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Angular', 'HTML/CSS', 'SASS/SCSS', 'Redux'],
  },
  {
    category: 'Backend & Tools',
    skills: ['Node.js', 'Express', 'MySQL', 'Docker', 'Git', 'REST APIs', 'Webpack', 'npm'],
  },
  {
    category: 'Testing & Other',
    skills: ['Cypress', 'Jest', 'Linux', 'Bash'],
  },
];

export const pjItemsData = [
  {
    id: 0,
    src: bookStorePj,
    title: 'Book Store',
    tech: ['Next.js', 'TypeScript', 'Authentication'],
    description: 'A book store built with Next.js featuring user authentication. Add books to your cart after logging in. Login: shomakhov@skillfactory.ru / Zaurskillfactory',
    url: 'https://book-store-nextjs-sf.vercel.app/',
    githubUrl: 'https://github.com/pizarrosch/book-store-nextjs-sf'
  },
  {
    id: 1,
    src: weatherWidgetPjImg,
    title: 'Weather Widget',
    tech: ['React', 'JavaScript', 'REST APIs'],
    description: 'Check real-time weather and 5-day forecasts for any location worldwide. My first project integrating a third-party REST API (OpenWeather).',
    url: 'https://weather-widget-sf.vercel.app/',
    githubUrl: 'https://github.com/pizarrosch/weather-widget-sf'
  },
  {
    id: 2,
    src: kanbanPjImg,
    title: 'Kanban Board',
    tech: ['React', 'TypeScript', 'Drag & Drop'],
    description: 'A Kanban board for managing tasks across different stages. Features drag-and-drop task management with a clean, intuitive interface.',
    url: 'https://kanban-board-sf.vercel.app/dashboard',
    githubUrl: 'https://github.com/pizarrosch/kanban-board-sf'
  }
]
