import s from './DropdownList.module.scss';

export default function DropdownList() {
  return (
    <div className={s.rootVisible}>
      <span className={s.listItem}>Light</span>
      <hr className={s.line}/>
      <span className={s.listItem}>Dark</span>
      <hr className={s.line}/>
      <span className={s.listItem}>Dark Helloween</span>
    </div>
  )
}