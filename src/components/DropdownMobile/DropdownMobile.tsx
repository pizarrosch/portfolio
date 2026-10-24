import s from './DropdownMobile.module.scss';
import Link from "next/link";
import React from "react";
import {useAppDispatch, useAppSelector} from "@/hooks/hooks";
import {RootState} from "@/redux/store";
import {toggleTheme} from "@/redux/slices/themeSlice";

type TProps = {
  onClose: () => void,
  isDropdownVisible: boolean,
}

export default function DropdownMobile({isDropdownVisible, onClose}: TProps) {
  const theme = useAppSelector((state: RootState) => state.theme.theme);
  const dispatch = useAppDispatch();

  if (!isDropdownVisible) return null;

  return (
    <div className={s.root}>
      <Link href='/' className={s.item}>Home</Link>
      <Link href='/about' className={s.item}>About</Link>
      <Link href='/projects' className={s.item}>Projects</Link>
      <div className={s.item} onClick={() => {
        dispatch(toggleTheme());
        onClose();
      }}>
        {theme === 'dark' ? 'Light mode' : 'Dark mode'}
      </div>
    </div>
  )
}
