import s from './Skills.module.scss';
import {TSkills} from "@/types";
import IconJs from "@/components/Icon/IconJS";

export type Props = {
  skill: TSkills;
}

export default function Skills({skill}: Props) {

  const Icon = skill.icon;

  return (
    <div className={s.root}>
      <div className={s.image}>
        <Icon />
      </div>
      <span>{skill.title}</span>
    </div>
  )
}