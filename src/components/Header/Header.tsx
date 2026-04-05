import React, { useState, useEffect } from 'react';
import s from './Header.module.scss';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { RootState } from '@/redux/store';
import { switchTheme } from '@/redux/slices/themeSlice';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state: RootState) => state.theme.theme);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function toggleTheme() {
    dispatch(switchTheme(theme === 'dark' ? 'light' : 'dark'));
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <header className={`${s.header} ${scrolled ? s.scrolled : ''}`}>
        <a href="#home" className={s.logo} onClick={closeMenu}>
          <span className={s.logoText}>ZS</span>
        </a>

        <nav className={s.nav}>
          {navLinks.map(({ label, href }) => (
            <a key={label} href={href} className={s.navLink}>
              {label}
            </a>
          ))}
        </nav>

        <div className={s.actions}>
          <button
            className={s.themeBtn}
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" aria-hidden="true">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
              </svg>
            )}
          </button>

          <button
            className={`${s.menuBtn} ${menuOpen ? s.menuOpen : ''}`}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div className={`${s.mobileMenu} ${menuOpen ? s.mobileMenuOpen : ''}`}>
        <nav className={s.mobileNav}>
          {navLinks.map(({ label, href }) => (
            <a key={label} href={href} className={s.mobileNavLink} onClick={closeMenu}>
              {label}
            </a>
          ))}
        </nav>
      </div>

      {menuOpen && <div className={s.backdrop} onClick={closeMenu} aria-hidden="true" />}
    </>
  );
}
