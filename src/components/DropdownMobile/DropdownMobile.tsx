import s from "@/components/Theme/Dropdown List/DropdownList.module.scss";
import {useAppDispatch, useAppSelector} from "@/hooks/hooks";
import {RootState} from "@/redux/store";
import {TDropdown} from "@/types";
import Link from "next/link";
import headerStyle from '../Header/Header.module.scss';
import listItemStyle from '../Theme/Dropdown List/DropdownList.module.scss';

type TProps = {
  onClick: () => void
} & TDropdown

export default function DropdownMobile({isDropdownVisible, setIsDropdownVisible, onClick}: TProps) {

  const actualTheme = useAppSelector((state: RootState) => state.theme);
  const dispatch = useAppDispatch();

  return (
    <div className={
      isDropdownVisible && actualTheme.theme === 'light' ? listItemStyle.rootVisibleMobile :
        isDropdownVisible && actualTheme.theme === 'dark' ? listItemStyle.rootDarkModeMobile :
          isDropdownVisible && actualTheme.theme === 'darkHelloween' ? listItemStyle.rootDarkMode : listItemStyle.rootInvisible}>
      <div
        className={
          actualTheme.theme === 'light' ? listItemStyle.chosenItem :
            actualTheme.theme === 'darkHelloween' ? listItemStyle.listItemWrapperHelloween :
              actualTheme.theme === 'dark' ? listItemStyle.listItemWrapperDark :
                listItemStyle.listItemWrapper
        }>
        <span className={s.listItem}>
          <Link href='/'>
            <div className={headerStyle.menu}>Home</div>
          </Link>
        </span>
      </div>
      <div
        className={
          actualTheme.theme === 'dark' ? listItemStyle.chosenItemDarkMode :
            actualTheme.theme === 'darkHelloween' ? listItemStyle.listItemWrapperHelloween :
              actualTheme.theme === 'light' ? listItemStyle.listItemWrapper : listItemStyle.listItemWrapperDark
        }>
        <span className={listItemStyle.listItem}>
          <Link href='/about'>
            <div className={headerStyle.menu}>About</div>
          </Link>
        </span>
      </div>
      <div
        className={
          actualTheme.theme === 'darkHelloween' ? listItemStyle.chosenItemHelloweenMode :
            actualTheme.theme === 'dark' ? listItemStyle.listItemWrapperDark :
              actualTheme.theme === 'light' ? listItemStyle.listItemWrapper :
                listItemStyle.listItemWrapperHelloween
        }>
        <span className={listItemStyle.listItem}>
          <Link href='/projects'>
            <div className={headerStyle.menu}>Projects</div>
          </Link>
        </span>
      </div>
      <div
        className={
          actualTheme.theme === 'darkHelloween' ? listItemStyle.chosenItemHelloweenMode :
            actualTheme.theme === 'dark' ? listItemStyle.listItemWrapperDark :
              actualTheme.theme === 'light' ? listItemStyle.listItemWrapper :
                listItemStyle.listItemWrapperHelloween
        }>
        <span className={listItemStyle.listItem}>
          <div className={headerStyle.menu} onClick={onClick}>Themes</div>
        </span>
      </div>
    </div>
  )
}