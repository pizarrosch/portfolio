import s from './Skills.module.scss';

type TSkill = {
    skill: string;
}

export default function Skills({skill}: TSkill) {
    return (
        <div className={s.root}>
            {skill}
        </div>
    )
}