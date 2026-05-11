'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Star, Users, Award, ShieldCheck, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image Placeholder with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070"
            alt="Gym Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase italic tracking-tighter text-white mb-6">
              Push Your <span className="text-brand-red">Limits</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 font-medium">
              Elite personal training and world-class facilities designed for those who refuse to settle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                Start Training <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Join Today
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-10 left-0 right-0 z-10">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-brand-charcoal/50 backdrop-blur-xl p-8 rounded-2xl border border-white/10">
              <div className="text-center">
                <div className="text-3xl font-black text-white">500+</div>
                <div className="text-xs uppercase tracking-widest text-brand-red font-bold">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-white">15+</div>
                <div className="text-xs uppercase tracking-widest text-brand-red font-bold">Pro Trainers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-white">24/7</div>
                <div className="text-xs uppercase tracking-widest text-brand-red font-bold">Gym Access</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-white">100%</div>
                <div className="text-xs uppercase tracking-widest text-brand-red font-bold">Results Driven</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Highlights / Perks */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-brand-red font-bold uppercase tracking-[0.3em] mb-4">Why Choose Us</h2>
              <h3 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter">
                Premium Shopping &amp; Training Perks
              </h3>
            </div>
            <p className="text-gray-400 max-w-sm">
              We provide everything you need to succeed, from top-tier equipment to personalized nutrition plans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Award, title: "Elite Coaching", desc: "Work with certified professionals who care about your progress." },
              { icon: ShieldCheck, title: "Modern Equipment", desc: "Access the latest technology in strength and cardio training." },
              { icon: TrendingUp, title: "Data Tracking", desc: "Monitor your performance with our advanced metric systems." }
            ].map((perk, idx) => (
              <Card key={idx} className="group hover:border-brand-red transition-all duration-300">
                <CardContent className="pt-8">
                  <div className="bg-brand-gray w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-red transition-colors">
                    <perk.icon className="text-white w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 uppercase italic tracking-tight">{perk.title}</h4>
                  <p className="text-gray-400">{perk.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Shopping Promos / Featured Services */}
      <section className="py-24 bg-brand-charcoal relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-red/10 blur-[100px] -z-10" />
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-brand-red/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative h-[400px] md:h-[500px]">
                <Image
                  src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070"
                  alt="Personal Training"
                  fill
                  className="relative rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl object-cover"
                />
              </div>
              <div className="absolute bottom-8 left-8 right-8 bg-black/80 backdrop-blur-md p-6 rounded-xl border border-white/10 z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-bold text-xl italic uppercase">New Member Starter Pack</h4>
                    <p className="text-brand-red font-bold">$199.99 <span className="text-gray-500 line-through text-sm ml-2">$299.99</span></p>
                  </div>
                  <Button size="sm">Get Offer</Button>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">
                Transform Your <span className="text-brand-red text-stroke">Lifestyle</span> Today
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Whether you are looking for a one-on-one personal training session, a high-energy group class, or professional nutritional coaching, we have the perfect program for you.
              </p>
              <ul className="space-y-4">
                {[
                  "Personalized workout routines",
                  "Monthly body composition analysis",
                  "Exclusive access to member-only events",
                  "Discounts on premium supplements"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white font-medium">
                    <CheckCircle2 className="text-brand-red w-6 h-6 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button size="lg" className="w-full sm:w-auto">View All Programs</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Fitness Categories */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-4">Our Specialties</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Diverse training categories tailored to your specific fitness goals.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Strength Training", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600" },
              { title: "HIIT Classes", img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600" },
              { title: "Nutrition Coaching", img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=600" },
              { title: "Recovery", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600" }
            ].map((cat, idx) => (
              <div key={idx} className="group relative h-80 overflow-hidden rounded-2xl">
                <Image src={cat.img} alt={cat.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
                <div className="absolute bottom-6 left-6">
                  <h4 className="text-2xl font-black text-white uppercase italic">{cat.title}</h4>
                  <Link href="/gallery" className="text-brand-red text-sm font-bold uppercase tracking-widest mt-2 flex items-center group-hover:translate-x-2 transition-transform">
                    Explore <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainer Spotlight */}
      <section className="py-24 bg-brand-charcoal">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-brand-red font-bold uppercase tracking-[0.3em] mb-4">Master Trainer</h2>
              <h3 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-6">
                Meet Marcus <span className="text-brand-red">Collier</span>
              </h3>
              <p className="text-gray-400 text-lg mb-8 italic">
                &quot;I started Colliers Fitness Express LLC with one goal: to create an environment where results are the only priority. We don&apos;t just train bodies; we build discipline.&quot;
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-red">
                    <Award size={24} />
                  </div>
                  <div>
                    <h5 className="text-white font-bold">15+ Years Experience</h5>
                    <p className="text-gray-400 text-sm">Certified Master Personal Trainer</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-red">
                    <Users size={24} />
                  </div>
                  <div>
                    <h5 className="text-white font-bold">1,000+ Success Stories</h5>
                    <p className="text-gray-400 text-sm">Transforming lives since 2008</p>
                  </div>
                </div>
              </div>
              <Button size="lg">Read Full Bio</Button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative h-[500px]">
                <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-brand-red z-20" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-4 border-r-4 border-brand-red z-20" />
                <Image
                  src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=2000"
                  alt="Marcus Collier"
                  fill
                  className="rounded-lg shadow-2xl grayscale object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-black overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter">Real People. <span className="text-brand-red">Real Results.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah J.", role: "Weight Loss Success", text: "The HIIT programs here changed my life. I&apos;ve lost 30lbs and gained a whole new community of support.", stars: 5 },
              { name: "David K.", role: "Powerlifter", text: "Best facility for serious lifting. The equipment is top-tier and the trainers actually know their stuff.", stars: 5 },
              { name: "Jessica R.", role: "Business Professional", text: "The nutrition coaching combined with personal training made all the difference for my busy schedule.", stars: 5 }
            ].map((t, idx) => (
              <Card key={idx} className="bg-brand-gray border-none relative">
                <CardContent className="pt-10">
                  <div className="flex gap-1 mb-4 text-brand-red">
                    {[...Array(t.stars)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-gray-300 italic mb-6">&quot;{t.text}&quot;</p>
                  <div>
                    <h5 className="text-white font-bold">{t.name}</h5>
                    <p className="text-brand-red text-sm font-bold uppercase tracking-widest">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
