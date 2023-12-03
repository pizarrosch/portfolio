import s from './Header.module.scss';
import Image from "next/image";
import myPic from '../../../public/assets/Zaur.jpeg';

export default function Header() {
    return (
        <div className={s.root}>
            <Image src={myPic} alt='' className={s.image}/>
            <span className={s.name}>Zaur Shomakhov</span>
        </div>
    )
}