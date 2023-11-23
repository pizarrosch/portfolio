import s from './Footer.module.scss';
import Image from "next/image";
import linkedIn from '../../../public/assets/linkedin.svg';
import gitHub from '../../../public/assets/github-mark.svg';
import X from '../../../public/assets/x-social-media-logo-icon.svg';
import facebook from '../../../public/assets/2021_Facebook_icon.svg.png';
import instagram from '../../../public/assets/Instagram_logo_2022.svg.png';

export default function Footer() {
    return (
        <div className={s.root}>
            <Image className={s.image} src={gitHub} alt='' />
            <Image className={s.image} src={X} alt='' />
            <Image className={s.image} src={linkedIn} alt='' />
            <Image className={s.image} src={facebook} alt='' />
            <Image className={s.image} src={instagram} alt='' />
        </div>
    )
}