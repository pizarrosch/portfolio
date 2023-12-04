import s from './Header.module.scss';

export default function Header() {
    return (
        <div className={s.root}>
            <nav className={s.navigation}>
                <div>Home</div>
                <div>About</div>
                <div>Projects</div>
                <div>Contact</div>
            </nav>
        </div>
    )
}