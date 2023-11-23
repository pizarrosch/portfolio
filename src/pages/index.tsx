import { Inter } from 'next/font/google'
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Main from "@/components/Main/Main";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
  )
}
