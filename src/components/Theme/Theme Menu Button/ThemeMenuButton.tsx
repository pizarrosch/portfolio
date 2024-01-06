import Image from "next/image";
import sun from '../../../../public/assets/sunny.png';
import moon from '../../../../public/assets/moon.png';
import pumpkin from '../../../../public/assets/jack-o-lantern-2.png';
import {useAppSelector} from "@/hooks/hooks";
import {RootState} from "@/redux/store";
import s from './ThemeMenuButton.module.scss';
import React from "react";

type TProps = {
  onClick: () => void
}

export default function ThemeMenuButton({onClick}: TProps) {

  const actualTheme = useAppSelector((state: RootState) => state.theme);

  return (
    actualTheme.theme === 'light' ? <Image src={sun} alt='sun' onClick={onClick} className={s.root}/> :
      actualTheme.theme === 'dark' ? <Image src={moon} alt='moon' onClick={onClick} className={s.buttonDarkTheme}/> :
        <Image src={pumpkin} alt='pumpkin' onClick={onClick} className={s.root}/>
  )
}