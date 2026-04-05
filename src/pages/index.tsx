import Layout from "@/Layout/Layout";
import Hero from "@/components/sections/Hero/Hero";
import About from "@/components/sections/About/About";
import SkillsSection from "@/components/sections/Skills/Skills";
import ProjectsSection from "@/components/sections/Projects/Projects";
import Contact from "@/components/sections/Contact/Contact";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <SkillsSection />
      <ProjectsSection />
      <Contact />
    </Layout>
  );
}
