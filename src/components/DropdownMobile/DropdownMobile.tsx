import s from "@/components/Theme/Dropdown List/DropdownList.module.scss";
import {useAppDispatch, useAppSelector} from "@/hooks/hooks";
import {RootState} from "@/redux/store";
import {TDropdown} from "@/types";
import Link from "next/link";
import headerStyle from '../Header/Header.module.scss';
import listItemStyle from '../Theme/Dropdown List/DropdownList.module.scss';
import React, {useState} from "react";

type TProps = {
  onClick: () => void,
  setOffset: (e: React.MouseEvent) => void,
  isDropdownVisible: boolean,
}

export default function DropdownMobile({isDropdownVisible, onClick, setOffset}: TProps) {

  const actualTheme = useAppSelector((state: RootState) => state.theme);
  const dispatch = useAppDispatch();

  return (
    <div className={
      isDropdownVisible && actualTheme.theme === 'light' ? listItemStyle.rootVisibleMobile :
        isDropdownVisible && actualTheme.theme === 'dark' ? listItemStyle.rootDarkModeMobile :
          isDropdownVisible && actualTheme.theme === 'darkHelloween' ? listItemStyle.rootDarkModeMobile : listItemStyle.rootInvisible}>
      <div
        className={
          actualTheme.theme === 'light' ? listItemStyle.listItemWrapper :
            actualTheme.theme === 'darkHelloween' ? listItemStyle.listItemWrapperHelloween :
              listItemStyle.listItemWrapperDark
        }>
        <span className={s.listItem}>
          <Link href='/'>
            <div className={headerStyle.menu}>Home</div>
          </Link>
        </span>
      </div>
      <div
        className={
          actualTheme.theme === 'light' ? listItemStyle.listItemWrapper :
            actualTheme.theme === 'darkHelloween' ? listItemStyle.listItemWrapperHelloween :
              listItemStyle.listItemWrapperDark
        }>
        <span className={listItemStyle.listItem}>
          <Link href='/about'>
            <div className={headerStyle.menu}>About</div>
          </Link>
        </span>
      </div>
      <div
        className={
          actualTheme.theme === 'light' ? listItemStyle.listItemWrapper :
            actualTheme.theme === 'darkHelloween' ? listItemStyle.listItemWrapperHelloween :
              listItemStyle.listItemWrapperDark
        }>
        <span className={listItemStyle.listItem}>
          <Link href='/projects'>
            <div className={headerStyle.menu}>Projects</div>
          </Link>
        </span>
      </div>
      <div
        className={
          actualTheme.theme === 'light' ? listItemStyle.listItemWrapper :
            actualTheme.theme === 'darkHelloween' ? listItemStyle.listItemWrapperHelloween :
              listItemStyle.listItemWrapperDark
        }>
        <span className={listItemStyle.listItem}>
          <div className={headerStyle.menu} onClick={(e: React.MouseEvent) => {
            setOffset(e);
            onClick();
          }
          }>Themes</div>
        </span>
      </div>
    </div>
  )
}