import Image from "next/image";
import {TProject} from "@/types";
import s from './ProjectItem.module.scss';
import Link from "next/link";
import {useAppSelector} from "@/hooks/hooks";
import {RootState} from "@/redux/store";
import github from '../../../public/assets/github-mark-white.svg';
import githubDark from '../../../public/assets/github-mark.svg';

export default function ProjectItem({src, title, description, url, gitHubUrl}: TProject) {
  const theme = useAppSelector((state: RootState) => state.theme.theme);

  return (
    <div className={s.root}>
      <div className={s.imageWrapper}>
        <Image src={src} alt={title} className={s.pjImage}/>
      </div>
      <div className={s.textContainer}>
        <h1 className={s.title}>{title}</h1>
        <p className={s.description}>{description}</p>
      </div>
      <div className={s.buttonContainer}>
        <Link href={url || ''} target={url ? "_blank" : ''}>
          <button className={s.button}>Check it out</button>
        </Link>
        <Link href={gitHubUrl || ''} target={gitHubUrl ? "_blank" : ''}>
          <button className={s.button}>
            <Image src={theme === 'dark' ? githubDark : github} alt='GitHub' className={s.githubIcon}/>
          </button>
        </Link>
      </div>
    </div>
  )
}
