import s from './Footer.module.scss';
import Image from "next/image";
import linkedIn from '../../../public/assets/linkedin.svg';
import gitHub from '../../../public/assets/github-mark.svg';
import X from '../../../public/assets/x-social-media-logo-icon.svg';
import facebook from '../../../public/assets/2021_Facebook_icon.svg.png';
import instagram from '../../../public/assets/Instagram_logo_2022.svg.png';
import Link from "next/link";

export default function Footer() {
    return (
        <div className={s.root}>
            <Link href='https://github.com/pizarrosch' title='github' target='_blank'>
                <Image className={s.image} src={gitHub} alt='' />
            </Link>
            <Link href='https://twitter.com/zshomakhov' title='X(former Twitter)' target='_blank'>
                <Image className={s.image} src={X} alt='' />
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