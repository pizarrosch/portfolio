import bookStorePj from '../public/assets/bookStoreNextJsPj.png';
import kanbanPjImg from '../public/assets/kanban-board.png';
import weatherWidgetPjImg from '../public/assets/weatherReactPj.png';
import todoListImg from '../public/assets/todoReactPj.png';

export const SKILLS = ['HTML/CSS', 'SASS/SCSS', 'Typescript', 'JavaScript', 'Webstorm', 'React', 'NextJS', 'NodeJS', 'Redux', 'GitHub', 'Webpack', 'Express', 'jQuery', 'Cypress', 'Linux', 'Bash', 'SQL', 'npm', 'git', 'ssh', 'jest'];

export const pjItemsData = [
  {
    id: 0,
    src: todoListImg,
    title: 'Todo list',
    description: 'My first React project. A quite simple todo list has been a challenge in the beginning. ' +
      'But it also has been a great opportunity to get to know React'
  },
  {
    id: 1,
    src: weatherWidgetPjImg,
    title: 'Weather Widget',
    description: 'The weather app, where you can check the actual weather all over the world as well as the weather for the next 5 days'
  },
  {
    id: 2,
    src: bookStorePj,
    title: 'Book Store',
    description: 'Book store page written with NextJS'
  },
  {
    id: 3,
    src: kanbanPjImg,
    title: 'Kanban Board',
    description: 'The popular kanban board, where different tasks can be managed'
  }
]