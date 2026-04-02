import Layout from "@/Layout/Layout";
import s from './styles/about.module.scss';
import Zaur from '../../public/assets/Zaur.jpeg';
import certificate from '../../public/assets/certificate.png';
import Image from "next/image";
import Skills from "@/components/Skills/Skills";
import {SKILLS} from "@/data";
import {useAppSelector} from "@/hooks/hooks";
import {RootState} from "@/redux/store";

export default function About() {

  const actualTheme = useAppSelector((state: RootState) => state.theme);

  return (
    <Layout>
      <div className={actualTheme.theme === 'light' ? s.root : s.darkRoot}>
        <div className={s.aboutMeContainer}>
          <Image src={Zaur} alt='' className={actualTheme.theme === 'light' ? s.profileImage : s.profileImageDark}/>
          <div className={s.aboutMeWrapper}>
            <span className={
              actualTheme.theme === 'darkHelloween' ? s.titleHelloween :
                actualTheme.theme === 'dark' ? s.titleDark : s.title
            }>About me</span>
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
            <span className={
              actualTheme.theme === 'darkHelloween' ? s.titleHelloween :
                actualTheme.theme === 'dark' ? s.titleDark : s.title
            }>My skills:</span>
            <div className={s.skillsContainer}>
              {SKILLS.map((skill: string, id: number) => {
                return (
                  <Skills skill={skill} key={id}/>
                )
              })}
            </div>
          </div>
          <div className={s.wrapper}>
            <span className={
              actualTheme.theme === 'darkHelloween' ? s.titleHelloween :
                actualTheme.theme === 'dark' ? s.titleDark : s.title
            }>My languages:</span>
            <div className={s.langSkillsContainer}>
              <Skills skill='English - fluent'/>
              <Skills skill='German - fluent'/>
              <Skills skill='Spanish - basics'/>
              <Skills skill='Russian - mother tongue'/>
            </div>
          </div>
        </div>
        <div className={s.certificateWrapper}>
          <h1 className={
            actualTheme.theme === 'darkHelloween' ? s.titleHelloween :
              actualTheme.theme === 'dark' ? s.titleDark : s.title
          }>Certificate</h1>
          <a target='_blank' href={certificate.src}>
            <Image src={certificate} alt='' className={s.certificate}/>
          </a>
        </div>
      </div>
    </Layout>
  )
}