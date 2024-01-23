import s from './Footer.module.scss';
import Image from "next/image";
import linkedIn from '../../../public/assets/black_icons/linkedin.svg';
import gitHub from '../../../public/assets/black_icons/github.svg';
import X from '../../../public/assets/black_icons/social-icon-white-x.svg';
import facebook from '../../../public/assets/black_icons/facebook.svg';
import instagram from '../../../public/assets/black_icons/instagram.svg';
import Link from "next/link";
import {useAppDispatch, useAppSelector} from "@/hooks/hooks";
import {RootState} from "@/redux/store";
const {Switch, ConfigProvider} = require('antd');
import {activate} from "@/redux/slices/activateAnimationSlice";
import React from "react";
import {useRouter} from "next/router";

export default function Footer() {

  const actualTheme = useAppSelector((state: RootState) => state.theme);
  const activationStatus = useAppSelector((state: RootState) => state.activationsStatus);
  // const navItem = useAppSelector((state: RootState) => state.navItem);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const navItem = router.pathname;

  return (
    <div className={actualTheme.theme === 'light' ? navItem !== '/' ? s.root : s.homeRoot : navItem !== '/' ? s.darkRoot : s.darkHomeRoot}>
      {navItem === '/' ?
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
                  actualTheme.theme === 'light' ? '#6909a3' :
                    '#FF9980'
            },
            components: {
              Switch: {
                handleBg:
                  actualTheme.theme === 'dark' && activationStatus.active ? '#383E47' :
                    actualTheme.theme === 'dark' && !activationStatus.active ? '#F6F7F9' :
                      actualTheme.theme === 'darkHelloween' && activationStatus.active ? '#383E47' :
                        actualTheme.theme === 'light' ? '#F6F7F9' : '#FF9980',
                colorBorder: 'white'
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
      : ''}
      <div className={s.iconsContainer}>
        <div className={s.githubIconWrapper}>
          <div className={s.imageBackdropGithub}></div>
          <Link href='https://github.com/pizarrosch' title='github' target='_blank'>
            <Image className={s.image} src={gitHub} alt=''/>
          </Link>
        </div>
        <Link href='https://twitter.com/zshomakhov' title='X(former Twitter)' target='_blank'>
          <Image className={s.x_ixon} src={X} alt=''/>
        </Link>
        <div className={s.linkedInIconWrapper}>
          <div className={s.imageBackdropLinkedIn}></div>
          <Link href='https://www.linkedin.com/in/zaur-shomakhov-13a106122/' title='linkedIn' target='_blank'>
            <Image className={s.image} src={linkedIn} alt=''/>
          </Link>
        </div>
        <div className={s.facebookIconWrapper}>
          <div className={s.imageBackdropFacebook}></div>
          <Link href='https://www.facebook.com/zaur.shomakhov' title='facebook' target='_blank'>
            <Image className={s.image} src={facebook} alt=''/>
          </Link>
        </div>
        <div className={s.instagramIconWrapper}>
          <div className={s.imageBackdropInstagram}></div>
          <Link href='https://www.instagram.com/the_big_chinese/' title='instagram' target='_blank'>
            <Image className={s.image} src={instagram} alt=''/>
          </Link>
        </div>
      </div>
    </div>
)
}