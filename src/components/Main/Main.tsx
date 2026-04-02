import s from './Main.module.scss';
import ParticlesComponent from "@/components/Particles/Particles";

export default function Main() {
  return (
    <div className={s.root}>
      <div className={s.background}>
        <ParticlesComponent/>
      </div>
      <h1 className={s.title}>Hi! My name is Zaur Shomakhov</h1>
      <p className={s.subtitle}>
        Frontend developer with professional experience in React, Angular, TypeScript and Next.js.<br/>
        Building enterprise applications and modern web interfaces.
      </p>
    </div>
  )
}
