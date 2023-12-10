import {Inter} from 'next/font/google'
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Main from "@/components/Main/Main";
import Layout from "@/Layout/Layout";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <Layout>
            <Main/>
        </Layout>
    )
}
