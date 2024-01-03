import s from './DropdownList.module.scss';
import {switchTheme} from "@/redux/slices/themeSlice";
import {useAppDispatch, useAppSelector} from "@/hooks/hooks";
import {Dispatch, SetStateAction, useState} from "react";
import {RootState} from "@/redux/store";

type TProps = {
  isDropdownVisible: boolean,
  setIsDropdownVisible: Dispatch<SetStateAction<boolean>>
}

export default function DropdownList({isDropdownVisible, setIsDropdownVisible}: TProps) {

  const actualTheme = useAppSelector((state: RootState) => state.theme);
  const dispatch = useAppDispatch();

  return (
    <div className={isDropdownVisible ? s.rootVisible : s.rootInvisible}>
      <div className={actualTheme.theme === 'light' ? s.chosenItem : s.listItemWrapper}>
        <span className={s.listItem} onClick={() => {
          dispatch(switchTheme('light'));
          setIsDropdownVisible(false);
        }}>Light</span>
      </div>
      <div className={actualTheme.theme === 'dark' ? s.chosenItem : s.listItemWrapper}>
      <span className={s.listItem} onClick={() => {
        dispatch(switchTheme('dark'));
        setIsDropdownVisible(false);
      }}>Dark</span>
      </div>
      <div className={actualTheme.theme === 'darkHelloween' ? s.chosenItem : s.listItemWrapper}>
      <span className={s.listItem} onClick={() => {
        dispatch(switchTheme('darkHelloween'));
        setIsDropdownVisible(false);
      }}>Dark Helloween</span>
      </div>
    </div>
  )
}