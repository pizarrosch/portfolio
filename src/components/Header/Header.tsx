import s from './Header.module.scss';
import Link from "next/link";
import ThemeMenuButton from "@/components/Theme/Theme Menu Button/ThemeMenuButton";
import React, {useState} from "react";
import listMenu from '../../../public/assets/list menu.png';
import Image from "next/image";
import DropdownMobile from "@/components/DropdownMobile/DropdownMobile";
import {useRouter as useRouteAddress} from 'next/router';
import Button from "@/components/Button/Button";

export default function Header() {
  const [mobileMenuIsVisible, setMobileMenuIsVisible] = useState(false);
  const routerAddress = useRouteAddress();

  function toggleMobileMenuIsVisible() {
    setMobileMenuIsVisible(prev => !prev);
  }

  return (
    <div className={s.root}>
      <button
        type='button'
        aria-label='Toggle menu'
        aria-expanded={mobileMenuIsVisible}
        className={s.listMenu}
        onClick={toggleMobileMenuIsVisible}
      >
        <Image src={listMenu} alt=''/>
      </button>
      <DropdownMobile isDropdownVisible={mobileMenuIsVisible} onClose={() => setMobileMenuIsVisible(false)}/>
      <nav className={s.navigation}>
        <Link href='/'>
            <Button text="HOME"></Button>
          {/*<div className={`${s.menu} ${routerAddress.pathname === '/' ? s.menuChosen : ''}`}>Home</div>*/}
        </Link>
        <Link href='/about'>
          <div className={`${s.menu} ${routerAddress.pathname === '/about' ? s.menuChosen : ''}`}>About</div>
        </Link>
        <Link href='/projects'>
          <div className={`${s.menu} ${routerAddress.pathname === '/projects' ? s.menuChosen : ''}`}>Projects</div>
        </Link>
        <ThemeMenuButton/>
      </nav>
    </div>
  )
}
