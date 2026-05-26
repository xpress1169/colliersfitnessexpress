'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Phone, MapPin, Clock, Instagram, Facebook, Send, CheckCircle, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input, Textarea } from '@/components/ui/Input';
import { Card, CardContent } from '@/components/ui/Card';
import { useLocalStorage } from '@/hooks/useLocalStorage';

export default function AboutPage() {
  const submitButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = submitButtonRef.current;
    if (!button) return;

    // JavaScript click event listener for the Submit button
    // When clicked, display exactly: "Thank you for your message."
    const handleSubmitClick = () => {
      // Check if form is valid before showing alert (basic validation)
      const form = button.closest('form');
      if (form && form.checkValidity()) {
        alert('Thank you for your message.');
      }
    };

    button.addEventListener('click', handleSubmitClick);

    return () => {
      button.removeEventListener('click', handleSubmitClick);
    };
  }, []);

  // Form persistence using localStorage
  const [formData, setFormData] = useLocalStorage('feedback-form', {
    name: '',
    email: '',
    phone: '',
    serviceInterest: 'Personal Training',
    customRequest: '',
    feedback: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Clear form after success message if desired, or keep for persistence
    // For this assignment, we'll keep it persisted but show success
    setTimeout(() => {
        setSubmitted(false);
        // Clear specifically after submission to allow "new" entries
        setFormData({
            name: '',
            email: '',
            phone: '',
            serviceInterest: 'Personal Training',
            customRequest: '',
            feedback: ''
        });
    }, 5000);
  };

  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="container mx-auto px-6">
        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24 items-center">
          <div>
            <h2 className="text-brand-red font-bold uppercase tracking-[0.3em] mb-4">Our Story</h2>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-8">
              Fueling Fitness <span className="text-brand-red">Excellence</span>
            </h1>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Founded in 2008 by Marcus Collier, Colliers Fitness Express LLC began with a simple mission: to provide high-quality, results-oriented training in an environment that breeds success.
              </p>
              <p>
                We believe that fitness is not just about looking good—it&apos;s about building the physical and mental resilience to tackle life&apos;s greatest challenges. Our facility combines old-school grit with modern science to ensure every member reaches their peak potential.
              </p>
              <div className="pt-4">
                <h4 className="text-white font-bold uppercase italic mb-2">Our Mission</h4>
                <p className="border-l-4 border-brand-red pl-6 italic">
                  &quot;To empower our community through elite physical training, comprehensive nutritional guidance, and unwavering support, fostering a lifestyle of health and discipline.&quot;
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[600px]">
            <Image
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1000"
              alt="Gym Interior"
              fill
              className="rounded-2xl grayscale shadow-2xl object-cover"
            />
            <div className="absolute -bottom-10 -left-10 bg-brand-red p-8 rounded-2xl hidden md:block z-10">
              <span className="block text-4xl font-black text-white">15+</span>
              <span className="text-white font-bold uppercase tracking-widest text-sm">Years of Results</span>
            </div>
          </div>
        </div>

        {/* Contact & Hours */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <Card className="bg-brand-charcoal border-white/5">
            <CardContent className="pt-8 text-center">
              <MapPin className="mx-auto text-brand-red mb-4" size={32} />
              <h4 className="text-white font-bold uppercase mb-2">Location</h4>
              <p className="text-gray-400">123 Fitness Ave, Muscle Beach, CA 90210</p>
              <div className="mt-4 h-32 w-full bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
                <span className="text-gray-500 text-xs">[ Map Placeholder ]</span>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-brand-charcoal border-white/5">
            <CardContent className="pt-8 text-center">
              <Clock className="mx-auto text-brand-red mb-4" size={32} />
              <h4 className="text-white font-bold uppercase mb-2">Business Hours</h4>
              <ul className="text-gray-400 space-y-1">
                <li>Mon - Fri: 5:00 AM - 10:00 PM</li>
                <li>Saturday: 7:00 AM - 8:00 PM</li>
                <li>Sunday: 7:00 AM - 8:00 PM</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-brand-charcoal border-white/5">
            <CardContent className="pt-8 text-center">
              <Phone className="mx-auto text-brand-red mb-4" size={32} />
              <h4 className="text-white font-bold uppercase mb-2">Contact Info</h4>
              <p className="text-gray-400">Phone: (555) 123-4567</p>
              <p className="text-gray-400">Email: info@colliersfitness.com</p>
              <div className="flex justify-center gap-4 mt-6">
                <Instagram size={20} className="text-gray-500 hover:text-brand-red cursor-pointer" />
                <Twitter size={20} className="text-gray-500 hover:text-brand-red cursor-pointer" />
                <Facebook size={20} className="text-gray-500 hover:text-brand-red cursor-pointer" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Feedback & Custom Order Form */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter">Get In <span className="text-brand-red">Touch</span></h2>
            <p className="text-gray-400 mt-2">Send us your feedback or request a custom training plan.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-brand-charcoal p-8 md:p-12 rounded-3xl border border-white/5">
            {submitted ? (
              <div className="py-12 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Submission Successful!</h3>
                <p className="text-gray-400">Thank you for reaching out. We will get back to you shortly.</p>
                <Button variant="outline" className="mt-8" onClick={() => setSubmitted(false)}>Send Another Message</Button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-gray-400 ml-1">Phone Number</label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(555) 000-0000"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-gray-400 ml-1">Service Interest</label>
                    <select
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleInputChange}
                      className="flex h-12 w-full rounded-md border border-brand-gray bg-brand-charcoal px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-red transition-all"
                    >
                      <option>Personal Training</option>
                      <option>Group HIIT</option>
                      <option>Nutrition Coaching</option>
                      <option>Recovery Program</option>
                      <option>Custom Request</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-gray-400 ml-1">Custom Request</label>
                  <Textarea
                    name="customRequest"
                    value={formData.customRequest}
                    onChange={handleInputChange}
                    placeholder="Tell us about your specific goals..."
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-gray-400 ml-1">Feedback</label>
                  <Textarea
                    name="feedback"
                    value={formData.feedback}
                    onChange={handleInputChange}
                    placeholder="How are we doing?"
                  />
                </div>

                <Button ref={submitButtonRef} type="submit" size="lg" className="w-full group">
                  Submit Request <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
