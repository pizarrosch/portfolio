import {Inter} from 'next/font/google'
import Main from "@/components/Main/Main";
import Layout from "@/Layout/Layout";
import s from "@/pages/styles/index.module.scss";
import {useAppDispatch, useAppSelector} from "@/hooks/hooks";
import {RootState} from "@/redux/store";
import {activate} from "@/redux/slices/activateAnimationSlice";

const {Switch, ConfigProvider} = require('antd');
import React from "react";

const inter = Inter({subsets: ['latin']})

export default function Home() {
  const activationStatus = useAppSelector((state: RootState) => state.activationsStatus);
  const actualTheme = useAppSelector((state: RootState) => state.theme);
  const dispatch = useAppDispatch();

  return (
    <Layout>
      <>
        <div className={s.switcherContainer}>
        <span className={
          actualTheme.theme === 'light' ? s.titleLight : s.titleDark
        }>
          Animation
        </span>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary:
                  actualTheme.theme === 'dark' ? '#F6F7F9' :
                    actualTheme.theme === 'light' ? '#BD6BBD' :
                      '#FF9980'
              },
              components: {
                Switch: {
                  handleBg:
                    actualTheme.theme === 'dark' && activationStatus.active ? '#383E47' :
                      actualTheme.theme === 'dark' && !activationStatus.active ? '#F6F7F9' :
                        actualTheme.theme === 'darkHelloween' && activationStatus.active ? '#383E47' :
                          actualTheme.theme === 'light' ? '#F6F7F9' : '#FF9980'
                }
              }
            }}
          >
            <Switch checked={activationStatus.active} onClick={
              () => {
                return activationStatus.active ? dispatch(activate(false)) : dispatch(activate(true));
              }
            }/>
          </ConfigProvider>
        </div>
        <Main/>
      </>

    </Layout>
  )
}
