import s from './MenuButton.module.scss';
import OptionButton from "@/components/MenuButton/OptionButton";

export default function MenuButton() {
    return (
        <div className={s.menuButtonContainer}>
            <div className={s.menuButtonWrapper}>
                <div className={s.menuButton}>Menu</div>
            </div>
            <div className={s.aboutMeButtonWrapper}>
                <OptionButton value='About me'/>
            </div>
            <div className={s.projectsButtonWrapper}>
                <OptionButton value='Projects'/>
            </div>
            <div className={s.skillsButtonWrapper}>
                <OptionButton value='Skills'/>
            </div>
            <div className={s.contactButtonWrapper}>
                <OptionButton value='Contact'/>
            </div>
        </div>
    )
}