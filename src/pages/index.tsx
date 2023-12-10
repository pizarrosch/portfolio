import {Inter} from 'next/font/google'
import Main from "@/components/Main/Main";
import Layout from "@/Layout/Layout";
import s from "@/pages/styles/index.module.scss";

const inter = Inter({subsets: ['latin']})

export default function Home() {
  return (
    <Layout>
      <div className={s.switcherContainer}>
        <span>Animation ON</span>
        <div className={s.switchCircleWrapper}>
          <div></div>
        </div>
      </div>
      <Main/>
    </Layout>
  )
}
