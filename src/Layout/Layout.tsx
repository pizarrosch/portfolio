import Head from 'next/head';
import {PropsWithChildren} from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function Layout({children}: PropsWithChildren) {
    return (
        <>
            <Head>
                <title>Zaur Shomakhov — Frontend Developer</title>
                <meta name="description" content="Portfolio of Zaur Shomakhov, a frontend developer with professional experience in React, Angular, TypeScript and Next.js" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}
