import s from './Main.module.scss';
import ParticlesComponent from "@/components/Particles/Particles";
import {useAppSelector} from "@/hooks/hooks";
import {RootState} from "@/redux/store";

export default function Main() {

  const actualTheme = useAppSelector((state: RootState) => state.theme);

  // @ts-ignore
  return (
    <div className={s.root}>
      <div style={{position: "absolute"}} className={s.background}>
        <ParticlesComponent/>
      </div>
      <div className={actualTheme.theme === 'light' ? s.greetingsTitle : s.greetingsTitleDarkTheme}>Hi! My name is Zaur Shomakhov</div>
      <p className={actualTheme.theme === 'light' ? s.greetingsParagraph : s.greetingsParagraphDarkTheme}>
        I am a new born frontend developer, who wants to put the whole energy into new profession.<br/>
        If you need someone with the good knowledge of React, Next.js and Typescript, I am glad to
        start right away!
      </p>
    </div>
  )
}