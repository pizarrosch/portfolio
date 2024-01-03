import s from './Header.module.scss';
import Link from "next/link";
import ThemeMenuButton from "@/components/Theme/Theme Menu Button/ThemeMenuButton";
import DropdownList from "@/components/Theme/Dropdown List/DropdownList";
import {useState} from "react";
import {useAppSelector} from "@/hooks/hooks";
import {RootState} from "@/redux/store";

export default function Header() {

    const [isVisible, setIsVisible] = useState(false);
    const actualTheme = useAppSelector((state: RootState) => state.theme);

    function toggleIsVisible() {
        setIsVisible(prev => !prev);
    }

    return (
        <div className={actualTheme.theme === 'light' ? s.root : s.darkRoot}>
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
                <DropdownList isDropdownVisible={isVisible} setIsDropdownVisible={setIsVisible}/>
            </nav>
        </div>
    )
}