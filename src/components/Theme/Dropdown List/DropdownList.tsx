import s from './DropdownList.module.scss';
import {switchTheme} from "@/redux/slices/themeSlice";
import {useAppDispatch, useAppSelector} from "@/hooks/hooks";
import {RootState} from "@/redux/store";
import {TDropdown} from "@/types";

export default function DropdownList({
                                       isDropdownVisible,
                                       setIsDropdownVisible,
                                       IsMobileMenuVisible,
                                       setIsMobileMenuVisible,
                                     }: TDropdown) {
  const theme = useAppSelector((state: RootState) => state.theme.theme);
  const dispatch = useAppDispatch();

  function selectTheme(value: 'light' | 'dark') {
    dispatch(switchTheme(value));
    setIsDropdownVisible(false);
    setIsMobileMenuVisible(false);
  }

  if (!isDropdownVisible) return null;

  return (
    <div
      style={IsMobileMenuVisible ? {left: '160px', top: '80px'} : {top: '80px', right: '38px'}}
      className={s.root}
    >
      <div
        className={`${s.listItem} ${theme === 'light' ? s.chosen : ''}`}
        onClick={() => selectTheme('light')}
      >
        Light
      </div>
      <div
        className={`${s.listItem} ${theme === 'dark' ? s.chosen : ''}`}
        onClick={() => selectTheme('dark')}
      >
        Dark
      </div>
    </div>
  )
}
