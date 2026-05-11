'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Dumbbell } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/Button';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'About Us', href: '/about' },
  { name: 'Training Programs', href: '/programs' },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        scrolled ? 'bg-black/90 backdrop-blur-md py-3 shadow-xl' : 'bg-transparent py-5'
      )}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-brand-red p-1.5 rounded-lg group-hover:scale-110 transition-transform">
            <Dumbbell className="text-white w-6 h-6" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-white font-black text-xl tracking-tighter uppercase italic">
              Colliers<span className="text-brand-red">Fitness</span>
            </span>
            <span className="text-gray-400 text-[10px] uppercase tracking-[0.2em] -mt-1 font-bold">
              Express LLC
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-bold uppercase tracking-widest transition-colors hover:text-brand-red',
                pathname === link.href ? 'text-brand-red' : 'text-gray-300'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button size="sm">Join Today</Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-charcoal border-b border-brand-gray overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'text-lg font-bold uppercase tracking-widest py-2 border-b border-white/5',
                    pathname === link.href ? 'text-brand-red' : 'text-white'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Button className="mt-4 w-full">Join Today</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
