import s from './Footer.module.scss';
import Image from "next/image";
import linkedIn from '../../../public/assets/black_icons/linkedin.svg';
import gitHub from '../../../public/assets/black_icons/github.svg';
import X from '../../../public/assets/black_icons/social-icon-white-x.svg';
import facebook from '../../../public/assets/black_icons/facebook.svg';
import instagram from '../../../public/assets/black_icons/instagram.svg';
import Link from "next/link";

export default function Footer() {
    return (
        <div className={s.root}>
            <Link href='https://github.com/pizarrosch' title='github' target='_blank'>
                <Image className={s.image} src={gitHub} alt='' />
            </Link>
            <Link href='https://twitter.com/zshomakhov' title='X(former Twitter)' target='_blank'>
                <Image className={s.x_ixon} src={X} alt='' />
            </Link>
            <Link href='https://www.linkedin.com/in/zaur-shomakhov-13a106122/' title='linkedIn' target='_blank'>
                <Image className={s.image} src={linkedIn} alt='' />
            </Link>
            <Link href='https://www.facebook.com/zaur.shomakhov' title='facebook' target='_blank'>
                <Image className={s.image} src={facebook} alt='' />
            </Link>
            <Link href='https://www.instagram.com/the_big_chinese/' title='instagram' target='_blank'>
                <Image className={s.image} src={instagram} alt='' />
            </Link>
        </div>
    )
}