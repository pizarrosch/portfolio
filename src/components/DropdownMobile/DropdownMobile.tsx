import s from './DropdownMobile.module.scss';
import Link from "next/link";
import React from "react";

type TProps = {
  onClick: () => void,
  isDropdownVisible: boolean,
}

export default function DropdownMobile({isDropdownVisible, onClick}: TProps) {
  if (!isDropdownVisible) return null;

  return (
    <div className={s.root}>
      <Link href='/' className={s.item}>Home</Link>
      <Link href='/about' className={s.item}>About</Link>
      <Link href='/projects' className={s.item}>Projects</Link>
      <div className={s.item} onClick={onClick}>Themes</div>
    </div>
  )
}
