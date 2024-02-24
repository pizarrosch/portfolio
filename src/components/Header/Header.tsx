import s from './Header.module.scss';
import Link from "next/link";
import ThemeMenuButton from "@/components/Theme/Theme Menu Button/ThemeMenuButton";
import DropdownList from "@/components/Theme/Dropdown List/DropdownList";
import React, {MouseEventHandler, useEffect, useRef, useState} from "react";
import {useAppDispatch, useAppSelector} from "@/hooks/hooks";
import {RootState} from "@/redux/store";
import listMenu from '../../../public/assets/list menu.png';
import Image from "next/image";
import DropdownMobile from "@/components/DropdownMobile/DropdownMobile";
import {useRouter} from "next/navigation";
import {useRouter as useRouteAddress} from 'next/router';

export default function Header() {

  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuIsVisible, setMobileMenuIsVisible] = useState(false);
  const [leftOffset, setLeftOffset] = useState(0);
  const [topOffset, setTopOffset] = useState(0);
  const actualTheme = useAppSelector((state: RootState) => state.theme);

  const router = useRouter();
  const routerAddress = useRouteAddress();

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
        <Link href='/' onClick={() => router.push('/')}>
          <div className={
            actualTheme.theme === 'dark' ? routerAddress.pathname === '/' ? s.darkMenuChosen : s.darkMenu :
              actualTheme.theme === 'darkHelloween' ? routerAddress.pathname === '/' ? s.darkHelloweenMenuChosen : s.darkHelloweenMenu :
                routerAddress.pathname === '/' ? s.menuChosen :
                s.menu
          }>Home
          </div>
        </Link>
        <Link href='/about' onClick={() => router.push('/about')}>
          <div className={
            actualTheme.theme === 'dark' ? routerAddress.pathname === '/about' ? s.darkMenuChosen : s.darkMenu :
              actualTheme.theme === 'darkHelloween' ? routerAddress.pathname === '/about' ? s.darkHelloweenMenuChosen : s.darkHelloweenMenu :
                routerAddress.pathname === '/about' ? s.menuChosen :
                s.menu
          }>About
          </div>
        </Link>
        <Link href='/projects' onClick={() => router.push('/projects')}>
          <div className={
            actualTheme.theme === 'dark' ? routerAddress.pathname === '/projects' ? s.darkMenuChosen : s.darkMenu :
              actualTheme.theme === 'darkHelloween' ? routerAddress.pathname === '/projects' ? s.darkHelloweenMenuChosen : s.darkHelloweenMenu :
                routerAddress.pathname === '/projects' ? s.menuChosen :
                s.menu
          }>Projects
          </div>
        </Link>
        <ThemeMenuButton onClick={toggleIsVisible}/>
      </nav>
      <DropdownList isDropdownVisible={isVisible} setIsDropdownVisible={setIsVisible}
                    IsMobileMenuVisible={mobileMenuIsVisible}
                    setIsMobileMenuVisible={setMobileMenuIsVisible} leftOffset={leftOffset} topOffset={topOffset} />
    </div>
  )
}