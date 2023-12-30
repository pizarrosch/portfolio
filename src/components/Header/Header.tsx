import s from './Header.module.scss';
import Link from "next/link";
import ThemeMenuButton from "@/components/Theme/Theme Menu Button/ThemeMenuButton";

export default function Header() {
    return (
        <div className={s.root}>
            <nav className={s.navigation}>
                <Link href='/'>
                    <div>Home</div>
                </Link>
                <Link href='/about'>
                    <div>About</div>
                </Link>
                <Link href='/projects'>
                    <div>Projects</div>
                </Link>
                <ThemeMenuButton />
            </nav>
        </div>
    )
}