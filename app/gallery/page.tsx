'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ShoppingCart, Trash2, CreditCard, ShoppingBag, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Modal } from '@/components/ui/Modal';
import { useCart, CartItem } from '@/hooks/useCart';

const transformations = [
  {
    name: 'James L.',
    result: 'Lost 45 lbs',
    period: '6 Months',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600',
  },
  {
    name: 'Sarah M.',
    result: 'Gained 15 lbs Muscle',
    period: '4 Months',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=600',
  },
  {
    name: 'Mike R.',
    result: 'Reduced Body Fat by 12%',
    period: '3 Months',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600',
  }
];

const facilityImages = [
  { title: 'Main Lifting Floor', image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800' },
  { title: 'HIIT Zone', image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=800' },
  { title: 'Recovery Suite', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800' },
  { title: 'Cardio Deck', image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=800' },
  { title: 'Group Class Studio', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800' },
  { title: 'Nutrition Lab', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800' },
];

const products = [
  {
    id: 'pt-session',
    name: 'Personal Training Session',
    description: '1-on-1 intensive 60-minute session with a master trainer.',
    price: 85.00,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600',
    category: 'Services'
  },
  {
    id: 'monthly-mem',
    name: 'Monthly Membership',
    description: 'Unlimited 24/7 gym access and all group classes.',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600',
    category: 'Membership'
  },
  {
    id: 'protein-pkg',
    name: 'Protein Package',
    description: 'Bundle of 3 premium whey protein isolates (2lb each).',
    price: 120.00,
    image: 'https://images.unsplash.com/photo-1593095183571-2d5ff1ce9e95?q=80&w=600',
    category: 'Supplements'
  },
  {
    id: 'meal-plan',
    name: 'Meal Plan Consultation',
    description: 'Personalized 4-week nutritional guidance and recipes.',
    price: 75.00,
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=600',
    category: 'Nutrition'
  },
  {
    id: 'hiit-group',
    name: 'Group HIIT Session',
    description: 'High-energy 45-minute group cardiovascular training.',
    price: 25.00,
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600',
    category: 'Services'
  },
  {
    id: 'gym-hoodie',
    name: 'Fitness Express Hoodie',
    description: 'Premium heavy-weight cotton performance hoodie.',
    price: 55.00,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600',
    category: 'Apparel'
  },
  {
    id: 'res-bands',
    name: 'Resistance Bands Set',
    description: 'Set of 5 heavy-duty bands with travel carry bag.',
    price: 35.00,
    image: 'https://images.unsplash.com/photo-1598289503411-4017688310df?q=80&w=600',
    category: 'Equipment'
  },
  {
    id: 'recov-session',
    name: 'Recovery Session',
    description: '30-minute assisted stretching and percussive therapy.',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600',
    category: 'Recovery'
  }
];

export default function GalleryPage() {
  const { cart, addToCart, removeFromCart, clearCart, totalPrice } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleProcessOrder = () => {
    alert('Thank you for your order.');
    clearCart();
    setIsCartOpen(false);
  };

  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="container mx-auto px-6">
        {/* Transformation Gallery */}
        <section className="mb-24">
          <div className="mb-12">
            <h2 className="text-brand-red font-bold uppercase tracking-[0.3em] mb-4 text-sm">Real Results</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">Transformation <span className="text-brand-red">Gallery</span></h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {transformations.map((item, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden bg-brand-charcoal border border-white/5">
                <div className="relative h-[400px]">
                   <Image src={item.image} alt={item.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-white font-black text-xl uppercase italic">{item.name}</h4>
                  <p className="text-brand-red font-bold text-lg">{item.result}</p>
                  <p className="text-gray-500 text-xs uppercase tracking-widest font-bold mt-1">{item.period} Transformation</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Facility Showcase */}
        <section className="mb-24">
          <div className="mb-12 text-right">
            <h2 className="text-brand-red font-bold uppercase tracking-[0.3em] mb-4 text-sm">The Environment</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">Our <span className="text-brand-red">Facility</span></h3>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {facilityImages.map((img, i) => (
              <div key={i} className="group relative h-48 md:h-72 rounded-xl overflow-hidden">
                <Image src={img.image} alt={img.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4 text-center">
                   <span className="text-white font-black uppercase italic text-lg border-b-2 border-brand-red">{img.title}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-white/5 mb-24" />

        {/* SHOP SECTION */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div>
            <h2 className="text-brand-red font-bold uppercase tracking-[0.3em] mb-4 text-sm">Merchandise & Services</h2>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">
              The <span className="text-brand-red">Shop</span>
            </h1>
          </div>

          <Button
            onClick={() => setIsCartOpen(true)}
            className="relative self-start md:self-center"
            variant="outline"
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            View Cart
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-brand-red text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-black">
                {cart.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            )}
          </Button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group flex flex-col h-full bg-brand-charcoal border-white/5 hover:border-brand-red/50 transition-all">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-black/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/10">
                    {product.category}
                  </span>
                </div>
              </div>
              <CardHeader className="flex-grow">
                <CardTitle className="text-xl uppercase italic leading-tight">{product.name}</CardTitle>
                <CardDescription className="line-clamp-2 mt-2">{product.description}</CardDescription>
              </CardHeader>
              <CardFooter className="flex items-center justify-between pt-4">
                <span className="text-2xl font-black text-white">${product.price.toFixed(2)}</span>
                <Button size="sm" onClick={() => addToCart(product)}>
                  Add To Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Cart Modal */}
      <Modal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        title="Your Shopping Cart"
        className="max-w-2xl"
      >
        {cart.length === 0 ? (
          <div className="py-12 text-center">
            <ShoppingBag className="h-16 w-16 text-gray-700 mx-auto mb-4" />
            <p className="text-gray-400 text-lg">Your cart is empty.</p>
            <Button className="mt-6" onClick={() => setIsCartOpen(false)}>Start Shopping</Button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center gap-4 py-4 border-b border-brand-gray last:border-0">
                  <div className="relative w-20 h-20 shrink-0">
                    <Image src={item.image} alt={item.name} fill className="object-cover rounded-lg grayscale" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-white font-bold uppercase italic">{item.name}</h4>
                    <p className="text-brand-red font-bold">${item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-3 mt-2 text-gray-400 text-sm">
                      <span>Qty: {item.quantity}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => removeFromCart(item.id)} className="text-gray-500 hover:text-red-500">
                    <Trash2 size={18} />
                  </Button>
                </div>
              ))}
            </div>

            <div className="bg-black/40 p-6 rounded-xl border border-white/5 space-y-3">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-white font-black text-xl border-t border-brand-gray pt-3">
                <span>Total</span>
                <span className="text-brand-red">${totalPrice.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="outline" className="flex-1" onClick={clearCart}>
                <Trash2 className="mr-2 h-4 w-4" />
                Clear Cart
              </Button>
              <Button className="flex-1" onClick={handleProcessOrder}>
                <CreditCard className="mr-2 h-4 w-4" />
                Process Order
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
