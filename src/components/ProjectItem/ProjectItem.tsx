import Image from "next/image";
import {TProject} from "@/types";
import s from './ProjectItem.module.scss';

export default function ProjectItem({src, title, description}: TProject) {
    return (
        <div className={s.root}>
            <Image src={src} alt='' className={s.pjImage} width={600}/>
            <div>
                <h1>{title}</h1>
                <p className={s.description}>{description}</p>
            </div>
        </div>
    )
}