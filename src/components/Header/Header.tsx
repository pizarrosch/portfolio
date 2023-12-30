import s from './Header.module.scss';
import Link from "next/link";
import ThemeMenuButton from "@/components/Theme/Theme Menu Button/ThemeMenuButton";
import DropdownList from "@/components/Theme/Dropdown List/DropdownList";

export default function Header() {
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
                <ThemeMenuButton />
                <DropdownList />
            </nav>
        </div>
    )
}