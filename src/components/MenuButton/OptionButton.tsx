import s from "./OptionButton.module.scss";

type TValue = {
    value: string;
}

export default function OptionButton ({value}: TValue) {
    return (
        <div className={s.optionButtonContainer}>
            <div className={s.optionButton}>{value}</div>
            <div className={s.roundBottomDiv}></div>
        </div>
    )
}