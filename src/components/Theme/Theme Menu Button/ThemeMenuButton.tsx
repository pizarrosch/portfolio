import Image from "next/image";
import sun from '../../../../public/assets/sunny.png';
import moon from '../../../../public/assets/night-mode.png';
import pumpkin from '../../../../public/assets/jack-o-lantern.png';
import {useAppSelector} from "@/hooks/hooks";
import {RootState} from "@/redux/store";
import {useState} from "react";

export default function ThemeMenuButton({onClick}: {onClick: () => void}) {

  const actualTheme = useAppSelector((state: RootState) => state.theme);

  return (
    actualTheme.theme === 'light' ? <Image src={sun} alt='sun' onClick={onClick}/> :
      actualTheme.theme === 'dark' ? <Image src={moon} alt='moon' onClick={onClick}/> :
        <Image src={pumpkin} alt='pumpkin' onClick={onClick}/>
  )
}