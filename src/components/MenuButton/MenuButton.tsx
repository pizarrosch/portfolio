import s from './MenuButton.module.scss';
import OptionButton from "@/components/MenuButton/OptionButton";

export default function MenuButton() {
    return (
        <div className={s.menuButtonContainer}>
            <div className={s.menuButtonWrapper}>
                <div className={s.menuButton}>Menu</div>
            </div>
            <OptionButton />
        </div>
    )
}