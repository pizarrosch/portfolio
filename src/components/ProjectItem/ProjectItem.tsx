import Image from "next/image";
import {TProject} from "@/types";
import s from './ProjectItem.module.scss';
import Link from "next/link";
import {useAppSelector} from "@/hooks/hooks";
import {RootState} from "@/redux/store";

export default function ProjectItem({src, title, description, url}: TProject) {

  const actualTheme = useAppSelector((state: RootState) => state.theme);

  return (
    <div className={s.root}>
      <div className={actualTheme.theme === 'light' ? s.imageWrapper : s.imageWrapperDark}>
        <Image src={src} alt='' className={s.pjImage} width={600}/>
      </div>
      <div>
        <h1 className={actualTheme.theme === 'light' ? s.title : s.titleDark}>{title}</h1>
        <p className={actualTheme.theme === 'light' ? s.description : s.descriptionDark}>{description}</p>
      </div>
      <Link href={url ? url : ''} target={url ? "_blank" : ''} className={s.buttonLink}>
        <button className={actualTheme.theme === 'light' ? s.button : s.buttonDark}>Check it out</button>
      </Link>
    </div>
  )
}