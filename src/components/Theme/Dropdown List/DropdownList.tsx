import s from './DropdownList.module.scss';
import {switchTheme} from "@/redux/slices/themeSlice";
import {useAppDispatch, useAppSelector} from "@/hooks/hooks";
import {RootState} from "@/redux/store";
import {TDropdown} from "@/types";

export default function DropdownList({isDropdownVisible, setIsDropdownVisible, setIsMobileMenuVisible}: TDropdown) {

  const actualTheme = useAppSelector((state: RootState) => state.theme);
  const dispatch = useAppDispatch();

  return (
    <div className={
      isDropdownVisible && actualTheme.theme === 'light' ? s.rootVisible :
        isDropdownVisible && actualTheme.theme === 'dark' ? s.rootDarkMode :
          isDropdownVisible && actualTheme.theme === 'darkHelloween' ? s.rootDarkMode : s.rootInvisible}>
      <div
        className={
          actualTheme.theme === 'light' ? s.chosenItem :
            actualTheme.theme === 'darkHelloween' ? s.listItemWrapperHelloween :
              actualTheme.theme === 'dark' ? s.listItemWrapperDark :
                s.listItemWrapper
        }
        onClick={() => {
          dispatch(switchTheme('light'));
          setIsDropdownVisible(false);
          setIsMobileMenuVisible(false);
        }}>
        <span className={s.listItem}>Light</span>
      </div>
      <div
        className={
          actualTheme.theme === 'dark' ? s.chosenItemDarkMode :
            actualTheme.theme === 'darkHelloween' ? s.listItemWrapperHelloween :
              actualTheme.theme === 'light' ? s.listItemWrapper : s.listItemWrapperDark
        }
        onClick={() => {
          dispatch(switchTheme('dark'));
          setIsDropdownVisible(false);
          setIsMobileMenuVisible(false);
        }}>
        <span className={s.listItem}>Dark</span>
      </div>
      <div
        className={
          actualTheme.theme === 'darkHelloween' ? s.chosenItemHelloweenMode :
            actualTheme.theme === 'dark' ? s.listItemWrapperDark :
              actualTheme.theme === 'light' ? s.listItemWrapper :
                s.listItemWrapperHelloween
        }
        onClick={() => {
          dispatch(switchTheme('darkHelloween'));
          setIsDropdownVisible(false);
          setIsMobileMenuVisible(false);
        }}>
        <span className={s.listItem}>Dark Helloween</span>
      </div>
    </div>
  )
}