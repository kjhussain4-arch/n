import React, { useState, useEffect } from 'react';
import { CustomButton } from './custom-button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onJoinClick: () => void;
}

export function Header({ onJoinClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Signals', href: '#signals' },
    { label: 'Program', href: '#program' },
    { label: 'About', href: '#about' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300); // Wait for menu close animation
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#0D1B2A] rounded-sm flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C7A96B]/20 to-transparent" />
                <span className="text-[#C7A96B] relative z-10" style={{ fontSize: '20px', fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                  V
                </span>
              </div>
              <span className="text-[#0D1B2A]" style={{ fontSize: '20px', fontWeight: 700, fontFamily: 'var(--font-heading)', letterSpacing: '0.1em' }}>
                VOID
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[#88909B] hover:text-[#0D1B2A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C7A96B] rounded px-2 py-1"
                style={{ fontSize: '15px' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <CustomButton variant="secondary" onClick={onJoinClick}>
              Join Tester Program
            </CustomButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#0D1B2A] focus:outline-none focus:ring-2 focus:ring-[#C7A96B] rounded"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-[#C7A96B]/10 overflow-hidden"
          >
            <nav className="container-custom py-4 flex flex-col gap-4" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-[#88909B] hover:text-[#0D1B2A] transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-[#C7A96B] rounded px-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2">
                <CustomButton variant="secondary" className="w-full" onClick={() => {
                  onJoinClick();
                  setMobileMenuOpen(false);
                }}>
                  Join Tester Program
                </CustomButton>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}