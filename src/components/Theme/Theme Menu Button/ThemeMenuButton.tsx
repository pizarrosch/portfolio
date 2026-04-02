import Image from "next/image";
import sun from '../../../../public/assets/sunny.png';
import moon from '../../../../public/assets/moon.png';
import {useAppSelector} from "@/hooks/hooks";
import {RootState} from "@/redux/store";
import s from './ThemeMenuButton.module.scss';

type TProps = {
  onClick: () => void
}

export default function ThemeMenuButton({onClick}: TProps) {
  const theme = useAppSelector((state: RootState) => state.theme.theme);

  return (
    <Image
      src={theme === 'dark' ? moon : sun}
      alt={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={onClick}
      className={s.root}
    />
  )
}
