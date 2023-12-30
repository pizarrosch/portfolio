import Image from "next/image";
import sun from '../../../../public/assets/sunny.png';

export default function ThemeMenuButton() {
  return (
    <Image src={sun} alt='sun' />
  )
}