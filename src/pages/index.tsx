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
  const dispatch = useAppDispatch();

  return (
    <Layout>
      <div className={s.switcherContainer}>
        <span style={{color: '#5d5d5d'}}>Animation</span>
        <div
          className={activationStatus.active ? s.switchCircleWrapperOn : s.switchCircleWrapperOff}
          onClick={() => {
            return activationStatus.active ? dispatch(activate(false)) : dispatch(activate(true));
          }
          }
        >
          <div className={activationStatus.active ? s.switcherOn : s.switcherOff}></div>
        </div>
      </div>
      <Main/>
    </Layout>
  )
}
