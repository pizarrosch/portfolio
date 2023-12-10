import s from './Main.module.scss';
import ParticlesComponent from "@/components/Particles/Particles";
import {activate} from "@/redux/slices/activateAnimationSlice";
import {useAppDispatch, useAppSelector} from "@/hooks/hooks";
import {RootState} from "@/redux/store";
export default function Main() {

  const activationStatus = useAppSelector((state: RootState) => state.activationsStatus);
  const dispatch = useAppDispatch();

    // @ts-ignore
    return (
        <div className={s.root}>
          <div onClick={() => {
            return activationStatus.active ? dispatch(activate(false)) : dispatch(activate(true));
          }}>{activationStatus.active ? 'Turn off animation' : 'Turn on animation'}</div>
            <div style={{position: "absolute"}} className={s.background}>
                <ParticlesComponent/>
            </div>
            <div className={s.greetingsTitle}>Hi! My name is Zaur Shomakhov</div>
            <p className={s.greetingsParagraph}>
                I am a new born frontend developer, who wants to put the whole energy into new profession.<br/>
                If you need someone with the good knowledge of React, Next.js and Typescript, I am glad to
                start right away!
            </p>
        </div>
    )
}