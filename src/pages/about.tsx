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
        <div className={s.aboutMeContainer}>
          <Image src={Zaur} alt='Zaur Shomakhov' className={s.profileImage}/>
          <div className={s.aboutMeWrapper}>
            <span className={s.title}>About me</span>
            <article className={s.article}>
              <p>
                I&#39;m a frontend developer with a background in chemistry. After completing an intensive 14-month
                training program, I transitioned into tech and have been working professionally as a developer
                for over half a year.
              </p>
              <p>
                In my current role, I build and maintain an enterprise HR management platform — working with
                Angular, TypeScript, MySQL, and Docker. The application handles complex data models,
                reactive forms, and integration with multiple external systems.
              </p>
              <p>
                Beyond my professional work, I continue to build projects with React, Next.js, and TypeScript.
                Check out some of them on the Projects page.
              </p>
            </article>
          </div>
        </div>
        <div className={s.skillsWrapper}>
          <div className={s.wrapper}>
            <span className={s.title}>My skills:</span>
            <div className={s.skillsContainer}>
              {SKILLS.map((skill: string, id: number) => (
                <Skills skill={skill} key={id}/>
              ))}
            </div>
          </div>
          <div className={s.wrapper}>
            <span className={s.title}>My languages:</span>
            <div className={s.skillsContainer}>
              <Skills skill='English - fluent'/>
              <Skills skill='German - fluent'/>
              <Skills skill='Spanish - basics'/>
              <Skills skill='Russian - mother tongue'/>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
