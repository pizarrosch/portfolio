import Head from 'next/head';
import Link from "next/link";
import {PropsWithChildren} from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function Layout({children}: PropsWithChildren) {
    return (
        <>
            <Head>
                <title>My portfolio</title>
                <meta name="description" content="SkillFactory Next.js project" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}