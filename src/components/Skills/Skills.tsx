import s from './Skills.module.scss';

export type Props = {
  skill: string;
}

export default function Skills({skill}: Props) {
    return (
        <div className={s.root}>
            {skill}
        </div>
    )
}