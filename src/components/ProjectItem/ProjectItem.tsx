import Image from "next/image";
import {TProject} from "@/types";
import s from './ProjectItem.module.scss';
import Link from "next/link";
import {useAppSelector} from "@/hooks/hooks";
import {RootState} from "@/redux/store";
import github from '../../../public/assets/github-mark-white.svg';
import githubDark from '../../../public/assets/github-mark.svg';

export default function ProjectItem({src, title, description, url, gitHubUrl}: TProject) {

  const actualTheme = useAppSelector((state: RootState) => state.theme);

  return (
    <div className={s.root}>
      <div className={actualTheme.theme === 'light' ? s.imageWrapper : s.imageWrapperDark}>
        <Image src={src} alt='' className={s.pjImage}/>
      </div>
      <div className={s.textContainer}>
        <h1 className={actualTheme.theme === 'light' ? s.title : s.titleDark}>{title}</h1>
        <p className={actualTheme.theme === 'light' ? s.description : s.descriptionDark}>{description}</p>
      </div>
      <div className={s.buttonContainer}>
        <Link href={url ? url : ''} target={url ? "_blank" : ''} className={s.buttonLink}>
          <button className={
            actualTheme.theme === 'light' ? s.button :
              actualTheme.theme === 'dark' ? s.buttonDark :
                s.buttonDarkHelloween
          }>Check it out
          </button>
        </Link>
        <Link href={gitHubUrl ? gitHubUrl : ''} target={gitHubUrl ? "_blank" : ''} className={s.buttonLink}>
          <button className={
            actualTheme.theme === 'light' ? s.button :
              actualTheme.theme === 'dark' ? s.buttonDark :
                s.buttonDarkHelloween
          }>
            <Image src={actualTheme.theme === 'dark' ? githubDark : github} alt='github-link' className={
              actualTheme.theme === 'light' ? s.githubLight :
                actualTheme.theme === 'dark' ? s.githubDark :
                  s.githubDarkHelloween
            }/>
          </button>
        </Link>
      </div>
    </div>
  )
}