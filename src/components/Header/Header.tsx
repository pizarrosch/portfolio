import s from './Header.module.scss';
import Link from "next/link";
import ThemeMenuButton from "@/components/Theme/Theme Menu Button/ThemeMenuButton";
import DropdownList from "@/components/Theme/Dropdown List/DropdownList";
import {useState} from "react";
import {useAppSelector} from "@/hooks/hooks";
import {RootState} from "@/redux/store";
import listMenu from '../../../public/assets/list menu.png';
import Image from "next/image";
import DropdownMobile from "@/components/DropdownMobile/DropdownMobile";

export default function Header() {

    const [isVisible, setIsVisible] = useState(false);
    const [mobileMenuIsVisible, setMobileMenuIsVisible] = useState(false);
    const actualTheme = useAppSelector((state: RootState) => state.theme);

    function toggleIsVisible() {
        setIsVisible(prev => !prev);
    }

    function toggleMobileMenuIsVisible() {
        setMobileMenuIsVisible(prev => !prev);
    }

    return (
        <div className={actualTheme.theme === 'light' ? s.root : s.darkRoot}>
            <Image src={listMenu} alt='list menu cake' className={s.listMenu} onClick={toggleMobileMenuIsVisible} />
            <DropdownMobile isDropdownVisible={mobileMenuIsVisible} onClick={toggleIsVisible}/>
            <nav className={s.navigation}>
                <Link href='/'>
                    <div className={s.menu}>Home</div>
                </Link>
                <Link href='/about'>
                    <div className={s.menu}>About</div>
                </Link>
                <Link href='/projects'>
                    <div className={s.menu}>Projects</div>
                </Link>
                <ThemeMenuButton onClick={toggleIsVisible}/>
            </nav>
            <DropdownList isDropdownVisible={isVisible} setIsDropdownVisible={setIsVisible} setIsMobileMenuVisible={setMobileMenuIsVisible}/>
        </div>
    )
}