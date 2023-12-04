import Layout from "@/Layout/Layout";
import s from './styles/about.module.scss';
import Zaur from '../../public/assets/Zaur.jpeg';
import Image from "next/image";

export default function About() {
    return (
        <Layout>
            <div className={s.root}>
                <Image src={Zaur} alt='' className={s.profileImage}/>
            </div>
        </Layout>
    )
}