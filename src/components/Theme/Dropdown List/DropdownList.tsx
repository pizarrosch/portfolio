import s from './DropdownList.module.scss';
import {switchTheme} from "@/redux/slices/themeSlice";
import {useAppDispatch} from "@/hooks/hooks";

export default function DropdownList() {

    const dispatch = useAppDispatch();

  return (
    <div className={s.rootVisible}>
      <span className={s.listItem} onClick={() => dispatch(switchTheme('light'))}>Light</span>
      <hr className={s.line}/>
      <span className={s.listItem} onClick={() => dispatch(switchTheme('dark'))}>Dark</span>
      <hr className={s.line}/>
      <span className={s.listItem} onClick={() => dispatch(switchTheme('darkHelloween'))}>Dark Helloween</span>
    </div>
  )
}