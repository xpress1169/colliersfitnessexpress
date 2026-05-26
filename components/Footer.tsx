'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Dumbbell, Instagram, Facebook, Send, Twitter, Youtube } from 'lucide-react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const subscribeBtnRef = useRef<HTMLButtonElement>(null);

  // Footer Subscribe Button event listener
  useEffect(() => {
    const btn = subscribeBtnRef.current;

    const handleClick = () => {
      alert("Thank you for subscribing.");
    };

    if (btn) {
      btn.addEventListener('click', handleClick);
    }

    return () => {
      if (btn) {
        btn.removeEventListener('click', handleClick);
      }
    };
  }, []);

  return (
    <footer className="bg-brand-charcoal border-t border-brand-gray pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-brand-red p-1.5 rounded-lg">
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
            <p className="text-gray-400 leading-relaxed">
              Premium fitness training, recovery programs, and nutritional coaching designed to push your limits and transform your life.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-brand-gray flex items-center justify-center text-white hover:bg-brand-red transition-colors">
                <Instagram size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-brand-gray flex items-center justify-center text-white hover:bg-brand-red transition-colors">
                <Twitter size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-brand-gray flex items-center justify-center text-white hover:bg-brand-red transition-colors">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-brand-gray flex items-center justify-center text-white hover:bg-brand-red transition-colors">
                <Youtube size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Gallery', 'About Us', 'Training Programs'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`} className="text-gray-400 hover:text-brand-red transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li>123 Fitness Ave, Muscle Beach, CA 90210</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@colliersfitness.com</li>
              <li className="pt-2">
                <span className="block text-white font-semibold mb-1">Hours:</span>
                Mon - Fri: 5am - 10pm<br />
                Sat - Sun: 7am - 8pm
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4 text-sm">Get the latest workout tips and exclusive offers.</p>
            <form className="flex gap-2" onSubmit={(e) => { e.preventDefault(); }}>
              <Input placeholder="Email Address" className="h-10" required />
              <Button ref={subscribeBtnRef} size="sm" type="submit" className="px-3">
                <Send size={18} />
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Colliers Fitness Express LLC. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-gray-500 uppercase tracking-widest">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
