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
import {activate} from "@/redux/slices/activateAnimationSlice";
import React from "react";
import {useRouter} from "next/router";

export default function Footer() {
  const activationStatus = useAppSelector((state: RootState) => state.activationsStatus);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const isHome = router.pathname === '/';

  return (
    <div className={`${s.root} ${isHome ? s.homeRoot : ''}`}>
      {isHome && (
        <div className={s.switcherContainer}>
          <span className={s.switchLabel}>Animation</span>
          <button
            className={`${s.toggle} ${activationStatus.active ? s.toggleActive : ''}`}
            onClick={() => dispatch(activate(!activationStatus.active))}
            role="switch"
            aria-checked={activationStatus.active}
          >
            <span className={s.toggleHandle}/>
          </button>
        </div>
      )}
      <div className={s.iconsContainer}>
        <Link href='https://github.com/pizarrosch' title='GitHub' target='_blank'>
          <Image className={s.icon} src={gitHub} alt='GitHub'/>
        </Link>
        <Link href='https://twitter.com/zshomakhov' title='X' target='_blank'>
          <Image className={`${s.icon} ${s.xIcon}`} src={X} alt='X'/>
        </Link>
        <Link href='https://www.linkedin.com/in/zaur-shomakhov-13a106122/' title='LinkedIn' target='_blank'>
          <Image className={s.icon} src={linkedIn} alt='LinkedIn'/>
        </Link>
        <Link href='https://www.facebook.com/zaur.shomakhov' title='Facebook' target='_blank'>
          <Image className={s.icon} src={facebook} alt='Facebook'/>
        </Link>
        <Link href='https://www.instagram.com/the_big_chinese/' title='Instagram' target='_blank'>
          <Image className={s.icon} src={instagram} alt='Instagram'/>
        </Link>
      </div>
    </div>
  )
}
