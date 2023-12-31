import Image from "next/image";
import sun from '../../../../public/assets/sunny.png';
import moon from '../../../../public/assets/night-mode.png';
import pumpkin from '../../../../public/assets/jack-o-lantern.png';
import {useAppSelector} from "@/hooks/hooks";
import {RootState} from "@/redux/store";

export default function ThemeMenuButton() {

  const actualTheme = useAppSelector((state: RootState) => state.theme);

  return (
    actualTheme.theme === 'light' ? <Image src={sun} alt='sun'/> :
      actualTheme.theme === 'dark' ? <Image src={moon} alt='moon'/> :
        <Image src={pumpkin} alt='pumpkin'/>
  )
}