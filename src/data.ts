import bookStorePj from '../public/assets/book-store.png';
import weatherWidgetPjImg from '../public/assets/weatherReactPj.png';

export const SKILLS = ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Angular', 'HTML/CSS', 'SASS/SCSS', 'Node.js', 'Express', 'Redux', 'MySQL', 'Docker', 'Git', 'REST APIs', 'Webpack', 'Cypress', 'Jest', 'Linux', 'Bash', 'npm'];

export const pjItemsData = [
  {
    id: 0,
    src: bookStorePj,
    title: 'Book Store',
    description: 'A book store built with Next.js featuring user authentication. Add books to your cart after logging in. Login: shomakhov@skillfactory.ru / Zaurskillfactory',
    url: 'https://books-world.eu/',
    githubUrl: 'https://github.com/pizarrosch/book-store-nextjs-sf'
  },
  {
    id: 1,
    src: weatherWidgetPjImg,
    title: 'Weather Widget',
    description: 'Check real-time weather and 5-day forecasts for any location worldwide. My first project integrating a third-party REST API (OpenWeather).',
    url: 'https://weather-widget-sf.vercel.app/',
    githubUrl: 'https://github.com/pizarrosch/weather-widget-sf'
  }
]
