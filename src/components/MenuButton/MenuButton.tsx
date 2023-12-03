import s from './MenuButton.module.scss';

export default function MenuButton() {
    return (
        <div>
            <div className={s.menuButtonWrapper}>
                <div className={s.menuButton}>Menu</div>
            </div>
        </div>
    )
}