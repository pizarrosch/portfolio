import s from './Footer.module.scss';
import Image from "next/image";
import linkedIn from '../../../public/assets/black_icons/linkedin.svg';
import gitHub from '../../../public/assets/black_icons/github.svg';
import X from '../../../public/assets/black_icons/social-icon-white-x.svg';
import facebook from '../../../public/assets/black_icons/facebook.svg';
import instagram from '../../../public/assets/black_icons/instagram.svg';
import Link from "next/link";
import {useAppSelector} from "@/hooks/hooks";
import {RootState} from "@/redux/store";

export default function Footer() {

  const actualTheme = useAppSelector((state: RootState) => state.theme);

  return (
    <div className={actualTheme.theme === 'light' ? s.root : s.darkRoot}>
      <div className={s.githubIconWrapper}>
        <div className={s.imageBackdropGithub}></div>
        <Link href='https://github.com/pizarrosch' title='github' target='_blank'>
          <Image className={s.image} src={gitHub} alt=''/>
        </Link>
      </div>
      <Link href='https://twitter.com/zshomakhov' title='X(former Twitter)' target='_blank'>
        <Image className={s.x_ixon} src={X} alt=''/>
      </Link>
      <div className={s.linkedInIconWrapper}>
        <div className={s.imageBackdropLinkedIn}></div>
        <Link href='https://www.linkedin.com/in/zaur-shomakhov-13a106122/' title='linkedIn' target='_blank'>
          <Image className={s.image} src={linkedIn} alt=''/>
        </Link>
      </div>
      <div className={s.facebookIconWrapper}>
        <div className={s.imageBackdropFacebook}></div>
        <Link href='https://www.facebook.com/zaur.shomakhov' title='facebook' target='_blank'>
          <Image className={s.image} src={facebook} alt=''/>
        </Link>
      </div>
      <div className={s.instagramIconWrapper}>
        <div className={s.imageBackdropInstagram}></div>
        <Link href='https://www.instagram.com/the_big_chinese/' title='instagram' target='_blank'>
          <Image className={s.image} src={instagram} alt=''/>
        </Link>
      </div>
    </div>
  )
}