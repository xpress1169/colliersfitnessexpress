'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ShoppingCart, Trash2, CreditCard, ShoppingBag, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Modal } from '@/components/ui/Modal';
import { useCart, CartItem } from '@/hooks/useCart';

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
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">
              The <span className="text-brand-red">Shop</span>
            </h1>
            <p className="text-gray-400 mt-2">Premium gear and services for elite performance.</p>
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
