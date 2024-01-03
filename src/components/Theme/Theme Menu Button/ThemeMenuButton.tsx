import Image from "next/image";
import sun from '../../../../public/assets/sunny.png';
import moon from '../../../../public/assets/moon-dark.png';
import pumpkin from '../../../../public/assets/jack-o-lantern-2.png';
import {useAppSelector} from "@/hooks/hooks";
import {RootState} from "@/redux/store";
import s from './ThemeMenuButton.module.scss';

export default function ThemeMenuButton({onClick}: {onClick: () => void}) {

  const actualTheme = useAppSelector((state: RootState) => state.theme);

  return (
    actualTheme.theme === 'light' ? <Image src={sun} alt='sun' onClick={onClick} className={s.root}/> :
      actualTheme.theme === 'dark' ? <Image src={moon} alt='moon' onClick={onClick} className={s.buttonDarkTheme}/> :
        <Image src={pumpkin} alt='pumpkin' onClick={onClick} className={s.root}/>
  )
}