import {Inter} from 'next/font/google'
import Main from "@/components/Main/Main";
import Layout from "@/Layout/Layout";
import s from "@/pages/styles/index.module.scss";
import {useAppDispatch, useAppSelector} from "@/hooks/hooks";
import {RootState} from "@/redux/store";
import {activate} from "@/redux/slices/activateAnimationSlice";

const inter = Inter({subsets: ['latin']})

export default function Home() {
  const activationStatus = useAppSelector((state: RootState) => state.activationsStatus);
  const actualTheme = useAppSelector((state: RootState) => state.theme);
  const dispatch = useAppDispatch();

  return (
    <Layout>
      <div className={s.switcherContainer}>
        <span className={
          actualTheme.theme === 'light' ? s.titleLight : s.titleDark
        }>Animation</span>
        <div
          className={
            activationStatus.active && actualTheme.theme === 'light' ? s.switchCircleWrapperOn :
              activationStatus.active && actualTheme.theme === 'dark' ? s.switchCircleWrapperOnDarkMode :
                activationStatus.active && actualTheme.theme === 'darkHelloween' ? s.switchCircleWrapperOnHelloweenMode :
                  s.switchCircleWrapperOff
          }
          onClick={() => {
            return activationStatus.active ? dispatch(activate(false)) : dispatch(activate(true));
          }
          }
        >
          <div className={
            activationStatus.active && actualTheme.theme === 'light' ? s.switcherOn :
              activationStatus.active && actualTheme.theme === 'dark' ? s.switcherOnDarkMode :
                activationStatus.active && actualTheme.theme === 'darkHelloween' ? s.switcherOnHelloweenMode :
                  s.switcherOff
          }></div>
        </div>
      </div>
      <Main/>
    </Layout>
  )
}
