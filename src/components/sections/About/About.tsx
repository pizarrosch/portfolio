import React from 'react';
import Image from 'next/image';
import Zaur from '../../../../public/assets/Zaur.jpeg';
import s from './About.module.scss';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const stats = [
  { value: '20+', label: 'Technologies' },
  { value: '5+', label: 'Projects Built' },
  { value: '4', label: 'Languages Spoken' },
];

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className={s.section} ref={ref as React.RefObject<HTMLElement>}>
      <div className={`${s.container} ${isVisible ? s.visible : ''}`}>
        <div className={s.imageCol}>
          <div className={s.imageFrame}>
            <Image src={Zaur} alt="Zaur Shomakhov" className={s.photo} priority={false} />
          </div>
        </div>

        <div className={s.textCol}>
          <span className={s.sectionLabel}>About Me</span>
          <h2 className={s.heading}>Turning ideas into<br /><span className={s.accent}>great experiences</span></h2>

          <div className={s.bio}>
            <p>
              I&apos;m a frontend developer with an unconventional path — I came from chemistry. After completing an
              intensive 14-month training program, I fully transitioned into tech and haven&apos;t looked back.
            </p>
            <p>
              In my current role, I build and maintain an enterprise HR management platform — working with Angular,
              TypeScript, MySQL, and Docker. The application handles complex data models, reactive forms, and
              integration with multiple external systems.
            </p>
            <p>
              Outside work I keep building with React, Next.js, and TypeScript. I enjoy the whole process — from
              a blank canvas to a polished product.
            </p>
          </div>

          <div className={s.stats}>
            {stats.map(({ value, label }) => (
              <div key={label} className={s.stat}>
                <span className={s.statValue}>{value}</span>
                <span className={s.statLabel}>{label}</span>
              </div>
            ))}
          </div>

          <div className={s.languages}>
            <span className={s.langLabel}>Languages:</span>
            {['English — fluent', 'German — fluent', 'Russian — native', 'Spanish — basics'].map(lang => (
              <span key={lang} className={s.langPill}>{lang}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
