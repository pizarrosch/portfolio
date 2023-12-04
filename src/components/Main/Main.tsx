import s from './Main.module.scss';

export default function Main() {
    return (
        <div className={s.root}>
            <div>
                <div className={s.greetingsTitle}>Hi! My name is Zaur Shomakhov</div>
                <p className={s.greetingsParagraph}>
                    I am a new born frontend developer, who wants to put the whole energy into new profession.<br/>
                    If you need someone with the good knowledge of React, Next.js and Typescript, I am glad to
                    start right away!
                </p>
            </div>
        </div>
    )
}