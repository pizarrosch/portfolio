import Image from "next/image";
import {TProject} from "@/types";
import s from './ProjectItem.module.scss';
import Link from "next/link";

export default function ProjectItem({src, title, description, url}: TProject) {
  return (
    <div className={s.root}>
      <div className={s.imageWrapper}>
        <Image src={src} alt='' className={s.pjImage} width={600}/>
      </div>
      <div>
        <h1>{title}</h1>
        <p className={s.description}>{description}</p>
      </div>
      <Link href={url ? url : ''} target={url ? "_blank" : ''} className={s.buttonLink}>
        <button className={s.button}>Check it out</button>
      </Link>
    </div>
  )
}