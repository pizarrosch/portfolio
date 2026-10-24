import Image from "next/image";
import sun from '../../../../public/assets/sunny.png';
import moon from '../../../../public/assets/moon.png';
import {useAppDispatch, useAppSelector} from "@/hooks/hooks";
import {RootState} from "@/redux/store";
import {toggleTheme} from "@/redux/slices/themeSlice";
import s from './ThemeMenuButton.module.scss';

export default function ThemeMenuButton() {
  const theme = useAppSelector((state: RootState) => state.theme.theme);
  const dispatch = useAppDispatch();

  return (
    <Image
      src={theme === 'dark' ? moon : sun}
      alt={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => dispatch(toggleTheme())}
      className={s.root}
    />
  )
}
