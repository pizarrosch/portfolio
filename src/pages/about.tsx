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
                My name is Zaur. I am a chemist who one day wanted to change his profession to that of a frontend
                developer and realized one day he will stay a programmer for life.
              </p>
              <p>
                After having successfully finished a 14 months online course, including a lot of projects and assisted
                by experienced mentors, I am ready to step into the professional life and start to develop my skills and
                contribute to the success of a new family I will work with.
              </p>
              <p>
                Feel free to click on the Projects button on the navigation menu to look into some of my projects.
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