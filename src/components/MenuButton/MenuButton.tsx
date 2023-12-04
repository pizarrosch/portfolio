import s from './MenuButton.module.scss';
import OptionButton from "@/components/MenuButton/OptionButton";
import {useAppSelector} from "@/hooks/hooks";
import {RootState} from "@/redux/store";
import {show} from "@/redux/slices/showStatusSlice";
import {useState} from "react";

export default function MenuButton() {

    const [displayStatus, setDisplayStatus] = useState(false);

    function handleMenuClick() {
        setDisplayStatus(prev => !prev);
    }

    return (
        <div className={s.menuButtonContainer}>
            <div className={s.menuButtonWrapper}>
                <div className={s.menuButton} onClick={handleMenuClick}>
                    Menu
                </div>
            </div>
        </div>
    )
}