import s from './Header.module.scss';
import Link from "next/link";
import ThemeMenuButton from "@/components/Theme/Theme Menu Button/ThemeMenuButton";
import DropdownList from "@/components/Theme/Dropdown List/DropdownList";
import React, {MouseEventHandler, useEffect, useState} from "react";
import {useAppSelector} from "@/hooks/hooks";
import {RootState} from "@/redux/store";
import listMenu from '../../../public/assets/list menu.png';
import Image from "next/image";
import DropdownMobile from "@/components/DropdownMobile/DropdownMobile";

export default function Header() {

  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuIsVisible, setMobileMenuIsVisible] = useState(false);
  const [leftOffset, setLeftOffset] = useState(0);
  const [topOffset, setTopOffset] = useState(0);
  const actualTheme = useAppSelector((state: RootState) => state.theme);

  function toggleIsVisible() {
    setIsVisible(prev => !prev);
  }

  function toggleMobileMenuIsVisible() {
    setMobileMenuIsVisible(prev => !prev);
  }

  function setOffset(e: React.MouseEvent) {
    const target = e.target as HTMLSpanElement;
    setLeftOffset(target.offsetLeft);
    setTopOffset(target.offsetTop);
  }

  return (
    <div className={actualTheme.theme === 'light' ? s.root : s.darkRoot}>
      <Image src={listMenu} alt='list menu cake' className={
        actualTheme.theme === 'dark' ? s.listMenuDark :
          actualTheme.theme === 'darkHelloween' ? s.listMenuHelloween :
            s.listMenu
      } onClick={() => {
          toggleMobileMenuIsVisible();
          setIsVisible(false);
        }
      }/>
      <DropdownMobile isDropdownVisible={mobileMenuIsVisible} onClick={toggleIsVisible} setOffset={setOffset}/>
      <nav className={s.navigation}>
        <Link href='/' >
          <div className={
            actualTheme.theme === 'dark' ? s.darkMenu :
              actualTheme.theme === 'darkHelloween' ? s.darkHelloweenMenu :
            s.menu
          }>Home</div>
        </Link>
        <Link href='/about'>
          <div className={
            actualTheme.theme === 'dark' ? s.darkMenu :
              actualTheme.theme === 'darkHelloween' ? s.darkHelloweenMenu :
                s.menu
          }>About</div>
        </Link>
        <Link href='/projects'>
          <div className={
            actualTheme.theme === 'dark' ? s.darkMenu :
              actualTheme.theme === 'darkHelloween' ? s.darkHelloweenMenu :
                s.menu
          }>Projects</div>
        </Link>
        <ThemeMenuButton onClick={toggleIsVisible}/>
      </nav>
      <DropdownList isDropdownVisible={isVisible} setIsDropdownVisible={setIsVisible} IsMobileMenuVisible={mobileMenuIsVisible}
                    setIsMobileMenuVisible={setMobileMenuIsVisible} leftOffset={leftOffset} topOffset={topOffset}/>
    </div>
  )
}