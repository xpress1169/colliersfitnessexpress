'use client';

import React from 'react';
import { Check, Calendar, Zap, Target, Heart } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Accordion, AccordionItem } from '@/components/ui/Accordion';

import { Shield, Apple } from 'lucide-react';

const programs = [
  {
    title: 'Strength Training',
    price: '199',
    duration: 'per month',
    description: 'Build raw power and muscle with our evidence-based lifting programs.',
    features: ['3 Personal Sessions/Week', 'Custom Lifting Program', 'Form Analysis', 'Nutrition Guide'],
    icon: Zap,
    popular: false
  },
  {
    title: 'Weight Loss',
    price: '149',
    duration: 'per month',
    description: 'Transform your body and health with high-burn cardio and metabolic conditioning.',
    features: ['Unlimited HIIT Classes', 'Weekly Progress Tracking', 'Metabolic Testing', 'Meal Planning'],
    icon: Target,
    popular: false
  },
  {
    title: 'HIIT Program',
    price: '125',
    duration: 'per month',
    description: 'High Intensity Interval Training designed to maximize performance in minimal time.',
    features: ['Access to all HIIT Classes', 'Mobile App Access', 'Performance Metrics', 'Community Events'],
    icon: Calendar,
    popular: true
  },
  {
    title: 'Nutrition Coaching',
    price: '175',
    duration: 'per month',
    description: 'Fuel your performance with personalized nutrition plans and expert guidance.',
    features: ['Custom Meal Plans', 'Weekly Consultations', 'Grocery Lists', 'Supplement Guidance'],
    icon: Apple,
    popular: false
  },
  {
    title: 'Recovery & Mobility',
    price: '85',
    duration: 'per month',
    description: 'Optimize recovery and prevent injury with guided mobility and therapy sessions.',
    features: ['Assisted Stretching', 'Percussive Therapy', 'Mobility Workshops', 'Recovery Lounge Access'],
    icon: Shield,
    popular: false
  }
];

export default function ProgramsPage() {
  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand-red font-bold uppercase tracking-[0.3em] mb-4">Our Programs</h2>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-6">
            Engineered for <span className="text-brand-red text-stroke">Success</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Choose the path that fits your goals. Every program is backed by our results-driven methodology.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-24">
          {programs.map((program, idx) => (
            <Card key={idx} className={`relative flex flex-col h-full border-white/5 bg-brand-charcoal hover:border-brand-red/50 transition-all ${program.popular ? 'ring-2 ring-brand-red' : ''}`}>
              {program.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-red text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <div className="bg-brand-gray w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-brand-red">
                  <program.icon size={24} />
                </div>
                <CardTitle className="uppercase italic">{program.title}</CardTitle>
                <CardDescription>{program.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-6">
                  <span className="text-4xl font-black text-white">${program.price}</span>
                  <span className="text-gray-500 ml-2">{program.duration}</span>
                </div>
                <ul className="space-y-3">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                      <Check className="text-brand-red w-4 h-4 shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={program.popular ? 'primary' : 'outline'}>
                  Enroll Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Community & FAQ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-6">Community & <span className="text-brand-red">Events</span></h3>
              <div className="space-y-6">
                {[
                  { date: 'June 15', title: 'Summer Shred Challenge', desc: 'A 6-week community competition with over $1,000 in prizes.' },
                  { date: 'July 02', title: 'Powerlifting Seminar', desc: 'Master the big three with guest coach and IFBB pro Marcus Collier.' },
                  { date: 'Aug 10', title: 'Beach Workout & BBQ', desc: 'Join the family for a morning HIIT session at Muscle Beach.' }
                ].map((event, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="shrink-0 text-center">
                      <span className="block text-2xl font-black text-brand-red">{event.date.split(' ')[1]}</span>
                      <span className="block text-xs font-bold text-gray-500 uppercase tracking-widest">{event.date.split(' ')[0]}</span>
                    </div>
                    <div className="pb-6 border-b border-white/5 w-full">
                      <h4 className="text-white font-bold uppercase italic group-hover:text-brand-red transition-colors cursor-pointer">{event.title}</h4>
                      <p className="text-gray-400 text-sm mt-1">{event.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-6">Testimonials</h3>
              <Card className="bg-brand-gray border-none italic">
                <CardContent className="pt-6">
                  <p className="text-gray-300 mb-4">&quot;The Weight Loss program didn&apos;t just help me shed pounds, it gave me a sustainable lifestyle I actually enjoy. The community here is unmatched.&quot;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center font-bold">ML</div>
                    <div>
                      <span className="block text-white font-bold text-sm">Mike Lewis</span>
                      <span className="block text-brand-red text-[10px] font-bold uppercase">Member since 2022</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-6">Frequently Asked <span className="text-brand-red">Questions</span></h3>
            <Accordion>
              <AccordionItem title="Do I need previous experience?">
                No! Our programs are designed for all levels, from absolute beginners to professional athletes. Our coaches will scale every workout to your current ability.
              </AccordionItem>
              <AccordionItem title="What is the cancellation policy?">
                We offer a flexible month-to-month membership with a 30-day notice for cancellation. No long-term contracts required.
              </AccordionItem>
              <AccordionItem title="Are nutritional plans included?">
                Yes, our Strength Training and Weight Loss programs include foundational nutritional guidance. For more intensive support, we offer separate Nutrition Coaching packages.
              </AccordionItem>
              <AccordionItem title="Can I try a class before joining?">
                Absolutely. We offer a complimentary first HIIT session for all local residents. Contact us to schedule your first visit.
              </AccordionItem>
              <AccordionItem title="Is 24/7 access available for everyone?">
                Standard and Premium memberships include 24/7 access. Some basic class-only packages may have limited access hours.
              </AccordionItem>
            </Accordion>

            <div className="mt-12 p-8 bg-brand-red rounded-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
               <h4 className="text-2xl font-black text-white uppercase italic mb-2">Still Have Questions?</h4>
               <p className="text-red-100 mb-6">Our team is here to help you choose the right path.</p>
               <Button variant="secondary" size="lg" className="w-full sm:w-auto">Contact A Coach</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
