import Layout from "@/Layout/Layout";
import s from './styles/about.module.scss';
import Zaur from '../../public/assets/Zaur.jpeg';
import Image from "next/image";
import Skills from "@/components/Skills/Skills";
import {SKILLS} from "@/data";

export default function About() {
    return (
        <Layout>
            <div className={s.root}>
                <Image src={Zaur} alt='' className={s.profileImage}/>
                <article>
                    <p>
                        My name is Zaur. I am a chemist who one day wanted <br/> to change his profession to that of a
                        frontend developer <br/> and realized one day he will stay a programmer for life.
                    </p>
                    <p>
                        After having successfully finished a 14 months online course, <br/> including a lot of projects
                        and assisted by experienced mentors, <br/> I am ready to step into the professional life and
                        start to develop <br/> my skills and contribute to the success of a new family I will work with.
                    </p>
                    <p>
                        Feel free to click on the Projects button on the navigation menu to look <br/> into some of my
                        projects.
                    </p>
                </article>
                <div>
                    <span>My skills:</span>
                    <div className={s.skillsContainer}>
                        {SKILLS.map((skill: string) => {
                            return (
                                <Skills skill={skill}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    )
}