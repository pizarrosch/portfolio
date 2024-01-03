import s from './DropdownList.module.scss';
import {switchTheme} from "@/redux/slices/themeSlice";
import {useAppDispatch} from "@/hooks/hooks";
import {Dispatch, SetStateAction, useState} from "react";

type TProps = {
  isDropdownVisible: boolean,
  setIsDropdownVisible: Dispatch<SetStateAction<boolean>>
}

export default function DropdownList({isDropdownVisible, setIsDropdownVisible}: TProps) {

  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <div className={isDropdownVisible ? s.rootVisible : s.rootInvisible}>
      <div className={s.listItemWrapper}>
        <span className={s.listItem} onClick={() => {
          dispatch(switchTheme('light'));
          setIsDropdownVisible(false);
        }}>Light</span>
      </div>
      <div className={s.listItemWrapper}>
      <span className={s.listItem} onClick={() => {
        dispatch(switchTheme('dark'));
        setIsDropdownVisible(false);
      }}>Dark</span>
      </div>
        <div className={s.listItemWrapper}>
      <span className={s.listItem} onClick={() => {
        dispatch(switchTheme('darkHelloween'));
        setIsDropdownVisible(false);
      }}>Dark Helloween</span>
        </div>
    </div>
  )
}