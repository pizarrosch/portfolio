import s from './Header.module.scss';
import Link from "next/link";
import ThemeMenuButton from "@/components/Theme/Theme Menu Button/ThemeMenuButton";
import DropdownList from "@/components/Theme/Dropdown List/DropdownList";
import {useState} from "react";

export default function Header() {

    const [isVisible, setIsVisible] = useState(false);

    function toggleIsVisible() {
        setIsVisible(prev => !prev);
    }

    return (
        <div className={s.root}>
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