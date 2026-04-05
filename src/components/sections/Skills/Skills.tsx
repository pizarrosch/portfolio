import React from 'react';
import s from './Skills.module.scss';
import { SKILL_CATEGORIES } from '@/data';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function SkillsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className={s.section} ref={ref as React.RefObject<HTMLElement>}>
      <div className={`${s.container} ${isVisible ? s.visible : ''}`}>
        <div className={s.header}>
          <span className={s.sectionLabel}>What I work with</span>
          <h2 className={s.heading}>My <span className={s.accent}>Tech Stack</span></h2>
          <p className={s.subtext}>
            A curated set of tools and technologies I use to build modern web applications.
          </p>
        </div>

        <div className={s.categories}>
          {SKILL_CATEGORIES.map(({ category, skills }) => (
            <div key={category} className={s.categoryCard}>
              <h3 className={s.categoryName}>{category}</h3>
              <div className={s.pills}>
                {skills.map(skill => (
                  <span key={skill} className={s.pill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
