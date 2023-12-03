import s from "./OptionButton.module.scss";

export default function OptionButton () {
    return (
        <div className={s.optionButtonContainer}>
            <div className={s.aboutMeButton}>About me</div>
            <div className={s.roundBottomDiv}></div>
        </div>
    )
}