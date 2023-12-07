import Layout from "@/Layout/Layout";
import s from './styles/projects.module.scss';
import bookStorePj from '../../public/assets/Bookstore_pj.png';
import ProjectItem from "@/components/ProjectItem/ProjectItem";
import kanbanPjImg from '../../public/assets/kanban-board.png';
import weatherWidgetPjImg from '../../public/assets/weather-widget.png';
import todoListImg from '../../public/assets/todo-project.png';

export default function Projects() {
    return (
        <Layout>
            <div className={s.root}>
                <ProjectItem src={todoListImg} title='Todo list' description='My first React project. A quite simple todo list has been a challenge in the beginning. But it also has been a great opportunity to get to know React'/>
                <ProjectItem src={weatherWidgetPjImg} title='Weather Widget' description='The weather app, where you can check the actual weather all over the world as well as the weather for the next 5 days'/>
                <ProjectItem src={bookStorePj} title='Book Store' description='Book store page written with NextJS'/>
                <ProjectItem src={kanbanPjImg} title='Kanban Board' description='The popular kanban board, where different tasks can be managed'/>

            </div>
        </Layout>
    )
}